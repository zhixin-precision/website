/**
 * 知信精密 - 产品数据库
 * 数据来源: INSize(英示)官方网站 https://insize.cn/
 * 产品信息与 INSize 官网一致
 */
const ZHIXIN_DATA = {
  // 公司信息
  company: {
    name: '知信精密',
    fullName: '知信精密测量',
    slogan: '您的测量顾问',
    phone: '15372650089',
    contact: '林先生',
    email: 'lin.zhixin@foxmail.com',
    area: '浙江区域 · 服务全国',
    wechat: '知信精密测量'
  },

  // 产品大类 (与 INSize 官网 27 大类一致)
  categories: [
    { id: 'cat1', num: 1, name: '数据分析软件与数据传输', icon: '💻', desc: 'SPC测量数据管理软件、无线/有线数据传输系统', featured: true },
    { id: 'cat2', num: 2, name: '量具', icon: '📐', desc: '卡尺、千分尺、高度尺、指示表、螺纹量具、量块、塞尺等', featured: true },
    { id: 'cat3', num: 3, name: '水平仪', icon: '📏', desc: '电子水平仪、数显水平仪/坡度仪、激光水平仪', featured: false },
    { id: 'cat4', num: 4, name: '在机测量', icon: '⚙️', desc: '红外通讯机床测头、3D寻边器、定中心表', featured: false },
    { id: 'cat5', num: 5, name: '测头和光栅尺', icon: '📡', desc: '光栅尺、光栅尺(TTL信号)', featured: false },
    { id: 'cat6', num: 6, name: '圆度仪·轮廓仪·粗糙度仪', icon: '📊', desc: '圆度/圆柱度仪、轮廓测量仪、粗糙度仪', featured: true },
    { id: 'cat7', num: 7, name: '三坐标测量机', icon: '🎯', desc: '桥式三坐标测量机、关节臂、CMM夹具', featured: true },
    { id: 'cat8', num: 8, name: '投影仪·闪测仪·影像仪', icon: '📸', desc: '一键式闪测仪、卧式投影仪、全自动影像仪', featured: true },
    { id: 'cat9', num: 9, name: '刀具检测', icon: '🔪', desc: '刀具影像仪、刀柄跳动检查仪', featured: false },
    { id: 'cat10', num: 10, name: '显微镜·放大镜', icon: '🔍', desc: '测量工具显微镜、测量显微镜、台式照明放大镜', featured: false },
    { id: 'cat11', num: 11, name: '内窥镜', icon: '👁️', desc: '直视硬管内窥镜、LED光源', featured: false },
    { id: 'cat12', num: 12, name: '其他几何测量仪器', icon: '📐', desc: '蓝牙激光测距仪、小型立式测长仪、小型测长仪', featured: false },
    { id: 'cat13', num: 13, name: '自动化测量', icon: '🤖', desc: '机械手+闪测仪自动化系统、2D/3D机器视觉平台、半自动测量站', featured: true },
    { id: 'cat14', num: 14, name: '硬度计', icon: '💎', desc: '电动数显洛氏硬度计、便携式里氏硬度计、数显邵氏硬度计', featured: true },
    { id: 'cat15', num: 15, name: '金相装备', icon: '🪨', desc: '金相试样切割机、自动金相磨抛机、自动镶嵌机', featured: false },
    { id: 'cat16', num: 16, name: '探伤仪', icon: '🔦', desc: '数字式超声波探伤仪、充电式紫外线探伤灯', featured: false },
    { id: 'cat17', num: 17, name: '试验机·推拉力计·张力计', icon: '💪', desc: '数显推拉力计/扭矩仪、指针式推拉力计', featured: false },
    { id: 'cat18', num: 18, name: '扭矩仪·扭矩扳手', icon: '🔧', desc: '电动扭矩测试机架、数显扭矩仪', featured: false },
    { id: 'cat19', num: 19, name: '元素分析', icon: '🧪', desc: 'XRF镀层测厚仪、氧氮氢分析仪、气相色谱仪', featured: false },
    { id: 'cat20', num: 20, name: '涂层检测', icon: '🎨', desc: '一体式涂层测厚仪、湿漆膜厚度规', featured: true },
    { id: 'cat21', num: 21, name: '环境测试', icon: '🌡️', desc: '红外测温仪、温湿度计', featured: false },
    { id: 'cat22', num: 22, name: '其他仪器', icon: '🔬', desc: '3D线激光轮廓测量仪、镜片透过率仪、辐射检测仪', featured: false },
    { id: 'cat23', num: 23, name: '可靠性试验', icon: '🧊', desc: '盐水喷雾试验箱、温湿度交变试验箱、恒温恒湿试验箱', featured: false },
    { id: 'cat24', num: 24, name: '衡器', icon: '⚖️', desc: '电子天平、电子台秤、砝码套装', featured: false },
    { id: 'cat25', num: 25, name: '液体和气体检测', icon: '💧', desc: '台式电导率仪、便携式pH计', featured: false },
    { id: 'cat26', num: 26, name: '压力表', icon: '⏱️', desc: '耐振压力表、压力表、数字压力表', featured: false },
    { id: 'cat27', num: 27, name: '电子测试', icon: '⚡', desc: '直流电阻测试仪、内置蓝牙数字万用表、数显测电笔', featured: false }
  ],

  // 产品数据
  products: {
    // ====== 1. 数据分析软件与数据传输 ======
    cat1: {
      items: [
        { name: '测量数据管理分析软件(基础版)', model: 'INSIZE 7349', img: '7349s.jpg', bestseller: true,
          desc: 'SPC统计过程控制软件，自动采集量具数据并生成控制图。品质管理数字化必备。支持Excel、MES、ERP、QMS系统集成。',
          specs: ['SPC统计过程控制', '自动数据采集', '控制图生成', 'MES/ERP集成'] },
        { name: '数据传输线(键盘信号)', model: 'INSIZE 7302', img: '7302s.jpg', bestseller: true,
          desc: '量具数据连接线，HID键盘信号输出，将量具数据直接传输至电脑/SPC系统，实现数据自动录入。兼容多款数显量具。',
          specs: ['HID键盘信号', '即插即用', '兼容多种量具', 'Excel/Word/TXT输出'] }
      ]
    },

    // ====== 2. 量具 (数据来源: INSize Tool.html) ======
    cat2: {
      subcategories: [
        {
          name: '卡尺',
          items: [
            { name: 'IP67防水数显卡尺', model: 'INSIZE 1195', img: '1195s.jpg', bestseller: true,
              desc: 'IP67级防水防尘，适合车间恶劣环境。量程0-150/200/300mm，分辨率0.01mm，带数据输出接口。不锈钢制造。',
              specs: ['IP67防护等级', '分辨率: 0.01mm', '量程: 150/200/300mm', '不锈钢材质', '带数据接口'] },
            { name: '数显卡尺(标准型)', model: 'INSIZE 1108', img: '1108s.jpg', bestseller: true,
              desc: '经典标准型数显卡尺，经济实用。量程0-150/200/300mm，精度0.01mm，带数据输出接口。',
              specs: ['分辨率: 0.01mm', '量程: 150/200/300mm', '数据输出接口', '性价比首选'] },
            { name: '左手数显卡尺', model: 'INSIZE 1130', img: '1130s.jpg', bestseller: false,
              desc: '专为左手操作习惯设计，操作舒适。量程0-150/200mm。',
              specs: ['左手操作', '分辨率: 0.01mm', '量程: 150/200mm'] },
            { name: '塑料数显卡尺', model: 'INSIZE 1139', img: '1139s.jpg', bestseller: false,
              desc: '轻便塑料材质，适合无磁性测量需求。经济实惠，适合教学和简单测量。',
              specs: ['塑料材质', '轻便', '无磁性', '经济实惠'] },
            { name: '数显圆弧半径卡尺', model: 'INSIZE 1189', img: '1189s.jpg', bestseller: false,
              desc: '专用于测量内外圆弧半径，数显读数，量程R1-R700mm。',
              specs: ['圆弧半径测量', '数显读数', '内外R均可测'] },
            { name: '多功能比较卡尺', model: 'INSIZE 1198', img: '1198s.jpg', bestseller: false,
              desc: '集卡尺与比较测量功能于一体，一机多用。适合批量工件快速通止检测。',
              specs: ['多功能', '比较测量', '卡尺功能', '通止检测'] }
          ]
        },
        {
          name: '深度量具',
          items: [
            { name: 'IP67防水数显深度尺', model: 'INSIZE 1440', img: '1440s.jpg', bestseller: true,
              desc: 'IP67防护等级，适合冷却液环境。多种量程可选（0-150/200/300mm），精密磨削底面。',
              specs: ['IP67防护', '量程: 150/200/300mm', '分辨率: 0.01mm', '带数据接口'] },
            { name: '防水数显深度尺', model: 'INSIZE 1149', img: '1149s.jpg', bestseller: false,
              desc: '防水型设计，性价比高。适合一般车间孔深、台阶深度测量。',
              specs: ['防水设计', '分辨率: 0.01mm', '适合常规测量'] },
            { name: '带表测深规', model: 'INSIZE 2343', img: '2343s.jpg', bestseller: false,
              desc: '机械式带表深度规，用于孔深、台阶深度精密测量。无需电池，可靠性高。',
              specs: ['机械式', '带表显示', '精密测量', '无需电池'] }
          ]
        },
        {
          name: '高度量具',
          items: [
            { name: '二维手动测高仪(内置气浮)', model: 'INSIZE DHG-V', img: 'DHG-V-s.jpg', bestseller: true,
              desc: '内置气浮系统，移动轻便顺滑。可测量高度、深度、孔距、垂直度等。量程300/600/1000mm。',
              specs: ['内置气浮', '量程: 300/600/1000mm', '二维测量', '高度/深度/孔距'] },
            { name: '数显万分高度计', model: 'INSIZE 1155', img: '1155s.jpg', bestseller: false,
              desc: '超高精度数显高度计，分辨率0.0001mm。适合精密零件高度测量和计量室使用。',
              specs: ['分辨率: 0.0001mm', '高精度', '适合计量室'] },
            { name: '带手轮数显高度尺', model: 'INSIZE 1156', img: '1156s.jpg', bestseller: false,
              desc: '手轮微调进给，操作精准便捷。量程0-300/500mm，分辨率0.01mm。',
              specs: ['手轮微调', '量程: 300/500mm', '分辨率: 0.01mm'] }
          ]
        },
        {
          name: '比较测量',
          items: [
            { name: '大尺寸数显外径比较测量仪', model: 'INSIZE 2935', img: '2935s.jpg', bestseller: false,
              desc: '专用于大尺寸外径比较测量，适合轴类零件批量快速检测。数显读数直观。',
              specs: ['大尺寸外径', '数显读数', '批量检测', '轴类零件'] },
            { name: '万能比较测量台', model: 'INSIZE 2949', img: '2949s.jpg', bestseller: true,
              desc: '万能型比较测量台，可搭配各类表头使用。铸铁底座稳定性好，适合生产现场和计量室。',
              specs: ['铸铁底座', '万能型', '可搭配各类表头', '稳定性好'] }
          ]
        },
        {
          name: '千分尺',
          items: [
            { name: '直进式数显千分尺(带杠杆测力装置)', model: 'INSIZE 3632', img: '3632s.jpg', bestseller: true,
              desc: '直进式spindle设计，带杠杆测力装置确保恒定测量力。分辨率0.001mm，精度高。',
              specs: ['直进式', '杠杆测力', '分辨率: 0.001mm', '恒定测量力'] },
            { name: 'IP65防水数显外径千分尺(带数据传输接口)', model: 'INSIZE 3101', img: '3101s.jpg', bestseller: true,
              desc: 'IP65防水防尘，带数据传输接口可连接SPC系统。量程0-25/25-50/50-75/75-100mm，分辨率0.001mm。',
              specs: ['IP65防护', '量程: 0-100mm分段', '分辨率: 0.001mm', 'SPC数据接口', '硬质合金测头'] },
            { name: '内测千分尺(经济型)', model: 'INSIZE 3220', img: '3220s.jpg', bestseller: false,
              desc: '经济实用型内测千分尺，适合预算有限的客户。简单可靠。',
              specs: ['经济型', '内测量', '简单可靠'] },
            { name: '数显直进式管状内径千分尺', model: 'INSIZE 3635', img: '3635s.jpg', bestseller: false,
              desc: '管状内径测量专用，直进式设计。适合深孔和管件精密内径测量。',
              specs: ['管状内径', '直进式', '适合深孔', '精密测量'] },
            { name: '数显大行程三点内径千分尺', model: 'INSIZE 3663', img: '3663s.jpg', bestseller: false,
              desc: '三点式内径测量，大行程设计。适合各种孔径批量快速检测，数显读数。',
              specs: ['三点式', '大行程', '内径测量', '数显读数'] },
            { name: '凹槽千分尺', model: 'INSIZE 3287', img: '3287s.jpg', bestseller: false,
              desc: '专用于凹槽、沟槽宽度精密测量。特殊测头设计，可深入槽底。',
              specs: ['凹槽测量', '特殊测头', '沟槽专用', '精密'] }
          ]
        },
        {
          name: '半径规',
          items: [
            { name: '数显半径规', model: 'INSIZE 2188', img: '2188s.jpg', bestseller: false,
              desc: '用于快速测量圆弧半径尺寸，数显读数直观。适合模具、机加工车间使用。',
              specs: ['半径测量', '数显读数', '快速检测', '模具/机加工'] }
          ]
        },
        {
          name: '指示表 / 千分表',
          items: [
            { name: '杠杆千分表', model: 'INSIZE 2897', img: '2897s.jpg', bestseller: true,
              desc: '杠杆式千分表，分辨率0.001mm。适合狭小空间测量和跳动检查。车间必备精密量具。',
              specs: ['分辨率: 0.001mm', '杠杆式', '狭小空间可用', '跳动检查'] },
            { name: '数显表(多功能)', model: 'INSIZE 2103', img: '2103s.jpg', bestseller: true,
              desc: '多功能数显指示表，可切换公/英制，带公差判断和数据输出功能。',
              specs: ['数显', '公/英制切换', '公差判断', '数据输出'] },
            { name: '自动检表仪', model: 'INSIZE ISQ-901', img: 'ISQ-901-s.jpg', bestseller: false,
              desc: '自动检测指示表精度和重复性，适合计量室和校准实验室使用。',
              specs: ['自动检测', '精度校准', '计量室设备', '重复性检测'] }
          ]
        },
        {
          name: '螺纹量具',
          items: [
            { name: '螺距测量仪', model: 'INSIZE 2234', img: '2234s.jpg', bestseller: false,
              desc: '高精度螺距参数测量，分辨率0.001mm。适合螺纹加工和检测。',
              specs: ['高精度', '螺距参数', '0.001mm', '螺纹检测'] },
            { name: '内螺纹顶径测量仪', model: 'INSIZE 2237', img: '2237s.jpg', bestseller: false,
              desc: '精密测量内螺纹顶径尺寸，确保螺纹配合精度。',
              specs: ['内螺纹', '顶径测量', '精密', '配合精度'] },
            { name: '螺纹同心度环规', model: 'INSIZE 4670', img: '4670s.jpg', bestseller: false,
              desc: '检测螺纹同心度，确保螺纹加工质量和装配精度。',
              specs: ['同心度', '环规', '螺纹检测', '装配精度'] },
            { name: '螺距规', model: 'INSIZE 4825', img: '4825s.jpg', bestseller: true,
              desc: '快速检测螺纹螺距，公制60°、英制55°可选。工厂基础检具，每厂必备。',
              specs: ['公制/英制', '快速检测', '基础检具', '每厂必备'] }
          ]
        },
        {
          name: '内径 / 槽宽 / 键槽 / 倒角专用量具',
          items: [
            { name: '高精度数显内卡规', model: 'INSIZE 2159', img: '2159s.jpg', bestseller: false,
              desc: '快速测量内径、内槽宽等尺寸，数显读数方便直观。',
              specs: ['数显', '内径测量', '快速检测', '内槽宽'] },
            { name: '枪式内沟槽宽量表', model: 'INSIZE 2438', img: '2438s.jpg', bestseller: false,
              desc: '枪式握持设计，专用于内孔沟槽宽度测量，操作方便。',
              specs: ['枪式设计', '内沟槽', '操作便捷', '内孔'] },
            { name: '槽宽精密塞规', model: 'INSIZE 4654', img: '4654s.jpg', bestseller: false,
              desc: '精密塞规式检测工具，用于槽宽通止检测。',
              specs: ['塞规式', '槽宽检测', '通止检测', '精密'] },
            { name: '孔内键槽宽度精密塞规', model: 'INSIZE 4660', img: '4660s.jpg', bestseller: false,
              desc: '专用孔内键槽宽度检测塞规，精密通止检测。',
              specs: ['孔内键槽', '塞规式', '通止检测', '精密'] },
            { name: '键槽对称度量规', model: 'INSIZE 4861', img: '4861s.jpg', bestseller: false,
              desc: '检测键槽对称度公差，确保装配精度。',
              specs: ['对称度', '键槽检测', '装配精度'] },
            { name: '键槽对称度量规', model: 'INSIZE 4865', img: '4865s.jpg', bestseller: false,
              desc: '精密检测键槽对称度，确保传动配合精度。',
              specs: ['对称度', '键槽检测', '传动配合', '精密'] },
            { name: '倒角规', model: 'INSIZE 1267', img: '1267s.jpg', bestseller: false,
              desc: '用于快速检测倒角尺寸，适合机加工和模具行业。',
              specs: ['倒角检测', '快速测量', '机加工', '模具'] },
            { name: '倒角高度规', model: 'INSIZE 2943', img: '2943s.jpg', bestseller: false,
              desc: '测量倒角高度尺寸，适合批量检测。',
              specs: ['倒角高度', '批量检测', '精密'] },
            { name: '数显倒角高度规', model: 'INSIZE 2964', img: '2964s.jpg', bestseller: true,
              desc: '快速测量倒角尺寸和高度，数显读数精度高。模具和机加工行业常用。',
              specs: ['数显', '倒角测量', '高精度', '模具行业常用'] }
          ]
        },
        {
          name: '角度与锥度测量',
          items: [
            { name: '防水数显角度尺(重型)', model: 'INSIZE 2174', img: '2174s.jpg', bestseller: true,
              desc: '重型防水设计，适合模具、机床行业角度测量。分辨率0.05°，不锈钢制造。',
              specs: ['防水', '重型', '分辨率: 0.05°', '不锈钢'] },
            { name: '垂直度仪', model: 'INSIZE 4770', img: '4770s.jpg', bestseller: false,
              desc: '精密检测工件垂直度偏差，适合精密制造和检测。',
              specs: ['垂直度', '精密检测', '精密制造'] },
            { name: '锥孔精密塞规', model: 'INSIZE 4664', img: '4664s.jpg', bestseller: false,
              desc: '锥度孔精密检测塞规，用于锥孔角度的通止检测。',
              specs: ['锥孔检测', '塞规式', '通止检测', '精密'] },
            { name: '锥度检查仪', model: 'INSIZE 4157', img: '4157s.jpg', bestseller: false,
              desc: '精密锥度检测设备，适合轴类锥度和孔类锥度的精确测量。',
              specs: ['锥度检测', '轴/孔通用', '精密测量'] },
            { name: '锥度塞规', model: 'INSIZE 6326', img: '6326s.jpg', bestseller: false,
              desc: '标准锥度塞规，用于锥孔配合面的通止检测。',
              specs: ['锥度塞规', '通止检测', '标准锥度'] }
          ]
        },
        {
          name: '跳动检查与偏摆仪',
          items: [
            { name: '机床主轴孔跳动检测规', model: 'INSIZE 6327', img: '6327s.jpg', bestseller: false,
              desc: '专用于机床主轴孔跳动检测，确保主轴安装精度。',
              specs: ['主轴孔检测', '跳动测量', '机床专用'] },
            { name: '偏摆检查仪', model: 'INSIZE 4789', img: '4789s.jpg', bestseller: false,
              desc: '检查轴类零件径向跳动和端面跳动，适合机加工车间。',
              specs: ['跳动检查', '轴类零件', '径向/端面', '机加工必备'] },
            { name: '带滚轮偏摆检查仪', model: 'INSIZE 4720', img: '4720s.jpg', bestseller: false,
              desc: '带滚轮支撑，方便旋转工件检查跳动。操作更便捷。',
              specs: ['带滚轮', '跳动检查', '操作便捷', '轴类零件'] }
          ]
        },
        {
          name: '塞尺 / 间隙规',
          items: [
            { name: '塞尺(经济型)', model: 'INSIZE 4601', img: '4601s.jpg', bestseller: true,
              desc: '常规间隙测量工具，多种规格组合。每厂必备基础量具。',
              specs: ['经济型', '多规格', '间隙测量', '基础量具'] },
            { name: '数显楔形塞尺', model: 'INSIZE 1160', img: '1160s.jpg', bestseller: false,
              desc: '楔形设计结合数显读数，可精确测量缝隙和间隙大小。使用便捷。',
              specs: ['楔形设计', '数显读数', '间隙测量', '精密'] }
          ]
        },
        {
          name: '量块及附件',
          items: [
            { name: '高精度钢量块套装', model: 'INSIZE 4170', img: '4170s.jpg', bestseller: true,
              desc: '钢制量块套装，多规格可选。计量室标准器具，用于量具校准和精密测量。',
              specs: ['钢制', '多种规格', '精密校准', '计量室必备'] },
            { name: '量块夹子', model: 'INSIZE 6886', img: '6886s.jpg', bestseller: false,
              desc: '用于量块的组合使用和夹持，方便拼装所需尺寸。',
              specs: ['量块附件', '组合使用', '夹持方便'] }
          ]
        },
        {
          name: '平板 / V形架',
          items: [
            { name: '花岗岩平板', model: 'INSIZE 6900', img: '6900s.jpg', bestseller: false,
              desc: '高精度花岗岩平板，适合计量室和检验平台使用。多种尺寸规格可选。',
              specs: ['花岗岩', '高精度', '多尺寸可选', '检验平台'] },
            { name: 'V形架', model: 'INSIZE 6896', img: '6896s.jpg', bestseller: false,
              desc: '铸铁V形架，用于支撑圆柱形工件测量和划线。',
              specs: ['铸铁', '圆柱支撑', '测量/划线', '多规格'] },
            { name: '磁性V形架(经济型)', model: 'INSIZE 6890', img: '6890s.jpg', bestseller: false,
              desc: '带磁性吸附功能V形架，经济实用。方便在金属台面上固定使用。',
              specs: ['磁性', '经济型', 'V形支撑', '金属台面固定'] }
          ]
        },
        {
          name: '测量台',
          items: [
            { name: '测量台', model: 'INSIZE 6845', img: '6845s.jpg', bestseller: false,
              desc: '精密测量台，用于固定和支撑测量工具。提供稳定测量平台。',
              specs: ['精密', '稳定平台', '测量支撑'] }
          ]
        }
      ]
    },

    // ====== 3. 水平仪 ======
    cat3: {
      items: [
        { name: '电子水平仪', model: 'INSIZE ISE-L051', img: 'ISE-L051-s.jpg', bestseller: true,
          desc: '高精度电子水平仪，分辨率0.001mm/m。适合机床导轨调平、平板检测。',
          specs: ['分辨率: 0.001mm/m', '电子式', '导轨调平', '高精度'] },
        { name: '数显水平仪/坡度仪', model: 'INSIZE 2179', img: '2179s.jpg', bestseller: true,
          desc: '数显显示，可同时测量水平角和坡度。便携实用，适合安装调试和工程测量。',
          specs: ['数显', '水平+坡度', '便携', '多用途'] },
        { name: '十字线激光水平仪', model: 'INSIZE 4917', img: '4917s.jpg', bestseller: false,
          desc: '投射十字激光线，适合设备安装定位和划线作业。',
          specs: ['十字激光', '安装定位', '划线', '便携'] }
      ]
    },

    // ====== 4. 在机测量 ======
    cat4: {
      items: [
        { name: '红外通讯机床测头', model: 'INSIZE 9414', img: '9414s.jpg', bestseller: true,
          desc: '红外通讯机床测头，可与对刀器组合使用。适合CNC加工中心在机检测，提升加工精度和效率。',
          specs: ['红外通讯', 'CNC专用', '在机检测', '可与对刀器组合'] },
        { name: '定中心表', model: 'INSIZE 2845', img: '2845s.jpg', bestseller: false,
          desc: '快速定位工件中心，适合铣床和加工中心使用，操作简单。',
          specs: ['定中心', '铣床用', '操作简单', '快速定位'] },
        { name: '数显3D寻边器', model: 'INSIZE 2846', img: '2846s.jpg', bestseller: true,
          desc: '3D寻边器，数显读数直观。CNC加工中心对刀找正必备工具。',
          specs: ['3D', '数显', '对刀找正', 'CNC必备'] }
      ]
    },

    // ====== 5. 测头和光栅尺 ======
    cat5: {
      items: [
        { name: '光栅尺', model: 'INSIZE ISL-F', img: 'ISL-F-s.jpg', bestseller: true,
          desc: '标准光栅尺，用于机床数显改造和位置反馈。多种行程可选，精度高。',
          specs: ['多种行程', '高精度', '机床数显改造', '位置反馈'] },
        { name: '光栅尺(TTL信号)', model: 'INSIZE ISL-A', img: 'ISL-A-s.jpg', bestseller: false,
          desc: 'TTL信号输出光栅尺，适合数控系统直接集成。',
          specs: ['TTL信号', '数控集成', '直接兼容'] }
      ]
    },

    // ====== 6. 圆度仪·轮廓仪·粗糙度仪 ======
    cat6: {
      items: [
        { name: '圆度/圆柱度仪', model: 'INSIZE RCT-300', img: 'RCT-300-s.jpg', bestseller: true,
          desc: '高精度圆度、圆柱度测量。适合精密轴类、轴承零件检测。精度可达微米级。',
          specs: ['高精度', '圆度/圆柱度', '微米级', '精密零件'] },
        { name: '轮廓测量仪', model: 'INSIZE SPM-1000', img: 'SPM-1000-s.jpg', bestseller: true,
          desc: '高精度轮廓测量，可测角度、半径、距离等轮廓参数。适合模具和精密零件检测。',
          specs: ['轮廓测量', '角度/半径/距离', '模具检测', '精密零件'] }
      ]
    },

    // ====== 7. 三坐标测量机 ======
    cat7: {
      items: [
        { name: '三坐标测量机', model: 'INSIZE ISC-575', img: 'ISC-575-s.jpg', bestseller: true,
          desc: '高精度桥式三坐标测量机，适合各类精密零件全尺寸检测。多种行程规格可选。',
          specs: ['桥式结构', '多种行程', '全尺寸检测', '高精度'] },
        { name: '三坐标关节臂', model: 'INSIZE CMM-AR', img: 'CMM-AR-s.jpg', bestseller: true,
          desc: '便携式关节臂测量机，适合大型工件和现场测量。6轴/7轴可选，灵活便携。',
          specs: ['便携式', '6/7轴', '大型工件', '现场测量'] },
        { name: '158件套装三坐标测量机夹具', model: 'INSIZE ISY-100', img: 'ISY-100-s.jpg', bestseller: false,
          desc: '全套三坐标测量机夹具套装，满足各类异形工件装夹需求。158件组件灵活搭配。',
          specs: ['158件套装', 'CMM夹具', '异形工件', '灵活搭配'] }
      ]
    },

    // ====== 8. 投影仪·闪测仪·影像仪 ======
    cat8: {
      items: [
        { name: '高精度一键式闪测仪', model: 'INSIZE QMS-H210', img: 'QMS-H210-s.jpg', bestseller: true,
          desc: '一键快速测量，放置工件即可自动识别并测量所有尺寸。效率极高，适合批量小零件全尺寸检测。',
          specs: ['一键测量', '自动识别', '高效批量', '全尺寸'] },
        { name: '卧式投影仪', model: 'INSIZE ISP-A3000', img: 'ISP-A3000-s.jpg', bestseller: false,
          desc: '卧式投影仪，φ300mm屏幕。适合轴类零件轮廓检测和对比测量。',
          specs: ['φ300mm屏幕', '卧式', '轴类检测', '轮廓对比'] }
      ]
    },

    // ====== 9. 刀具检测 ======
    cat9: {
      items: [
        { name: '刀具影像仪', model: 'INSIZE TLP-D150', img: 'TLP-D150-s.jpg', bestseller: true,
          desc: '专用刀具几何参数检测设备，可测刀具直径、角度、刃口等。适合刀具制造和修磨行业。',
          specs: ['刀具专用', '几何参数', '角度/刃口', '刀具行业'] },
        { name: '刀柄跳动检查仪', model: 'INSIZE 4771', img: '4771s.jpg', bestseller: false,
          desc: '检测刀柄跳动精度，确保刀具安装精度和加工质量。',
          specs: ['刀柄跳动', '安装精度', '加工质量'] }
      ]
    },

    // ====== 10. 显微镜·放大镜 ======
    cat10: {
      items: [
        { name: '测量工具显微镜', model: 'INSIZE ISD-VMM', img: 'ISD-VMM-s.jpg', bestseller: true,
          desc: '精密测量工具显微镜，适合微小零件和精密尺寸检测。多种放大倍率可选。',
          specs: ['精密测量', '多种倍率', '微小零件', '工具显微镜'] },
        { name: '测量显微镜(带显示器)', model: 'INSIZE ISM-DL300', img: 'ISM-DL300-s.jpg', bestseller: false,
          desc: '带液晶显示器，观察舒适。适合长时间检测作业，减少眼部疲劳。',
          specs: ['液晶显示', '观察舒适', '长时间作业'] },
        { name: '台式照明放大镜', model: 'INSIZE 7520', img: '7520s.jpg', bestseller: true,
          desc: '带LED照明台式放大镜，适合质检工位使用。经济实用，每质检台必备。',
          specs: ['LED照明', '台式', '经济实用', '质检工位'] }
      ]
    },

    // ====== 11. 内窥镜 ======
    cat11: {
      items: [
        { name: '直视硬管内窥镜', model: 'INSIZE ISV-HF', img: 'ISV-HF-s.jpg', bestseller: true,
          desc: '直视硬管内窥镜，适合管道、腔体内部目视检查。多种直径和长度可选。',
          specs: ['直视硬管', '多直径', '管道检查', '腔体检查'] },
        { name: '手柄LED光源', model: 'INSIZE ISV-1HLED', img: 'ISV-1HLED-s.jpg', bestseller: false,
          desc: '便携式LED光源，为内窥镜提供高亮度照明。',
          specs: ['便携', 'LED', '高亮度', '内窥镜配套'] }
      ]
    },

    // ====== 12. 其他几何测量仪器 ======
    cat12: {
      items: [
        { name: '蓝牙手持式激光测距仪', model: 'INSIZE 9564-D', img: '9564-D-s.jpg', bestseller: true,
          desc: '蓝牙手持式激光测距仪，便携精准。适合建筑、装修、设备安装等距离测量。',
          specs: ['蓝牙', '手持式', '激光测距', '便携'] },
        { name: '小型立式测长仪', model: 'INSIZE ISQ-VLM36', img: 'ISQ-VLM36-s.jpg', bestseller: false,
          desc: '立式小型测长仪，适合微型零件和精密小尺寸测量。高倍率光学系统。',
          specs: ['立式', '小型', '高倍率', '精密测量'] },
        { name: '小型测长仪', model: 'INSIZE ISQ-KLM120', img: 'ISQ-KLM120-s.jpg', bestseller: false,
          desc: '台式小型测长仪，适合中小零件的长度尺寸精密测量。操作简便。',
          specs: ['台式', '小型', '长度测量', '精密'] }
      ]
    },

    // ====== 13. 自动化测量 ======
    cat13: {
      items: [
        { name: '机械手配合闪测仪自动化检测系统', model: 'INSIZE RBT-QM01', img: 'RBT-QM01-s.jpg', bestseller: true,
          desc: '机械手自动上下料+闪测仪自动检测，实现无人化测量。适合大批量零件在线全检。',
          specs: ['机械手', '自动上下料', '无人化', '在线全检'] },
        { name: '2D/3D机器视觉检测平台', model: 'INSIZE MV', img: 'MV-s.jpg', bestseller: true,
          desc: '机器视觉自动检测，适合大批量产线在线全检。工业4.0趋势产品。',
          specs: ['机器视觉', '2D/3D', '在线全检', '工业4.0'] },
        { name: '半自动测量站(使用电感测头和气规)', model: 'INSIZE Measuring-Station', img: 'Measuring-Station-s.jpg', bestseller: false,
          desc: '半自动多参数测量站，使用电感测头和气规。适合特定零件批量检测。',
          specs: ['半自动', '电感测头', '气规', '多参数'] }
      ]
    },

    // ====== 14. 硬度计 ======
    cat14: {
      items: [
        { name: '电动数显洛氏/表面洛氏/双洛氏硬度计', model: 'INSIZE HDT-RT151', img: 'HDT-RT151-s.jpg', bestseller: true,
          desc: '全自动电动加载，数显读数。支持洛氏/表面洛氏/双洛氏多种标尺。热处理车间和质检室必备。',
          specs: ['电动加载', '数显读数', '洛氏/表面/双洛', '热处理必备'] },
        { name: '便携式里氏硬度计', model: 'INSIZE HDT-CB320', img: 'HDT-CB320-s.jpg', bestseller: true,
          desc: '手持式里氏硬度计，适合大型工件、现场硬度检测。多种探头可选（D/DC/DL/G等）。',
          specs: ['手持便携', '里氏', '大工件', '多探头可选'] },
        { name: '数显邵氏硬度计', model: 'INSIZE ISH-DSA', img: 'ISH-DSA-s.jpg', bestseller: false,
          desc: '适合橡胶、塑料等软质材料硬度检测。A/D型可选。',
          specs: ['邵氏', '橡胶/塑料', 'A/D型', '软质材料'] }
      ]
    },

    // ====== 15. 金相装备 ======
    cat15: {
      items: [
        { name: '金相试样切割机(标准型)', model: 'INSIZE MLP-CM60', img: 'MLP-CM60-s.jpg', bestseller: true,
          desc: '金相试样前处理设备，适合材料实验室和热处理车间取样。',
          specs: ['金相制样', '切割取样', '标准型', '实验室设备'] },
        { name: '自动金相磨抛机(先进型)', model: 'INSIZE MLP-GP260', img: 'MLP-GP260-s.jpg', bestseller: true,
          desc: '全自动磨抛，效率高。适合批量金相试样制备。先进型配备更多功能。',
          specs: ['全自动', '磨抛一体', '批量制备', '先进型'] },
        { name: '自动镶嵌机(标准型)', model: 'INSIZE MLP-MP30', img: 'MLP-MP30-s.jpg', bestseller: false,
          desc: '自动热镶嵌，适合小尺寸试样的标准镶嵌。制样效率高。',
          specs: ['自动', '热镶嵌', '标准型', '制样效率高'] }
      ]
    },

    // ====== 16. 探伤仪 ======
    cat16: {
      items: [
        { name: '数字式超声波探伤仪', model: 'INSIZE UFD-T680', img: 'UFD-T680-s.jpg', bestseller: true,
          desc: '数字式超声波探伤仪，适合焊缝、锻件、铸件内部缺陷检测。特种设备制造行业必备。',
          specs: ['数字式', '超声波', '焊缝/锻件/铸件', '特种设备'] },
        { name: '充电式紫外线探伤灯', model: 'INSIZE MPI-HF360', img: 'MPI-HF360-s.jpg', bestseller: false,
          desc: '充电式便携紫外灯，配合荧光磁粉/渗透探伤使用。现场使用方便。',
          specs: ['充电式', '便携', '紫外线', '磁粉/渗透探伤'] },
        { name: '荧光磁粉浓缩液', model: 'INSIZE MPI-CC20', img: 'MPI-CC20-s.jpg', bestseller: false,
          desc: '磁粉探伤用荧光磁粉浓缩液，灵敏度高。用于磁粉探伤检测。',
          specs: ['荧光磁粉', '浓缩液', '磁粉探伤', '高灵敏度'] }
      ]
    },

    // ====== 17. 试验机·推拉力计·张力计 ======
    cat17: {
      items: [
        { name: '外置传感器数显推拉力计/扭矩仪', model: 'INSIZE ISF-5AM', img: 'ISF-5AM-s.jpg', bestseller: true,
          desc: '多功能数显推拉力计，可配外置传感器。适合拉伸、压缩、扭矩等多功能测量。',
          specs: ['数显', '多功能', '可配外置传感器', '拉/压/扭矩'] },
        { name: '指针式推拉力计', model: 'INSIZE ISF-F', img: 'ISF-F-s.jpg', bestseller: false,
          desc: '机械指针式，无需电池。简单可靠，适合现场简单测力。',
          specs: ['指针式', '无需电池', '简单可靠', '现场测力'] }
      ]
    },

    // ====== 18. 扭矩仪·扭矩扳手 ======
    cat18: {
      items: [
        { name: '电动扭矩测试机架', model: 'INSIZE IST-MTS100', img: 'IST-MTS100-s.jpg', bestseller: true,
          desc: '电动操作扭矩测试台，适合实验室扭矩校准和批量扭矩检测。结构稳固，操作简便。',
          specs: ['电动操作', '扭矩校准', '结构稳固', '操作简便'] },
        { name: '数显扭矩仪', model: 'INSIZE IST-DTT', img: 'IST-DTT-s.jpg', bestseller: true,
          desc: '数显扭矩测试，适合瓶盖扭矩、紧固件扭矩等检测。分辨率高。',
          specs: ['数显', '扭矩测试', '瓶盖/紧固件', '高分辨率'] }
      ]
    },

    // ====== 19. 元素分析 ======
    cat19: {
      items: [
        { name: 'XRF镀层测厚仪', model: 'INSIZE XRF-PT230', img: 'XRF-PT230-s.jpg', bestseller: true,
          desc: 'X射线荧光镀层测厚，可同时分析多层镀层厚度和成分。RoHS检测兼容。PCB和电镀行业必备。',
          specs: ['XRF原理', '多层分析', 'RoHS兼容', 'PCB/电镀行业'] },
        { name: '氧氮氢分析仪(标准型)', model: 'INSIZE ELA', img: 'ELA-s.jpg', bestseller: false,
          desc: '金属材料中氧、氮、氢元素含量分析。适合冶金和材料研究。',
          specs: ['O/N/H分析', '金属材料', '冶金行业', '材料研究'] },
        { name: '气相色谱仪(RoHS2.0邻苯快筛仪)', model: 'INSIZE GCT-2400', img: 'GCT-2400-s.jpg', bestseller: false,
          desc: '气相色谱仪，用于RoHS2.0邻苯二甲酸酯快速筛查。适合电子、玩具行业。',
          specs: ['气相色谱', 'RoHS2.0', '邻苯快筛', '电子/玩具行业'] }
      ]
    },

    // ====== 20. 涂层检测 ======
    cat20: {
      items: [
        { name: '一体式涂层测厚仪', model: 'INSIZE ISO-6000FN', img: 'ISO-6000FN-s.jpg', bestseller: true,
          desc: '一体式设计，可测铁基(F)和非铁基(N)涂层厚度。适合表面处理、电镀、涂装行业。',
          specs: ['铁基/非铁基', '一体式', '表面处理必备', '来料检验'] },
        { name: '湿漆膜厚度规', model: 'INSIZE 4845', img: '4845s.jpg', bestseller: false,
          desc: '快速检测未干燥漆膜的湿膜厚度。涂装现场必备工具。',
          specs: ['湿膜测量', '涂装现场', '快速检测', '未干燥漆膜'] }
      ]
    },

    // ====== 21. 环境测试 ======
    cat21: {
      items: [
        { name: '红外测温仪(中温型)', model: 'INSIZE 0215-A900', img: '0215-A900-s.jpg', bestseller: false,
          desc: '非接触式红外测温，适合工业现场快速温度检测。中温型适合一般工业环境。',
          specs: ['红外非接触', '中温型', '快速响应', '工业现场'] },
        { name: '温湿度计', model: 'INSIZE 0315', img: '0315s.jpg', bestseller: false,
          desc: '数字式温湿度计，同时显示温度和湿度。适合实验室和仓储环境监测。',
          specs: ['数字式', '温度+湿度', '双显示', '实验室/仓储'] }
      ]
    },

    // ====== 22. 其他仪器 ======
    cat22: {
      items: [
        { name: '3D线激光轮廓测量仪', model: 'INSIZE VIM-P140', img: 'VIM-P140-s.jpg', bestseller: true,
          desc: '3D线激光轮廓测量，可获取工件三维形貌数据。适合精密零件3D轮廓分析。',
          specs: ['3D线激光', '轮廓测量', '三维形貌', '精密分析'] },
        { name: '镜片透过率仪', model: 'INSIZE 5824', img: '5824s.jpg', bestseller: false,
          desc: '测量镜片、玻璃、薄膜等透明材料的光透过率。适合光学和玻璃行业。',
          specs: ['透过率测量', '光学检测', '镜片/玻璃', '透明材料'] },
        { name: '辐射检测仪', model: 'INSIZE 0522', img: '0522s.jpg', bestseller: false,
          desc: '辐射检测仪器，适合环境辐射监测和工业辐射安全检测。',
          specs: ['辐射检测', '环境监测', '辐射安全', '工业检测'] }
      ]
    },

    // ====== 23. 可靠性试验 ======
    cat23: {
      items: [
        { name: '盐水喷雾试验箱', model: 'INSIZE SFT', img: 'SFT-s.jpg', bestseller: true,
          desc: '盐雾腐蚀试验，适合表面处理、电镀行业品质检测。出货检验常用设备。',
          specs: ['盐雾试验', '腐蚀检测', '表面处理', '出货检验'] },
        { name: '桌上型温湿度交变试验箱', model: 'INSIZE THT-Z158', img: 'THT-Z158-s.jpg', bestseller: false,
          desc: '小型桌上式恒温恒湿箱，适合实验室小批量样品环境试验。省空间，经济实用。',
          specs: ['小型桌上式', '恒温恒湿', '省空间', '经济实用'] },
        { name: '高低温交变湿热试验箱', model: 'INSIZE THT-A101T', img: 'THT-A101T-s.jpg', bestseller: true,
          desc: '温湿度交变试验，适合电子、汽车零部件可靠性验证。满足多项测试标准。',
          specs: ['温湿度交变', '高低温', '可靠性验证', '电子/汽车'] }
      ]
    },

    // ====== 24. 衡器 ======
    cat24: {
      items: [
        { name: '电子天平', model: 'INSIZE 8301', img: '8301s.jpg', bestseller: true,
          desc: '高精度电子天平，多种量程和精度可选。实验室基础称重设备。',
          specs: ['高精度', '多量程', '实验室必备', '数字显示'] },
        { name: '电子台秤', model: 'INSIZE 8501', img: '8501s.jpg', bestseller: false,
          desc: '工业电子台秤，适合仓库和生产现场称重。大称量范围。',
          specs: ['工业级', '仓库/现场', '大称量', '数字显示'] },
        { name: '砝码套装', model: 'INSIZE 8910', img: '8910s.jpg', bestseller: false,
          desc: '标准砝码套装，用于天平和秤的校准检定。多种规格可选。',
          specs: ['标准砝码', '校准检定', '多规格', '精密'] }
      ]
    },

    // ====== 25. 液体和气体检测 ======
    cat25: {
      items: [
        { name: '台式电导率仪', model: 'INSIZE 0414-ED34', img: '0414-ED34-s.jpg', bestseller: false,
          desc: '台式电导率测量仪，适合实验室水质分析和溶液电导率检测。',
          specs: ['台式', '电导率', '水质分析', '实验室'] },
        { name: '便携式pH计', model: 'INSIZE 0430-HA21', img: '0430-HA21-s.jpg', bestseller: false,
          desc: '便携式pH计，适合现场快速检测溶液酸碱度。操作简单，携带方便。',
          specs: ['便携式', 'pH测量', '现场检测', '操作简单'] }
      ]
    },

    // ====== 26. 压力表 ======
    cat26: {
      items: [
        { name: '耐振压力表', model: 'INSIZE 5259', img: '5259s.jpg', bestseller: true,
          desc: '耐振型压力表，适合振动环境下压力测量。充油设计，耐冲击，读数稳定。',
          specs: ['耐振', '充油设计', '压力测量', '读数稳定'] },
        { name: '压力表', model: 'INSIZE 5255', img: '5255s.jpg', bestseller: true,
          desc: '标准压力表，适合一般工业和实验室压力测量。多种量程可选。',
          specs: ['标准型', '多量程', '压力测量', '工业/实验室'] },
        { name: '数字压力表(表盘直径60mm)', model: 'INSIZE 5202', img: '5202s.jpg', bestseller: false,
          desc: '60mm表盘数字压力表，数显读数精准。适合需要精确读数的场合。',
          specs: ['数字显示', '60mm表盘', '精确读数', '精密测量'] }
      ]
    },

    // ====== 27. 电子测试 ======
    cat27: {
      items: [
        { name: '直流电阻测试仪', model: 'INSIZE 9651', img: '9651s.jpg', bestseller: false,
          desc: '精密直流电阻测试仪，适合电子元件、线缆电阻测量。高精度，多量程。',
          specs: ['直流电阻', '精密测量', '多量程', '电子元件'] },
        { name: '内置蓝牙数字万用表', model: 'INSIZE 9219', img: '9219s.jpg', bestseller: true,
          desc: '蓝牙数据传输，智能手机APP可读取记录测量数据。多功能数字万用表。',
          specs: ['蓝牙', 'APP连接', '数据记录', '多功能'] },
        { name: '数显测电笔', model: 'INSIZE 9721', img: '9721s.jpg', bestseller: false,
          desc: '数显测电笔，可显示电压值。适合电工日常检测使用。感应式检测。',
          specs: ['数显', '电压显示', '感应式', '电工必备'] }
      ]
    }
  }
};
