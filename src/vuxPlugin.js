import Vue from 'vue'
import {
  Actionsheet,
  Agree,
  AjaxPlugin,
  Alert,
  AlertModule,
  AlertPlugin,
  AppPlugin,
  Array2stringFilter,
  Badge,
  base64,
  Blur,
  Box,
  BusPlugin,
  ButtonTab,
  ButtonTabItem,
  Calendar,
  Card,
  Cell,
  CellBox,
  CellFormPreview,
  Checker,
  CheckerItem,
  CheckIcon,
  Checklist,
  ChinaAddressData,
  ChinaAddressV1Data,
  ChinaAddressV2Data,
  ChinaAddressV3Data,
  ChinaAddressV4Data,
  ChinamobileTool,
  ClickOutsideDirective,
  Clocker,
  CloseDialogsPlugin,
  ColorPicker,
  ConfigPlugin,
  Confirm,
  ConfirmPlugin,
  cookie,
  Countdown,
  Countup,
  dateFormat,
  dateRange,
  Datetime,
  DatetimePlugin,
  DatetimeRange,
  DatetimeView,
  debounce,
  Demobasic,
  Demoindex,
  DevicePlugin,
  DevTip,
  Divider,
  Drawer,
  Flexbox,
  FlexboxItem,
  Flow,
  FlowLine,
  FlowState,
  FormatTimeFilter,
  FormPreview,
  FriendlyTimeFilter,
  Fullpage,
  Grid,
  GridItem,
  Group,
  GroupTitle,
  Icon,
  InlineCalendar,
  InlineDesc,
  InlineLoading,
  InlineXNumber,
  InlineXSwitch,
  InviewDirective,
  Loading,
  LoadingPlugin,
  LoadMore,
  LocalePlugin,
  Marquee,
  MarqueeItem,
  Masker,
  md5,
  Msg,
  Name2valueFilter,
  numberComma,
  numberPad,
  numberRandom,
  numberRange,
  NumberRoller,
  Panel,
  Picker,
  Popover,
  Popup,
  PopupHeader,
  PopupPicker,
  PopupRadio,
  Previewer,
  Qrcode,
  querystring,
  Radio,
  Range,
  Rater,
  Scroller,
  Search,
  Selector,
  Shake,
  Spinner,
  Step,
  StepItem,
  Sticky,
  stringTrim,
  Swipeout,
  SwipeoutButton,
  SwipeoutItem,
  Swiper,
  SwiperItem,
  Tab,
  Tabbar,
  TabbarItem,
  TabItem,
  throttle,
  Timeline,
  TimelineItem,
  Tip,
  Toast,
  ToastPlugin,
  TransferDom,
  TransferDomDirective,
  trim,
  Value2nameFilter,
  VArea,
  VAxis,
  VBar,
  VChart,
  VGuide,
  Video,
  ViewBox,
  VLegend,
  VLine,
  VPie,
  VPoint,
  VScale,
  VTooltip,
  VuxComponentListData,
  WechatEmotion,
  WechatPlugin,
  WeekCalendar,
  WepayInput,
  XAddress,
  XButton,
  XCircle,
  XDialog,
  XHeader,
  XHr,
  XImg,
  XInput,
  XNumber,
  XProgress,
  XSwitch,
  XTable,
  XTextarea
} from 'vux'


const VuxComponents = {
  Actionsheet,
  Agree,
  AjaxPlugin,
  Alert,
  AlertModule,
  AlertPlugin,
  AppPlugin,
  Array2stringFilter,
  Badge,
  base64,
  Blur,
  Box,
  BusPlugin,
  ButtonTab,
  ButtonTabItem,
  Calendar,
  Card,
  Cell,
  CellBox,
  CellFormPreview,
  Checker,
  CheckerItem,
  CheckIcon,
  Checklist,
  ChinaAddressData,
  ChinaAddressV1Data,
  ChinaAddressV2Data,
  ChinaAddressV3Data,
  ChinaAddressV4Data,
  ChinamobileTool,
  ClickOutsideDirective,
  Clocker,
  CloseDialogsPlugin,
  ColorPicker,
  ConfigPlugin,
  Confirm,
  ConfirmPlugin,
  cookie,
  Countdown,
  Countup,
  dateFormat,
  dateRange,
  Datetime,
  DatetimePlugin,
  DatetimeRange,
  DatetimeView,
  debounce,
  Demobasic,
  Demoindex,
  DevicePlugin,
  DevTip,
  Divider,
  Drawer,
  Flexbox,
  FlexboxItem,
  Flow,
  FlowLine,
  FlowState,
  FormatTimeFilter,
  FormPreview,
  FriendlyTimeFilter,
  Fullpage,
  Grid,
  GridItem,
  Group,
  GroupTitle,
  Icon,
  InlineCalendar,
  InlineDesc,
  InlineLoading,
  InlineXNumber,
  InlineXSwitch,
  InviewDirective,
  Loading,
  LoadingPlugin,
  LoadMore,
  LocalePlugin,
  Marquee,
  MarqueeItem,
  Masker,
  md5,
  Msg,
  Name2valueFilter,
  numberComma,
  numberPad,
  numberRandom,
  numberRange,
  NumberRoller,
  Panel,
  Picker,
  Popover,
  Popup,
  PopupHeader,
  PopupPicker,
  PopupRadio,
  Previewer,
  Qrcode,
  querystring,
  Radio,
  Range,
  Rater,
  Scroller,
  Search,
  Selector,
  Shake,
  Spinner,
  Step,
  StepItem,
  Sticky,
  stringTrim,
  Swipeout,
  SwipeoutButton,
  SwipeoutItem,
  Swiper,
  SwiperItem,
  Tab,
  Tabbar,
  TabbarItem,
  TabItem,
  throttle,
  Timeline,
  TimelineItem,
  Tip,
  Toast,
  ToastPlugin,
  TransferDom,
  TransferDomDirective,
  trim,
  Value2nameFilter,
  VArea,
  VAxis,
  VBar,
  VChart,
  VGuide,
  // Video,
  ViewBox,
  VLegend,
  VLine,
  VPie,
  VPoint,
  VScale,
  VTooltip,
  VuxComponentListData,
  WechatEmotion,
  WechatPlugin,
  WeekCalendar,
  WepayInput,
  XAddress,
  XButton,
  XCircle,
  XDialog,
  XHeader,
  XHr,
  XImg,
  XInput,
  XNumber,
  XProgress,
  XSwitch,
  XTable,
  XTextarea
}
const install = function (Vue, opts = {}) {
  if (install.installed) return;

  Object.keys(VuxComponents).forEach(key => {
    Vue.component(key, VuxComponents[key]);
    // 全局Plugin
    Vue.use(LoadingPlugin);
  });
  install.installed = true;

};
VuxComponents.install = install;

// auto install
var inBrowser = typeof window !== 'undefined';
if (inBrowser && window.Vue) {
  window.Vue.use(VuxComponents);
}

export default VuxComponents
