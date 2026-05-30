const fs = require('fs');

for (let page = 3; page <= 11; page++) {
  const imgPath = 'images/catalog/image' + page + '.jpeg';
  const img = fs.readFileSync(imgPath);

  // Simple PDF with embedded JPEG
  const pdfHeader = '%PDF-1.4\n';
  const objects = [
    '1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj',
    '2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj',
    '3 0 obj<</Type/Page/MediaBox[0 0 595 842]/Contents 4 0 R/Resources<</XObject<</I0 5 0 R>>>>/Parent 2 0 R>>endobj',
    '4 0 obj<</Length 45>>stream\nq 595 0 0 842 0 0 cm /I0 Do Q\nendstream\nendobj',
    '5 0 obj<</Type/XObject/Subtype/Image/Width 595/Height 842/ColorSpace/DeviceRGB/BitsPerComponent 8/Filter/DCTDecode/Length ' + img.length + '>>stream\n'
  ];

  let offsets = [];
  let body = '';
  for (let i = 0; i < objects.length; i++) {
    offsets.push(body.length);
    body += objects[i] + '\n';
  }

  // Image stream
  offsets.push(body.length);
  body += img;

  // End of image stream
  offsets.push(body.length);
  body += '\nendstream\nendobj\n';

  // Xref table
  let xrefOffset = body.length;
  let xref = 'xref\n0 ' + (offsets.length) + '\n';
  xref += '0000000000 65535 f \n';
  for (let i = 0; i < offsets.length - 1; i++) {
    xref += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
  }

  let trailer = 'trailer<</Size ' + (offsets.length) + '/Root 1 0 R>>\n';
  trailer += 'startxref\n' + xrefOffset + '\n%%EOF';

  const pdf = Buffer.concat([
    Buffer.from(pdfHeader + body + xref + trailer)
  ]);

  fs.writeFileSync('catalog_p' + page + '.pdf', pdf);
  console.log('Page ' + page + ': PDF created, ' + pdf.length + ' bytes');
}
