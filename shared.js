var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/lucide/dist/esm/defaultAttributes.mjs
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

// node_modules/lucide/dist/esm/createElement.mjs
var createSVGElement = ([tag, attrs, children]) => {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.keys(attrs).forEach((name) => {
    element.setAttribute(name, String(attrs[name]));
  });
  if (children?.length) {
    children.forEach((child) => {
      const childElement = createSVGElement(child);
      element.appendChild(childElement);
    });
  }
  return element;
};
var createElement = (iconNode, customAttrs = {}) => {
  const tag = "svg";
  const attrs = {
    ...defaultAttributes,
    ...customAttrs
  };
  return createSVGElement([tag, attrs, iconNode]);
};

// node_modules/lucide/dist/esm/iconsAndAliases.mjs
var iconsAndAliases_exports = {};
__export(iconsAndAliases_exports, {
  AArrowDown: () => AArrowDown,
  AArrowUp: () => AArrowUp,
  ALargeSmall: () => ALargeSmall,
  Accessibility: () => Accessibility,
  Activity: () => Activity,
  ActivitySquare: () => SquareActivity,
  Ad: () => Ad,
  AirVent: () => AirVent,
  Airplay: () => Airplay,
  AlarmCheck: () => AlarmClockCheck,
  AlarmClock: () => AlarmClock,
  AlarmClockCheck: () => AlarmClockCheck,
  AlarmClockMinus: () => AlarmClockMinus,
  AlarmClockOff: () => AlarmClockOff,
  AlarmClockPlus: () => AlarmClockPlus,
  AlarmMinus: () => AlarmClockMinus,
  AlarmPlus: () => AlarmClockPlus,
  AlarmSmoke: () => AlarmSmoke,
  Album: () => SquareBookmark,
  AlertCircle: () => CircleAlert,
  AlertOctagon: () => OctagonAlert,
  AlertTriangle: () => TriangleAlert,
  AlignCenter: () => TextAlignCenter,
  AlignCenterHorizontal: () => AlignCenterHorizontal,
  AlignCenterVertical: () => AlignCenterVertical,
  AlignEndHorizontal: () => AlignEndHorizontal,
  AlignEndVertical: () => AlignEndVertical,
  AlignHorizontalDistributeCenter: () => AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd: () => AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart: () => AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter: () => AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd: () => AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart: () => AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround: () => AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween: () => AlignHorizontalSpaceBetween,
  AlignJustify: () => TextAlignJustify,
  AlignLeft: () => TextAlignStart,
  AlignRight: () => TextAlignEnd,
  AlignStartHorizontal: () => AlignStartHorizontal,
  AlignStartVertical: () => AlignStartVertical,
  AlignVerticalDistributeCenter: () => AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd: () => AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart: () => AlignVerticalDistributeStart,
  AlignVerticalJustifyCenter: () => AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd: () => AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart: () => AlignVerticalJustifyStart,
  AlignVerticalSpaceAround: () => AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween: () => AlignVerticalSpaceBetween,
  Ambulance: () => Ambulance,
  Ampersand: () => Ampersand,
  Ampersands: () => Ampersands,
  Amphora: () => Amphora,
  Anchor: () => Anchor,
  Angle: () => Angle,
  Angry: () => FaceAngry,
  Annoyed: () => FaceExpressionless,
  Antenna: () => Antenna,
  Anvil: () => Anvil,
  Aperture: () => Aperture,
  AppWindow: () => AppWindow,
  AppWindowMac: () => AppWindowMac,
  Apple: () => Apple,
  Archive: () => Archive,
  ArchiveRestore: () => ArchiveRestore,
  ArchiveX: () => ArchiveX,
  AreaChart: () => ChartArea,
  Armchair: () => Armchair,
  ArrowBigDown: () => ArrowBigDown,
  ArrowBigDownDash: () => ArrowBigDownDash,
  ArrowBigLeft: () => ArrowBigLeft,
  ArrowBigLeftDash: () => ArrowBigLeftDash,
  ArrowBigRight: () => ArrowBigRight,
  ArrowBigRightDash: () => ArrowBigRightDash,
  ArrowBigUp: () => ArrowBigUp,
  ArrowBigUpDash: () => ArrowBigUpDash,
  ArrowDown: () => ArrowDown,
  ArrowDown01: () => ArrowDown01,
  ArrowDown10: () => ArrowDown10,
  ArrowDownAZ: () => ArrowDownAZ,
  ArrowDownAz: () => ArrowDownAZ,
  ArrowDownCircle: () => CircleArrowDown,
  ArrowDownFromLine: () => ArrowDownFromLine,
  ArrowDownLeft: () => ArrowDownLeft,
  ArrowDownLeftFromCircle: () => CircleArrowOutDownLeft,
  ArrowDownLeftFromSquare: () => SquareArrowOutDownLeft,
  ArrowDownLeftSquare: () => SquareArrowDownLeft,
  ArrowDownNarrowWide: () => ArrowDownNarrowWide,
  ArrowDownRight: () => ArrowDownRight,
  ArrowDownRightFromCircle: () => CircleArrowOutDownRight,
  ArrowDownRightFromSquare: () => SquareArrowOutDownRight,
  ArrowDownRightSquare: () => SquareArrowDownRight,
  ArrowDownSquare: () => SquareArrowDown,
  ArrowDownToDot: () => ArrowDownToDot,
  ArrowDownToLine: () => ArrowDownToLine,
  ArrowDownUp: () => ArrowDownUp,
  ArrowDownWideNarrow: () => ArrowDownWideNarrow,
  ArrowDownZA: () => ArrowDownZA,
  ArrowDownZa: () => ArrowDownZA,
  ArrowLeft: () => ArrowLeft,
  ArrowLeftCircle: () => CircleArrowLeft,
  ArrowLeftFromLine: () => ArrowLeftFromLine,
  ArrowLeftRight: () => ArrowLeftRight,
  ArrowLeftSquare: () => SquareArrowLeft,
  ArrowLeftToLine: () => ArrowLeftToLine,
  ArrowRight: () => ArrowRight,
  ArrowRightCircle: () => CircleArrowRight,
  ArrowRightFromLine: () => ArrowRightFromLine,
  ArrowRightLeft: () => ArrowRightLeft,
  ArrowRightSquare: () => SquareArrowRight,
  ArrowRightToLine: () => ArrowRightToLine,
  ArrowUp: () => ArrowUp,
  ArrowUp01: () => ArrowUp01,
  ArrowUp10: () => ArrowUp10,
  ArrowUpAZ: () => ArrowUpAZ,
  ArrowUpAz: () => ArrowUpAZ,
  ArrowUpCircle: () => CircleArrowUp,
  ArrowUpDown: () => ArrowUpDown,
  ArrowUpFromDot: () => ArrowUpFromDot,
  ArrowUpFromLine: () => ArrowUpFromLine,
  ArrowUpLeft: () => ArrowUpLeft,
  ArrowUpLeftFromCircle: () => CircleArrowOutUpLeft,
  ArrowUpLeftFromSquare: () => SquareArrowOutUpLeft,
  ArrowUpLeftSquare: () => SquareArrowUpLeft,
  ArrowUpNarrowWide: () => ArrowUpNarrowWide,
  ArrowUpRight: () => ArrowUpRight,
  ArrowUpRightFromCircle: () => CircleArrowOutUpRight,
  ArrowUpRightFromSquare: () => SquareArrowOutUpRight,
  ArrowUpRightSquare: () => SquareArrowUpRight,
  ArrowUpSquare: () => SquareArrowUp,
  ArrowUpToLine: () => ArrowUpToLine,
  ArrowUpWideNarrow: () => ArrowUpWideNarrow,
  ArrowUpZA: () => ArrowUpZA,
  ArrowUpZa: () => ArrowUpZA,
  ArrowsUpFromLine: () => ArrowsUpFromLine,
  Asterisk: () => Asterisk,
  AsteriskSquare: () => SquareAsterisk,
  Astroid: () => Astroid,
  AtSign: () => AtSign,
  Atom: () => Atom,
  AudioLines: () => AudioLines,
  AudioLinesOff: () => AudioLinesOff,
  AudioLinesX: () => AudioLinesX,
  AudioWaveform: () => AudioWaveform,
  Award: () => Award,
  Axe: () => Axe,
  Axis3D: () => Axis3d,
  Axis3d: () => Axis3d,
  Baby: () => Baby,
  Backpack: () => Backpack,
  Badge: () => Badge,
  BadgeAlert: () => BadgeAlert,
  BadgeCent: () => BadgeCent,
  BadgeCheck: () => BadgeCheck,
  BadgeDollarSign: () => BadgeDollarSign,
  BadgeEuro: () => BadgeEuro,
  BadgeHelp: () => BadgeQuestionMark,
  BadgeIndianRupee: () => BadgeIndianRupee,
  BadgeInfo: () => BadgeInfo,
  BadgeJapaneseYen: () => BadgeJapaneseYen,
  BadgeMinus: () => BadgeMinus,
  BadgePercent: () => BadgePercent,
  BadgePlus: () => BadgePlus,
  BadgePoundSterling: () => BadgePoundSterling,
  BadgeQuestionMark: () => BadgeQuestionMark,
  BadgeRussianRuble: () => BadgeRussianRuble,
  BadgeSwissFranc: () => BadgeSwissFranc,
  BadgeTurkishLira: () => BadgeTurkishLira,
  BadgeX: () => BadgeX,
  BaggageClaim: () => BaggageClaim,
  Balloon: () => Balloon,
  Ban: () => Ban,
  Banana: () => Banana,
  Bandage: () => Bandage,
  Banknote: () => Banknote,
  BanknoteArrowDown: () => BanknoteArrowDown,
  BanknoteArrowUp: () => BanknoteArrowUp,
  BanknoteCheck: () => BanknoteCheck,
  BanknoteX: () => BanknoteX,
  BarChart: () => ChartNoAxesColumnIncreasing,
  BarChart2: () => ChartNoAxesColumn,
  BarChart3: () => ChartColumn,
  BarChart4: () => ChartColumnIncreasing,
  BarChartBig: () => ChartColumnBig,
  BarChartHorizontal: () => ChartBar,
  BarChartHorizontalBig: () => ChartBarBig,
  Barcode: () => Barcode,
  Barrel: () => Barrel,
  Baseline: () => Baseline,
  Bath: () => Bath,
  Battery: () => Battery,
  BatteryCharging: () => BatteryCharging,
  BatteryFull: () => BatteryFull,
  BatteryLow: () => BatteryLow,
  BatteryMedium: () => BatteryMedium,
  BatteryPlus: () => BatteryPlus,
  BatteryWarning: () => BatteryWarning,
  Beaker: () => Beaker,
  Bean: () => Bean,
  BeanOff: () => BeanOff,
  Bed: () => Bed,
  BedDouble: () => BedDouble,
  BedSingle: () => BedSingle,
  Beef: () => Beef,
  BeefOff: () => BeefOff,
  Beer: () => Beer,
  BeerOff: () => BeerOff,
  Bell: () => Bell,
  BellCheck: () => BellCheck,
  BellDot: () => BellDot,
  BellElectric: () => BellElectric,
  BellMinus: () => BellMinus,
  BellOff: () => BellOff,
  BellPlus: () => BellPlus,
  BellRing: () => BellRing,
  BetweenHorizonalEnd: () => BetweenHorizontalEnd,
  BetweenHorizonalStart: () => BetweenHorizontalStart,
  BetweenHorizontalEnd: () => BetweenHorizontalEnd,
  BetweenHorizontalStart: () => BetweenHorizontalStart,
  BetweenVerticalEnd: () => BetweenVerticalEnd,
  BetweenVerticalStart: () => BetweenVerticalStart,
  BicepsFlexed: () => BicepsFlexed,
  Bike: () => Bike,
  Binary: () => Binary,
  Binoculars: () => Binoculars,
  Biohazard: () => Biohazard,
  Bird: () => Bird,
  Birdhouse: () => Birdhouse,
  Bitcoin: () => Bitcoin,
  Blend: () => Blend,
  Blender: () => Blender,
  Blinds: () => Blinds,
  Blocks: () => Blocks,
  Bluetooth: () => Bluetooth,
  BluetoothConnected: () => BluetoothConnected,
  BluetoothOff: () => BluetoothOff,
  BluetoothSearching: () => BluetoothSearching,
  Bold: () => Bold,
  Bolt: () => Bolt,
  Bomb: () => Bomb,
  Bone: () => Bone,
  BoneFracture: () => BoneFracture,
  Book: () => Book,
  BookA: () => BookA,
  BookAlert: () => BookAlert,
  BookAudio: () => BookAudio,
  BookBookmark: () => BookBookmark,
  BookCheck: () => BookCheck,
  BookCopy: () => BookCopy,
  BookDashed: () => BookDashed,
  BookDown: () => BookDown,
  BookHeadphones: () => BookHeadphones,
  BookHeart: () => BookHeart,
  BookImage: () => BookImage,
  BookKey: () => BookKey,
  BookLock: () => BookLock,
  BookMarked: () => BookBookmark,
  BookMinus: () => BookMinus,
  BookOpen: () => BookOpen,
  BookOpenCheck: () => BookOpenCheck,
  BookOpenText: () => BookOpenText,
  BookPlus: () => BookPlus,
  BookSearch: () => BookSearch,
  BookTemplate: () => BookDashed,
  BookText: () => BookText,
  BookType: () => BookType,
  BookUp: () => BookUp,
  BookUp2: () => BookUp2,
  BookUser: () => BookUser,
  BookX: () => BookX,
  Bookmark: () => Bookmark,
  BookmarkCheck: () => BookmarkCheck,
  BookmarkMinus: () => BookmarkMinus,
  BookmarkOff: () => BookmarkOff,
  BookmarkPlus: () => BookmarkPlus,
  BookmarkX: () => BookmarkX,
  BoomBox: () => BoomBox,
  Bot: () => Bot,
  BotMessageSquare: () => BotMessageSquare,
  BotOff: () => BotOff,
  BottleWine: () => BottleWine,
  BowArrow: () => BowArrow,
  Box: () => Box,
  BoxSelect: () => SquareDashed,
  Boxes: () => Boxes,
  Braces: () => Braces,
  Brackets: () => Brackets,
  Brain: () => Brain,
  BrainCircuit: () => BrainCircuit,
  BrainCog: () => BrainCog,
  BrickWall: () => BrickWall,
  BrickWallFire: () => BrickWallFire,
  BrickWallShield: () => BrickWallShield,
  Bridge: () => Bridge,
  Briefcase: () => Briefcase,
  BriefcaseBusiness: () => BriefcaseBusiness,
  BriefcaseConveyorBelt: () => BriefcaseConveyorBelt,
  BriefcaseMedical: () => BriefcaseMedical,
  BringToFront: () => BringToFront,
  Broccoli: () => Broccoli,
  Broom: () => Broom,
  BroomSparkles: () => BroomSparkles,
  Brush: () => Brush,
  BrushCleaning: () => BrushCleaning,
  Bubbles: () => Bubbles,
  Bug: () => Bug,
  BugOff: () => BugOff,
  BugPlay: () => BugPlay,
  Building: () => Building,
  Building2: () => BuildingComplex,
  BuildingComplex: () => BuildingComplex,
  BuildingComplexPlus: () => BuildingComplexPlus,
  Bus: () => Bus,
  BusFront: () => BusFront,
  Cable: () => Cable,
  CableCar: () => CableCar,
  Cake: () => Cake,
  CakeSlice: () => CakeSlice,
  Calculator: () => Calculator,
  Calendar: () => Calendar,
  Calendar1: () => Calendar1,
  CalendarArrowDown: () => CalendarArrowDown,
  CalendarArrowUp: () => CalendarArrowUp,
  CalendarCheck: () => CalendarCheck,
  CalendarCheck2: () => CalendarCheck2,
  CalendarChevronsRight: () => CalendarChevronsRight,
  CalendarClock: () => CalendarClock,
  CalendarCog: () => CalendarCog,
  CalendarDays: () => CalendarDays,
  CalendarFold: () => CalendarFold,
  CalendarHeart: () => CalendarHeart,
  CalendarMinus: () => CalendarMinus,
  CalendarMinus2: () => CalendarMinus2,
  CalendarOff: () => CalendarOff,
  CalendarPlus: () => CalendarPlus,
  CalendarPlus2: () => CalendarPlus2,
  CalendarRange: () => CalendarRange,
  CalendarSearch: () => CalendarSearch,
  CalendarSync: () => CalendarSync,
  CalendarX: () => CalendarX,
  CalendarX2: () => CalendarX2,
  Calendars: () => Calendars,
  Camera: () => Camera,
  CameraOff: () => CameraOff,
  Can: () => Can,
  CanSoda: () => CanSoda,
  CandlestickChart: () => ChartCandlestick,
  Candy: () => Candy,
  CandyCane: () => CandyCane,
  CandyOff: () => CandyOff,
  Cannabis: () => Cannabis,
  CannabisOff: () => CannabisOff,
  Captions: () => Captions,
  CaptionsOff: () => CaptionsOff,
  Car: () => Car,
  CarBattery: () => CarBattery,
  CarFront: () => CarFront,
  CarTaxiFront: () => CarTaxiFront,
  Caravan: () => Caravan,
  CardSim: () => CardSim,
  Carrot: () => Carrot,
  Carton: () => Carton,
  CartonOff: () => CartonOff,
  CaseLower: () => CaseLower,
  CaseSensitive: () => CaseSensitive,
  CaseUpper: () => CaseUpper,
  CassetteTape: () => CassetteTape,
  Cast: () => Cast,
  Castle: () => Castle,
  Cat: () => Cat,
  Cctv: () => Cctv,
  CctvOff: () => CctvOff,
  ChartArea: () => ChartArea,
  ChartBar: () => ChartBar,
  ChartBarBig: () => ChartBarBig,
  ChartBarDecreasing: () => ChartBarDecreasing,
  ChartBarIncreasing: () => ChartBarIncreasing,
  ChartBarStacked: () => ChartBarStacked,
  ChartCandlestick: () => ChartCandlestick,
  ChartColumn: () => ChartColumn,
  ChartColumnBig: () => ChartColumnBig,
  ChartColumnDecreasing: () => ChartColumnDecreasing,
  ChartColumnIncreasing: () => ChartColumnIncreasing,
  ChartColumnStacked: () => ChartColumnStacked,
  ChartGantt: () => ChartGantt,
  ChartLine: () => ChartLine,
  ChartNetwork: () => ChartNetwork,
  ChartNoAxesColumn: () => ChartNoAxesColumn,
  ChartNoAxesColumnDecreasing: () => ChartNoAxesColumnDecreasing,
  ChartNoAxesColumnIncreasing: () => ChartNoAxesColumnIncreasing,
  ChartNoAxesCombined: () => ChartNoAxesCombined,
  ChartNoAxesGantt: () => ChartNoAxesGantt,
  ChartPie: () => ChartPie,
  ChartScatter: () => ChartScatter,
  ChartSpline: () => ChartSpline,
  Check: () => Check,
  CheckCheck: () => CheckCheck,
  CheckCircle: () => CircleCheckBig,
  CheckCircle2: () => CircleCheck,
  CheckLine: () => CheckLine,
  CheckSquare: () => SquareCheckBig,
  CheckSquare2: () => SquareCheck,
  ChefHat: () => ChefHat,
  Cherry: () => Cherry,
  ChessBishop: () => ChessBishop,
  ChessKing: () => ChessKing,
  ChessKnight: () => ChessKnight,
  ChessPawn: () => ChessPawn,
  ChessQueen: () => ChessQueen,
  ChessRook: () => ChessRook,
  ChevronDown: () => ChevronDown,
  ChevronDownCircle: () => CircleChevronDown,
  ChevronDownSquare: () => SquareChevronDown,
  ChevronFirst: () => ChevronFirst,
  ChevronLast: () => ChevronLast,
  ChevronLeft: () => ChevronLeft,
  ChevronLeftCircle: () => CircleChevronLeft,
  ChevronLeftSquare: () => SquareChevronLeft,
  ChevronRight: () => ChevronRight,
  ChevronRightCircle: () => CircleChevronRight,
  ChevronRightSquare: () => SquareChevronRight,
  ChevronUp: () => ChevronUp,
  ChevronUpCircle: () => CircleChevronUp,
  ChevronUpSquare: () => SquareChevronUp,
  ChevronsDown: () => ChevronsDown,
  ChevronsDownUp: () => ChevronsDownUp,
  ChevronsLeft: () => ChevronsLeft,
  ChevronsLeftRight: () => ChevronsLeftRight,
  ChevronsLeftRightEllipsis: () => ChevronsLeftRightEllipsis,
  ChevronsRight: () => ChevronsRight,
  ChevronsRightLeft: () => ChevronsRightLeft,
  ChevronsUp: () => ChevronsUp,
  ChevronsUpDown: () => ChevronsUpDown,
  Church: () => Church,
  Cigarette: () => Cigarette,
  CigaretteOff: () => CigaretteOff,
  Circle: () => Circle,
  CircleAlert: () => CircleAlert,
  CircleArrowDown: () => CircleArrowDown,
  CircleArrowLeft: () => CircleArrowLeft,
  CircleArrowOutDownLeft: () => CircleArrowOutDownLeft,
  CircleArrowOutDownRight: () => CircleArrowOutDownRight,
  CircleArrowOutUpLeft: () => CircleArrowOutUpLeft,
  CircleArrowOutUpRight: () => CircleArrowOutUpRight,
  CircleArrowRight: () => CircleArrowRight,
  CircleArrowUp: () => CircleArrowUp,
  CircleCheck: () => CircleCheck,
  CircleCheckBig: () => CircleCheckBig,
  CircleChevronDown: () => CircleChevronDown,
  CircleChevronLeft: () => CircleChevronLeft,
  CircleChevronRight: () => CircleChevronRight,
  CircleChevronUp: () => CircleChevronUp,
  CircleDashed: () => CircleDashed,
  CircleDashedCheck: () => CircleDashedCheck,
  CircleDivide: () => CircleDivide,
  CircleDollarSign: () => CircleDollarSign,
  CircleDot: () => CircleDot,
  CircleDotDashed: () => CircleDotDashed,
  CircleEllipsis: () => CircleEllipsis,
  CircleEqual: () => CircleEqual,
  CircleEuro: () => CircleEuro,
  CircleFadingArrowUp: () => CircleFadingArrowUp,
  CircleFadingPlus: () => CircleFadingPlus,
  CircleGauge: () => CircleGauge,
  CircleHelp: () => CircleQuestionMark,
  CircleMinus: () => CircleMinus,
  CircleOff: () => CircleOff,
  CircleParking: () => CircleParking,
  CircleParkingOff: () => CircleParkingOff,
  CirclePause: () => CirclePause,
  CirclePercent: () => CirclePercent,
  CirclePile: () => CirclePile,
  CirclePlay: () => CirclePlay,
  CirclePlus: () => CirclePlus,
  CirclePoundSterling: () => CirclePoundSterling,
  CirclePower: () => CirclePower,
  CircleQuestionMark: () => CircleQuestionMark,
  CircleSlash: () => CircleSlash,
  CircleSlash2: () => CircleSlash2,
  CircleSlashed: () => CircleSlash2,
  CircleSmall: () => CircleSmall,
  CircleStar: () => CircleStar,
  CircleStop: () => CircleStop,
  CircleUser: () => CircleUser,
  CircleUserRound: () => CircleUserRound,
  CircleX: () => CircleX,
  CircuitBoard: () => CircuitBoard,
  Citrus: () => Citrus,
  Clapperboard: () => Clapperboard,
  ClefAlto: () => ClefAlto,
  ClefBass: () => ClefBass,
  ClefTreble: () => ClefTreble,
  Clipboard: () => Clipboard,
  ClipboardCheck: () => ClipboardCheck,
  ClipboardClock: () => ClipboardClock,
  ClipboardCopy: () => ClipboardCopy,
  ClipboardEdit: () => ClipboardPen,
  ClipboardList: () => ClipboardList,
  ClipboardMinus: () => ClipboardMinus,
  ClipboardPaste: () => ClipboardPaste,
  ClipboardPen: () => ClipboardPen,
  ClipboardPenLine: () => ClipboardPenLine,
  ClipboardPlus: () => ClipboardPlus,
  ClipboardSignature: () => ClipboardPenLine,
  ClipboardType: () => ClipboardType,
  ClipboardX: () => ClipboardX,
  Clock: () => Clock,
  Clock1: () => Clock1,
  Clock10: () => Clock10,
  Clock11: () => Clock11,
  Clock12: () => Clock12,
  Clock2: () => Clock2,
  Clock3: () => Clock3,
  Clock4: () => Clock4,
  Clock5: () => Clock5,
  Clock6: () => Clock6,
  Clock7: () => Clock7,
  Clock8: () => Clock8,
  Clock9: () => Clock9,
  ClockAlert: () => ClockAlert,
  ClockArrowDown: () => ClockArrowDown,
  ClockArrowLeft: () => ClockArrowLeft,
  ClockArrowRight: () => ClockArrowRight,
  ClockArrowUp: () => ClockArrowUp,
  ClockCheck: () => ClockCheck,
  ClockFading: () => ClockFading,
  ClockPlus: () => ClockPlus,
  ClosedCaption: () => ClosedCaption,
  Cloud: () => Cloud,
  CloudAlert: () => CloudAlert,
  CloudBackup: () => CloudBackup,
  CloudCheck: () => CloudCheck,
  CloudCog: () => CloudCog,
  CloudDownload: () => CloudDownload,
  CloudDrizzle: () => CloudDrizzle,
  CloudFog: () => CloudFog,
  CloudHail: () => CloudHail,
  CloudLightning: () => CloudLightning,
  CloudMoon: () => CloudMoon,
  CloudMoonRain: () => CloudMoonRain,
  CloudOff: () => CloudOff,
  CloudRain: () => CloudRain,
  CloudRainWind: () => CloudRainWind,
  CloudSnow: () => CloudSnow,
  CloudSun: () => CloudSun,
  CloudSunRain: () => CloudSunRain,
  CloudSync: () => CloudSync,
  CloudUpload: () => CloudUpload,
  Cloudy: () => Cloudy,
  Clover: () => Clover,
  Club: () => Club,
  Code: () => Code,
  Code2: () => CodeXml,
  CodeSquare: () => SquareCode,
  CodeXml: () => CodeXml,
  Coffee: () => Coffee,
  Cog: () => Cog,
  Coins: () => Coins,
  Columns: () => Columns2,
  Columns2: () => Columns2,
  Columns3: () => Columns3,
  Columns3Cog: () => Columns3Cog,
  Columns4: () => Columns4,
  ColumnsSettings: () => Columns3Cog,
  Combine: () => Combine,
  Command: () => Command,
  Compass: () => Compass,
  Component: () => Component,
  Computer: () => Computer,
  ConciergeBell: () => ConciergeBell,
  Cone: () => Cone,
  Construction: () => Construction,
  Contact: () => Contact,
  Contact2: () => ContactRound,
  ContactRound: () => ContactRound,
  Container: () => Container,
  Contrast: () => Contrast,
  Cookie: () => Cookie,
  CookingPot: () => CookingPot,
  Copy: () => Copy,
  CopyCheck: () => CopyCheck,
  CopyMinus: () => CopyMinus,
  CopyPlus: () => CopyPlus,
  CopySlash: () => CopySlash,
  CopyX: () => CopyX,
  Copyleft: () => Copyleft,
  Copyright: () => Copyright,
  CornerDownLeft: () => CornerDownLeft,
  CornerDownRight: () => CornerDownRight,
  CornerLeftDown: () => CornerLeftDown,
  CornerLeftUp: () => CornerLeftUp,
  CornerRightDown: () => CornerRightDown,
  CornerRightUp: () => CornerRightUp,
  CornerUpLeft: () => CornerUpLeft,
  CornerUpRight: () => CornerUpRight,
  Cpu: () => Cpu,
  CreativeCommons: () => CreativeCommons,
  CreditCard: () => CreditCard,
  CreditCardCheck: () => CreditCardCheck,
  CreditCardMinus: () => CreditCardMinus,
  CreditCardPlus: () => CreditCardPlus,
  CreditCardReader: () => CreditCardReader,
  CreditCardX: () => CreditCardX,
  Croissant: () => Croissant,
  Crop: () => Crop,
  Cross: () => Cross,
  Crosshair: () => Crosshair,
  Crown: () => Crown,
  Cuboid: () => Cuboid,
  CupSoda: () => CupSoda,
  Cupcake: () => Cupcake,
  CurlyBraces: () => Braces,
  Currency: () => Currency,
  Cylinder: () => Cylinder,
  Dam: () => Dam,
  Database: () => Database,
  DatabaseArrowDown: () => DatabaseArrowDown,
  DatabaseArrowUp: () => DatabaseArrowUp,
  DatabaseBackup: () => DatabaseBackup,
  DatabaseCheck: () => DatabaseCheck,
  DatabaseMinus: () => DatabaseMinus,
  DatabasePlus: () => DatabasePlus,
  DatabaseSearch: () => DatabaseSearch,
  DatabaseX: () => DatabaseX,
  DatabaseZap: () => DatabaseZap,
  DecimalsArrowLeft: () => DecimalsArrowLeft,
  DecimalsArrowRight: () => DecimalsArrowRight,
  Delete: () => Delete,
  Dessert: () => Dessert,
  Diameter: () => Diameter,
  Diamond: () => Diamond,
  DiamondMinus: () => DiamondMinus,
  DiamondPercent: () => DiamondPercent,
  DiamondPlus: () => DiamondPlus,
  Dice1: () => Dice1,
  Dice2: () => Dice2,
  Dice3: () => Dice3,
  Dice4: () => Dice4,
  Dice5: () => Dice5,
  Dice6: () => Dice6,
  Dices: () => Dices,
  Diff: () => Diff,
  Disc: () => Disc,
  Disc2: () => Disc2,
  Disc3: () => Disc3,
  DiscAlbum: () => DiscAlbum,
  Divide: () => Divide,
  DivideCircle: () => CircleDivide,
  DivideSquare: () => SquareDivide,
  Dna: () => Dna,
  DnaOff: () => DnaOff,
  Dock: () => Dock,
  Dog: () => Dog,
  DollarSign: () => DollarSign,
  Dome: () => Dome,
  Donut: () => Donut,
  DoorClosed: () => DoorClosed,
  DoorClosedLocked: () => DoorClosedLocked,
  DoorClosedPackage: () => DoorClosedPackage,
  DoorOpen: () => DoorOpen,
  DoorStairwell: () => DoorStairwell,
  Dot: () => Dot,
  DotSquare: () => SquareDot,
  Download: () => Download,
  DownloadCloud: () => CloudDownload,
  DraftingCompass: () => DraftingCompass,
  Drama: () => Drama,
  Drill: () => Drill,
  Drone: () => Drone,
  Droplet: () => Droplet,
  DropletOff: () => DropletOff,
  Droplets: () => Droplets,
  Drum: () => Drum,
  Drumstick: () => Drumstick,
  Dumbbell: () => Dumbbell,
  Ear: () => Ear,
  EarOff: () => EarOff,
  Earth: () => Earth,
  EarthLock: () => EarthLock,
  Eclipse: () => Eclipse,
  Edit: () => SquarePen,
  Edit2: () => Pen,
  Edit3: () => PenLine,
  Egg: () => Egg,
  EggFried: () => EggFried,
  EggOff: () => EggOff,
  Eject: () => Eject,
  Ellipse: () => Ellipse,
  Ellipsis: () => Ellipsis,
  EllipsisVertical: () => EllipsisVertical,
  Engine: () => Engine,
  Equal: () => Equal,
  EqualApproximately: () => EqualApproximately,
  EqualApproximatelyNot: () => EqualApproximatelyNot,
  EqualNot: () => EqualNot,
  EqualSquare: () => SquareEqual,
  Eraser: () => Eraser,
  EthernetPort: () => EthernetPort,
  Euro: () => Euro,
  EvCharger: () => EvCharger,
  Expand: () => Expand,
  ExternalLink: () => ExternalLink,
  Eye: () => Eye,
  EyeClosed: () => EyeClosed,
  EyeDashed: () => EyeDashed,
  EyeOff: () => EyeOff,
  FaceAngry: () => FaceAngry,
  FaceExpressionless: () => FaceExpressionless,
  FaceGrinning: () => FaceGrinning,
  FaceNeutral: () => FaceNeutral,
  FaceSlightlyFrowning: () => FaceSlightlyFrowning,
  FaceSlightlySmiling: () => FaceSlightlySmiling,
  FaceSlightlySmilingPlus: () => FaceSlightlySmilingPlus,
  Factory: () => Factory,
  Fan: () => Fan,
  FastForward: () => FastForward,
  Faucet: () => Faucet,
  Feather: () => Feather,
  Fence: () => Fence,
  FerrisWheel: () => FerrisWheel,
  File: () => File,
  FileArchive: () => FileArchive,
  FileAudio: () => FileHeadphone,
  FileAudio2: () => FileHeadphone,
  FileAxis3D: () => FileAxis3d,
  FileAxis3d: () => FileAxis3d,
  FileBadge: () => FileBadge,
  FileBadge2: () => FileBadge,
  FileBarChart: () => FileChartColumnIncreasing,
  FileBarChart2: () => FileChartColumn,
  FileBox: () => FileBox,
  FileBraces: () => FileBraces,
  FileBracesCorner: () => FileBracesCorner,
  FileChartColumn: () => FileChartColumn,
  FileChartColumnIncreasing: () => FileChartColumnIncreasing,
  FileChartLine: () => FileChartLine,
  FileChartPie: () => FileChartPie,
  FileCheck: () => FileCheck,
  FileCheck2: () => FileCheckCorner,
  FileCheckCorner: () => FileCheckCorner,
  FileClock: () => FileClock,
  FileCode: () => FileCode,
  FileCode2: () => FileCodeCorner,
  FileCodeCorner: () => FileCodeCorner,
  FileCog: () => FileCog,
  FileCog2: () => FileCog,
  FileDiff: () => FileDiff,
  FileDigit: () => FileDigit,
  FileDown: () => FileDown,
  FileEdit: () => FilePen,
  FileExclamationPoint: () => FileExclamationPoint,
  FileHeadphone: () => FileHeadphone,
  FileHeart: () => FileHeart,
  FileImage: () => FileImage,
  FileInput: () => FileInput,
  FileJson: () => FileBraces,
  FileJson2: () => FileBracesCorner,
  FileKey: () => FileKey,
  FileKey2: () => FileKey,
  FileLineChart: () => FileChartLine,
  FileLock: () => FileLock,
  FileLock2: () => FileLock,
  FileMinus: () => FileMinus,
  FileMinus2: () => FileMinusCorner,
  FileMinusCorner: () => FileMinusCorner,
  FileMusic: () => FileMusic,
  FileOutput: () => FileOutput,
  FilePen: () => FilePen,
  FilePenLine: () => FilePenLine,
  FilePieChart: () => FileChartPie,
  FilePlay: () => FilePlay,
  FilePlus: () => FilePlus,
  FilePlus2: () => FilePlusCorner,
  FilePlusCorner: () => FilePlusCorner,
  FileQuestion: () => FileQuestionMark,
  FileQuestionMark: () => FileQuestionMark,
  FileScan: () => FileScan,
  FileSearch: () => FileSearch,
  FileSearch2: () => FileSearchCorner,
  FileSearchCorner: () => FileSearchCorner,
  FileSignal: () => FileSignal,
  FileSignature: () => FilePenLine,
  FileSliders: () => FileSliders,
  FileSpreadsheet: () => FileSpreadsheet,
  FileStack: () => FileStack,
  FileSymlink: () => FileSymlink,
  FileTerminal: () => FileTerminal,
  FileText: () => FileText,
  FileType: () => FileType,
  FileType2: () => FileTypeCorner,
  FileTypeCorner: () => FileTypeCorner,
  FileUp: () => FileUp,
  FileUser: () => FileUser,
  FileVideo: () => FilePlay,
  FileVideo2: () => FileVideoCamera,
  FileVideoCamera: () => FileVideoCamera,
  FileVolume: () => FileVolume,
  FileVolume2: () => FileSignal,
  FileWarning: () => FileExclamationPoint,
  FileX: () => FileX,
  FileX2: () => FileXCorner,
  FileXCorner: () => FileXCorner,
  Files: () => Files,
  Film: () => Film,
  Filter: () => Funnel,
  FilterX: () => FunnelX,
  Fingerprint: () => FingerprintPattern,
  FingerprintPattern: () => FingerprintPattern,
  FireExtinguisher: () => FireExtinguisher,
  Fish: () => Fish,
  FishOff: () => FishOff,
  FishSymbol: () => FishSymbol,
  FishingHook: () => FishingHook,
  FishingRod: () => FishingRod,
  Flag: () => Flag,
  FlagOff: () => FlagOff,
  FlagTriangleLeft: () => FlagTriangleLeft,
  FlagTriangleRight: () => FlagTriangleRight,
  Flame: () => Flame,
  FlameKindling: () => FlameKindling,
  Flashlight: () => Flashlight,
  FlashlightOff: () => FlashlightOff,
  FlaskConical: () => FlaskConical,
  FlaskConicalOff: () => FlaskConicalOff,
  FlaskRound: () => FlaskRound,
  FlipHorizontal: () => SquareCenterlineDashedHorizontal,
  FlipHorizontal2: () => TrianglesCenterlineDashedHorizontal,
  FlipVertical: () => SquareCenterlineDashedVertical,
  FlipVertical2: () => TrianglesCenterlineDashedVertical,
  Flower: () => Flower,
  Flower2: () => Flower2,
  Focus: () => Focus,
  FoldHorizontal: () => FoldHorizontal,
  FoldVertical: () => FoldVertical,
  Folder: () => Folder,
  FolderArchive: () => FolderArchive,
  FolderBookmark: () => FolderBookmark,
  FolderCheck: () => FolderCheck,
  FolderClock: () => FolderClock,
  FolderClosed: () => FolderClosed,
  FolderCode: () => FolderCode,
  FolderCog: () => FolderCog,
  FolderCog2: () => FolderCog,
  FolderDot: () => FolderDot,
  FolderDown: () => FolderDown,
  FolderEdit: () => FolderPen,
  FolderGit: () => FolderGit,
  FolderGit2: () => FolderGit2,
  FolderHeart: () => FolderHeart,
  FolderInput: () => FolderInput,
  FolderKanban: () => FolderKanban,
  FolderKey: () => FolderKey,
  FolderLock: () => FolderLock,
  FolderMinus: () => FolderMinus,
  FolderOpen: () => FolderOpen,
  FolderOpenDot: () => FolderOpenDot,
  FolderOutput: () => FolderOutput,
  FolderPen: () => FolderPen,
  FolderPlus: () => FolderPlus,
  FolderRoot: () => FolderRoot,
  FolderSearch: () => FolderSearch,
  FolderSearch2: () => FolderSearch2,
  FolderSymlink: () => FolderSymlink,
  FolderSync: () => FolderSync,
  FolderTree: () => FolderTree,
  FolderUp: () => FolderUp,
  FolderX: () => FolderX,
  Folders: () => Folders,
  Footprints: () => Footprints,
  ForkKnife: () => Utensils,
  ForkKnifeCrossed: () => UtensilsCrossed,
  Forklift: () => Forklift,
  Form: () => Form,
  FormInput: () => RectangleEllipsis,
  Forward: () => Forward,
  Frame: () => Frame,
  Frown: () => FaceSlightlyFrowning,
  Fuel: () => Fuel,
  Fullscreen: () => Fullscreen,
  FunctionSquare: () => SquareFunction,
  Funnel: () => Funnel,
  FunnelPlus: () => FunnelPlus,
  FunnelX: () => FunnelX,
  Galaxy: () => Galaxy,
  GalleryHorizontal: () => GalleryHorizontal,
  GalleryHorizontalEnd: () => GalleryHorizontalEnd,
  GalleryThumbnails: () => GalleryThumbnails,
  GalleryVertical: () => GalleryVertical,
  GalleryVerticalEnd: () => GalleryVerticalEnd,
  Gamepad: () => Gamepad,
  Gamepad2: () => Gamepad2,
  GamepadDirectional: () => GamepadDirectional,
  GanttChart: () => ChartNoAxesGantt,
  GanttChartSquare: () => SquareChartGantt,
  GapHorizontal: () => GapHorizontal,
  GapVertical: () => GapVertical,
  Gauge: () => Gauge,
  GaugeCircle: () => CircleGauge,
  Gavel: () => Gavel,
  Gem: () => Gem,
  GeorgianLari: () => GeorgianLari,
  Germ: () => Germ,
  GermOff: () => GermOff,
  Ghost: () => Ghost,
  Gift: () => Gift,
  GitBranch: () => GitBranch,
  GitBranchMinus: () => GitBranchMinus,
  GitBranchPlus: () => GitBranchPlus,
  GitCommit: () => GitCommitHorizontal,
  GitCommitHorizontal: () => GitCommitHorizontal,
  GitCommitVertical: () => GitCommitVertical,
  GitCompare: () => GitCompare,
  GitCompareArrows: () => GitCompareArrows,
  GitFork: () => GitFork,
  GitGraph: () => GitGraph,
  GitMerge: () => GitMerge,
  GitMergeConflict: () => GitMergeConflict,
  GitPullRequest: () => GitPullRequest,
  GitPullRequestArrow: () => GitPullRequestArrow,
  GitPullRequestClosed: () => GitPullRequestClosed,
  GitPullRequestCreate: () => GitPullRequestCreate,
  GitPullRequestCreateArrow: () => GitPullRequestCreateArrow,
  GitPullRequestDraft: () => GitPullRequestDraft,
  GlassWater: () => GlassWater,
  Glasses: () => Glasses,
  Globe: () => Globe,
  Globe2: () => Earth,
  GlobeCheck: () => GlobeCheck,
  GlobeCode: () => GlobeCode,
  GlobeLock: () => GlobeLock,
  GlobeOff: () => GlobeOff,
  GlobeX: () => GlobeX,
  Goal: () => Goal,
  Gpu: () => Gpu,
  Grab: () => HandGrab,
  GraduationCap: () => GraduationCap,
  Grape: () => Grape,
  Grid: () => Grid3x3,
  Grid2X2: () => Grid2x2,
  Grid2X2Check: () => Grid2x2Check,
  Grid2X2Plus: () => Grid2x2Plus,
  Grid2X2X: () => Grid2x2X,
  Grid2x2: () => Grid2x2,
  Grid2x2Check: () => Grid2x2Check,
  Grid2x2Plus: () => Grid2x2Plus,
  Grid2x2X: () => Grid2x2X,
  Grid3X3: () => Grid3x3,
  Grid3x2: () => Grid3x2,
  Grid3x3: () => Grid3x3,
  Grip: () => Grip,
  GripHorizontal: () => GripHorizontal,
  GripVertical: () => GripVertical,
  Group: () => Group,
  Guitar: () => Guitar,
  Ham: () => Ham,
  Hamburger: () => Hamburger,
  Hammer: () => Hammer,
  Hand: () => Hand,
  HandCoins: () => HandCoins,
  HandFist: () => HandFist,
  HandGrab: () => HandGrab,
  HandHeart: () => HandHeart,
  HandHelping: () => HandHelping,
  HandMetal: () => HandMetal,
  HandPlatter: () => HandPlatter,
  Handbag: () => Handbag,
  Handshake: () => Handshake,
  HardDrive: () => HardDrive,
  HardDriveDownload: () => HardDriveDownload,
  HardDriveUpload: () => HardDriveUpload,
  HardHat: () => HardHat,
  Hash: () => Hash,
  HatGlasses: () => HatGlasses,
  Haze: () => Haze,
  Hd: () => Hd,
  HdmiPort: () => HdmiPort,
  Heading: () => Heading,
  Heading1: () => Heading1,
  Heading2: () => Heading2,
  Heading3: () => Heading3,
  Heading4: () => Heading4,
  Heading5: () => Heading5,
  Heading6: () => Heading6,
  HeadphoneOff: () => HeadphoneOff,
  Headphones: () => Headphones,
  Headset: () => Headset,
  Heart: () => Heart,
  HeartCrack: () => HeartCrack,
  HeartHandshake: () => HeartHandshake,
  HeartMinus: () => HeartMinus,
  HeartOff: () => HeartOff,
  HeartPlus: () => HeartPlus,
  HeartPulse: () => HeartPulse,
  HeartX: () => HeartX,
  Heater: () => Heater,
  Helicopter: () => Helicopter,
  HelpCircle: () => CircleQuestionMark,
  HelpingHand: () => HandHelping,
  Hexagon: () => Hexagon,
  Highlighter: () => Highlighter,
  History: () => RotateCcwClock,
  Home: () => House,
  Hop: () => Hop,
  HopOff: () => HopOff,
  Hospital: () => Hospital,
  Hotel: () => Hotel,
  Hourglass: () => Hourglass,
  HourglassCog: () => HourglassCog,
  House: () => House,
  HouseHeart: () => HouseHeart,
  HousePlug: () => HousePlug,
  HousePlus: () => HousePlus,
  HouseWifi: () => HouseWifi,
  Houses: () => Houses,
  IceCream: () => IceCreamCone,
  IceCream2: () => IceCreamBowl,
  IceCreamBowl: () => IceCreamBowl,
  IceCreamCone: () => IceCreamCone,
  IdCard: () => IdCard,
  IdCardLanyard: () => IdCardLanyard,
  Image: () => Image,
  ImageDown: () => ImageDown,
  ImageMinus: () => ImageMinus,
  ImageOff: () => ImageOff,
  ImagePlay: () => ImagePlay,
  ImagePlus: () => ImagePlus,
  ImageUp: () => ImageUp,
  ImageUpscale: () => ImageUpscale,
  Images: () => Images,
  Import: () => Import,
  Inbox: () => Inbox,
  Indent: () => ListIndentIncrease,
  IndentDecrease: () => ListIndentDecrease,
  IndentIncrease: () => ListIndentIncrease,
  IndianRupee: () => IndianRupee,
  Infinity: () => Infinity,
  Info: () => Info,
  Inspect: () => SquareMousePointer,
  InspectionPanel: () => InspectionPanel,
  Italic: () => Italic,
  IterationCcw: () => IterationCcw,
  IterationCw: () => IterationCw,
  IvBag: () => IvBag,
  JapaneseYen: () => JapaneseYen,
  Joystick: () => Joystick,
  Kanban: () => Kanban,
  KanbanSquare: () => SquareKanban,
  KanbanSquareDashed: () => SquareDashedKanban,
  Kayak: () => Kayak,
  Key: () => Key,
  KeyRound: () => KeyRound,
  KeySquare: () => KeySquare,
  Keyboard: () => Keyboard,
  KeyboardMusic: () => KeyboardMusic,
  KeyboardOff: () => KeyboardOff,
  Lambda: () => Lambda,
  Lamp: () => Lamp,
  LampCeiling: () => LampCeiling,
  LampDesk: () => LampDesk,
  LampFloor: () => LampFloor,
  LampWallDown: () => LampWallDown,
  LampWallUp: () => LampWallUp,
  LandPlot: () => LandPlot,
  Landmark: () => Landmark,
  Languages: () => Languages,
  Laptop: () => Laptop,
  Laptop2: () => LaptopMinimal,
  LaptopMinimal: () => LaptopMinimal,
  LaptopMinimalCheck: () => LaptopMinimalCheck,
  Lasso: () => Lasso,
  LassoSelect: () => LassoSelect,
  Laugh: () => FaceGrinning,
  LayerArrowDown: () => LayerArrowDown,
  LayerArrowUp: () => LayerArrowUp,
  Layers: () => Layers,
  Layers2: () => Layers2,
  Layers3: () => Layers,
  LayersArrowDown: () => LayersArrowDown,
  LayersArrowUp: () => LayersArrowUp,
  LayersMinus: () => LayersMinus,
  LayersPlus: () => LayersPlus,
  Layout: () => PanelsTopLeft,
  LayoutArrowDown: () => LayoutArrowDown,
  LayoutArrowRight: () => LayoutArrowRight,
  LayoutDashboard: () => LayoutDashboard,
  LayoutFreeform: () => LayoutFreeform,
  LayoutGrid: () => LayoutGrid,
  LayoutList: () => LayoutList,
  LayoutPanelLeft: () => LayoutPanelLeft,
  LayoutPanelTop: () => LayoutPanelTop,
  LayoutTemplate: () => LayoutTemplate,
  Leaf: () => Leaf,
  LeafyGreen: () => LeafyGreen,
  Lectern: () => Lectern,
  LensConcave: () => LensConcave,
  LensConvex: () => LensConvex,
  LetterText: () => TextInitial,
  Library: () => Library,
  LibraryBig: () => LibraryBig,
  LibrarySquare: () => SquareLibrary,
  LifeBuoy: () => LifeBuoy,
  Ligature: () => Ligature,
  Lightbulb: () => Lightbulb,
  LightbulbOff: () => LightbulbOff,
  Lighthouse: () => Lighthouse,
  LineChart: () => ChartLine,
  LineDotRightHorizontal: () => LineDotRightHorizontal,
  LineSquiggle: () => LineSquiggle,
  LineStyle: () => LineStyle,
  Link: () => Link,
  Link2: () => Link2,
  Link2Off: () => Link2Off,
  List: () => List,
  ListCheck: () => ListCheck,
  ListChecks: () => ListChecks,
  ListChevronsDownUp: () => ListChevronsDownUp,
  ListChevronsUpDown: () => ListChevronsUpDown,
  ListClock: () => ListClock,
  ListCollapse: () => ListCollapse,
  ListEnd: () => ListEnd,
  ListFilter: () => ListFilter,
  ListFilterPlus: () => ListFilterPlus,
  ListIndentDecrease: () => ListIndentDecrease,
  ListIndentIncrease: () => ListIndentIncrease,
  ListMinus: () => ListMinus,
  ListMusic: () => ListMusic,
  ListOrdered: () => ListOrdered,
  ListPlus: () => ListPlus,
  ListRestart: () => ListRestart,
  ListSortAscending: () => ListSortAscending,
  ListSortDescending: () => ListSortDescending,
  ListStart: () => ListStart,
  ListTodo: () => ListTodo,
  ListTree: () => ListTree,
  ListVideo: () => ListVideo,
  ListX: () => ListX,
  Loader: () => Loader,
  Loader2: () => LoaderCircle,
  LoaderCircle: () => LoaderCircle,
  LoaderPinwheel: () => LoaderPinwheel,
  Locate: () => Locate,
  LocateFixed: () => LocateFixed,
  LocateOff: () => LocateOff,
  LocationEdit: () => MapPinPen,
  Lock: () => Lock,
  LockKeyhole: () => LockKeyhole,
  LockKeyholeOpen: () => LockKeyholeOpen,
  LockOpen: () => LockOpen,
  LogIn: () => LogIn,
  LogOut: () => LogOut,
  Logs: () => Logs,
  Lollipop: () => Lollipop,
  Luggage: () => Luggage,
  MSquare: () => SquareM,
  Magnet: () => Magnet,
  Mail: () => Mail,
  MailBadge: () => MailBadge,
  MailCheck: () => MailCheck,
  MailClock: () => MailClock,
  MailMinus: () => MailMinus,
  MailOpen: () => MailOpen,
  MailPen: () => MailPen,
  MailPlus: () => MailPlus,
  MailQuestion: () => MailQuestionMark,
  MailQuestionMark: () => MailQuestionMark,
  MailSearch: () => MailSearch,
  MailWarning: () => MailWarning,
  MailX: () => MailX,
  Mailbox: () => Mailbox,
  Mails: () => Mails,
  Map: () => Map2,
  MapMinus: () => MapMinus,
  MapPin: () => MapPin,
  MapPinCheck: () => MapPinCheck,
  MapPinCheckInside: () => MapPinCheckInside,
  MapPinHouse: () => MapPinHouse,
  MapPinMinus: () => MapPinMinus,
  MapPinMinusInside: () => MapPinMinusInside,
  MapPinOff: () => MapPinOff,
  MapPinPen: () => MapPinPen,
  MapPinPlus: () => MapPinPlus,
  MapPinPlusInside: () => MapPinPlusInside,
  MapPinSearch: () => MapPinSearch,
  MapPinX: () => MapPinX,
  MapPinXInside: () => MapPinXInside,
  MapPinned: () => MapPinned,
  MapPlus: () => MapPlus,
  Mars: () => Mars,
  MarsStroke: () => MarsStroke,
  Martini: () => Martini,
  Maximize: () => Maximize,
  Maximize2: () => Maximize2,
  Medal: () => Medal,
  Megaphone: () => Megaphone,
  MegaphoneOff: () => MegaphoneOff,
  Meh: () => FaceNeutral,
  MemoryStick: () => MemoryStick,
  Menu: () => Menu,
  MenuSquare: () => SquareMenu,
  Merge: () => Merge,
  MessageCircle: () => MessageCircle,
  MessageCircleCheck: () => MessageCircleCheck,
  MessageCircleCode: () => MessageCircleCode,
  MessageCircleDashed: () => MessageCircleDashed,
  MessageCircleDashedCheck: () => MessageCircleDashedCheck,
  MessageCircleHeart: () => MessageCircleHeart,
  MessageCircleMore: () => MessageCircleMore,
  MessageCircleOff: () => MessageCircleOff,
  MessageCirclePlus: () => MessageCirclePlus,
  MessageCircleQuestion: () => MessageCircleQuestionMark,
  MessageCircleQuestionMark: () => MessageCircleQuestionMark,
  MessageCircleReply: () => MessageCircleReply,
  MessageCircleWarning: () => MessageCircleWarning,
  MessageCircleX: () => MessageCircleX,
  MessageSquare: () => MessageSquare,
  MessageSquareCheck: () => MessageSquareCheck,
  MessageSquareCode: () => MessageSquareCode,
  MessageSquareDashed: () => MessageSquareDashed,
  MessageSquareDiff: () => MessageSquareDiff,
  MessageSquareDot: () => MessageSquareDot,
  MessageSquareHeart: () => MessageSquareHeart,
  MessageSquareLock: () => MessageSquareLock,
  MessageSquareMore: () => MessageSquareMore,
  MessageSquareOff: () => MessageSquareOff,
  MessageSquarePlus: () => MessageSquarePlus,
  MessageSquareQuote: () => MessageSquareQuote,
  MessageSquareReply: () => MessageSquareReply,
  MessageSquareShare: () => MessageSquareShare,
  MessageSquareText: () => MessageSquareText,
  MessageSquareWarning: () => MessageSquareWarning,
  MessageSquareX: () => MessageSquareX,
  MessagesCircle: () => MessagesCircle,
  MessagesSquare: () => MessagesSquare,
  Metronome: () => Metronome,
  Mic: () => Mic,
  Mic2: () => MicVocal,
  MicAudioLines: () => MicAudioLines,
  MicOff: () => MicOff,
  MicSignal: () => MicSignal,
  MicVocal: () => MicVocal,
  Microchip: () => Microchip,
  Microscope: () => Microscope,
  Microwave: () => Microwave,
  MidiPort: () => MidiPort,
  Milestone: () => Milestone,
  Milk: () => Milk,
  MilkOff: () => MilkOff,
  Minimize: () => Minimize,
  Minimize2: () => Minimize2,
  Minus: () => Minus,
  MinusCircle: () => CircleMinus,
  MinusSquare: () => SquareMinus,
  MirrorRectangular: () => MirrorRectangular,
  MirrorRound: () => MirrorRound,
  Monitor: () => Monitor,
  MonitorCheck: () => MonitorCheck,
  MonitorCloud: () => MonitorCloud,
  MonitorCog: () => MonitorCog,
  MonitorDot: () => MonitorDot,
  MonitorDown: () => MonitorDown,
  MonitorOff: () => MonitorOff,
  MonitorPause: () => MonitorPause,
  MonitorPc: () => MonitorPc,
  MonitorPlay: () => MonitorPlay,
  MonitorSmartphone: () => MonitorSmartphone,
  MonitorSpeaker: () => MonitorSpeaker,
  MonitorStop: () => MonitorStop,
  MonitorUp: () => MonitorUp,
  MonitorX: () => MonitorX,
  Moon: () => Moon,
  MoonStar: () => MoonStar,
  Mop: () => Mop,
  MopSparkles: () => MopSparkles,
  MoreHorizontal: () => Ellipsis,
  MoreVertical: () => EllipsisVertical,
  Mosque: () => Mosque,
  Motorbike: () => Motorbike,
  Mountain: () => Mountain,
  MountainSnow: () => MountainSnow,
  Mouse: () => Mouse,
  MouseLeft: () => MouseLeft,
  MouseOff: () => MouseOff,
  MousePointer: () => MousePointer,
  MousePointer2: () => MousePointer2,
  MousePointer2Off: () => MousePointer2Off,
  MousePointerBan: () => MousePointerBan,
  MousePointerClick: () => MousePointerClick,
  MousePointerSquareDashed: () => SquareDashedMousePointer,
  MouseRight: () => MouseRight,
  Mouth: () => Mouth,
  MouthOff: () => MouthOff,
  Move: () => Move,
  Move3D: () => Move3d,
  Move3d: () => Move3d,
  MoveDiagonal: () => MoveDiagonal,
  MoveDiagonal2: () => MoveDiagonal2,
  MoveDown: () => MoveDown,
  MoveDownLeft: () => MoveDownLeft,
  MoveDownRight: () => MoveDownRight,
  MoveHorizontal: () => MoveHorizontal,
  MoveLeft: () => MoveLeft,
  MoveRight: () => MoveRight,
  MoveUp: () => MoveUp,
  MoveUpLeft: () => MoveUpLeft,
  MoveUpRight: () => MoveUpRight,
  MoveVertical: () => MoveVertical,
  Music: () => Music,
  Music2: () => Music2,
  Music3: () => Music3,
  Music4: () => Music4,
  Navigation: () => Navigation,
  Navigation2: () => Navigation2,
  Navigation2Off: () => Navigation2Off,
  NavigationOff: () => NavigationOff,
  NepaliRupee: () => NepaliRupee,
  Network: () => Network,
  Newspaper: () => Newspaper,
  Nfc: () => Nfc,
  NonBinary: () => NonBinary,
  Notebook: () => Notebook,
  NotebookDot: () => NotebookDot,
  NotebookPen: () => NotebookPen,
  NotebookTabs: () => NotebookTabs,
  NotebookText: () => NotebookText,
  NotepadText: () => NotepadText,
  NotepadTextDashed: () => NotepadTextDashed,
  Nut: () => Nut,
  NutOff: () => NutOff,
  Octagon: () => Octagon,
  OctagonAlert: () => OctagonAlert,
  OctagonMinus: () => OctagonMinus,
  OctagonPause: () => OctagonPause,
  OctagonX: () => OctagonX,
  Omega: () => Omega,
  Option: () => Option,
  Orbit: () => Orbit,
  Origami: () => Origami,
  Outdent: () => ListIndentDecrease,
  Package: () => Package,
  Package2: () => Package2,
  PackageCheck: () => PackageCheck,
  PackageMinus: () => PackageMinus,
  PackageOpen: () => PackageOpen,
  PackagePlus: () => PackagePlus,
  PackageSearch: () => PackageSearch,
  PackageX: () => PackageX,
  PaintBucket: () => PaintBucket,
  PaintRoller: () => PaintRoller,
  Paintbrush: () => Paintbrush,
  Paintbrush2: () => PaintbrushVertical,
  PaintbrushVertical: () => PaintbrushVertical,
  Palette: () => Palette,
  Palmtree: () => TreePalm,
  Panda: () => Panda,
  PanelBottom: () => PanelBottom,
  PanelBottomClose: () => PanelBottomClose,
  PanelBottomDashed: () => PanelBottomDashed,
  PanelBottomInactive: () => PanelBottomDashed,
  PanelBottomOpen: () => PanelBottomOpen,
  PanelLeft: () => PanelLeft,
  PanelLeftClose: () => PanelLeftClose,
  PanelLeftDashed: () => PanelLeftDashed,
  PanelLeftInactive: () => PanelLeftDashed,
  PanelLeftOpen: () => PanelLeftOpen,
  PanelLeftRightDashed: () => PanelLeftRightDashed,
  PanelRight: () => PanelRight,
  PanelRightClose: () => PanelRightClose,
  PanelRightDashed: () => PanelRightDashed,
  PanelRightInactive: () => PanelRightDashed,
  PanelRightOpen: () => PanelRightOpen,
  PanelTop: () => PanelTop,
  PanelTopBottomDashed: () => PanelTopBottomDashed,
  PanelTopClose: () => PanelTopClose,
  PanelTopDashed: () => PanelTopDashed,
  PanelTopInactive: () => PanelTopDashed,
  PanelTopOpen: () => PanelTopOpen,
  PanelsLeftBottom: () => PanelsLeftBottom,
  PanelsLeftRight: () => Columns3,
  PanelsRightBottom: () => PanelsRightBottom,
  PanelsTopBottom: () => Rows3,
  PanelsTopLeft: () => PanelsTopLeft,
  PaperBag: () => PaperBag,
  Paperclip: () => Paperclip,
  Parasol: () => Parasol,
  Parentheses: () => Parentheses,
  Park: () => Park,
  ParkingCircle: () => CircleParking,
  ParkingCircleOff: () => CircleParkingOff,
  ParkingMeter: () => ParkingMeter,
  ParkingSquare: () => SquareParking,
  ParkingSquareOff: () => SquareParkingOff,
  PartyPopper: () => PartyPopper,
  Pause: () => Pause,
  PauseCircle: () => CirclePause,
  PauseOctagon: () => OctagonPause,
  PawPrint: () => PawPrint,
  PcCase: () => PcCase,
  Pen: () => Pen,
  PenBox: () => SquarePen,
  PenLine: () => PenLine,
  PenOff: () => PenOff,
  PenSquare: () => SquarePen,
  PenTool: () => PenTool,
  Pencil: () => Pencil,
  PencilLine: () => PencilLine,
  PencilOff: () => PencilOff,
  PencilRuler: () => PencilRuler,
  PencilSparkles: () => PencilSparkles,
  Pentagon: () => Pentagon,
  Percent: () => Percent,
  PercentCircle: () => CirclePercent,
  PercentDiamond: () => DiamondPercent,
  PercentSquare: () => SquarePercent,
  PersonStanding: () => PersonStanding,
  Phi: () => Phi,
  PhilippinePeso: () => PhilippinePeso,
  Phone: () => Phone,
  PhoneCall: () => PhoneCall,
  PhoneForwarded: () => PhoneForwarded,
  PhoneIncoming: () => PhoneIncoming,
  PhoneMissed: () => PhoneMissed,
  PhoneOff: () => PhoneOff,
  PhoneOutgoing: () => PhoneOutgoing,
  Pi: () => Pi,
  PiSquare: () => SquarePi,
  Piano: () => Piano,
  Pickaxe: () => Pickaxe,
  PictureInPicture: () => PictureInPicture,
  PictureInPicture2: () => PictureInPicture2,
  PieChart: () => ChartPie,
  PiggyBank: () => PiggyBank,
  Pilcrow: () => Pilcrow,
  PilcrowLeft: () => PilcrowLeft,
  PilcrowRight: () => PilcrowRight,
  PilcrowSquare: () => SquarePilcrow,
  Pill: () => Pill,
  PillBottle: () => PillBottle,
  Pin: () => Pin,
  PinOff: () => PinOff,
  Pipette: () => Pipette,
  Pizza: () => Pizza,
  Plane: () => Plane,
  PlaneLanding: () => PlaneLanding,
  PlaneTakeoff: () => PlaneTakeoff,
  PlantPot: () => PlantPot,
  Play: () => Play,
  PlayCircle: () => CirclePlay,
  PlayOff: () => PlayOff,
  PlaySquare: () => SquarePlay,
  PlayingCard: () => PlayingCard,
  PlayingCards: () => PlayingCards,
  PlayingCardsFan: () => PlayingCardsFan,
  Plug: () => Plug,
  Plug2: () => Plug2,
  PlugZap: () => PlugZap,
  PlugZap2: () => PlugZap,
  Plus: () => Plus,
  PlusCircle: () => CirclePlus,
  PlusSquare: () => SquarePlus,
  PocketKnife: () => PocketKnife,
  Podcast: () => MicSignal,
  Podium: () => Podium,
  Pointer: () => Pointer,
  PointerOff: () => PointerOff,
  Popcorn: () => Popcorn,
  Popsicle: () => Popsicle,
  PoundSterling: () => PoundSterling,
  Power: () => Power,
  PowerCircle: () => CirclePower,
  PowerOff: () => PowerOff,
  PowerSquare: () => SquarePower,
  Presentation: () => Presentation,
  Printer: () => Printer,
  PrinterCheck: () => PrinterCheck,
  PrinterX: () => PrinterX,
  Projector: () => Projector,
  Proportions: () => Proportions,
  Puzzle: () => Puzzle,
  Pyramid: () => Pyramid,
  QrCode: () => QrCode,
  Quote: () => Quote,
  Rabbit: () => Rabbit,
  Radar: () => Radar,
  Radiation: () => Radiation,
  Radical: () => Radical,
  Radio: () => Radio,
  RadioOff: () => RadioOff,
  RadioReceiver: () => RadioReceiver,
  RadioTower: () => RadioTower,
  Radius: () => Radius,
  Rainbow: () => Rainbow,
  Rat: () => Rat,
  Ratio: () => Ratio,
  Receipt: () => Receipt,
  ReceiptCent: () => ReceiptCent,
  ReceiptEuro: () => ReceiptEuro,
  ReceiptIndianRupee: () => ReceiptIndianRupee,
  ReceiptJapaneseYen: () => ReceiptJapaneseYen,
  ReceiptPoundSterling: () => ReceiptPoundSterling,
  ReceiptRussianRuble: () => ReceiptRussianRuble,
  ReceiptSwissFranc: () => ReceiptSwissFranc,
  ReceiptText: () => ReceiptText,
  ReceiptTurkishLira: () => ReceiptTurkishLira,
  RectangleCircle: () => RectangleCircle,
  RectangleEllipsis: () => RectangleEllipsis,
  RectangleGoggles: () => RectangleGoggles,
  RectangleHorizontal: () => RectangleHorizontal,
  RectangleVertical: () => RectangleVertical,
  Recycle: () => Recycle,
  Redo: () => Redo,
  Redo2: () => Redo2,
  RedoDot: () => RedoDot,
  RefreshCcw: () => RefreshCcw,
  RefreshCcwDot: () => RefreshCcwDot,
  RefreshCw: () => RefreshCw,
  RefreshCwOff: () => RefreshCwOff,
  Refrigerator: () => Refrigerator,
  Regex: () => Regex,
  RemoveFormatting: () => RemoveFormatting,
  Repeat: () => Repeat,
  Repeat1: () => Repeat1,
  Repeat2: () => Repeat2,
  RepeatOff: () => RepeatOff,
  Replace: () => Replace,
  ReplaceAll: () => ReplaceAll,
  Reply: () => Reply,
  ReplyAll: () => ReplyAll,
  Rewind: () => Rewind,
  Ribbon: () => Ribbon,
  Road: () => Road,
  RobotArm: () => RobotArm,
  RobotVacuum: () => RobotVacuum,
  Rocket: () => Rocket,
  RockingChair: () => RockingChair,
  RollerCoaster: () => RollerCoaster,
  Rose: () => Rose,
  Rotate3D: () => Rotate3d,
  Rotate3d: () => Rotate3d,
  RotateCcw: () => RotateCcw,
  RotateCcwClock: () => RotateCcwClock,
  RotateCcwKey: () => RotateCcwKey,
  RotateCcwSquare: () => RotateCcwSquare,
  RotateCw: () => RotateCw,
  RotateCwClock: () => RotateCwClock,
  RotateCwFadingClock: () => RotateCwFadingClock,
  RotateCwSquare: () => RotateCwSquare,
  Route: () => Route,
  RouteOff: () => RouteOff,
  Router: () => Router,
  Rows: () => Rows2,
  Rows2: () => Rows2,
  Rows3: () => Rows3,
  Rows4: () => Rows4,
  Rss: () => Rss,
  Ruler: () => Ruler,
  RulerDimensionLine: () => RulerDimensionLine,
  RussianRuble: () => RussianRuble,
  Sailboat: () => Sailboat,
  Salad: () => Salad,
  Sandwich: () => Sandwich,
  Satellite: () => Satellite,
  SatelliteDish: () => SatelliteDish,
  SaudiRiyal: () => SaudiRiyal,
  Save: () => Save,
  SaveAll: () => SaveAll,
  SaveCheck: () => SaveCheck,
  SaveOff: () => SaveOff,
  SavePen: () => SavePen,
  SavePlus: () => SavePlus,
  Scale: () => Scale,
  Scale3D: () => Scale3d,
  Scale3d: () => Scale3d,
  Scaling: () => Scaling,
  Scan: () => Scan,
  ScanBarcode: () => ScanBarcode,
  ScanBox: () => ScanBox,
  ScanEye: () => ScanEye,
  ScanFace: () => ScanFace,
  ScanHeart: () => ScanHeart,
  ScanLine: () => ScanLine,
  ScanQrCode: () => ScanQrCode,
  ScanSearch: () => ScanSearch,
  ScanSquare: () => ScanSquare,
  ScanText: () => ScanText,
  ScatterChart: () => ChartScatter,
  School: () => School,
  School2: () => University,
  Scissors: () => Scissors,
  ScissorsLineDashed: () => ScissorsLineDashed,
  ScissorsSquare: () => SquareScissors,
  ScissorsSquareDashedBottom: () => SquareBottomDashedScissors,
  Scooter: () => Scooter,
  ScreenShare: () => ScreenShare,
  ScreenShareOff: () => ScreenShareOff,
  Scroll: () => Scroll,
  ScrollText: () => ScrollText,
  Search: () => Search,
  SearchAlert: () => SearchAlert,
  SearchCheck: () => SearchCheck,
  SearchCode: () => SearchCode,
  SearchSlash: () => SearchSlash,
  SearchX: () => SearchX,
  Section: () => Section,
  Send: () => Send,
  SendHorizonal: () => SendHorizontal,
  SendHorizontal: () => SendHorizontal,
  SendToBack: () => SendToBack,
  SeparatorHorizontal: () => SeparatorHorizontal,
  SeparatorVertical: () => SeparatorVertical,
  Server: () => Server,
  ServerCog: () => ServerCog,
  ServerCrash: () => ServerCrash,
  ServerOff: () => ServerOff,
  ServerPlus: () => ServerPlus,
  Settings: () => Settings,
  Settings2: () => Settings2,
  Shapes: () => Shapes,
  Share: () => Share,
  Share2: () => Share2,
  Sheet: () => Sheet,
  Shell: () => Shell,
  ShelvingUnit: () => ShelvingUnit,
  Shield: () => Shield,
  ShieldAlert: () => ShieldAlert,
  ShieldBan: () => ShieldBan,
  ShieldCheck: () => ShieldCheck,
  ShieldClose: () => ShieldX,
  ShieldCog: () => ShieldCog,
  ShieldCogCorner: () => ShieldCogCorner,
  ShieldEllipsis: () => ShieldEllipsis,
  ShieldHalf: () => ShieldHalf,
  ShieldKeyhole: () => ShieldKeyhole,
  ShieldLock: () => ShieldLock,
  ShieldMinus: () => ShieldMinus,
  ShieldOff: () => ShieldOff,
  ShieldPlus: () => ShieldPlus,
  ShieldQuestion: () => ShieldQuestionMark,
  ShieldQuestionMark: () => ShieldQuestionMark,
  ShieldUser: () => ShieldUser,
  ShieldX: () => ShieldX,
  Ship: () => Ship,
  ShipCargo: () => ShipCargo,
  ShipWheel: () => ShipWheel,
  Shirt: () => Shirt,
  ShoppingBag: () => ShoppingBag,
  ShoppingBasket: () => ShoppingBasket,
  ShoppingCart: () => ShoppingCart,
  ShoppingCartMinus: () => ShoppingCartMinus,
  ShoppingCartPlus: () => ShoppingCartPlus,
  Shovel: () => Shovel,
  ShowerHead: () => ShowerHead,
  Shredder: () => Shredder,
  Shrimp: () => Shrimp,
  ShrimpOff: () => ShrimpOff,
  Shrink: () => Shrink,
  Shrub: () => Shrub,
  Shuffle: () => Shuffle,
  Sidebar: () => PanelLeft,
  SidebarClose: () => PanelLeftClose,
  SidebarOpen: () => PanelLeftOpen,
  Sigma: () => Sigma,
  SigmaSquare: () => SquareSigma,
  Signal: () => Signal,
  SignalHigh: () => SignalHigh,
  SignalLow: () => SignalLow,
  SignalMedium: () => SignalMedium,
  SignalZero: () => SignalZero,
  Signature: () => Signature,
  Signpost: () => Signpost,
  SignpostBig: () => SignpostBig,
  Siren: () => Siren,
  SkipBack: () => SkipBack,
  SkipForward: () => SkipForward,
  Skull: () => Skull,
  Slash: () => Slash,
  SlashSquare: () => SquareSlash,
  Slice: () => Slice,
  Sliders: () => SlidersVertical,
  SlidersHorizontal: () => SlidersHorizontal,
  SlidersVertical: () => SlidersVertical,
  Smartphone: () => Smartphone,
  SmartphoneCharging: () => SmartphoneCharging,
  SmartphoneNfc: () => SmartphoneNfc,
  Smile: () => FaceSlightlySmiling,
  SmilePlus: () => FaceSlightlySmilingPlus,
  Snail: () => Snail,
  Snowflake: () => Snowflake,
  SoapDispenserDroplet: () => SoapDispenserDroplet,
  Sofa: () => Sofa,
  SolarPanel: () => SolarPanel,
  SortAsc: () => ArrowUpNarrowWide,
  SortDesc: () => ArrowDownWideNarrow,
  Soup: () => Soup,
  Space: () => Space,
  Spade: () => Spade,
  Sparkle: () => Sparkle,
  Sparkles: () => Sparkles,
  Speaker: () => Speaker,
  Speech: () => Speech,
  SpellCheck: () => SpellCheck,
  SpellCheck2: () => SpellCheck2,
  Spline: () => Spline,
  SplinePointer: () => SplinePointer,
  Split: () => Split,
  SplitSquareHorizontal: () => SquareSplitHorizontal,
  SplitSquareVertical: () => SquareSplitVertical,
  Spool: () => Spool,
  SportShoe: () => SportShoe,
  Spotlight: () => Spotlight,
  SprayCan: () => SprayCan,
  Sprout: () => Sprout,
  Square: () => Square,
  SquareActivity: () => SquareActivity,
  SquareArrowDown: () => SquareArrowDown,
  SquareArrowDownLeft: () => SquareArrowDownLeft,
  SquareArrowDownRight: () => SquareArrowDownRight,
  SquareArrowLeft: () => SquareArrowLeft,
  SquareArrowOutDownLeft: () => SquareArrowOutDownLeft,
  SquareArrowOutDownRight: () => SquareArrowOutDownRight,
  SquareArrowOutUpLeft: () => SquareArrowOutUpLeft,
  SquareArrowOutUpRight: () => SquareArrowOutUpRight,
  SquareArrowRight: () => SquareArrowRight,
  SquareArrowRightEnter: () => SquareArrowRightEnter,
  SquareArrowRightExit: () => SquareArrowRightExit,
  SquareArrowUp: () => SquareArrowUp,
  SquareArrowUpLeft: () => SquareArrowUpLeft,
  SquareArrowUpRight: () => SquareArrowUpRight,
  SquareAsterisk: () => SquareAsterisk,
  SquareBookmark: () => SquareBookmark,
  SquareBottomDashedScissors: () => SquareBottomDashedScissors,
  SquareCenterlineDashedHorizontal: () => SquareCenterlineDashedHorizontal,
  SquareCenterlineDashedVertical: () => SquareCenterlineDashedVertical,
  SquareChartGantt: () => SquareChartGantt,
  SquareCheck: () => SquareCheck,
  SquareCheckBig: () => SquareCheckBig,
  SquareChevronDown: () => SquareChevronDown,
  SquareChevronLeft: () => SquareChevronLeft,
  SquareChevronRight: () => SquareChevronRight,
  SquareChevronUp: () => SquareChevronUp,
  SquareCode: () => SquareCode,
  SquareDashed: () => SquareDashed,
  SquareDashedBottom: () => SquareDashedBottom,
  SquareDashedBottomCode: () => SquareDashedBottomCode,
  SquareDashedKanban: () => SquareDashedKanban,
  SquareDashedMousePointer: () => SquareDashedMousePointer,
  SquareDashedPlus: () => SquareDashedPlus,
  SquareDashedText: () => SquareDashedText,
  SquareDashedTopSolid: () => SquareDashedTopSolid,
  SquareDashedX: () => SquareDashedX,
  SquareDashedXCorner: () => SquareDashedXCorner,
  SquareDimensions: () => SquareDimensions,
  SquareDivide: () => SquareDivide,
  SquareDot: () => SquareDot,
  SquareEqual: () => SquareEqual,
  SquareExclamationPoint: () => SquareExclamationPoint,
  SquareFunction: () => SquareFunction,
  SquareGanttChart: () => SquareChartGantt,
  SquareKanban: () => SquareKanban,
  SquareLibrary: () => SquareLibrary,
  SquareM: () => SquareM,
  SquareMenu: () => SquareMenu,
  SquareMinus: () => SquareMinus,
  SquareMousePointer: () => SquareMousePointer,
  SquareOff: () => SquareOff,
  SquareParking: () => SquareParking,
  SquareParkingOff: () => SquareParkingOff,
  SquarePause: () => SquarePause,
  SquarePen: () => SquarePen,
  SquarePercent: () => SquarePercent,
  SquarePi: () => SquarePi,
  SquarePilcrow: () => SquarePilcrow,
  SquarePlay: () => SquarePlay,
  SquarePlus: () => SquarePlus,
  SquarePower: () => SquarePower,
  SquareRadical: () => SquareRadical,
  SquareRoundCorner: () => SquareRoundCorner,
  SquareScissors: () => SquareScissors,
  SquareSigma: () => SquareSigma,
  SquareSlash: () => SquareSlash,
  SquareSplitHorizontal: () => SquareSplitHorizontal,
  SquareSplitVertical: () => SquareSplitVertical,
  SquareSquare: () => SquareSquare,
  SquareStack: () => SquareStack,
  SquareStar: () => SquareStar,
  SquareStop: () => SquareStop,
  SquareTerminal: () => SquareTerminal,
  SquareText: () => SquareText,
  SquareUser: () => SquareUser,
  SquareUserRound: () => SquareUserRound,
  SquareX: () => SquareX,
  SquaresExclude: () => SquaresExclude,
  SquaresIntersect: () => SquaresIntersect,
  SquaresSubtract: () => SquaresSubtract,
  SquaresUnite: () => SquaresUnite,
  Squircle: () => Squircle,
  SquircleDashed: () => SquircleDashed,
  Squirrel: () => Squirrel,
  Stamp: () => Stamp,
  Star: () => Star,
  StarCheck: () => StarCheck,
  StarHalf: () => StarHalf,
  StarMinus: () => StarMinus,
  StarOff: () => StarOff,
  StarPlus: () => StarPlus,
  StarX: () => StarX,
  Stars: () => Sparkles,
  StepBack: () => StepBack,
  StepForward: () => StepForward,
  Stethoscope: () => Stethoscope,
  Sticker: () => Sticker,
  StickyNote: () => StickyNote,
  StickyNoteCheck: () => StickyNoteCheck,
  StickyNoteMinus: () => StickyNoteMinus,
  StickyNoteOff: () => StickyNoteOff,
  StickyNotePlus: () => StickyNotePlus,
  StickyNoteX: () => StickyNoteX,
  StickyNotes: () => StickyNotes,
  Stone: () => Stone,
  StopCircle: () => CircleStop,
  Store: () => Store,
  StretchHorizontal: () => StretchHorizontal,
  StretchVertical: () => StretchVertical,
  Strikethrough: () => Strikethrough,
  Subscript: () => Subscript,
  Subtitles: () => Captions,
  Summary: () => Summary,
  Sun: () => Sun,
  SunDim: () => SunDim,
  SunMedium: () => SunMedium,
  SunMoon: () => SunMoon,
  SunSnow: () => SunSnow,
  Sunrise: () => Sunrise,
  Sunset: () => Sunset,
  Superscript: () => Superscript,
  SwatchBook: () => SwatchBook,
  SwissFranc: () => SwissFranc,
  SwitchCamera: () => SwitchCamera,
  Sword: () => Sword,
  Swords: () => Swords,
  Syringe: () => Syringe,
  Table: () => Table,
  Table2: () => Table2,
  TableCellsMerge: () => TableCellsMerge,
  TableCellsSplit: () => TableCellsSplit,
  TableColumnsSplit: () => TableColumnsSplit,
  TableConfig: () => Columns3Cog,
  TableOfContents: () => TableOfContents,
  TableProperties: () => TableProperties,
  TableRowsSplit: () => TableRowsSplit,
  Tablet: () => Tablet,
  TabletSmartphone: () => TabletSmartphone,
  Tablets: () => Tablets,
  Tag: () => Tag,
  TagPlus: () => TagPlus,
  TagX: () => TagX,
  Tags: () => Tags,
  Tally1: () => Tally1,
  Tally2: () => Tally2,
  Tally3: () => Tally3,
  Tally4: () => Tally4,
  Tally5: () => Tally5,
  Tangent: () => Tangent,
  Target: () => Target,
  Telescope: () => Telescope,
  Tent: () => Tent,
  TentTree: () => TentTree,
  Terminal: () => Terminal,
  TerminalSquare: () => SquareTerminal,
  TestTube: () => TestTube,
  TestTube2: () => TestTubeDiagonal,
  TestTubeDiagonal: () => TestTubeDiagonal,
  TestTubes: () => TestTubes,
  Text: () => TextAlignStart,
  TextAlignCenter: () => TextAlignCenter,
  TextAlignEnd: () => TextAlignEnd,
  TextAlignJustify: () => TextAlignJustify,
  TextAlignStart: () => TextAlignStart,
  TextCursor: () => TextCursor,
  TextCursorInput: () => TextCursorInput,
  TextInitial: () => TextInitial,
  TextQuote: () => TextQuote,
  TextSearch: () => TextSearch,
  TextSelect: () => SquareDashedText,
  TextSelection: () => SquareDashedText,
  TextWrap: () => TextWrap,
  Theater: () => Theater,
  Thermometer: () => Thermometer,
  ThermometerSnowflake: () => ThermometerSnowflake,
  ThermometerSun: () => ThermometerSun,
  ThumbsDown: () => ThumbsDown,
  ThumbsUp: () => ThumbsUp,
  TicTacToe: () => TicTacToe,
  Ticket: () => Ticket,
  TicketCheck: () => TicketCheck,
  TicketMinus: () => TicketMinus,
  TicketPercent: () => TicketPercent,
  TicketPlus: () => TicketPlus,
  TicketSlash: () => TicketSlash,
  TicketX: () => TicketX,
  Tickets: () => Tickets,
  TicketsPlane: () => TicketsPlane,
  Timeline: () => Timeline,
  Timer: () => Timer,
  TimerOff: () => TimerOff,
  TimerReset: () => TimerReset,
  ToggleLeft: () => ToggleLeft,
  ToggleRight: () => ToggleRight,
  Toilet: () => Toilet,
  ToolCase: () => ToolCase,
  Toolbox: () => Toolbox,
  Toothbrush: () => Toothbrush,
  ToothbrushSparkles: () => ToothbrushSparkles,
  Tornado: () => Tornado,
  Torus: () => Torus,
  Touchpad: () => Touchpad,
  TouchpadOff: () => TouchpadOff,
  TowelRack: () => TowelRack,
  TowerControl: () => TowerControl,
  ToyBrick: () => ToyBrick,
  Tractor: () => Tractor,
  TrafficCone: () => TrafficCone,
  Trailer: () => Trailer,
  Train: () => TramFront,
  TrainFront: () => TrainFront,
  TrainFrontTunnel: () => TrainFrontTunnel,
  TrainTrack: () => TrainTrack,
  TramFront: () => TramFront,
  Transgender: () => Transgender,
  Trash: () => Trash,
  Trash2: () => Trash,
  TrashOff: () => TrashOff,
  TreeDeciduous: () => TreeDeciduous,
  TreePalm: () => TreePalm,
  TreePine: () => TreePine,
  Trees: () => Trees,
  TrendingDown: () => TrendingDown,
  TrendingUp: () => TrendingUp,
  TrendingUpDown: () => TrendingUpDown,
  Triangle: () => Triangle,
  TriangleAlert: () => TriangleAlert,
  TriangleDashed: () => TriangleDashed,
  TriangleRight: () => TriangleRight,
  TrianglesCenterlineDashedHorizontal: () => TrianglesCenterlineDashedHorizontal,
  TrianglesCenterlineDashedVertical: () => TrianglesCenterlineDashedVertical,
  Trophy: () => Trophy,
  Truck: () => Truck,
  TruckElectric: () => TruckElectric,
  TubeLotion: () => TubeLotion,
  TurkishLira: () => TurkishLira,
  Turntable: () => Turntable,
  Turtle: () => Turtle,
  Tv: () => Tv,
  Tv2: () => TvMinimal,
  TvMinimal: () => TvMinimal,
  TvMinimalPlay: () => TvMinimalPlay,
  Type: () => Type,
  TypeOutline: () => TypeOutline,
  Umbrella: () => Umbrella,
  UmbrellaOff: () => UmbrellaOff,
  Underline: () => Underline,
  Undo: () => Undo,
  Undo2: () => Undo2,
  UndoDot: () => UndoDot,
  UnfoldHorizontal: () => UnfoldHorizontal,
  UnfoldVertical: () => UnfoldVertical,
  Ungroup: () => Ungroup,
  University: () => University,
  Unlink: () => Unlink,
  Unlink2: () => Unlink2,
  Unlock: () => LockOpen,
  UnlockKeyhole: () => LockKeyholeOpen,
  Unplug: () => Unplug,
  Upload: () => Upload,
  UploadCloud: () => CloudUpload,
  Usb: () => Usb,
  UsbCPort: () => UsbCPort,
  User: () => User,
  User2: () => UserRound,
  UserCheck: () => UserCheck,
  UserCheck2: () => UserRoundCheck,
  UserCircle: () => CircleUser,
  UserCircle2: () => CircleUserRound,
  UserCog: () => UserCog,
  UserCog2: () => UserRoundCog,
  UserGroup: () => UserGroup,
  UserKey: () => UserKey,
  UserLock: () => UserLock,
  UserMinus: () => UserMinus,
  UserMinus2: () => UserRoundMinus,
  UserPen: () => UserPen,
  UserPlus: () => UserPlus,
  UserPlus2: () => UserRoundPlus,
  UserRound: () => UserRound,
  UserRoundArrowLeft: () => UserRoundArrowLeft,
  UserRoundCheck: () => UserRoundCheck,
  UserRoundCog: () => UserRoundCog,
  UserRoundGroup: () => UserRoundGroup,
  UserRoundKey: () => UserRoundKey,
  UserRoundMinus: () => UserRoundMinus,
  UserRoundPen: () => UserRoundPen,
  UserRoundPlus: () => UserRoundPlus,
  UserRoundSearch: () => UserRoundSearch,
  UserRoundX: () => UserRoundX,
  UserSearch: () => UserSearch,
  UserShield: () => UserShield,
  UserSquare: () => SquareUser,
  UserSquare2: () => SquareUserRound,
  UserStar: () => UserStar,
  UserX: () => UserX,
  UserX2: () => UserRoundX,
  Users: () => Users,
  Users2: () => UsersRound,
  UsersRound: () => UsersRound,
  Utensils: () => Utensils,
  UtensilsCrossed: () => UtensilsCrossed,
  UtilityPole: () => UtilityPole,
  Van: () => Van,
  Variable: () => Variable,
  Vault: () => Vault,
  VectorPolygon: () => VectorPolygon,
  VectorSquare: () => VectorSquare,
  Vegan: () => Vegan,
  VenetianMask: () => VenetianMask,
  Venus: () => Venus,
  VenusAndMars: () => VenusAndMars,
  Verified: () => BadgeCheck,
  Vibrate: () => Vibrate,
  VibrateOff: () => VibrateOff,
  Video: () => Video,
  VideoOff: () => VideoOff,
  Videotape: () => Videotape,
  View: () => View,
  Virus: () => Virus,
  VirusOff: () => VirusOff,
  Voicemail: () => Voicemail,
  Volleyball: () => Volleyball,
  Volume: () => Volume,
  Volume1: () => Volume1,
  Volume2: () => Volume2,
  VolumeOff: () => VolumeOff,
  VolumeX: () => VolumeX,
  Vote: () => Vote,
  Wallet: () => Wallet,
  Wallet2: () => WalletMinimal,
  WalletCards: () => WalletCards,
  WalletMinimal: () => WalletMinimal,
  Wallpaper: () => Wallpaper,
  Wand: () => Wand,
  Wand2: () => WandSparkles,
  WandSparkles: () => WandSparkles,
  Warehouse: () => Warehouse,
  WashingMachine: () => WashingMachine,
  Watch: () => Watch,
  Waves: () => WavesHorizontal,
  WavesArrowDown: () => WavesArrowDown,
  WavesArrowUp: () => WavesArrowUp,
  WavesHorizontal: () => WavesHorizontal,
  WavesLadder: () => WavesLadder,
  WavesVertical: () => WavesVertical,
  Waypoints: () => Waypoints,
  Webcam: () => Webcam,
  WebcamOff: () => WebcamOff,
  Webhook: () => Webhook,
  WebhookOff: () => WebhookOff,
  Weight: () => Weight,
  WeightTilde: () => WeightTilde,
  Wheat: () => Wheat,
  WheatOff: () => WheatOff,
  Whistle: () => Whistle,
  WholeWord: () => WholeWord,
  Wifi: () => Wifi,
  WifiCog: () => WifiCog,
  WifiHigh: () => WifiHigh,
  WifiLow: () => WifiLow,
  WifiOff: () => WifiOff,
  WifiPen: () => WifiPen,
  WifiSync: () => WifiSync,
  WifiZero: () => WifiZero,
  Wind: () => Wind,
  WindArrowDown: () => WindArrowDown,
  Wine: () => Wine,
  WineOff: () => WineOff,
  Workflow: () => Workflow,
  Worm: () => Worm,
  WrapText: () => TextWrap,
  Wrench: () => Wrench,
  WrenchOff: () => WrenchOff,
  X: () => X,
  XCircle: () => CircleX,
  XLineTop: () => XLineTop,
  XOctagon: () => OctagonX,
  XSquare: () => SquareX,
  Zap: () => Zap,
  ZapOff: () => ZapOff,
  ZodiacAquarius: () => ZodiacAquarius,
  ZodiacAries: () => ZodiacAries,
  ZodiacCancer: () => ZodiacCancer,
  ZodiacCapricorn: () => ZodiacCapricorn,
  ZodiacGemini: () => ZodiacGemini,
  ZodiacLeo: () => ZodiacLeo,
  ZodiacLibra: () => ZodiacLibra,
  ZodiacOphiuchus: () => ZodiacOphiuchus,
  ZodiacPisces: () => ZodiacPisces,
  ZodiacSagittarius: () => ZodiacSagittarius,
  ZodiacScorpio: () => ZodiacScorpio,
  ZodiacTaurus: () => ZodiacTaurus,
  ZodiacVirgo: () => ZodiacVirgo,
  ZoomIn: () => ZoomIn,
  ZoomOut: () => ZoomOut
});

// node_modules/lucide/dist/esm/icons/a-arrow-down.mjs
var AArrowDown = [
  ["path", { d: "m14 12 4 4 4-4" }],
  ["path", { d: "M18 16V7" }],
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }],
  ["path", { d: "M3.304 13h6.392" }]
];

// node_modules/lucide/dist/esm/icons/a-arrow-up.mjs
var AArrowUp = [
  ["path", { d: "m14 11 4-4 4 4" }],
  ["path", { d: "M18 16V7" }],
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }],
  ["path", { d: "M3.304 13h6.392" }]
];

// node_modules/lucide/dist/esm/icons/a-large-small.mjs
var ALargeSmall = [
  ["path", { d: "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" }],
  ["path", { d: "M15.697 14h5.606" }],
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }],
  ["path", { d: "M3.304 13h6.392" }]
];

// node_modules/lucide/dist/esm/icons/accessibility.mjs
var Accessibility = [
  ["circle", { cx: "16", cy: "4", r: "1" }],
  ["path", { d: "m18 19 1-7-6 1" }],
  ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5" }],
  ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6" }],
  ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6" }]
];

// node_modules/lucide/dist/esm/icons/activity.mjs
var Activity = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/ad.mjs
var Ad = [
  ["path", { d: "M10 13H6" }],
  ["path", { d: "M10 15v-4a2 2 0 0 0-4 0v4" }],
  [
    "path",
    {
      d: "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z"
    }
  ],
  ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/air-vent.mjs
var AirVent = [
  ["path", { d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12" }],
  ["path", { d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M6 8h12" }],
  ["path", { d: "M6.6 15.572A2 2 0 1 0 10 17v-5" }]
];

// node_modules/lucide/dist/esm/icons/airplay.mjs
var Airplay = [
  ["path", { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }],
  ["path", { d: "m12 15 5 6H7Z" }]
];

// node_modules/lucide/dist/esm/icons/alarm-clock-check.mjs
var AlarmClockCheck = [
  ["circle", { cx: "12", cy: "13", r: "8" }],
  ["path", { d: "M5 3 2 6" }],
  ["path", { d: "m22 6-3-3" }],
  ["path", { d: "M6.38 18.7 4 21" }],
  ["path", { d: "M17.64 18.67 20 21" }],
  ["path", { d: "m9 13 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/alarm-clock-minus.mjs
var AlarmClockMinus = [
  ["circle", { cx: "12", cy: "13", r: "8" }],
  ["path", { d: "M5 3 2 6" }],
  ["path", { d: "m22 6-3-3" }],
  ["path", { d: "M6.38 18.7 4 21" }],
  ["path", { d: "M17.64 18.67 20 21" }],
  ["path", { d: "M9 13h6" }]
];

// node_modules/lucide/dist/esm/icons/alarm-clock-off.mjs
var AlarmClockOff = [
  ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26" }],
  ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15" }],
  ["path", { d: "m22 6-3-3" }],
  ["path", { d: "M6.26 18.67 4 21" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M4 4 2 6" }]
];

// node_modules/lucide/dist/esm/icons/alarm-clock-plus.mjs
var AlarmClockPlus = [
  ["circle", { cx: "12", cy: "13", r: "8" }],
  ["path", { d: "M5 3 2 6" }],
  ["path", { d: "m22 6-3-3" }],
  ["path", { d: "M6.38 18.7 4 21" }],
  ["path", { d: "M17.64 18.67 20 21" }],
  ["path", { d: "M12 10v6" }],
  ["path", { d: "M9 13h6" }]
];

// node_modules/lucide/dist/esm/icons/alarm-clock.mjs
var AlarmClock = [
  ["circle", { cx: "12", cy: "13", r: "8" }],
  ["path", { d: "M12 9v4l2 2" }],
  ["path", { d: "M5 3 2 6" }],
  ["path", { d: "m22 6-3-3" }],
  ["path", { d: "M6.38 18.7 4 21" }],
  ["path", { d: "M17.64 18.67 20 21" }]
];

// node_modules/lucide/dist/esm/icons/alarm-smoke.mjs
var AlarmSmoke = [
  ["path", { d: "M11 21c0-2.5 2-2.5 2-5" }],
  ["path", { d: "M16 21c0-2.5 2-2.5 2-5" }],
  ["path", { d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" }],
  ["path", { d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" }],
  ["path", { d: "M6 21c0-2.5 2-2.5 2-5" }]
];

// node_modules/lucide/dist/esm/icons/align-center-horizontal.mjs
var AlignCenterHorizontal = [
  ["path", { d: "M2 12h20" }],
  ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }],
  ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }],
  ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }],
  ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" }]
];

// node_modules/lucide/dist/esm/icons/align-center-vertical.mjs
var AlignCenterVertical = [
  ["path", { d: "M12 2v20" }],
  ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }],
  ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }],
  ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }],
  ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }]
];

// node_modules/lucide/dist/esm/icons/align-end-horizontal.mjs
var AlignEndHorizontal = [
  ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2" }],
  ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2" }],
  ["path", { d: "M22 22H2" }]
];

// node_modules/lucide/dist/esm/icons/align-end-vertical.mjs
var AlignEndVertical = [
  ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2" }],
  ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2" }],
  ["path", { d: "M22 22V2" }]
];

// node_modules/lucide/dist/esm/icons/align-horizontal-distribute-center.mjs
var AlignHorizontalDistributeCenter = [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
  ["path", { d: "M17 22v-5" }],
  ["path", { d: "M17 7V2" }],
  ["path", { d: "M7 22v-3" }],
  ["path", { d: "M7 5V2" }]
];

// node_modules/lucide/dist/esm/icons/align-horizontal-distribute-end.mjs
var AlignHorizontalDistributeEnd = [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
  ["path", { d: "M10 2v20" }],
  ["path", { d: "M20 2v20" }]
];

// node_modules/lucide/dist/esm/icons/align-horizontal-distribute-start.mjs
var AlignHorizontalDistributeStart = [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
  ["path", { d: "M4 2v20" }],
  ["path", { d: "M14 2v20" }]
];

// node_modules/lucide/dist/esm/icons/align-horizontal-justify-center.mjs
var AlignHorizontalJustifyCenter = [
  ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }],
  ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }],
  ["path", { d: "M12 2v20" }]
];

// node_modules/lucide/dist/esm/icons/align-horizontal-justify-end.mjs
var AlignHorizontalJustifyEnd = [
  ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }],
  ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2" }],
  ["path", { d: "M22 2v20" }]
];

// node_modules/lucide/dist/esm/icons/align-horizontal-justify-start.mjs
var AlignHorizontalJustifyStart = [
  ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2" }],
  ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }],
  ["path", { d: "M2 2v20" }]
];

// node_modules/lucide/dist/esm/icons/align-horizontal-space-around.mjs
var AlignHorizontalSpaceAround = [
  ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2" }],
  ["path", { d: "M4 22V2" }],
  ["path", { d: "M20 22V2" }]
];

// node_modules/lucide/dist/esm/icons/align-horizontal-space-between.mjs
var AlignHorizontalSpaceBetween = [
  ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2" }],
  ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2" }],
  ["path", { d: "M3 2v20" }],
  ["path", { d: "M21 2v20" }]
];

// node_modules/lucide/dist/esm/icons/align-start-horizontal.mjs
var AlignStartHorizontal = [
  ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2" }],
  ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2" }],
  ["path", { d: "M22 2H2" }]
];

// node_modules/lucide/dist/esm/icons/align-start-vertical.mjs
var AlignStartVertical = [
  ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2" }],
  ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2" }],
  ["path", { d: "M2 2v20" }]
];

// node_modules/lucide/dist/esm/icons/align-vertical-distribute-center.mjs
var AlignVerticalDistributeCenter = [
  ["path", { d: "M22 17h-3" }],
  ["path", { d: "M22 7h-5" }],
  ["path", { d: "M5 17H2" }],
  ["path", { d: "M7 7H2" }],
  ["rect", { x: "5", y: "14", width: "14", height: "6", rx: "2" }],
  ["rect", { x: "7", y: "4", width: "10", height: "6", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/align-vertical-distribute-end.mjs
var AlignVerticalDistributeEnd = [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
  ["path", { d: "M2 20h20" }],
  ["path", { d: "M2 10h20" }]
];

// node_modules/lucide/dist/esm/icons/align-vertical-distribute-start.mjs
var AlignVerticalDistributeStart = [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
  ["path", { d: "M2 14h20" }],
  ["path", { d: "M2 4h20" }]
];

// node_modules/lucide/dist/esm/icons/align-vertical-justify-center.mjs
var AlignVerticalJustifyCenter = [
  ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }],
  ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }],
  ["path", { d: "M2 12h20" }]
];

// node_modules/lucide/dist/esm/icons/align-vertical-justify-end.mjs
var AlignVerticalJustifyEnd = [
  ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2" }],
  ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }],
  ["path", { d: "M2 22h20" }]
];

// node_modules/lucide/dist/esm/icons/align-vertical-justify-start.mjs
var AlignVerticalJustifyStart = [
  ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }],
  ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2" }],
  ["path", { d: "M2 2h20" }]
];

// node_modules/lucide/dist/esm/icons/align-vertical-space-around.mjs
var AlignVerticalSpaceAround = [
  ["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2" }],
  ["path", { d: "M22 20H2" }],
  ["path", { d: "M22 4H2" }]
];

// node_modules/lucide/dist/esm/icons/align-vertical-space-between.mjs
var AlignVerticalSpaceBetween = [
  ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2" }],
  ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2" }],
  ["path", { d: "M2 21h20" }],
  ["path", { d: "M2 3h20" }]
];

// node_modules/lucide/dist/esm/icons/ambulance.mjs
var Ambulance = [
  ["path", { d: "M10 10H6" }],
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
    }
  ],
  ["path", { d: "M8 8v4" }],
  ["path", { d: "M9 18h6" }],
  ["circle", { cx: "17", cy: "18", r: "2" }],
  ["circle", { cx: "7", cy: "18", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/ampersand.mjs
var Ampersand = [
  ["path", { d: "M16 12h3" }],
  [
    "path",
    {
      d: "M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/ampersands.mjs
var Ampersands = [
  [
    "path",
    { d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }
  ],
  [
    "path",
    { d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }
  ]
];

// node_modules/lucide/dist/esm/icons/amphora.mjs
var Amphora = [
  ["path", { d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" }],
  ["path", { d: "M10 5H8a2 2 0 0 0 0 4h.68" }],
  ["path", { d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" }],
  ["path", { d: "M14 5h2a2 2 0 0 1 0 4h-.68" }],
  ["path", { d: "M18 22H6" }],
  ["path", { d: "M9 2h6" }]
];

// node_modules/lucide/dist/esm/icons/anchor.mjs
var Anchor = [
  ["path", { d: "M12 6v16" }],
  ["path", { d: "m19 13 2-1a9 9 0 0 1-18 0l2 1" }],
  ["path", { d: "M9 11h6" }],
  ["circle", { cx: "12", cy: "4", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/angle.mjs
var Angle = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M3 11a10 10 0 0 1 10 10" }]
];

// node_modules/lucide/dist/esm/icons/antenna.mjs
var Antenna = [
  ["path", { d: "M2 12 7 2" }],
  ["path", { d: "m7 12 5-10" }],
  ["path", { d: "m12 12 5-10" }],
  ["path", { d: "m17 12 5-10" }],
  ["path", { d: "M4.5 7h15" }],
  ["path", { d: "M12 16v6" }]
];

// node_modules/lucide/dist/esm/icons/anvil.mjs
var Anvil = [
  ["path", { d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" }],
  ["path", { d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" }],
  ["path", { d: "M9 12v5" }],
  ["path", { d: "M15 12v5" }],
  ["path", { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" }]
];

// node_modules/lucide/dist/esm/icons/aperture.mjs
var Aperture = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m14.31 8 5.74 9.94" }],
  ["path", { d: "M9.69 8h11.48" }],
  ["path", { d: "m7.38 12 5.74-9.94" }],
  ["path", { d: "M9.69 16 3.95 6.06" }],
  ["path", { d: "M14.31 16H2.83" }],
  ["path", { d: "m16.62 12-5.74 9.94" }]
];

// node_modules/lucide/dist/esm/icons/app-window-mac.mjs
var AppWindowMac = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
  ["path", { d: "M6 8h.01" }],
  ["path", { d: "M10 8h.01" }],
  ["path", { d: "M14 8h.01" }]
];

// node_modules/lucide/dist/esm/icons/app-window.mjs
var AppWindow = [
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }],
  ["path", { d: "M10 4v4" }],
  ["path", { d: "M2 8h20" }],
  ["path", { d: "M6 4v4" }]
];

// node_modules/lucide/dist/esm/icons/apple.mjs
var Apple = [
  ["path", { d: "M12 6.528V3a1 1 0 0 1 1-1h0" }],
  [
    "path",
    {
      d: "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/archive-restore.mjs
var ArchiveRestore = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2" }],
  ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "m9 15 3-3 3 3" }],
  ["path", { d: "M12 12v9" }]
];

// node_modules/lucide/dist/esm/icons/archive-x.mjs
var ArchiveX = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
  ["path", { d: "m9.5 17 5-5" }],
  ["path", { d: "m9.5 12 5 5" }]
];

// node_modules/lucide/dist/esm/icons/archive.mjs
var Archive = [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
  ["path", { d: "M10 12h4" }]
];

// node_modules/lucide/dist/esm/icons/armchair.mjs
var Armchair = [
  ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }],
  [
    "path",
    {
      d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
    }
  ],
  ["path", { d: "M5 18v2" }],
  ["path", { d: "M19 18v2" }]
];

// node_modules/lucide/dist/esm/icons/arrow-big-down-dash.mjs
var ArrowBigDownDash = [
  [
    "path",
    {
      d: "M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z"
    }
  ],
  ["path", { d: "M9 4h6" }]
];

// node_modules/lucide/dist/esm/icons/arrow-big-down.mjs
var ArrowBigDown = [
  [
    "path",
    {
      d: "M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/arrow-big-left-dash.mjs
var ArrowBigLeftDash = [
  [
    "path",
    {
      d: "M13 9a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707l6.94 6.94a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"
    }
  ],
  ["path", { d: "M20 9v6" }]
];

// node_modules/lucide/dist/esm/icons/arrow-big-left.mjs
var ArrowBigLeft = [
  [
    "path",
    {
      d: "M10.793 19.793a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/arrow-big-right-dash.mjs
var ArrowBigRightDash = [
  [
    "path",
    {
      d: "M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"
    }
  ],
  ["path", { d: "M4 9v6" }]
];

// node_modules/lucide/dist/esm/icons/arrow-big-up-dash.mjs
var ArrowBigUpDash = [
  [
    "path",
    {
      d: "M14 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-6.939-6.939a1.207 1.207 0 0 0-1.708 0l-6.94 6.94a.707.707 0 0 0 .5 1.206H8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1z"
    }
  ],
  ["path", { d: "M9 20h6" }]
];

// node_modules/lucide/dist/esm/icons/arrow-big-right.mjs
var ArrowBigRight = [
  [
    "path",
    {
      d: "M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/arrow-big-up.mjs
var ArrowBigUp = [
  [
    "path",
    {
      d: "M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/arrow-down-0-1.mjs
var ArrowDown01 = [
  ["path", { d: "m3 16 4 4 4-4" }],
  ["path", { d: "M7 20V4" }],
  ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }],
  ["path", { d: "M17 20v-6h-2" }],
  ["path", { d: "M15 20h4" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-1-0.mjs
var ArrowDown10 = [
  ["path", { d: "m3 16 4 4 4-4" }],
  ["path", { d: "M7 20V4" }],
  ["path", { d: "M17 10V4h-2" }],
  ["path", { d: "M15 10h4" }],
  ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-a-z.mjs
var ArrowDownAZ = [
  ["path", { d: "m3 16 4 4 4-4" }],
  ["path", { d: "M7 20V4" }],
  ["path", { d: "M20 8h-5" }],
  ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }],
  ["path", { d: "M15 14h5l-5 6h5" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-from-line.mjs
var ArrowDownFromLine = [
  ["path", { d: "M19 3H5" }],
  ["path", { d: "M12 21V7" }],
  ["path", { d: "m6 15 6 6 6-6" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-left.mjs
var ArrowDownLeft = [
  ["path", { d: "M17 7 7 17" }],
  ["path", { d: "M17 17H7V7" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-narrow-wide.mjs
var ArrowDownNarrowWide = [
  ["path", { d: "m3 16 4 4 4-4" }],
  ["path", { d: "M7 20V4" }],
  ["path", { d: "M11 4h4" }],
  ["path", { d: "M11 8h7" }],
  ["path", { d: "M11 12h10" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-right.mjs
var ArrowDownRight = [
  ["path", { d: "m7 7 10 10" }],
  ["path", { d: "M17 7v10H7" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-to-dot.mjs
var ArrowDownToDot = [
  ["path", { d: "M12 2v14" }],
  ["path", { d: "m19 9-7 7-7-7" }],
  ["circle", { cx: "12", cy: "21", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-to-line.mjs
var ArrowDownToLine = [
  ["path", { d: "M12 17V3" }],
  ["path", { d: "m6 11 6 6 6-6" }],
  ["path", { d: "M19 21H5" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-up.mjs
var ArrowDownUp = [
  ["path", { d: "m3 16 4 4 4-4" }],
  ["path", { d: "M7 20V4" }],
  ["path", { d: "m21 8-4-4-4 4" }],
  ["path", { d: "M17 4v16" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-wide-narrow.mjs
var ArrowDownWideNarrow = [
  ["path", { d: "m3 16 4 4 4-4" }],
  ["path", { d: "M7 20V4" }],
  ["path", { d: "M11 4h10" }],
  ["path", { d: "M11 8h7" }],
  ["path", { d: "M11 12h4" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down-z-a.mjs
var ArrowDownZA = [
  ["path", { d: "m3 16 4 4 4-4" }],
  ["path", { d: "M7 4v16" }],
  ["path", { d: "M15 4h5l-5 6h5" }],
  ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }],
  ["path", { d: "M20 18h-5" }]
];

// node_modules/lucide/dist/esm/icons/arrow-down.mjs
var ArrowDown = [
  ["path", { d: "M12 5v14" }],
  ["path", { d: "m19 12-7 7-7-7" }]
];

// node_modules/lucide/dist/esm/icons/arrow-left-from-line.mjs
var ArrowLeftFromLine = [
  ["path", { d: "m9 6-6 6 6 6" }],
  ["path", { d: "M3 12h14" }],
  ["path", { d: "M21 19V5" }]
];

// node_modules/lucide/dist/esm/icons/arrow-left-right.mjs
var ArrowLeftRight = [
  ["path", { d: "M8 3 4 7l4 4" }],
  ["path", { d: "M4 7h16" }],
  ["path", { d: "m16 21 4-4-4-4" }],
  ["path", { d: "M20 17H4" }]
];

// node_modules/lucide/dist/esm/icons/arrow-left-to-line.mjs
var ArrowLeftToLine = [
  ["path", { d: "M3 19V5" }],
  ["path", { d: "m13 6-6 6 6 6" }],
  ["path", { d: "M7 12h14" }]
];

// node_modules/lucide/dist/esm/icons/arrow-left.mjs
var ArrowLeft = [
  ["path", { d: "m12 19-7-7 7-7" }],
  ["path", { d: "M19 12H5" }]
];

// node_modules/lucide/dist/esm/icons/arrow-right-from-line.mjs
var ArrowRightFromLine = [
  ["path", { d: "M3 5v14" }],
  ["path", { d: "M21 12H7" }],
  ["path", { d: "m15 18 6-6-6-6" }]
];

// node_modules/lucide/dist/esm/icons/arrow-right-left.mjs
var ArrowRightLeft = [
  ["path", { d: "m16 3 4 4-4 4" }],
  ["path", { d: "M20 7H4" }],
  ["path", { d: "m8 21-4-4 4-4" }],
  ["path", { d: "M4 17h16" }]
];

// node_modules/lucide/dist/esm/icons/arrow-right-to-line.mjs
var ArrowRightToLine = [
  ["path", { d: "M17 12H3" }],
  ["path", { d: "m11 18 6-6-6-6" }],
  ["path", { d: "M21 5v14" }]
];

// node_modules/lucide/dist/esm/icons/arrow-right.mjs
var ArrowRight = [
  ["path", { d: "M5 12h14" }],
  ["path", { d: "m12 5 7 7-7 7" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-0-1.mjs
var ArrowUp01 = [
  ["path", { d: "m3 8 4-4 4 4" }],
  ["path", { d: "M7 4v16" }],
  ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }],
  ["path", { d: "M17 20v-6h-2" }],
  ["path", { d: "M15 20h4" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-1-0.mjs
var ArrowUp10 = [
  ["path", { d: "m3 8 4-4 4 4" }],
  ["path", { d: "M7 4v16" }],
  ["path", { d: "M17 10V4h-2" }],
  ["path", { d: "M15 10h4" }],
  ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-a-z.mjs
var ArrowUpAZ = [
  ["path", { d: "m3 8 4-4 4 4" }],
  ["path", { d: "M7 4v16" }],
  ["path", { d: "M20 8h-5" }],
  ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }],
  ["path", { d: "M15 14h5l-5 6h5" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-down.mjs
var ArrowUpDown = [
  ["path", { d: "m21 16-4 4-4-4" }],
  ["path", { d: "M17 20V4" }],
  ["path", { d: "m3 8 4-4 4 4" }],
  ["path", { d: "M7 4v16" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-from-dot.mjs
var ArrowUpFromDot = [
  ["path", { d: "m5 9 7-7 7 7" }],
  ["path", { d: "M12 16V2" }],
  ["circle", { cx: "12", cy: "21", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-from-line.mjs
var ArrowUpFromLine = [
  ["path", { d: "m18 9-6-6-6 6" }],
  ["path", { d: "M12 3v14" }],
  ["path", { d: "M5 21h14" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-left.mjs
var ArrowUpLeft = [
  ["path", { d: "M7 17V7h10" }],
  ["path", { d: "M17 17 7 7" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-narrow-wide.mjs
var ArrowUpNarrowWide = [
  ["path", { d: "m3 8 4-4 4 4" }],
  ["path", { d: "M7 4v16" }],
  ["path", { d: "M11 12h4" }],
  ["path", { d: "M11 16h7" }],
  ["path", { d: "M11 20h10" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-right.mjs
var ArrowUpRight = [
  ["path", { d: "M7 7h10v10" }],
  ["path", { d: "M7 17 17 7" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-to-line.mjs
var ArrowUpToLine = [
  ["path", { d: "M5 3h14" }],
  ["path", { d: "m18 13-6-6-6 6" }],
  ["path", { d: "M12 7v14" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-wide-narrow.mjs
var ArrowUpWideNarrow = [
  ["path", { d: "m3 8 4-4 4 4" }],
  ["path", { d: "M7 4v16" }],
  ["path", { d: "M11 12h10" }],
  ["path", { d: "M11 16h7" }],
  ["path", { d: "M11 20h4" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up-z-a.mjs
var ArrowUpZA = [
  ["path", { d: "m3 8 4-4 4 4" }],
  ["path", { d: "M7 4v16" }],
  ["path", { d: "M15 4h5l-5 6h5" }],
  ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }],
  ["path", { d: "M20 18h-5" }]
];

// node_modules/lucide/dist/esm/icons/arrow-up.mjs
var ArrowUp = [
  ["path", { d: "m5 12 7-7 7 7" }],
  ["path", { d: "M12 19V5" }]
];

// node_modules/lucide/dist/esm/icons/arrows-up-from-line.mjs
var ArrowsUpFromLine = [
  ["path", { d: "m4 6 3-3 3 3" }],
  ["path", { d: "M7 17V3" }],
  ["path", { d: "m14 6 3-3 3 3" }],
  ["path", { d: "M17 17V3" }],
  ["path", { d: "M4 21h16" }]
];

// node_modules/lucide/dist/esm/icons/asterisk.mjs
var Asterisk = [
  ["path", { d: "M12 5v14" }],
  ["path", { d: "m18.065 8.496-12.125 7" }],
  ["path", { d: "m5.94 8.504 12.125 7" }]
];

// node_modules/lucide/dist/esm/icons/astroid.mjs
var Astroid = [
  [
    "path",
    {
      d: "M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/atom.mjs
var Atom = [
  ["circle", { cx: "12", cy: "12", r: "1" }],
  [
    "path",
    {
      d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
    }
  ],
  [
    "path",
    {
      d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/at-sign.mjs
var AtSign = [
  ["circle", { cx: "12", cy: "12", r: "4" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]
];

// node_modules/lucide/dist/esm/icons/audio-lines-off.mjs
var AudioLinesOff = [
  ["path", { d: "M10 10v11" }],
  ["path", { d: "M10 3v1.35" }],
  ["path", { d: "M14 14v1" }],
  ["path", { d: "M14 8v.35" }],
  ["path", { d: "M18 5v7.35" }],
  ["path", { d: "M2 10v3" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M22 10v3" }],
  ["path", { d: "M6 6v11" }]
];

// node_modules/lucide/dist/esm/icons/audio-lines-x.mjs
var AudioLinesX = [
  ["path", { d: "M10 3v18" }],
  ["path", { d: "M14 8v6.35" }],
  ["path", { d: "m17 17 5 5" }],
  ["path", { d: "M18 5v8.1" }],
  ["path", { d: "M2 10v3" }],
  ["path", { d: "M22 10v3" }],
  ["path", { d: "m22 17-5 5" }],
  ["path", { d: "M6 6v11" }]
];

// node_modules/lucide/dist/esm/icons/audio-lines.mjs
var AudioLines = [
  ["path", { d: "M2 10v3" }],
  ["path", { d: "M6 6v11" }],
  ["path", { d: "M10 3v18" }],
  ["path", { d: "M14 8v7" }],
  ["path", { d: "M18 5v13" }],
  ["path", { d: "M22 10v3" }]
];

// node_modules/lucide/dist/esm/icons/audio-waveform.mjs
var AudioWaveform = [
  [
    "path",
    {
      d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/award.mjs
var Award = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/axe.mjs
var Axe = [
  ["path", { d: "m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9" }],
  [
    "path",
    {
      d: "M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/axis-3d.mjs
var Axis3d = [
  ["path", { d: "M13.5 10.5 15 9" }],
  ["path", { d: "M4 4v15a1 1 0 0 0 1 1h15" }],
  ["path", { d: "M4.293 19.707 6 18" }],
  ["path", { d: "m9 15 1.5-1.5" }]
];

// node_modules/lucide/dist/esm/icons/baby.mjs
var Baby = [
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }],
  ["path", { d: "M15 12h.01" }],
  [
    "path",
    {
      d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
    }
  ],
  ["path", { d: "M9 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/backpack.mjs
var Backpack = [
  ["path", { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }],
  ["path", { d: "M8 10h8" }],
  ["path", { d: "M8 18h8" }],
  ["path", { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" }],
  ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }]
];

// node_modules/lucide/dist/esm/icons/badge-alert.mjs
var BadgeAlert = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
];

// node_modules/lucide/dist/esm/icons/badge-cent.mjs
var BadgeCent = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "M12 7v10" }],
  ["path", { d: "M15.4 10a4 4 0 1 0 0 4" }]
];

// node_modules/lucide/dist/esm/icons/badge-check.mjs
var BadgeCheck = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "m16 9-5.5 5.5L8 12" }]
];

// node_modules/lucide/dist/esm/icons/badge-dollar-sign.mjs
var BadgeDollarSign = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
  ["path", { d: "M12 18V6" }]
];

// node_modules/lucide/dist/esm/icons/badge-euro.mjs
var BadgeEuro = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "M7 12h5" }],
  ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]
];

// node_modules/lucide/dist/esm/icons/badge-indian-rupee.mjs
var BadgeIndianRupee = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "M8 8h8" }],
  ["path", { d: "M8 12h8" }],
  ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8" }]
];

// node_modules/lucide/dist/esm/icons/badge-info.mjs
var BadgeInfo = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "12" }],
  ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8" }]
];

// node_modules/lucide/dist/esm/icons/badge-japanese-yen.mjs
var BadgeJapaneseYen = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "m9 8 3 3v7" }],
  ["path", { d: "m12 11 3-3" }],
  ["path", { d: "M9 12h6" }],
  ["path", { d: "M9 16h6" }]
];

// node_modules/lucide/dist/esm/icons/badge-minus.mjs
var BadgeMinus = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
];

// node_modules/lucide/dist/esm/icons/badge-percent.mjs
var BadgePercent = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "m15 9-6 6" }],
  ["path", { d: "M9 9h.01" }],
  ["path", { d: "M15 15h.01" }]
];

// node_modules/lucide/dist/esm/icons/badge-plus.mjs
var BadgePlus = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "16" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
];

// node_modules/lucide/dist/esm/icons/badge-pound-sterling.mjs
var BadgePoundSterling = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "M8 12h4" }],
  ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0" }],
  ["path", { d: "M8 16h7" }]
];

// node_modules/lucide/dist/esm/icons/badge-question-mark.mjs
var BadgeQuestionMark = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
  ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17" }]
];

// node_modules/lucide/dist/esm/icons/badge-russian-ruble.mjs
var BadgeRussianRuble = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "M9 16h5" }],
  ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9" }]
];

// node_modules/lucide/dist/esm/icons/badge-swiss-franc.mjs
var BadgeSwissFranc = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["path", { d: "M11 17V8h4" }],
  ["path", { d: "M11 12h3" }],
  ["path", { d: "M9 16h4" }]
];

// node_modules/lucide/dist/esm/icons/badge-turkish-lira.mjs
var BadgeTurkishLira = [
  ["path", { d: "M11 7v10a5 5 0 0 0 5-5" }],
  ["path", { d: "m15 8-6 3" }],
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/badge-x.mjs
var BadgeX = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ],
  ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }],
  ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]
];

// node_modules/lucide/dist/esm/icons/badge.mjs
var Badge = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/baggage-claim.mjs
var BaggageClaim = [
  ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }],
  ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }],
  ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1" }],
  ["circle", { cx: "18", cy: "20", r: "2" }],
  ["circle", { cx: "9", cy: "20", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/balloon.mjs
var Balloon = [
  ["path", { d: "M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" }],
  ["path", { d: "M12 6a2 2 0 0 1 2 2" }],
  ["path", { d: "M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" }]
];

// node_modules/lucide/dist/esm/icons/ban.mjs
var Ban = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M4.929 4.929 19.07 19.071" }]
];

// node_modules/lucide/dist/esm/icons/bandage.mjs
var Bandage = [
  ["path", { d: "M10 10.01h.01" }],
  ["path", { d: "M10 14.01h.01" }],
  ["path", { d: "M14 10.01h.01" }],
  ["path", { d: "M14 14.01h.01" }],
  ["path", { d: "M18 6v12" }],
  ["path", { d: "M6 6v12" }],
  ["rect", { x: "2", y: "6", width: "20", height: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/banana.mjs
var Banana = [
  ["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" }],
  [
    "path",
    {
      d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/banknote-arrow-down.mjs
var BanknoteArrowDown = [
  ["path", { d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }],
  ["path", { d: "m16 19 3 3 3-3" }],
  ["path", { d: "M18 12h.01" }],
  ["path", { d: "M19 16v6" }],
  ["path", { d: "M6 12h.01" }],
  ["circle", { cx: "12", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/banknote-arrow-up.mjs
var BanknoteArrowUp = [
  ["path", { d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }],
  ["path", { d: "M18 12h.01" }],
  ["path", { d: "M19 22v-6" }],
  ["path", { d: "m22 19-3-3-3 3" }],
  ["path", { d: "M6 12h.01" }],
  ["circle", { cx: "12", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/banknote-check.mjs
var BanknoteCheck = [
  ["path", { d: "M11.748 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.875" }],
  ["path", { d: "m16 19 2 2 4-4" }],
  ["path", { d: "M18 12h.01" }],
  ["path", { d: "M6 12h.01" }],
  ["circle", { cx: "12", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/banknote-x.mjs
var BanknoteX = [
  ["path", { d: "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }],
  ["path", { d: "m17 17 5 5" }],
  ["path", { d: "M18 12h.01" }],
  ["path", { d: "m22 17-5 5" }],
  ["path", { d: "M6 12h.01" }],
  ["circle", { cx: "12", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/banknote.mjs
var Banknote = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }],
  ["circle", { cx: "12", cy: "12", r: "2" }],
  ["path", { d: "M6 12h.01M18 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/barcode.mjs
var Barcode = [
  ["path", { d: "M3 5v14" }],
  ["path", { d: "M8 5v14" }],
  ["path", { d: "M12 5v14" }],
  ["path", { d: "M17 5v14" }],
  ["path", { d: "M21 5v14" }]
];

// node_modules/lucide/dist/esm/icons/barrel.mjs
var Barrel = [
  ["path", { d: "M10 3a41 41 0 000 18" }],
  ["path", { d: "M14 3a41 41 0 010 18" }],
  [
    "path",
    {
      d: "M16.997 21a2 2 0 001.68-.92 15.25 15.25 0 000-16.16 2 2 0 00-1.68-.92h-10a2 2 0 00-1.681.92 15.25 15.25 0 000 16.16 2 2 0 001.681.92z"
    }
  ],
  ["path", { d: "M3.54 16h16.914" }],
  ["path", { d: "M3.54 8h16.914" }]
];

// node_modules/lucide/dist/esm/icons/baseline.mjs
var Baseline = [
  ["path", { d: "M4 20h16" }],
  ["path", { d: "m6 16 6-12 6 12" }],
  ["path", { d: "M8 12h8" }]
];

// node_modules/lucide/dist/esm/icons/bath.mjs
var Bath = [
  ["path", { d: "M10 4 8 6" }],
  ["path", { d: "M17 19v2" }],
  ["path", { d: "M2 12h20" }],
  ["path", { d: "M7 19v2" }],
  ["path", { d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" }]
];

// node_modules/lucide/dist/esm/icons/battery-charging.mjs
var BatteryCharging = [
  ["path", { d: "m11 7-3 5h4l-3 5" }],
  ["path", { d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" }],
  ["path", { d: "M22 14v-4" }],
  ["path", { d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" }]
];

// node_modules/lucide/dist/esm/icons/battery-full.mjs
var BatteryFull = [
  ["path", { d: "M10 10v4" }],
  ["path", { d: "M14 10v4" }],
  ["path", { d: "M22 14v-4" }],
  ["path", { d: "M6 10v4" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/battery-low.mjs
var BatteryLow = [
  ["path", { d: "M22 14v-4" }],
  ["path", { d: "M6 14v-4" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/battery-medium.mjs
var BatteryMedium = [
  ["path", { d: "M10 14v-4" }],
  ["path", { d: "M22 14v-4" }],
  ["path", { d: "M6 14v-4" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/battery-plus.mjs
var BatteryPlus = [
  ["path", { d: "M10 9v6" }],
  ["path", { d: "M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" }],
  ["path", { d: "M22 14v-4" }],
  ["path", { d: "M7 12h6" }],
  ["path", { d: "M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" }]
];

// node_modules/lucide/dist/esm/icons/battery-warning.mjs
var BatteryWarning = [
  ["path", { d: "M10 17h.01" }],
  ["path", { d: "M10 7v6" }],
  ["path", { d: "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M22 14v-4" }],
  ["path", { d: "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }]
];

// node_modules/lucide/dist/esm/icons/battery.mjs
var Battery = [
  ["path", { d: "M 22 14 L 22 10" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/beaker.mjs
var Beaker = [
  ["path", { d: "M4.5 3h15" }],
  ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }],
  ["path", { d: "M6 14h12" }]
];

// node_modules/lucide/dist/esm/icons/bean-off.mjs
var BeanOff = [
  ["path", { d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" }],
  ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" }],
  ["path", { d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/bean.mjs
var Bean = [
  [
    "path",
    {
      d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
    }
  ],
  ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28" }]
];

// node_modules/lucide/dist/esm/icons/bed-double.mjs
var BedDouble = [
  ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }],
  ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }],
  ["path", { d: "M12 4v6" }],
  ["path", { d: "M2 18h20" }]
];

// node_modules/lucide/dist/esm/icons/bed-single.mjs
var BedSingle = [
  ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }],
  ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }],
  ["path", { d: "M3 18h18" }]
];

// node_modules/lucide/dist/esm/icons/bed.mjs
var Bed = [
  ["path", { d: "M2 4v16" }],
  ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }],
  ["path", { d: "M2 17h20" }],
  ["path", { d: "M6 8v9" }]
];

// node_modules/lucide/dist/esm/icons/beef-off.mjs
var BeefOff = [
  ["path", { d: "M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12" }],
  ["path", { d: "M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04" }],
  ["path", { d: "M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }],
  ["path", { d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393" }],
  ["path", { d: "m2 2 20 20" }],
  [
    "path",
    {
      d: "M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/beef.mjs
var Beef = [
  [
    "path",
    {
      d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"
    }
  ],
  [
    "path",
    {
      d: "m18.5 6 1.754 3.5a6.48 6.48 0 0 1-1.854 8.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
    }
  ],
  ["circle", { cx: "12.5", cy: "8.5", r: "2.5" }]
];

// node_modules/lucide/dist/esm/icons/beer-off.mjs
var BeerOff = [
  ["path", { d: "M13 13v5" }],
  ["path", { d: "M17 11.47V8" }],
  ["path", { d: "M17 11h1a3 3 0 0 1 2.745 4.211" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" }],
  ["path", { d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" }],
  [
    "path",
    {
      d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"
    }
  ],
  ["path", { d: "M9 14.6V18" }]
];

// node_modules/lucide/dist/esm/icons/beer.mjs
var Beer = [
  ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1" }],
  ["path", { d: "M9 12v6" }],
  ["path", { d: "M13 12v6" }],
  [
    "path",
    {
      d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
    }
  ],
  ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }]
];

// node_modules/lucide/dist/esm/icons/bell-check.mjs
var BellCheck = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
  ["path", { d: "m15 8 2 2 4-4" }],
  ["path", { d: "M16.8607 4.4824A6 6 0 0 0 6 8C6 12.499 4.589 13.956 3.262 15.326" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17H20A1 1 0 0 0 20.74 15.327C20.209 14.779 19.665 14.218 19.203 13.454"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/bell-electric.mjs
var BellElectric = [
  ["path", { d: "M18.518 17.347A7 7 0 0 1 14 19" }],
  ["path", { d: "M18.8 4A11 11 0 0 1 20 9" }],
  ["path", { d: "M9 9h.01" }],
  ["circle", { cx: "20", cy: "16", r: "2" }],
  ["circle", { cx: "9", cy: "9", r: "7" }],
  ["rect", { x: "4", y: "16", width: "10", height: "6", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/bell-dot.mjs
var BellDot = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
  [
    "path",
    {
      d: "M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348"
    }
  ],
  ["circle", { cx: "18", cy: "5", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/bell-minus.mjs
var BellMinus = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
  ["path", { d: "M15 8h6" }],
  [
    "path",
    {
      d: "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/bell-off.mjs
var BellOff = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
  ["path", { d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" }]
];

// node_modules/lucide/dist/esm/icons/bell-plus.mjs
var BellPlus = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
  ["path", { d: "M15 8h6" }],
  ["path", { d: "M18 5v6" }],
  [
    "path",
    {
      d: "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/bell-ring.mjs
var BellRing = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    }
  ],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8" }]
];

// node_modules/lucide/dist/esm/icons/between-horizontal-end.mjs
var BetweenHorizontalEnd = [
  ["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1" }],
  ["path", { d: "m22 15-3-3 3-3" }],
  ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/bell.mjs
var Bell = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/between-horizontal-start.mjs
var BetweenHorizontalStart = [
  ["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1" }],
  ["path", { d: "m2 9 3 3-3 3" }],
  ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/between-vertical-end.mjs
var BetweenVerticalEnd = [
  ["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1" }],
  ["path", { d: "m9 22 3-3 3 3" }],
  ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/between-vertical-start.mjs
var BetweenVerticalStart = [
  ["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1" }],
  ["path", { d: "m15 2-3 3-3-3" }],
  ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/biceps-flexed.mjs
var BicepsFlexed = [
  [
    "path",
    {
      d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"
    }
  ],
  ["path", { d: "M15 14a5 5 0 0 0-7.584 2" }],
  ["path", { d: "M9.964 6.825C8.019 7.977 9.5 13 8 15" }]
];

// node_modules/lucide/dist/esm/icons/bike.mjs
var Bike = [
  ["circle", { cx: "18.5", cy: "17.5", r: "3.5" }],
  ["circle", { cx: "5.5", cy: "17.5", r: "3.5" }],
  ["circle", { cx: "15", cy: "5", r: "1" }],
  ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2" }]
];

// node_modules/lucide/dist/esm/icons/binary.mjs
var Binary = [
  ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2" }],
  ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2" }],
  ["path", { d: "M6 20h4" }],
  ["path", { d: "M14 10h4" }],
  ["path", { d: "M6 14h2v6" }],
  ["path", { d: "M14 4h2v6" }]
];

// node_modules/lucide/dist/esm/icons/binoculars.mjs
var Binoculars = [
  ["path", { d: "M10 10h4" }],
  ["path", { d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }],
  [
    "path",
    {
      d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"
    }
  ],
  ["path", { d: "M 22 16 L 2 16" }],
  [
    "path",
    {
      d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" }]
];

// node_modules/lucide/dist/esm/icons/biohazard.mjs
var Biohazard = [
  ["circle", { cx: "12", cy: "11.9", r: "2" }],
  ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }],
  ["path", { d: "m8.9 10.1 1.4.8" }],
  ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }],
  ["path", { d: "m15.1 10.1-1.4.8" }],
  ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }],
  ["path", { d: "M12 13.9v1.6" }],
  ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0" }],
  ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }],
  ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5" }]
];

// node_modules/lucide/dist/esm/icons/bird.mjs
var Bird = [
  ["path", { d: "M16 7h.01" }],
  ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }],
  ["path", { d: "m20 7 2 .5-2 .5" }],
  ["path", { d: "M10 18v3" }],
  ["path", { d: "M14 17.75V21" }],
  ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61" }]
];

// node_modules/lucide/dist/esm/icons/birdhouse.mjs
var Birdhouse = [
  ["path", { d: "M12 18v4" }],
  ["path", { d: "m17 18 1.956-11.468" }],
  ["path", { d: "m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" }],
  ["path", { d: "M4 18h16" }],
  ["path", { d: "M7 18 5.044 6.532" }],
  ["circle", { cx: "12", cy: "10", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/bitcoin.mjs
var Bitcoin = [
  [
    "path",
    {
      d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/blender.mjs
var Blender = [
  [
    "path",
    {
      d: "M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14z"
    }
  ],
  ["path", { d: "m17 2-1 12" }],
  ["path", { d: "M8.006 14 7 2" }],
  ["path", { d: "M7.565 8.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75" }],
  ["path", { d: "M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5" }],
  ["path", { d: "M12 18h.01" }]
];

// node_modules/lucide/dist/esm/icons/blend.mjs
var Blend = [
  ["circle", { cx: "15", cy: "9", r: "7" }],
  ["circle", { cx: "9", cy: "15", r: "7" }]
];

// node_modules/lucide/dist/esm/icons/blinds.mjs
var Blinds = [
  ["path", { d: "M3 3h18" }],
  ["path", { d: "M20 7H8" }],
  ["path", { d: "M20 11H8" }],
  ["path", { d: "M10 19h10" }],
  ["path", { d: "M8 15h12" }],
  ["path", { d: "M4 3v14" }],
  ["circle", { cx: "4", cy: "19", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/blocks.mjs
var Blocks = [
  [
    "path",
    {
      d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"
    }
  ],
  ["rect", { x: "14", y: "2", width: "8", height: "8", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/bluetooth-connected.mjs
var BluetoothConnected = [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "12" }],
  ["line", { x1: "3", x2: "6", y1: "12", y2: "12" }]
];

// node_modules/lucide/dist/esm/icons/bluetooth-off.mjs
var BluetoothOff = [
  ["path", { d: "m17 17-5 5V12l-5 5" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M14.5 9.5 17 7l-5-5v4.5" }]
];

// node_modules/lucide/dist/esm/icons/bluetooth.mjs
var Bluetooth = [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }]];

// node_modules/lucide/dist/esm/icons/bluetooth-searching.mjs
var BluetoothSearching = [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }],
  ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66" }],
  ["path", { d: "M18 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/bolt.mjs
var Bolt = [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/bold.mjs
var Bold = [
  ["path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }]
];

// node_modules/lucide/dist/esm/icons/bomb.mjs
var Bomb = [
  ["circle", { cx: "11", cy: "13", r: "9" }],
  [
    "path",
    { d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" }
  ],
  ["path", { d: "m22 2-1.5 1.5" }]
];

// node_modules/lucide/dist/esm/icons/bone-fracture.mjs
var BoneFracture = [
  [
    "path",
    {
      d: "M14 4.5a1 1 0 0 1 5 0 .5.5 0 0 0 .5.5 1 1 0 0 1 0 5c-.81 0-1.8-.7-2.5 0l-1.958 1.957a.15.15 0 0 1-.252-.072l-.493-2.07a.15.15 0 0 0-.111-.112l-2.072-.494a.15.15 0 0 1-.072-.252L14 7c.7-.7 0-1.69 0-2.5"
    }
  ],
  ["path", { d: "m16 20-1-2" }],
  ["path", { d: "m20 16-2-1" }],
  ["path", { d: "m4 8 2 1" }],
  ["path", { d: "m8 4 1 2" }],
  [
    "path",
    {
      d: "M9.698 14.19a.15.15 0 0 0 .112.112l2.074.489a.15.15 0 0 1 .072.252L10 17c-.7.7 0 1.69 0 2.5a1 1 0 0 1-5 0 .495.495 0 0 0-.5-.5 1 1 0 0 1 0-5c.81 0 1.8.7 2.5 0l1.956-1.957a.15.15 0 0 1 .252.072z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/bone.mjs
var Bone = [
  [
    "path",
    {
      d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/book-a.mjs
var BookA = [
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["path", { d: "m8 13 4-7 4 7" }],
  ["path", { d: "M9.1 11h5.7" }]
];

// node_modules/lucide/dist/esm/icons/book-alert.mjs
var BookAlert = [
  ["path", { d: "M12 13h.01" }],
  ["path", { d: "M12 6v3" }],
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ]
];

// node_modules/lucide/dist/esm/icons/book-audio.mjs
var BookAudio = [
  ["path", { d: "M12 6v7" }],
  ["path", { d: "M16 8v3" }],
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["path", { d: "M8 8v3" }]
];

// node_modules/lucide/dist/esm/icons/book-bookmark.mjs
var BookBookmark = [
  [
    "path",
    {
      d: "M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2"
    }
  ],
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a1 1 0 010-5H20" }
  ]
];

// node_modules/lucide/dist/esm/icons/book-check.mjs
var BookCheck = [
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["path", { d: "m9 9.5 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/book-copy.mjs
var BookCopy = [
  ["path", { d: "M5 7a2 2 0 0 0-2 2v11" }],
  ["path", { d: "M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21" }],
  [
    "path",
    { d: "M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10" }
  ]
];

// node_modules/lucide/dist/esm/icons/book-dashed.mjs
var BookDashed = [
  ["path", { d: "M12 17h1.5" }],
  ["path", { d: "M12 22h1.5" }],
  ["path", { d: "M12 2h1.5" }],
  ["path", { d: "M17.5 22H19a1 1 0 0 0 1-1" }],
  ["path", { d: "M17.5 2H19a1 1 0 0 1 1 1v1.5" }],
  ["path", { d: "M20 14v3h-2.5" }],
  ["path", { d: "M20 8.5V10" }],
  ["path", { d: "M4 10V8.5" }],
  ["path", { d: "M4 19.5V14" }],
  ["path", { d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8" }],
  ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8" }]
];

// node_modules/lucide/dist/esm/icons/book-down.mjs
var BookDown = [
  ["path", { d: "M12 13V7" }],
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["path", { d: "m9 10 3 3 3-3" }]
];

// node_modules/lucide/dist/esm/icons/book-headphones.mjs
var BookHeadphones = [
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2" }],
  ["circle", { cx: "15", cy: "12", r: "1" }],
  ["circle", { cx: "9", cy: "12", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/book-heart.mjs
var BookHeart = [
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  [
    "path",
    {
      d: "M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/book-image.mjs
var BookImage = [
  ["path", { d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" }],
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["circle", { cx: "10", cy: "8", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/book-key.mjs
var BookKey = [
  ["path", { d: "M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" }],
  ["path", { d: "M17 2v6" }],
  ["path", { d: "M17 4h2" }],
  ["path", { d: "M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
  ["circle", { cx: "17", cy: "10", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/book-lock.mjs
var BookLock = [
  ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2" }],
  ["path", { d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }],
  ["rect", { x: "12", y: "6", width: "8", height: "5", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/book-minus.mjs
var BookMinus = [
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["path", { d: "M9 10h6" }]
];

// node_modules/lucide/dist/esm/icons/book-open-check.mjs
var BookOpenCheck = [
  ["path", { d: "M12 5v16" }],
  ["path", { d: "m16 12 2 2 4-4" }],
  [
    "path",
    {
      d: "M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/book-open-text.mjs
var BookOpenText = [
  ["path", { d: "M12 5v16" }],
  ["path", { d: "M16 13h2" }],
  ["path", { d: "M16 9h2" }],
  [
    "path",
    {
      d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"
    }
  ],
  ["path", { d: "M6 13h2" }],
  ["path", { d: "M6 9h2" }]
];

// node_modules/lucide/dist/esm/icons/book-open.mjs
var BookOpen = [
  ["path", { d: "M12 5v16" }],
  [
    "path",
    {
      d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/book-plus.mjs
var BookPlus = [
  ["path", { d: "M12 7v6" }],
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["path", { d: "M9 10h6" }]
];

// node_modules/lucide/dist/esm/icons/book-search.mjs
var BookSearch = [
  ["path", { d: "M11 22H5.5a1 1 0 0 1 0-5h4.501" }],
  ["path", { d: "m21 22-1.879-1.878" }],
  ["path", { d: "M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" }],
  ["circle", { cx: "17", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/book-text.mjs
var BookText = [
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["path", { d: "M8 11h8" }],
  ["path", { d: "M8 7h6" }]
];

// node_modules/lucide/dist/esm/icons/book-type.mjs
var BookType = [
  ["path", { d: "M10 13h4" }],
  ["path", { d: "M12 6v7" }],
  ["path", { d: "M16 8V6H8v2" }],
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ]
];

// node_modules/lucide/dist/esm/icons/book-up-2.mjs
var BookUp2 = [
  ["path", { d: "M12 13V7" }],
  ["path", { d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }],
  ["path", { d: "m9 10 3-3 3 3" }],
  ["path", { d: "m9 5 3-3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/book-up.mjs
var BookUp = [
  ["path", { d: "M12 13V7" }],
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["path", { d: "m9 10 3-3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/book-user.mjs
var BookUser = [
  ["path", { d: "M15 13a3 3 0 1 0-6 0" }],
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["circle", { cx: "12", cy: "8", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/book-x.mjs
var BookX = [
  ["path", { d: "m14.5 7.5-5 5" }],
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ],
  ["path", { d: "m9.5 7.5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/book.mjs
var Book = [
  [
    "path",
    { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }
  ]
];

// node_modules/lucide/dist/esm/icons/bookmark-check.mjs
var BookmarkCheck = [
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"
    }
  ],
  ["path", { d: "m9 10 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/bookmark-minus.mjs
var BookmarkMinus = [
  ["path", { d: "M15 10H9" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/bookmark-off.mjs
var BookmarkOff = [
  [
    "path",
    {
      d: "M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5"
    }
  ],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M8.656 3H17a2 2 0 0 1 2 2v8.344" }]
];

// node_modules/lucide/dist/esm/icons/bookmark-plus.mjs
var BookmarkPlus = [
  ["path", { d: "M12 7v6" }],
  ["path", { d: "M15 10H9" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/bookmark-x.mjs
var BookmarkX = [
  ["path", { d: "m14.5 7.5-5 5" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"
    }
  ],
  ["path", { d: "m9.5 7.5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/bookmark.mjs
var Bookmark = [
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/boom-box.mjs
var BoomBox = [
  ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }],
  ["path", { d: "M8 8v1" }],
  ["path", { d: "M12 8v1" }],
  ["path", { d: "M16 8v1" }],
  ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2" }],
  ["circle", { cx: "8", cy: "15", r: "2" }],
  ["circle", { cx: "16", cy: "15", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/bot-message-square.mjs
var BotMessageSquare = [
  ["path", { d: "M12 6V2H8" }],
  ["path", { d: "M15 11v2" }],
  ["path", { d: "M2 12h2" }],
  ["path", { d: "M20 12h2" }],
  [
    "path",
    {
      d: "M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "M9 11v2" }]
];

// node_modules/lucide/dist/esm/icons/bot-off.mjs
var BotOff = [
  ["path", { d: "M13.67 8H18a2 2 0 0 1 2 2v4.33" }],
  ["path", { d: "M2 14h2" }],
  ["path", { d: "M20 14h2" }],
  ["path", { d: "M22 22 2 2" }],
  ["path", { d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" }],
  ["path", { d: "M9 13v2" }],
  ["path", { d: "M9.67 4H12v2.33" }]
];

// node_modules/lucide/dist/esm/icons/bot.mjs
var Bot = [
  ["path", { d: "M12 8V4H8" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }],
  ["path", { d: "M2 14h2" }],
  ["path", { d: "M20 14h2" }],
  ["path", { d: "M15 13v2" }],
  ["path", { d: "M9 13v2" }]
];

// node_modules/lucide/dist/esm/icons/bottle-wine.mjs
var BottleWine = [
  [
    "path",
    {
      d: "M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z"
    }
  ],
  ["path", { d: "M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" }]
];

// node_modules/lucide/dist/esm/icons/bow-arrow.mjs
var BowArrow = [
  ["path", { d: "M17 3h4v4" }],
  ["path", { d: "M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17" }],
  ["path", { d: "M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05" }],
  [
    "path",
    {
      d: "M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z"
    }
  ],
  ["path", { d: "M9.707 14.293 21 3" }]
];

// node_modules/lucide/dist/esm/icons/boxes.mjs
var Boxes = [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85" }],
  ["path", { d: "m7 16.5 5-3" }],
  ["path", { d: "M7 16.5v5.17" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
    }
  ],
  ["path", { d: "m17 16.5-5-3" }],
  ["path", { d: "m17 16.5 4.74-2.85" }],
  ["path", { d: "M17 16.5v5.17" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15" }],
  ["path", { d: "m12 8 4.74-2.85" }],
  ["path", { d: "M12 13.5V8" }]
];

// node_modules/lucide/dist/esm/icons/box.mjs
var Box = [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5" }],
  ["path", { d: "M12 22V12" }]
];

// node_modules/lucide/dist/esm/icons/braces.mjs
var Braces = [
  ["path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }],
  ["path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" }]
];

// node_modules/lucide/dist/esm/icons/brackets.mjs
var Brackets = [
  ["path", { d: "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" }],
  ["path", { d: "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" }]
];

// node_modules/lucide/dist/esm/icons/brain-circuit.mjs
var BrainCircuit = [
  [
    "path",
    { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }],
  ["path", { d: "M12 13h4" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1" }],
  ["path", { d: "M12 8h8" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2" }],
  ["circle", { cx: "16", cy: "13", r: ".5" }],
  ["circle", { cx: "18", cy: "3", r: ".5" }],
  ["circle", { cx: "20", cy: "21", r: ".5" }],
  ["circle", { cx: "20", cy: "8", r: ".5" }]
];

// node_modules/lucide/dist/esm/icons/brain-cog.mjs
var BrainCog = [
  ["path", { d: "m10.852 14.772-.383.923" }],
  ["path", { d: "m10.852 9.228-.383-.923" }],
  ["path", { d: "m13.148 14.772.382.924" }],
  ["path", { d: "m13.531 8.305-.383.923" }],
  ["path", { d: "m14.772 10.852.923-.383" }],
  ["path", { d: "m14.772 13.148.923.383" }],
  [
    "path",
    {
      d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"
    }
  ],
  ["path", { d: "M17.998 5.125a4 4 0 0 1 2.525 5.771" }],
  ["path", { d: "M19.505 10.294a4 4 0 0 1-1.5 7.706" }],
  [
    "path",
    { d: "M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516" }
  ],
  ["path", { d: "M4.5 10.291A4 4 0 0 0 6 18" }],
  ["path", { d: "M6.002 5.125a3 3 0 0 0 .4 1.375" }],
  ["path", { d: "m9.228 10.852-.923-.383" }],
  ["path", { d: "m9.228 13.148-.923.383" }],
  ["circle", { cx: "12", cy: "12", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/brain.mjs
var Brain = [
  ["path", { d: "M12 18V5" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77" }]
];

// node_modules/lucide/dist/esm/icons/brick-wall-fire.mjs
var BrickWallFire = [
  ["path", { d: "M16 3v2.107" }],
  [
    "path",
    {
      d: "M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"
    }
  ],
  ["path", { d: "M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" }],
  ["path", { d: "M3 15h5.253" }],
  ["path", { d: "M3 9h8.228" }],
  ["path", { d: "M8 15v6" }],
  ["path", { d: "M8 3v6" }]
];

// node_modules/lucide/dist/esm/icons/brick-wall-shield.mjs
var BrickWallShield = [
  ["path", { d: "M12 9v1.258" }],
  ["path", { d: "M16 3v5.46" }],
  ["path", { d: "M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75" }],
  [
    "path",
    {
      d: "M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"
    }
  ],
  ["path", { d: "M3 15h7" }],
  ["path", { d: "M3 9h12.142" }],
  ["path", { d: "M8 15v6" }],
  ["path", { d: "M8 3v6" }]
];

// node_modules/lucide/dist/esm/icons/bridge.mjs
var Bridge = [
  ["path", { d: "M10 9.728V16" }],
  ["path", { d: "M14 9.728V16" }],
  ["path", { d: "M18 20V4" }],
  ["path", { d: "m22 11-4-4A7.5 7.5 0 0 1 6 7l-4 4" }],
  ["path", { d: "M22 16H2" }],
  ["path", { d: "M6 20V4" }]
];

// node_modules/lucide/dist/esm/icons/brick-wall.mjs
var BrickWall = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M12 9v6" }],
  ["path", { d: "M16 15v6" }],
  ["path", { d: "M16 3v6" }],
  ["path", { d: "M3 15h18" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 15v6" }],
  ["path", { d: "M8 3v6" }]
];

// node_modules/lucide/dist/esm/icons/briefcase-business.mjs
var BriefcaseBusiness = [
  ["path", { d: "M12 12h.01" }],
  ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }],
  ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/briefcase-conveyor-belt.mjs
var BriefcaseConveyorBelt = [
  ["path", { d: "M10 20v2" }],
  ["path", { d: "M14 20v2" }],
  ["path", { d: "M18 20v2" }],
  ["path", { d: "M21 20H3" }],
  ["path", { d: "M6 20v2" }],
  ["path", { d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" }],
  ["rect", { x: "4", y: "6", width: "16", height: "10", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/briefcase-medical.mjs
var BriefcaseMedical = [
  ["path", { d: "M12 11v4" }],
  ["path", { d: "M14 13h-4" }],
  ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }],
  ["path", { d: "M18 6v14" }],
  ["path", { d: "M6 6v14" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/briefcase.mjs
var Briefcase = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/bring-to-front.mjs
var BringToFront = [
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2" }],
  ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }],
  ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" }]
];

// node_modules/lucide/dist/esm/icons/broccoli.mjs
var Broccoli = [
  ["path", { d: "M10 13a3 3 0 01-2.121-5.121" }],
  [
    "path",
    {
      d: "M15.606 14.204c-3.5 1.5-5.899 4.503-8.899 7.503A1 1 0 016 22c-2 0-4-2-4-4a1 1 0 01.293-.707c1.911-1.911 3.823-3.578 5.347-5.441"
    }
  ],
  ["path", { d: "M16.573 14.737A4 4 0 0114 11" }],
  [
    "path",
    {
      d: "M7.14 10.907a4 4 0 112.756-7.43A4 4 0 0116.7 4.48a2 2 0 012.82 2.82 4 4 0 011.002 6.805 4 4 0 11-7.51 1.59"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/broom-sparkles.mjs
var BroomSparkles = [
  ["path", { d: "M11 2v2" }],
  ["path", { d: "M12 3h-2" }],
  ["path", { d: "M13.5 10.5 22 2" }],
  [
    "path",
    {
      d: "M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z"
    }
  ],
  ["path", { d: "M20 15v4" }],
  ["path", { d: "M22 17h-4" }],
  ["path", { d: "M4 4v4" }],
  ["path", { d: "m5 18 2-2" }],
  ["path", { d: "M6 6H2" }],
  ["path", { d: "m7.699 10.7 5.602 5.601" }]
];

// node_modules/lucide/dist/esm/icons/broom.mjs
var Broom = [
  ["path", { d: "M13.5 10.5 22 2" }],
  [
    "path",
    {
      d: "M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z"
    }
  ],
  ["path", { d: "m5 18 2-2" }],
  ["path", { d: "m7.699 10.7 5.602 5.601" }]
];

// node_modules/lucide/dist/esm/icons/brush-cleaning.mjs
var BrushCleaning = [
  ["path", { d: "m16 22-1-4" }],
  [
    "path",
    {
      d: "M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1"
    }
  ],
  ["path", { d: "M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z" }],
  ["path", { d: "m8 22 1-4" }]
];

// node_modules/lucide/dist/esm/icons/brush.mjs
var Brush = [
  ["path", { d: "m11 10 3 3" }],
  ["path", { d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" }],
  ["path", { d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" }]
];

// node_modules/lucide/dist/esm/icons/bubbles.mjs
var Bubbles = [
  ["path", { d: "M7.001 15.085A1.5 1.5 0 0 1 9 16.5" }],
  ["circle", { cx: "18.5", cy: "8.5", r: "3.5" }],
  ["circle", { cx: "7.5", cy: "16.5", r: "5.5" }],
  ["circle", { cx: "7.5", cy: "4.5", r: "2.5" }]
];

// node_modules/lucide/dist/esm/icons/bug-off.mjs
var BugOff = [
  ["path", { d: "M12 20v-8" }],
  ["path", { d: "M12.656 7H14a4 4 0 0 1 4 4v1.344" }],
  ["path", { d: "M14.12 3.88 16 2" }],
  ["path", { d: "M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97" }],
  ["path", { d: "M22 13h-3.344" }],
  ["path", { d: "M3 21a4 4 0 0 1 3.81-4" }],
  ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97" }],
  ["path", { d: "M6 13H2" }],
  ["path", { d: "m8 2 1.88 1.88" }],
  ["path", { d: "M9.712 4.06A3 3 0 0 1 15 6v1.13" }]
];

// node_modules/lucide/dist/esm/icons/bug-play.mjs
var BugPlay = [
  ["path", { d: "M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97" }],
  [
    "path",
    {
      d: "M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"
    }
  ],
  ["path", { d: "M14.12 3.88 16 2" }],
  ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97" }],
  ["path", { d: "M3 21a4 4 0 0 1 3.81-4" }],
  ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97" }],
  ["path", { d: "M6 13H2" }],
  ["path", { d: "m8 2 1.88 1.88" }],
  ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13" }]
];

// node_modules/lucide/dist/esm/icons/bug.mjs
var Bug = [
  ["path", { d: "M12 20v-9" }],
  ["path", { d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" }],
  ["path", { d: "M14.12 3.88 16 2" }],
  ["path", { d: "M21 21a4 4 0 0 0-3.81-4" }],
  ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97" }],
  ["path", { d: "M22 13h-4" }],
  ["path", { d: "M3 21a4 4 0 0 1 3.81-4" }],
  ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97" }],
  ["path", { d: "M6 13H2" }],
  ["path", { d: "m8 2 1.88 1.88" }],
  ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13" }]
];

// node_modules/lucide/dist/esm/icons/building-complex-plus.mjs
var BuildingComplexPlus = [
  ["path", { d: "M10 12h4" }],
  ["path", { d: "M10 21v-3a2 2 0 013.05-1.702" }],
  ["path", { d: "M10 8h4" }],
  ["path", { d: "M16 19h6" }],
  ["path", { d: "M18 7h2a2 2 0 012 2v4.355" }],
  ["path", { d: "M19 16v6" }],
  ["path", { d: "M6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h8.535" }],
  ["path", { d: "M6 21V5a2 2 0 012-2h8a2 2 0 012 2v7.126" }]
];

// node_modules/lucide/dist/esm/icons/building-complex.mjs
var BuildingComplex = [
  ["path", { d: "M10 12h4" }],
  ["path", { d: "M10 8h4" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }],
  ["path", { d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" }]
];

// node_modules/lucide/dist/esm/icons/building.mjs
var Building = [
  ["path", { d: "M12 10h.01" }],
  ["path", { d: "M12 14h.01" }],
  ["path", { d: "M12 6h.01" }],
  ["path", { d: "M16 10h.01" }],
  ["path", { d: "M16 14h.01" }],
  ["path", { d: "M16 6h.01" }],
  ["path", { d: "M8 10h.01" }],
  ["path", { d: "M8 14h.01" }],
  ["path", { d: "M8 6h.01" }],
  ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/bus-front.mjs
var BusFront = [
  ["path", { d: "M4 6 2 7" }],
  ["path", { d: "M10 6h4" }],
  ["path", { d: "m22 7-2-1" }],
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }],
  ["path", { d: "M4 11h16" }],
  ["path", { d: "M8 15h.01" }],
  ["path", { d: "M16 15h.01" }],
  ["path", { d: "M6 19v2" }],
  ["path", { d: "M18 21v-2" }]
];

// node_modules/lucide/dist/esm/icons/bus.mjs
var Bus = [
  ["path", { d: "M8 6v6" }],
  ["path", { d: "M15 6v6" }],
  ["path", { d: "M2 12h19.6" }],
  [
    "path",
    {
      d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
    }
  ],
  ["circle", { cx: "7", cy: "18", r: "2" }],
  ["path", { d: "M9 18h5" }],
  ["circle", { cx: "16", cy: "18", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/cable-car.mjs
var CableCar = [
  ["path", { d: "M10 3h.01" }],
  ["path", { d: "M14 2h.01" }],
  ["path", { d: "m2 9 20-5" }],
  ["path", { d: "M12 12V6.5" }],
  ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3" }],
  ["path", { d: "M9 12v5" }],
  ["path", { d: "M15 12v5" }],
  ["path", { d: "M4 17h16" }]
];

// node_modules/lucide/dist/esm/icons/cable.mjs
var Cable = [
  ["path", { d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" }],
  ["path", { d: "M17 21v-2" }],
  ["path", { d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" }],
  ["path", { d: "M21 21v-2" }],
  ["path", { d: "M3 5V3" }],
  ["path", { d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" }],
  ["path", { d: "M7 5V3" }]
];

// node_modules/lucide/dist/esm/icons/cake-slice.mjs
var CakeSlice = [
  ["path", { d: "M16 13H3" }],
  ["path", { d: "M16 17H3" }],
  [
    "path",
    {
      d: "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"
    }
  ],
  ["circle", { cx: "9", cy: "7", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/cake.mjs
var Cake = [
  ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }],
  ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }],
  ["path", { d: "M2 21h20" }],
  ["path", { d: "M7 8v3" }],
  ["path", { d: "M12 8v3" }],
  ["path", { d: "M17 8v3" }],
  ["path", { d: "M7 4h.01" }],
  ["path", { d: "M12 4h.01" }],
  ["path", { d: "M17 4h.01" }]
];

// node_modules/lucide/dist/esm/icons/calculator.mjs
var Calculator = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18" }],
  ["path", { d: "M16 10h.01" }],
  ["path", { d: "M12 10h.01" }],
  ["path", { d: "M8 10h.01" }],
  ["path", { d: "M12 14h.01" }],
  ["path", { d: "M8 14h.01" }],
  ["path", { d: "M12 18h.01" }],
  ["path", { d: "M8 18h.01" }]
];

// node_modules/lucide/dist/esm/icons/calendar-1.mjs
var Calendar1 = [
  ["path", { d: "M11 13h1v4" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/calendar-arrow-down.mjs
var CalendarArrowDown = [
  ["path", { d: "m14 17 4 4 4-4" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "M18 13v8" }],
  ["path", { d: "M21 10.354V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.343" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-arrow-up.mjs
var CalendarArrowUp = [
  ["path", { d: "m14 17 4-4 4 4" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "M18 21v-8" }],
  ["path", { d: "M21 10.343V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h9" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-check-2.mjs
var CalendarCheck2 = [
  ["path", { d: "M 19 3 L 5 3" }],
  ["path", { d: "M 21 13 L 21 5" }],
  ["path", { d: "M 21 5 A2 2 0 0 0 19 3" }],
  ["path", { d: "M 3 19 A2 2 0 0 0 5 21" }],
  ["path", { d: "M 3 5 L 3 19" }],
  ["path", { d: "M 5 3 A2 2 0 0 0 3 5" }],
  ["path", { d: "m16 19 2 2 4-4" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M5 21 L12.5 21" }],
  ["path", { d: "M8 2v3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-check.mjs
var CalendarCheck = [
  ["path", { d: "M8 2v3" }],
  ["path", { d: "M16 2v3" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "m9 15 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/calendar-chevrons-right.mjs
var CalendarChevronsRight = [
  ["path", { d: "m13 21 3-3-3-3" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "m19 21 3-3-3-3" }],
  ["path", { d: "M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h4" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-clock.mjs
var CalendarClock = [
  ["path", { d: "M16 14v2.2l1.6 1" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" }],
  ["path", { d: "M3 9h5.859" }],
  ["path", { d: "M8 2v3" }],
  ["circle", { cx: "16", cy: "16", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/calendar-cog.mjs
var CalendarCog = [
  ["path", { d: "m15.228 16.852-.923-.383" }],
  ["path", { d: "m15.228 19.148-.923.383" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "m16.47 14.305.382.923" }],
  ["path", { d: "m16.852 20.772-.383.924" }],
  ["path", { d: "m19.148 15.228.383-.923" }],
  ["path", { d: "m19.53 21.696-.382-.924" }],
  ["path", { d: "m20.773 16.852.924-.383" }],
  ["path", { d: "m20.773 19.148.924.383" }],
  ["path", { d: "M21 10.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h5.5" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }],
  ["circle", { cx: "18", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-days.mjs
var CalendarDays = [
  ["path", { d: "M8 2v3" }],
  ["path", { d: "M16 2v3" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 13h.01" }],
  ["path", { d: "M12 13h.01" }],
  ["path", { d: "M16 13h.01" }],
  ["path", { d: "M8 17h.01" }],
  ["path", { d: "M12 17h.01" }],
  ["path", { d: "M16 17h.01" }]
];

// node_modules/lucide/dist/esm/icons/calendar-fold.mjs
var CalendarFold = [
  ["path", { d: "M16 2v3" }],
  [
    "path",
    {
      d: "M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10v-5a1 1 0 011-1za2.4 2.4 0 01-.706 1.706l-3.588 3.588A2.4 2.4 0 0115 21"
    }
  ],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-heart.mjs
var CalendarHeart = [
  ["path", { d: "M12.127 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.125" }],
  [
    "path",
    {
      d: "M14.62 17.8A2.25 2.25 0 1118 14.836a2.25 2.25 0 113.38 2.966l-2.626 2.856a.998.998 0 01-1.507 0z"
    }
  ],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-minus-2.mjs
var CalendarMinus2 = [
  ["path", { d: "M8 2v3" }],
  ["path", { d: "M16 2v3" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M10 15h4" }]
];

// node_modules/lucide/dist/esm/icons/calendar-minus.mjs
var CalendarMinus = [
  ["path", { d: "M16 18h6" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "M21 14V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-off.mjs
var CalendarOff = [
  ["path", { d: "M16 2v3" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M21 9h-5.5" }],
  ["path", { d: "M3 9h6" }],
  ["path", { d: "M3.586 3.586A2 2 0 003 5v14a2 2 0 002 2h14a2 2 0 001.414-.586" }],
  ["path", { d: "M8.656 3H19a2 2 0 012 2v10.344" }]
];

// node_modules/lucide/dist/esm/icons/calendar-plus-2.mjs
var CalendarPlus2 = [
  ["path", { d: "M8 2v3" }],
  ["path", { d: "M16 2v3" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M10 15h4" }],
  ["path", { d: "M12 13v4" }]
];

// node_modules/lucide/dist/esm/icons/calendar-plus.mjs
var CalendarPlus = [
  ["path", { d: "M16 18h6" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "M19 15v6" }],
  ["path", { d: "M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-range.mjs
var CalendarRange = [
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }],
  ["path", { d: "M17 13h-6" }],
  ["path", { d: "M13 17H7" }],
  ["path", { d: "M7 13h.01" }],
  ["path", { d: "M17 17h.01" }]
];

// node_modules/lucide/dist/esm/icons/calendar-search.mjs
var CalendarSearch = [
  ["path", { d: "M16 2v3" }],
  ["path", { d: "M21 10.69V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.25" }],
  ["path", { d: "m22 21-1.875-1.875" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }],
  ["circle", { cx: "18", cy: "17", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-sync.mjs
var CalendarSync = [
  ["path", { d: "M11 10v4h4" }],
  ["path", { d: "m11 14 1.535-1.605a5 5 0 018 1.5" }],
  ["path", { d: "M16 2v3" }],
  ["path", { d: "m21 18-1.535 1.605a5 5 0 01-8-1.5" }],
  ["path", { d: "M21 22v-4h-4" }],
  ["path", { d: "M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517" }],
  ["path", { d: "M3 9h4" }],
  ["path", { d: "M8 2v3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-x-2.mjs
var CalendarX2 = [
  ["path", { d: "M16 2v3" }],
  ["path", { d: "m17 16 5 5" }],
  ["path", { d: "m17 21 5-5" }],
  ["path", { d: "M21 12V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M8 2v3" }]
];

// node_modules/lucide/dist/esm/icons/calendar-x.mjs
var CalendarX = [
  ["path", { d: "M8 2v3" }],
  ["path", { d: "M16 2v3" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "m14 13-4 4" }],
  ["path", { d: "m10 13 4 4" }]
];

// node_modules/lucide/dist/esm/icons/calendar.mjs
var Calendar = [
  ["path", { d: "M8 2v3" }],
  ["path", { d: "M16 2v3" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
  ["path", { d: "M3 9h18" }]
];

// node_modules/lucide/dist/esm/icons/calendars.mjs
var Calendars = [
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" }],
  ["path", { d: "M18 2v2" }],
  ["path", { d: "M2 13h2" }],
  ["path", { d: "M8 8h14" }],
  ["rect", { x: "8", y: "3", width: "14", height: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/camera-off.mjs
var CameraOff = [
  ["path", { d: "M14.564 14.558a3 3 0 1 1-4.122-4.121" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" }],
  [
    "path",
    {
      d: "M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/camera.mjs
var Camera = [
  [
    "path",
    {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/can-soda.mjs
var CanSoda = [
  ["path", { d: "m17 22 1.664-2.496a2 2 0 00.336-1.11V5.606a2 2 0 00-.336-1.11L17 2" }],
  ["path", { d: "M18 22H6" }],
  ["path", { d: "M18 2H6" }],
  ["path", { d: "M5 17h14" }],
  ["path", { d: "M5 7h14" }],
  ["path", { d: "m7 22-1.664-2.496A2 2 0 015 18.394V5.606a2 2 0 01.336-1.11L7 2" }]
];

// node_modules/lucide/dist/esm/icons/candy-cane.mjs
var CandyCane = [
  ["path", { d: "m10.8 5 2.111 4.223" }],
  ["path", { d: "M17.75 7 15 2.1" }],
  ["path", { d: "m4.874 14.647 2.12 4.24" }],
  [
    "path",
    { d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2z" }
  ],
  ["path", { d: "m7.906 9.712 2.005 4.411" }]
];

// node_modules/lucide/dist/esm/icons/can.mjs
var Can = [
  ["path", { d: "M21 10.5a9 2.5 0 01-18 0v8a9 2.5 0 0018 0z" }],
  ["path", { d: "M21 10.5A9 2.5 25.32 004.59 3.47 9 2.5 25.32 0021 10.5" }],
  ["path", { d: "M3 10.5a9 2.5 0 016.527-2.405" }],
  ["path", { d: "M9 16.858a31 31 0 006 0" }]
];

// node_modules/lucide/dist/esm/icons/candy-off.mjs
var CandyOff = [
  ["path", { d: "M10 10v7.9" }],
  ["path", { d: "M11.802 6.145a5 5 0 0 1 6.053 6.053" }],
  ["path", { d: "M14 6.1v2.243" }],
  ["path", { d: "m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965" }],
  [
    "path",
    {
      d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"
    }
  ],
  ["path", { d: "m2 2 20 20" }],
  [
    "path",
    {
      d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/candy.mjs
var Candy = [
  ["path", { d: "M10 7v10.9" }],
  ["path", { d: "M14 6.1V17" }],
  [
    "path",
    {
      d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"
    }
  ],
  [
    "path",
    {
      d: "M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07"
    }
  ],
  [
    "path",
    {
      d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/cannabis-off.mjs
var CannabisOff = [
  ["path", { d: "M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5" }],
  ["path", { d: "M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9" }],
  ["path", { d: "M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907" }],
  [
    "path",
    {
      d: "M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/cannabis.mjs
var Cannabis = [
  ["path", { d: "M12 22v-4" }],
  [
    "path",
    {
      d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/captions-off.mjs
var CaptionsOff = [
  ["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5" }],
  ["path", { d: "M17 11h-.5" }],
  ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M7 11h4" }],
  ["path", { d: "M7 15h2.5" }]
];

// node_modules/lucide/dist/esm/icons/captions.mjs
var Captions = [
  ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2" }],
  ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4" }]
];

// node_modules/lucide/dist/esm/icons/car-battery.mjs
var CarBattery = [
  ["path", { d: "M14 13h4" }],
  ["path", { d: "M16 15v-4" }],
  ["path", { d: "M18 5v2" }],
  ["path", { d: "M6 13h4" }],
  ["path", { d: "M6 5v2" }],
  ["rect", { x: "2", y: "7", width: "20", height: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/car-front.mjs
var CarFront = [
  ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }],
  ["path", { d: "M7 14h.01" }],
  ["path", { d: "M17 14h.01" }],
  ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }],
  ["path", { d: "M5 18v2" }],
  ["path", { d: "M19 18v2" }]
];

// node_modules/lucide/dist/esm/icons/car-taxi-front.mjs
var CarTaxiFront = [
  ["path", { d: "M10 2h4" }],
  ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }],
  ["path", { d: "M7 14h.01" }],
  ["path", { d: "M17 14h.01" }],
  ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }],
  ["path", { d: "M5 18v2" }],
  ["path", { d: "M19 18v2" }]
];

// node_modules/lucide/dist/esm/icons/car.mjs
var Car = [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2" }],
  ["path", { d: "M9 17h6" }],
  ["circle", { cx: "17", cy: "17", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/caravan.mjs
var Caravan = [
  ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }],
  ["path", { d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" }],
  ["path", { d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" }],
  ["circle", { cx: "8", cy: "19", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/card-sim.mjs
var CardSim = [
  ["path", { d: "M12 14v4" }],
  [
    "path",
    {
      d: "M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
    }
  ],
  ["path", { d: "M8 14h8" }],
  ["rect", { x: "8", y: "10", width: "8", height: "8", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/carrot.mjs
var Carrot = [
  ["path", { d: "M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3" }],
  ["path", { d: "M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7" }],
  ["path", { d: "m8 15-2.58-2.58" }]
];

// node_modules/lucide/dist/esm/icons/carton-off.mjs
var CartonOff = [
  ["path", { d: "M10 10H5v10a2 2 0 002 2h10a2 2 0 002-2v-1" }],
  ["path", { d: "M13 22v-9" }],
  ["path", { d: "M13.902 8.245 16 6h-4.343" }],
  ["path", { d: "M19 13.343V10a2 2 0 00-.539-1.367L16 6V3a1 1 0 00-1-1H9a1 1 0 00-.857.486" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M7.034 7.034 5.539 8.633A2 2 0 005 10" }]
];

// node_modules/lucide/dist/esm/icons/case-lower.mjs
var CaseLower = [
  ["path", { d: "M10 9v7" }],
  ["path", { d: "M14 6v10" }],
  ["circle", { cx: "17.5", cy: "12.5", r: "3.5" }],
  ["circle", { cx: "6.5", cy: "12.5", r: "3.5" }]
];

// node_modules/lucide/dist/esm/icons/carton.mjs
var Carton = [
  [
    "path",
    {
      d: "M13 22V10a2 2 0 01.539-1.367L16 6H8L5.539 8.633A2 2 0 005 10v10a2 2 0 002 2h10a2 2 0 002-2V10a2 2 0 00-.539-1.367L16 6V3a1 1 0 00-1-1H9a1 1 0 00-1 1v3"
    }
  ],
  ["path", { d: "M5 10h8" }]
];

// node_modules/lucide/dist/esm/icons/case-sensitive.mjs
var CaseSensitive = [
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }],
  ["path", { d: "M22 9v7" }],
  ["path", { d: "M3.304 13h6.392" }],
  ["circle", { cx: "18.5", cy: "12.5", r: "3.5" }]
];

// node_modules/lucide/dist/esm/icons/case-upper.mjs
var CaseUpper = [
  [
    "path",
    { d: "M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5" }
  ],
  ["path", { d: "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }],
  ["path", { d: "M3.304 13h6.392" }]
];

// node_modules/lucide/dist/esm/icons/cassette-tape.mjs
var CassetteTape = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
  ["circle", { cx: "8", cy: "10", r: "2" }],
  ["path", { d: "M8 12h8" }],
  ["circle", { cx: "16", cy: "10", r: "2" }],
  ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }]
];

// node_modules/lucide/dist/esm/icons/cast.mjs
var Cast = [
  ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }],
  ["path", { d: "M2 12a9 9 0 0 1 8 8" }],
  ["path", { d: "M2 16a5 5 0 0 1 4 4" }],
  ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20" }]
];

// node_modules/lucide/dist/esm/icons/castle.mjs
var Castle = [
  ["path", { d: "M10 5V3" }],
  ["path", { d: "M14 5V3" }],
  ["path", { d: "M15 21v-3a3 3 0 0 0-6 0v3" }],
  ["path", { d: "M18 3v8" }],
  ["path", { d: "M18 5H6" }],
  ["path", { d: "M22 11H2" }],
  ["path", { d: "M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" }],
  ["path", { d: "M6 3v8" }]
];

// node_modules/lucide/dist/esm/icons/cat.mjs
var Cat = [
  [
    "path",
    {
      d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
    }
  ],
  ["path", { d: "M8 14v.5" }],
  ["path", { d: "M16 14v.5" }],
  ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z" }]
];

// node_modules/lucide/dist/esm/icons/cctv-off.mjs
var CctvOff = [
  [
    "path",
    {
      d: "m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448"
    }
  ],
  [
    "path",
    {
      d: "m15.166 15.166-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037"
    }
  ],
  ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M2 21v-4" }],
  ["path", { d: "M7 9h.01" }]
];

// node_modules/lucide/dist/esm/icons/cctv.mjs
var Cctv = [
  [
    "path",
    { d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" }
  ],
  [
    "path",
    {
      d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"
    }
  ],
  ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" }],
  ["path", { d: "M2 21v-4" }],
  ["path", { d: "M7 9h.01" }]
];

// node_modules/lucide/dist/esm/icons/chart-area.mjs
var ChartArea = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  [
    "path",
    {
      d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/chart-bar-big.mjs
var ChartBarBig = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }],
  ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/chart-bar-decreasing.mjs
var ChartBarDecreasing = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M7 11h8" }],
  ["path", { d: "M7 16h3" }],
  ["path", { d: "M7 6h12" }]
];

// node_modules/lucide/dist/esm/icons/chart-bar-increasing.mjs
var ChartBarIncreasing = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M7 11h8" }],
  ["path", { d: "M7 16h12" }],
  ["path", { d: "M7 6h3" }]
];

// node_modules/lucide/dist/esm/icons/chart-bar-stacked.mjs
var ChartBarStacked = [
  ["path", { d: "M11 13v4" }],
  ["path", { d: "M15 5v4" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }],
  ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/chart-bar.mjs
var ChartBar = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M7 16h8" }],
  ["path", { d: "M7 11h12" }],
  ["path", { d: "M7 6h3" }]
];

// node_modules/lucide/dist/esm/icons/chart-candlestick.mjs
var ChartCandlestick = [
  ["path", { d: "M9 5v4" }],
  ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1" }],
  ["path", { d: "M9 15v2" }],
  ["path", { d: "M17 3v2" }],
  ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1" }],
  ["path", { d: "M17 13v3" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]
];

// node_modules/lucide/dist/esm/icons/chart-column-big.mjs
var ChartColumnBig = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }],
  ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/chart-column-decreasing.mjs
var ChartColumnDecreasing = [
  ["path", { d: "M13 17V9" }],
  ["path", { d: "M18 17v-3" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M8 17V5" }]
];

// node_modules/lucide/dist/esm/icons/chart-column-increasing.mjs
var ChartColumnIncreasing = [
  ["path", { d: "M13 17V9" }],
  ["path", { d: "M18 17V5" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M8 17v-3" }]
];

// node_modules/lucide/dist/esm/icons/chart-column-stacked.mjs
var ChartColumnStacked = [
  ["path", { d: "M11 13H7" }],
  ["path", { d: "M19 9h-4" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }],
  ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/chart-column.mjs
var ChartColumn = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M18 17V9" }],
  ["path", { d: "M13 17V5" }],
  ["path", { d: "M8 17v-3" }]
];

// node_modules/lucide/dist/esm/icons/chart-gantt.mjs
var ChartGantt = [
  ["path", { d: "M10 6h8" }],
  ["path", { d: "M12 16h6" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M8 11h7" }]
];

// node_modules/lucide/dist/esm/icons/chart-line.mjs
var ChartLine = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "m19 9-5 5-4-4-3 3" }]
];

// node_modules/lucide/dist/esm/icons/chart-network.mjs
var ChartNetwork = [
  ["path", { d: "m13.11 7.664 1.78 2.672" }],
  ["path", { d: "m14.162 12.788-3.324 1.424" }],
  ["path", { d: "m20 4-6.06 1.515" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["circle", { cx: "12", cy: "6", r: "2" }],
  ["circle", { cx: "16", cy: "12", r: "2" }],
  ["circle", { cx: "9", cy: "15", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/chart-no-axes-column-decreasing.mjs
var ChartNoAxesColumnDecreasing = [
  ["path", { d: "M5 21V3" }],
  ["path", { d: "M12 21V9" }],
  ["path", { d: "M19 21v-6" }]
];

// node_modules/lucide/dist/esm/icons/chart-no-axes-column-increasing.mjs
var ChartNoAxesColumnIncreasing = [
  ["path", { d: "M5 21v-6" }],
  ["path", { d: "M12 21V9" }],
  ["path", { d: "M19 21V3" }]
];

// node_modules/lucide/dist/esm/icons/chart-no-axes-column.mjs
var ChartNoAxesColumn = [
  ["path", { d: "M5 21v-6" }],
  ["path", { d: "M12 21V3" }],
  ["path", { d: "M19 21V9" }]
];

// node_modules/lucide/dist/esm/icons/chart-no-axes-combined.mjs
var ChartNoAxesCombined = [
  ["path", { d: "M12 16v5" }],
  ["path", { d: "M16 14.639V21" }],
  ["path", { d: "M20 10.656V21" }],
  ["path", { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" }],
  ["path", { d: "M4 18.463V21" }],
  ["path", { d: "M8 14.656V21" }]
];

// node_modules/lucide/dist/esm/icons/chart-no-axes-gantt.mjs
var ChartNoAxesGantt = [
  ["path", { d: "M6 5h12" }],
  ["path", { d: "M4 12h10" }],
  ["path", { d: "M12 19h8" }]
];

// node_modules/lucide/dist/esm/icons/chart-pie.mjs
var ChartPie = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }]
];

// node_modules/lucide/dist/esm/icons/chart-scatter.mjs
var ChartScatter = [
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }],
  ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor" }],
  ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor" }],
  ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }],
  ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]
];

// node_modules/lucide/dist/esm/icons/chart-spline.mjs
var ChartSpline = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" }]
];

// node_modules/lucide/dist/esm/icons/check-check.mjs
var CheckCheck = [
  ["path", { d: "M18 6 7 17l-5-5" }],
  ["path", { d: "m22 10-7.5 7.5L13 16" }]
];

// node_modules/lucide/dist/esm/icons/check-line.mjs
var CheckLine = [
  ["path", { d: "M20 4L9 15" }],
  ["path", { d: "M21 19L3 19" }],
  ["path", { d: "M9 15L4 10" }]
];

// node_modules/lucide/dist/esm/icons/check.mjs
var Check = [["path", { d: "M20 6 9 17l-5-5" }]];

// node_modules/lucide/dist/esm/icons/chef-hat.mjs
var ChefHat = [
  [
    "path",
    {
      d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
    }
  ],
  ["path", { d: "M6 17h12" }]
];

// node_modules/lucide/dist/esm/icons/cherry.mjs
var Cherry = [
  ["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }],
  ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }],
  ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" }],
  ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" }]
];

// node_modules/lucide/dist/esm/icons/chess-bishop.mjs
var ChessBishop = [
  ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }],
  [
    "path",
    {
      d: "M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18"
    }
  ],
  ["path", { d: "m16 7-2.5 2.5" }],
  ["path", { d: "M9 2h6" }]
];

// node_modules/lucide/dist/esm/icons/chess-king.mjs
var ChessKing = [
  ["path", { d: "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" }],
  [
    "path",
    {
      d: "m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1"
    }
  ],
  ["path", { d: "M10 4h4" }],
  ["path", { d: "M12 2v6.818" }]
];

// node_modules/lucide/dist/esm/icons/chess-knight.mjs
var ChessKnight = [
  ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }],
  [
    "path",
    {
      d: "M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456"
    }
  ],
  ["path", { d: "m15 5 1.425-1.425" }],
  ["path", { d: "m17 8 1.53-1.53" }],
  ["path", { d: "M9.713 12.185 7 18" }]
];

// node_modules/lucide/dist/esm/icons/chess-pawn.mjs
var ChessPawn = [
  ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }],
  ["path", { d: "m14.5 10 1.5 8" }],
  ["path", { d: "M7 10h10" }],
  ["path", { d: "m8 18 1.5-8" }],
  ["circle", { cx: "12", cy: "6", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/chess-queen.mjs
var ChessQueen = [
  ["path", { d: "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" }],
  ["path", { d: "m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402" }],
  ["path", { d: "m20 9-3 9" }],
  ["path", { d: "m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34" }],
  ["path", { d: "M7 18 4 9" }],
  ["circle", { cx: "12", cy: "4", r: "2" }],
  ["circle", { cx: "20", cy: "7", r: "2" }],
  ["circle", { cx: "4", cy: "7", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/chess-rook.mjs
var ChessRook = [
  ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }],
  ["path", { d: "M10 2v2" }],
  ["path", { d: "M14 2v2" }],
  ["path", { d: "m17 18-1-9" }],
  ["path", { d: "M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" }],
  ["path", { d: "M6 4h12" }],
  ["path", { d: "m7 18 1-9" }]
];

// node_modules/lucide/dist/esm/icons/chevron-down.mjs
var ChevronDown = [["path", { d: "m6 9 6 6 6-6" }]];

// node_modules/lucide/dist/esm/icons/chevron-first.mjs
var ChevronFirst = [
  ["path", { d: "m17 18-6-6 6-6" }],
  ["path", { d: "M7 6v12" }]
];

// node_modules/lucide/dist/esm/icons/chevron-last.mjs
var ChevronLast = [
  ["path", { d: "m7 18 6-6-6-6" }],
  ["path", { d: "M17 6v12" }]
];

// node_modules/lucide/dist/esm/icons/chevron-left.mjs
var ChevronLeft = [["path", { d: "m15 18-6-6 6-6" }]];

// node_modules/lucide/dist/esm/icons/chevron-right.mjs
var ChevronRight = [["path", { d: "m9 18 6-6-6-6" }]];

// node_modules/lucide/dist/esm/icons/chevron-up.mjs
var ChevronUp = [["path", { d: "m18 15-6-6-6 6" }]];

// node_modules/lucide/dist/esm/icons/chevrons-down-up.mjs
var ChevronsDownUp = [
  ["path", { d: "m7 20 5-5 5 5" }],
  ["path", { d: "m7 4 5 5 5-5" }]
];

// node_modules/lucide/dist/esm/icons/chevrons-down.mjs
var ChevronsDown = [
  ["path", { d: "m7 6 5 5 5-5" }],
  ["path", { d: "m7 13 5 5 5-5" }]
];

// node_modules/lucide/dist/esm/icons/chevrons-left-right-ellipsis.mjs
var ChevronsLeftRightEllipsis = [
  ["path", { d: "M12 12h.01" }],
  ["path", { d: "M16 12h.01" }],
  ["path", { d: "m17 7 5 5-5 5" }],
  ["path", { d: "m7 7-5 5 5 5" }],
  ["path", { d: "M8 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/chevrons-left-right.mjs
var ChevronsLeftRight = [
  ["path", { d: "m9 7-5 5 5 5" }],
  ["path", { d: "m15 7 5 5-5 5" }]
];

// node_modules/lucide/dist/esm/icons/chevrons-left.mjs
var ChevronsLeft = [
  ["path", { d: "m11 17-5-5 5-5" }],
  ["path", { d: "m18 17-5-5 5-5" }]
];

// node_modules/lucide/dist/esm/icons/chevrons-right-left.mjs
var ChevronsRightLeft = [
  ["path", { d: "m20 17-5-5 5-5" }],
  ["path", { d: "m4 17 5-5-5-5" }]
];

// node_modules/lucide/dist/esm/icons/chevrons-right.mjs
var ChevronsRight = [
  ["path", { d: "m6 17 5-5-5-5" }],
  ["path", { d: "m13 17 5-5-5-5" }]
];

// node_modules/lucide/dist/esm/icons/chevrons-up-down.mjs
var ChevronsUpDown = [
  ["path", { d: "m7 15 5 5 5-5" }],
  ["path", { d: "m7 9 5-5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/chevrons-up.mjs
var ChevronsUp = [
  ["path", { d: "m17 11-5-5-5 5" }],
  ["path", { d: "m17 18-5-5-5 5" }]
];

// node_modules/lucide/dist/esm/icons/cigarette-off.mjs
var CigaretteOff = [
  ["path", { d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" }],
  ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" }],
  ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }],
  ["path", { d: "M7 12v4" }]
];

// node_modules/lucide/dist/esm/icons/church.mjs
var Church = [
  ["path", { d: "M10 9h4" }],
  ["path", { d: "M12 7v5" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }],
  [
    "path",
    {
      d: "m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9"
    }
  ],
  ["path", { d: "M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" }]
];

// node_modules/lucide/dist/esm/icons/cigarette.mjs
var Cigarette = [
  ["path", { d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" }],
  ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }],
  ["path", { d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }],
  ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }],
  ["path", { d: "M7 12v4" }]
];

// node_modules/lucide/dist/esm/icons/circle-alert.mjs
var CircleAlert = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
];

// node_modules/lucide/dist/esm/icons/circle-arrow-down.mjs
var CircleArrowDown = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 8v8" }],
  ["path", { d: "m8 12 4 4 4-4" }]
];

// node_modules/lucide/dist/esm/icons/circle-arrow-left.mjs
var CircleArrowLeft = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m12 8-4 4 4 4" }],
  ["path", { d: "M16 12H8" }]
];

// node_modules/lucide/dist/esm/icons/circle-arrow-out-down-left.mjs
var CircleArrowOutDownLeft = [
  ["path", { d: "M2 12a10 10 0 1 1 10 10" }],
  ["path", { d: "m2 22 10-10" }],
  ["path", { d: "M8 22H2v-6" }]
];

// node_modules/lucide/dist/esm/icons/circle-arrow-out-down-right.mjs
var CircleArrowOutDownRight = [
  ["path", { d: "M12 22a10 10 0 1 1 10-10" }],
  ["path", { d: "M22 22 12 12" }],
  ["path", { d: "M22 16v6h-6" }]
];

// node_modules/lucide/dist/esm/icons/circle-arrow-out-up-left.mjs
var CircleArrowOutUpLeft = [
  ["path", { d: "M2 8V2h6" }],
  ["path", { d: "m2 2 10 10" }],
  ["path", { d: "M12 2A10 10 0 1 1 2 12" }]
];

// node_modules/lucide/dist/esm/icons/circle-arrow-out-up-right.mjs
var CircleArrowOutUpRight = [
  ["path", { d: "M22 12A10 10 0 1 1 12 2" }],
  ["path", { d: "M22 2 12 12" }],
  ["path", { d: "M16 2h6v6" }]
];

// node_modules/lucide/dist/esm/icons/circle-arrow-right.mjs
var CircleArrowRight = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m12 16 4-4-4-4" }],
  ["path", { d: "M8 12h8" }]
];

// node_modules/lucide/dist/esm/icons/circle-arrow-up.mjs
var CircleArrowUp = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m16 12-4-4-4 4" }],
  ["path", { d: "M12 16V8" }]
];

// node_modules/lucide/dist/esm/icons/circle-check.mjs
var CircleCheck = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m16 9-5.5 5.5L8 12" }]
];

// node_modules/lucide/dist/esm/icons/circle-check-big.mjs
var CircleCheckBig = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335" }],
  ["path", { d: "m9 11 3 3L22 4" }]
];

// node_modules/lucide/dist/esm/icons/circle-chevron-down.mjs
var CircleChevronDown = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m16 10-4 4-4-4" }]
];

// node_modules/lucide/dist/esm/icons/circle-chevron-left.mjs
var CircleChevronLeft = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m14 16-4-4 4-4" }]
];

// node_modules/lucide/dist/esm/icons/circle-chevron-right.mjs
var CircleChevronRight = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m10 8 4 4-4 4" }]
];

// node_modules/lucide/dist/esm/icons/circle-chevron-up.mjs
var CircleChevronUp = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m8 14 4-4 4 4" }]
];

// node_modules/lucide/dist/esm/icons/circle-dashed-check.mjs
var CircleDashedCheck = [
  ["path", { d: "M10.1 2.182a10 10 0 013.8 0" }],
  ["path", { d: "M13.9 21.818a10 10 0 01-3.8 0" }],
  ["path", { d: "m16 9-5.5 5.5L8 12" }],
  ["path", { d: "M17.609 3.721a10 10 0 012.69 2.7" }],
  ["path", { d: "M2.182 13.9a10 10 0 010-3.8" }],
  ["path", { d: "M20.279 17.609a10 10 0 01-2.7 2.69" }],
  ["path", { d: "M21.818 10.1a10 10 0 010 3.8" }],
  ["path", { d: "M3.721 6.391a10 10 0 012.7-2.69" }],
  ["path", { d: "M6.391 20.279a10 10 0 01-2.69-2.7" }]
];

// node_modules/lucide/dist/esm/icons/circle-dashed.mjs
var CircleDashed = [
  ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0" }],
  ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0" }],
  ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7" }],
  ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8" }],
  ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69" }],
  ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8" }],
  ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69" }],
  ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7" }]
];

// node_modules/lucide/dist/esm/icons/circle-divide.mjs
var CircleDivide = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }]
];

// node_modules/lucide/dist/esm/icons/circle-dollar-sign.mjs
var CircleDollarSign = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
  ["path", { d: "M12 18V6" }]
];

// node_modules/lucide/dist/esm/icons/circle-dot-dashed.mjs
var CircleDotDashed = [
  ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }],
  ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }],
  ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }],
  ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }],
  ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }],
  ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }],
  ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }],
  ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }],
  ["circle", { cx: "12", cy: "12", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/circle-dot.mjs
var CircleDot = [
  ["circle", { cx: "12", cy: "12", r: "1" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/circle-ellipsis.mjs
var CircleEllipsis = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M17 12h.01" }],
  ["path", { d: "M12 12h.01" }],
  ["path", { d: "M7 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/circle-equal.mjs
var CircleEqual = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M7 10h10" }],
  ["path", { d: "M7 14h10" }]
];

// node_modules/lucide/dist/esm/icons/circle-euro.mjs
var CircleEuro = [
  ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }],
  ["path", { d: "M7 12h5" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/circle-fading-arrow-up.mjs
var CircleFadingArrowUp = [
  ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }],
  ["path", { d: "m16 12-4-4-4 4" }],
  ["path", { d: "M12 16V8" }],
  ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }],
  ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }],
  ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }],
  ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]
];

// node_modules/lucide/dist/esm/icons/circle-fading-plus.mjs
var CircleFadingPlus = [
  ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }],
  ["path", { d: "M12 8v8" }],
  ["path", { d: "M16 12H8" }],
  ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }],
  ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }],
  ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }],
  ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]
];

// node_modules/lucide/dist/esm/icons/circle-gauge.mjs
var CircleGauge = [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7" }],
  ["circle", { cx: "12", cy: "12", r: "2" }],
  ["path", { d: "M13.4 10.6 19 5" }]
];

// node_modules/lucide/dist/esm/icons/circle-minus.mjs
var CircleMinus = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M8 12h8" }]
];

// node_modules/lucide/dist/esm/icons/circle-off.mjs
var CircleOff = [
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }],
  ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92" }]
];

// node_modules/lucide/dist/esm/icons/circle-parking-off.mjs
var CircleParkingOff = [
  ["path", { d: "M12.656 7H13a3 3 0 0 1 2.984 3.307" }],
  ["path", { d: "M13 13H9" }],
  ["path", { d: "M19.071 19.071A1 1 0 0 1 4.93 4.93" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M8.357 2.687a10 10 0 0 1 12.956 12.956" }],
  ["path", { d: "M9 17V9" }]
];

// node_modules/lucide/dist/esm/icons/circle-parking.mjs
var CircleParking = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]
];

// node_modules/lucide/dist/esm/icons/circle-pause.mjs
var CirclePause = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }],
  ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }]
];

// node_modules/lucide/dist/esm/icons/circle-percent.mjs
var CirclePercent = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m15 9-6 6" }],
  ["path", { d: "M9 9h.01" }],
  ["path", { d: "M15 15h.01" }]
];

// node_modules/lucide/dist/esm/icons/circle-pile.mjs
var CirclePile = [
  ["circle", { cx: "12", cy: "19", r: "2" }],
  ["circle", { cx: "12", cy: "5", r: "2" }],
  ["circle", { cx: "16", cy: "12", r: "2" }],
  ["circle", { cx: "20", cy: "19", r: "2" }],
  ["circle", { cx: "4", cy: "19", r: "2" }],
  ["circle", { cx: "8", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/circle-play.mjs
var CirclePlay = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/circle-plus.mjs
var CirclePlus = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M8 12h8" }],
  ["path", { d: "M12 8v8" }]
];

// node_modules/lucide/dist/esm/icons/circle-pound-sterling.mjs
var CirclePoundSterling = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M10 16V9.5a1 1 0 0 1 5 0" }],
  ["path", { d: "M8 12h4" }],
  ["path", { d: "M8 16h7" }]
];

// node_modules/lucide/dist/esm/icons/circle-power.mjs
var CirclePower = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 7v4" }],
  ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }]
];

// node_modules/lucide/dist/esm/icons/circle-question-mark.mjs
var CircleQuestionMark = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
  ["path", { d: "M12 17h.01" }]
];

// node_modules/lucide/dist/esm/icons/circle-slash-2.mjs
var CircleSlash2 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M22 2 2 22" }]
];

// node_modules/lucide/dist/esm/icons/circle-slash.mjs
var CircleSlash = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]
];

// node_modules/lucide/dist/esm/icons/circle-small.mjs
var CircleSmall = [["circle", { cx: "12", cy: "12", r: "6" }]];

// node_modules/lucide/dist/esm/icons/circle-star.mjs
var CircleStar = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  [
    "path",
    {
      d: "M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/circle-stop.mjs
var CircleStop = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/circle-user-round.mjs
var CircleUserRound = [
  ["path", { d: "M17.925 20.056a6 6 0 0 0-11.851.001" }],
  ["circle", { cx: "12", cy: "11", r: "4" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/circle-user.mjs
var CircleUser = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["circle", { cx: "12", cy: "10", r: "3" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }]
];

// node_modules/lucide/dist/esm/icons/circle-x.mjs
var CircleX = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m15 9-6 6" }],
  ["path", { d: "m9 9 6 6" }]
];

// node_modules/lucide/dist/esm/icons/circle.mjs
var Circle = [["circle", { cx: "12", cy: "12", r: "10" }]];

// node_modules/lucide/dist/esm/icons/citrus.mjs
var Citrus = [
  [
    "path",
    { d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" }
  ],
  ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34" }],
  ["path", { d: "m14 10-5.5 5.5" }],
  ["path", { d: "M14 17.85V10H6.15" }]
];

// node_modules/lucide/dist/esm/icons/circuit-board.mjs
var CircuitBoard = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3" }],
  ["circle", { cx: "9", cy: "9", r: "2" }],
  ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4" }],
  ["circle", { cx: "15", cy: "15", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/clapperboard.mjs
var Clapperboard = [
  ["path", { d: "m12.296 3.464 3.02 3.956" }],
  ["path", { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" }],
  ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }],
  ["path", { d: "m6.18 5.276 3.1 3.899" }]
];

// node_modules/lucide/dist/esm/icons/clef-alto.mjs
var ClefAlto = [
  ["path", { d: "M10 4v16" }],
  [
    "path",
    {
      d: "M14 4.764a3 3 0 1 1-.152 4.327A4 4 0 0 1 10 12a4 4 0 0 1 3.848 2.909A3 3 0 1 1 14 19.236"
    }
  ],
  ["path", { d: "M6 4v16" }]
];

// node_modules/lucide/dist/esm/icons/clef-bass.mjs
var ClefBass = [
  ["path", { d: "M19 11h.01" }],
  ["path", { d: "M19 6h.01" }],
  ["path", { d: "M5 8c0-4 4-4 4-4 6 0 6 6 6 6 0 7-10 11-10 11" }],
  ["circle", { cx: "7", cy: "8", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/clef-treble.mjs
var ClefTreble = [
  [
    "path",
    {
      d: "M10.586 21.414a2 2 0 0 0 3.378-1.791L11.036 4.377a2 2 0 1 1 3.378 1.037C12.414 7.414 7 8 7 13a5 5 0 0 0 5 5 5 4 0 0 0 5-4 3 3 0 0 0-3-3 3 2 0 0 0-3 2"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/clipboard-check.mjs
var ClipboardCheck = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
  ["path", { d: "m9 14 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/clipboard-clock.mjs
var ClipboardClock = [
  ["path", { d: "M16 14v2.2l1.6 1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v.832" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }],
  ["circle", { cx: "16", cy: "16", r: "6" }],
  ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/clipboard-copy.mjs
var ClipboardCopy = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4" }],
  ["path", { d: "M21 14H11" }],
  ["path", { d: "m15 10-4 4 4 4" }]
];

// node_modules/lucide/dist/esm/icons/clipboard-list.mjs
var ClipboardList = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M12 11h4" }],
  ["path", { d: "M12 16h4" }],
  ["path", { d: "M8 11h.01" }],
  ["path", { d: "M8 16h.01" }]
];

// node_modules/lucide/dist/esm/icons/clipboard-minus.mjs
var ClipboardMinus = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M9 14h6" }]
];

// node_modules/lucide/dist/esm/icons/clipboard-paste.mjs
var ClipboardPaste = [
  ["path", { d: "M11 14h10" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v1.344" }],
  ["path", { d: "m17 18 4-4-4-4" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" }],
  ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/clipboard-pen-line.mjs
var ClipboardPenLine = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1" }],
  ["path", { d: "M8 18h1" }],
  [
    "path",
    {
      d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/clipboard-pen.mjs
var ClipboardPen = [
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }],
  [
    "path",
    {
      d: "M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }
  ],
  ["path", { d: "M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
  ["rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/clipboard-plus.mjs
var ClipboardPlus = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M9 14h6" }],
  ["path", { d: "M12 17v-6" }]
];

// node_modules/lucide/dist/esm/icons/clipboard-type.mjs
var ClipboardType = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M9 12v-1h6v1" }],
  ["path", { d: "M11 17h2" }],
  ["path", { d: "M12 11v6" }]
];

// node_modules/lucide/dist/esm/icons/clipboard-x.mjs
var ClipboardX = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
  ["path", { d: "m14.5 11.5-5 5" }],
  ["path", { d: "m9.5 11.5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/clipboard.mjs
var Clipboard = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }]
];

// node_modules/lucide/dist/esm/icons/clock-1.mjs
var Clock1 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6l2-4" }]
];

// node_modules/lucide/dist/esm/icons/clock-11.mjs
var Clock11 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6l-2-4" }]
];

// node_modules/lucide/dist/esm/icons/clock-10.mjs
var Clock10 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6l-4-2" }]
];

// node_modules/lucide/dist/esm/icons/clock-12.mjs
var Clock12 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6" }]
];

// node_modules/lucide/dist/esm/icons/clock-2.mjs
var Clock2 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6l4-2" }]
];

// node_modules/lucide/dist/esm/icons/clock-3.mjs
var Clock3 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6h4" }]
];

// node_modules/lucide/dist/esm/icons/clock-4.mjs
var Clock4 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6l4 2" }]
];

// node_modules/lucide/dist/esm/icons/clock-5.mjs
var Clock5 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6l2 4" }]
];

// node_modules/lucide/dist/esm/icons/clock-6.mjs
var Clock6 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v10" }]
];

// node_modules/lucide/dist/esm/icons/clock-7.mjs
var Clock7 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6l-2 4" }]
];

// node_modules/lucide/dist/esm/icons/clock-8.mjs
var Clock8 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6l-4 2" }]
];

// node_modules/lucide/dist/esm/icons/clock-9.mjs
var Clock9 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6H8" }]
];

// node_modules/lucide/dist/esm/icons/clock-alert.mjs
var ClockAlert = [
  ["path", { d: "M12 6v6l4 2" }],
  ["path", { d: "M20 12v5" }],
  ["path", { d: "M20 21h.01" }],
  ["path", { d: "M21.25 8.2A10 10 0 1 0 16 21.16" }]
];

// node_modules/lucide/dist/esm/icons/clock-arrow-down.mjs
var ClockArrowDown = [
  ["path", { d: "M12 6v6l2 1" }],
  ["path", { d: "M12.337 21.994a10 10 0 1 1 9.588-8.767" }],
  ["path", { d: "m14 18 4 4 4-4" }],
  ["path", { d: "M18 14v8" }]
];

// node_modules/lucide/dist/esm/icons/clock-arrow-left.mjs
var ClockArrowLeft = [
  ["path", { d: "M12 6v6l1.5.8" }],
  ["path", { d: "M12.338 21.994a10 10 0 1 1 9.587-8.767" }],
  ["path", { d: "M14 18h8" }],
  ["path", { d: "m18 22-4-4 4-4" }]
];

// node_modules/lucide/dist/esm/icons/clock-arrow-right.mjs
var ClockArrowRight = [
  ["path", { d: "M12 6v6l2 1" }],
  ["path", { d: "M13.5 21.885A10 10 0 1 1 22 12" }],
  ["path", { d: "M14 18h8" }],
  ["path", { d: "m18 22 4-4-4-4" }]
];

// node_modules/lucide/dist/esm/icons/clock-arrow-up.mjs
var ClockArrowUp = [
  ["path", { d: "M12 6v6l1.56.78" }],
  ["path", { d: "M13.227 21.925a10 10 0 1 1 8.767-9.588" }],
  ["path", { d: "m14 18 4-4 4 4" }],
  ["path", { d: "M18 22v-8" }]
];

// node_modules/lucide/dist/esm/icons/clock-check.mjs
var ClockCheck = [
  ["path", { d: "M21.95 13a10 10 0 1 0-8.685 8.92" }],
  ["path", { d: "M12 6v6l4 2" }],
  ["path", { d: "m16 19 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/clock-fading.mjs
var ClockFading = [
  ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }],
  ["path", { d: "M12 6v6l4 2" }],
  ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }],
  ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }],
  ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }],
  ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]
];

// node_modules/lucide/dist/esm/icons/clock-plus.mjs
var ClockPlus = [
  ["path", { d: "M12 6v6l3.644 1.822" }],
  ["path", { d: "M16 19h6" }],
  ["path", { d: "M19 16v6" }],
  ["path", { d: "M21.92 13.267a10 10 0 1 0-8.653 8.653" }]
];

// node_modules/lucide/dist/esm/icons/clock.mjs
var Clock = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6l4 2" }]
];

// node_modules/lucide/dist/esm/icons/closed-caption.mjs
var ClosedCaption = [
  ["path", { d: "M10 9.17a3 3 0 1 0 0 5.66" }],
  ["path", { d: "M17 9.17a3 3 0 1 0 0 5.66" }],
  ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/cloud-alert.mjs
var CloudAlert = [
  ["path", { d: "M12 12v4" }],
  ["path", { d: "M12 20h.01" }],
  ["path", { d: "M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" }]
];

// node_modules/lucide/dist/esm/icons/cloud-backup.mjs
var CloudBackup = [
  ["path", { d: "M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607" }],
  ["path", { d: "M7 11v4h4" }],
  ["path", { d: "M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15" }]
];

// node_modules/lucide/dist/esm/icons/cloud-cog.mjs
var CloudCog = [
  ["path", { d: "m10.852 19.772-.383.924" }],
  ["path", { d: "m13.148 14.228.383-.923" }],
  ["path", { d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" }],
  ["path", { d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" }],
  ["path", { d: "m14.772 15.852.923-.383" }],
  ["path", { d: "m14.772 18.148.923.383" }],
  ["path", { d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }],
  ["path", { d: "m9.228 15.852-.923-.383" }],
  ["path", { d: "m9.228 18.148-.923.383" }]
];

// node_modules/lucide/dist/esm/icons/cloud-download.mjs
var CloudDownload = [
  ["path", { d: "M12 13v8l-4-4" }],
  ["path", { d: "m12 21 4-4" }],
  ["path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" }]
];

// node_modules/lucide/dist/esm/icons/cloud-check.mjs
var CloudCheck = [
  ["path", { d: "m17 15-5.5 5.5L9 18" }],
  ["path", { d: "M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327" }]
];

// node_modules/lucide/dist/esm/icons/cloud-drizzle.mjs
var CloudDrizzle = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
  ["path", { d: "M8 19v1" }],
  ["path", { d: "M8 14v1" }],
  ["path", { d: "M16 19v1" }],
  ["path", { d: "M16 14v1" }],
  ["path", { d: "M12 21v1" }],
  ["path", { d: "M12 16v1" }]
];

// node_modules/lucide/dist/esm/icons/cloud-fog.mjs
var CloudFog = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
  ["path", { d: "M16 17H7" }],
  ["path", { d: "M17 21H9" }]
];

// node_modules/lucide/dist/esm/icons/cloud-hail.mjs
var CloudHail = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
  ["path", { d: "M16 14v2" }],
  ["path", { d: "M8 14v2" }],
  ["path", { d: "M16 20h.01" }],
  ["path", { d: "M8 20h.01" }],
  ["path", { d: "M12 16v2" }],
  ["path", { d: "M12 22h.01" }]
];

// node_modules/lucide/dist/esm/icons/cloud-lightning.mjs
var CloudLightning = [
  ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" }],
  ["path", { d: "m13 12-3 5h4l-3 5" }]
];

// node_modules/lucide/dist/esm/icons/cloud-moon-rain.mjs
var CloudMoonRain = [
  ["path", { d: "M11 20v2" }],
  [
    "path",
    {
      d: "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"
    }
  ],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }],
  ["path", { d: "M7 19v2" }]
];

// node_modules/lucide/dist/esm/icons/cloud-moon.mjs
var CloudMoon = [
  ["path", { d: "M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z" }],
  [
    "path",
    {
      d: "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/cloud-off.mjs
var CloudOff = [
  ["path", { d: "M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057" }],
  ["path", { d: "M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/cloud-rain-wind.mjs
var CloudRainWind = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
  ["path", { d: "m9.2 22 3-7" }],
  ["path", { d: "m9 13-3 7" }],
  ["path", { d: "m17 13-3 7" }]
];

// node_modules/lucide/dist/esm/icons/cloud-snow.mjs
var CloudSnow = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
  ["path", { d: "M8 15h.01" }],
  ["path", { d: "M8 19h.01" }],
  ["path", { d: "M12 17h.01" }],
  ["path", { d: "M12 21h.01" }],
  ["path", { d: "M16 15h.01" }],
  ["path", { d: "M16 19h.01" }]
];

// node_modules/lucide/dist/esm/icons/cloud-rain.mjs
var CloudRain = [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
  ["path", { d: "M16 14v6" }],
  ["path", { d: "M8 14v6" }],
  ["path", { d: "M12 16v6" }]
];

// node_modules/lucide/dist/esm/icons/cloud-sun-rain.mjs
var CloudSunRain = [
  ["path", { d: "M12 2v2" }],
  ["path", { d: "m4.93 4.93 1.41 1.41" }],
  ["path", { d: "M20 12h2" }],
  ["path", { d: "m19.07 4.93-1.41 1.41" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }],
  ["path", { d: "M11 20v2" }],
  ["path", { d: "M7 19v2" }]
];

// node_modules/lucide/dist/esm/icons/cloud-sun.mjs
var CloudSun = [
  ["path", { d: "M12 2v2" }],
  ["path", { d: "m4.93 4.93 1.41 1.41" }],
  ["path", { d: "M20 12h2" }],
  ["path", { d: "m19.07 4.93-1.41 1.41" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }]
];

// node_modules/lucide/dist/esm/icons/cloud-sync.mjs
var CloudSync = [
  ["path", { d: "m17 18-1.535 1.605a5 5 0 0 1-8-1.5" }],
  ["path", { d: "M17 22v-4h-4" }],
  ["path", { d: "M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607" }],
  ["path", { d: "M7 10v4h4" }],
  ["path", { d: "m7 14 1.535-1.605a5 5 0 0 1 8 1.5" }]
];

// node_modules/lucide/dist/esm/icons/cloud-upload.mjs
var CloudUpload = [
  ["path", { d: "M12 13v8" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
  ["path", { d: "m8 17 4-4 4 4" }]
];

// node_modules/lucide/dist/esm/icons/cloud.mjs
var Cloud = [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }]];

// node_modules/lucide/dist/esm/icons/cloudy.mjs
var Cloudy = [
  ["path", { d: "M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" }],
  ["path", { d: "M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" }]
];

// node_modules/lucide/dist/esm/icons/club.mjs
var Club = [
  [
    "path",
    { d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" }
  ],
  ["path", { d: "M12 17.66L12 22" }]
];

// node_modules/lucide/dist/esm/icons/clover.mjs
var Clover = [
  ["path", { d: "M16.17 7.83 2 22" }],
  [
    "path",
    {
      d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"
    }
  ],
  ["path", { d: "m7.83 7.83 8.34 8.34" }]
];

// node_modules/lucide/dist/esm/icons/code-xml.mjs
var CodeXml = [
  ["path", { d: "m18 16 4-4-4-4" }],
  ["path", { d: "m6 8-4 4 4 4" }],
  ["path", { d: "m14.5 4-5 16" }]
];

// node_modules/lucide/dist/esm/icons/code.mjs
var Code = [
  ["path", { d: "m16 18 6-6-6-6" }],
  ["path", { d: "m8 6-6 6 6 6" }]
];

// node_modules/lucide/dist/esm/icons/coffee.mjs
var Coffee = [
  ["path", { d: "M10 2v2" }],
  ["path", { d: "M14 2v2" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
    }
  ],
  ["path", { d: "M6 2v2" }]
];

// node_modules/lucide/dist/esm/icons/cog.mjs
var Cog = [
  ["path", { d: "M11 10.27 7 3.34" }],
  ["path", { d: "m11 13.73-4 6.93" }],
  ["path", { d: "M12 22v-2" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M14 12h8" }],
  ["path", { d: "m17 20.66-1-1.73" }],
  ["path", { d: "m17 3.34-1 1.73" }],
  ["path", { d: "M2 12h2" }],
  ["path", { d: "m20.66 17-1.73-1" }],
  ["path", { d: "m20.66 7-1.73 1" }],
  ["path", { d: "m3.34 17 1.73-1" }],
  ["path", { d: "m3.34 7 1.73 1" }],
  ["circle", { cx: "12", cy: "12", r: "2" }],
  ["circle", { cx: "12", cy: "12", r: "8" }]
];

// node_modules/lucide/dist/esm/icons/coins.mjs
var Coins = [
  ["path", { d: "M13.744 17.736a6 6 0 1 1-7.48-7.48" }],
  ["path", { d: "M15 6h1v4" }],
  ["path", { d: "m6.134 14.768.866-.5 2 3.464" }],
  ["circle", { cx: "16", cy: "8", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/columns-2.mjs
var Columns2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M12 3v18" }]
];

// node_modules/lucide/dist/esm/icons/columns-3-cog.mjs
var Columns3Cog = [
  ["path", { d: "M10.6 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.6" }],
  ["path", { d: "m14.305 19.53.923-.382" }],
  ["path", { d: "M15 3v7.6" }],
  ["path", { d: "m15.229 16.852-.924-.383" }],
  ["path", { d: "m16.852 15.228-.383-.923" }],
  ["path", { d: "m16.852 20.772-.383.924" }],
  ["path", { d: "m19.148 15.228.383-.923" }],
  ["path", { d: "m19.53 21.696-.382-.924" }],
  ["path", { d: "m20.773 16.852.922-.383" }],
  ["path", { d: "m20.773 19.148.922.383" }],
  ["path", { d: "M9 3v18" }],
  ["circle", { cx: "18", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/columns-3.mjs
var Columns3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M9 3v18" }],
  ["path", { d: "M15 3v18" }]
];

// node_modules/lucide/dist/esm/icons/columns-4.mjs
var Columns4 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M7.5 3v18" }],
  ["path", { d: "M12 3v18" }],
  ["path", { d: "M16.5 3v18" }]
];

// node_modules/lucide/dist/esm/icons/combine.mjs
var Combine = [
  ["path", { d: "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }],
  ["path", { d: "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }],
  ["path", { d: "m7 15 3 3" }],
  ["path", { d: "m7 21 3-3H5a2 2 0 0 1-2-2v-2" }],
  ["rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" }],
  ["rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/command.mjs
var Command = [
  ["path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" }]
];

// node_modules/lucide/dist/esm/icons/compass.mjs
var Compass = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/component.mjs
var Component = [
  [
    "path",
    {
      d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
    }
  ],
  [
    "path",
    {
      d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"
    }
  ],
  [
    "path",
    {
      d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"
    }
  ],
  [
    "path",
    {
      d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/computer.mjs
var Computer = [
  ["path", { d: "M12 18h6" }],
  ["path", { d: "M6 18h.01" }],
  ["path", { d: "M8 6h1" }],
  ["rect", { x: "2", y: "14", width: "20", height: "8", rx: "2" }],
  ["rect", { x: "4", y: "2", width: "16", height: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/concierge-bell.mjs
var ConciergeBell = [
  ["path", { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" }],
  ["path", { d: "M20 16a8 8 0 1 0-16 0" }],
  ["path", { d: "M12 4v4" }],
  ["path", { d: "M10 4h4" }]
];

// node_modules/lucide/dist/esm/icons/construction.mjs
var Construction = [
  ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1" }],
  ["path", { d: "M17 14v7" }],
  ["path", { d: "M7 14v7" }],
  ["path", { d: "M17 3v3" }],
  ["path", { d: "M7 3v3" }],
  ["path", { d: "M10 14 2.3 6.3" }],
  ["path", { d: "m14 6 7.7 7.7" }],
  ["path", { d: "m8 6 8 8" }]
];

// node_modules/lucide/dist/esm/icons/contact-round.mjs
var ContactRound = [
  ["path", { d: "M16 2v2" }],
  ["path", { d: "M17.915 21a6 6 0 10-12 0" }],
  ["path", { d: "M8 2v2" }],
  ["circle", { cx: "12", cy: "11", r: "4" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/cone.mjs
var Cone = [
  ["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }],
  ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3" }]
];

// node_modules/lucide/dist/esm/icons/contact.mjs
var Contact = [
  ["path", { d: "M16 2v2" }],
  ["path", { d: "M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2" }],
  ["path", { d: "M8 2v2" }],
  ["circle", { cx: "12", cy: "10", r: "3" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/container.mjs
var Container = [
  [
    "path",
    {
      d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
    }
  ],
  ["path", { d: "M10 21.9V14L2.1 9.1" }],
  ["path", { d: "m10 14 11.9-6.9" }],
  ["path", { d: "M14 19.8v-8.1" }],
  ["path", { d: "M18 17.5V9.4" }]
];

// node_modules/lucide/dist/esm/icons/contrast.mjs
var Contrast = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 18a6 6 0 0 0 0-12v12z" }]
];

// node_modules/lucide/dist/esm/icons/cookie.mjs
var Cookie = [
  ["path", { d: "M11 17h.01" }],
  [
    "path",
    {
      d: "M11.496 2c.324-.016.558.292.529.615a4 4 0 004.235 4.368.713.713 0 01.758.757 4 4 0 004.366 4.237c.323-.03.63.204.614.527a10 10 0 01-2.915 6.566A1 1 0 114.93 4.918 10 10 0 0111.496 2"
    }
  ],
  ["path", { d: "M12 12h.01" }],
  ["path", { d: "M16 16h.01" }],
  ["path", { d: "M16 3h.01" }],
  ["path", { d: "M21 4h.01" }],
  ["path", { d: "M21 8h.01" }],
  ["path", { d: "M7 14h.01" }],
  ["path", { d: "M9 8h.01" }]
];

// node_modules/lucide/dist/esm/icons/cooking-pot.mjs
var CookingPot = [
  ["path", { d: "M2 12h20" }],
  ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }],
  ["path", { d: "m4 8 16-4" }],
  ["path", { d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }]
];

// node_modules/lucide/dist/esm/icons/copy-check.mjs
var CopyCheck = [
  ["path", { d: "m12 15 2 2 4-4" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
];

// node_modules/lucide/dist/esm/icons/copy-minus.mjs
var CopyMinus = [
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
];

// node_modules/lucide/dist/esm/icons/copy-plus.mjs
var CopyPlus = [
  ["line", { x1: "15", x2: "15", y1: "12", y2: "18" }],
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
];

// node_modules/lucide/dist/esm/icons/copy-x.mjs
var CopyX = [
  ["path", { d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2" }],
  ["rect", { x: "8", y: "8", width: "14", height: "14", rx: "2" }],
  ["path", { d: "m12.5 12.5 5 5" }],
  ["path", { d: "m12.5 17.5 5-5" }]
];

// node_modules/lucide/dist/esm/icons/copy.mjs
var Copy = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
];

// node_modules/lucide/dist/esm/icons/copy-slash.mjs
var CopySlash = [
  ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
];

// node_modules/lucide/dist/esm/icons/copyleft.mjs
var Copyleft = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66" }]
];

// node_modules/lucide/dist/esm/icons/copyright.mjs
var Copyright = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66" }]
];

// node_modules/lucide/dist/esm/icons/corner-down-left.mjs
var CornerDownLeft = [
  ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }],
  ["path", { d: "m9 10-5 5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/corner-down-right.mjs
var CornerDownRight = [
  ["path", { d: "m15 10 5 5-5 5" }],
  ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12" }]
];

// node_modules/lucide/dist/esm/icons/corner-left-down.mjs
var CornerLeftDown = [
  ["path", { d: "m14 15-5 5-5-5" }],
  ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" }]
];

// node_modules/lucide/dist/esm/icons/corner-left-up.mjs
var CornerLeftUp = [
  ["path", { d: "M14 9 9 4 4 9" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4" }]
];

// node_modules/lucide/dist/esm/icons/corner-right-down.mjs
var CornerRightDown = [
  ["path", { d: "m10 15 5 5 5-5" }],
  ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12" }]
];

// node_modules/lucide/dist/esm/icons/corner-right-up.mjs
var CornerRightUp = [
  ["path", { d: "m10 9 5-5 5 5" }],
  ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4" }]
];

// node_modules/lucide/dist/esm/icons/corner-up-left.mjs
var CornerUpLeft = [
  ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4" }],
  ["path", { d: "M9 14 4 9l5-5" }]
];

// node_modules/lucide/dist/esm/icons/corner-up-right.mjs
var CornerUpRight = [
  ["path", { d: "m15 14 5-5-5-5" }],
  ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12" }]
];

// node_modules/lucide/dist/esm/icons/cpu.mjs
var Cpu = [
  ["path", { d: "M12 20v2" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M17 20v2" }],
  ["path", { d: "M17 2v2" }],
  ["path", { d: "M2 12h2" }],
  ["path", { d: "M2 17h2" }],
  ["path", { d: "M2 7h2" }],
  ["path", { d: "M20 12h2" }],
  ["path", { d: "M20 17h2" }],
  ["path", { d: "M20 7h2" }],
  ["path", { d: "M7 20v2" }],
  ["path", { d: "M7 2v2" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/creative-commons.mjs
var CreativeCommons = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }],
  ["path", { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }]
];

// node_modules/lucide/dist/esm/icons/credit-card-check.mjs
var CreditCardCheck = [
  ["path", { d: "M12.5 19H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v4" }],
  ["path", { d: "M2 10h20" }],
  ["path", { d: "M6 14h2" }],
  ["path", { d: "m16 17 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/credit-card-minus.mjs
var CreditCardMinus = [
  ["path", { d: "M22 13V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h8.536" }],
  ["path", { d: "M22 10H2" }],
  ["path", { d: "M6 14h2" }],
  ["path", { d: "M16 17h6" }]
];

// node_modules/lucide/dist/esm/icons/credit-card-plus.mjs
var CreditCardPlus = [
  ["path", { d: "M22 11.354V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h8.536" }],
  ["path", { d: "M22 10H2" }],
  ["path", { d: "M6 14h2" }],
  ["path", { d: "M16 17h6" }],
  ["path", { d: "M19 14v6" }]
];

// node_modules/lucide/dist/esm/icons/credit-card-reader.mjs
var CreditCardReader = [
  ["path", { d: "M15 16v1" }],
  [
    "path",
    {
      d: "M16.963 7.734A1 1 0 0015.999 7H8.003a1 1 0 00-.964.734L4.073 18.467A2 2 0 006 21h12a2 2 0 001.927-2.532z"
    }
  ],
  ["path", { d: "M2.678 8.5A2 2 0 012 7V5a2 2 0 012-2h16a2 2 0 012 2v2a2 2 0 01-.676 1.499" }],
  ["path", { d: "m9 21 2-14" }]
];

// node_modules/lucide/dist/esm/icons/credit-card-x.mjs
var CreditCardX = [
  ["path", { d: "M12.5 19H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v3.5" }],
  ["path", { d: "M2 10h20" }],
  ["path", { d: "M6 14h2" }],
  ["path", { d: "m16.5 14.5 5 5" }],
  ["path", { d: "m21.5 14.5-5 5" }]
];

// node_modules/lucide/dist/esm/icons/credit-card.mjs
var CreditCard = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10" }],
  ["path", { d: "M6 14h2" }]
];

// node_modules/lucide/dist/esm/icons/croissant.mjs
var Croissant = [
  ["path", { d: "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" }],
  ["path", { d: "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" }],
  ["path", { d: "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" }],
  ["path", { d: "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" }],
  [
    "path",
    {
      d: "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/crop.mjs
var Crop = [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }]
];

// node_modules/lucide/dist/esm/icons/cross.mjs
var Cross = [
  [
    "path",
    {
      d: "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/crosshair.mjs
var Crosshair = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18" }]
];

// node_modules/lucide/dist/esm/icons/cuboid.mjs
var Cuboid = [
  ["path", { d: "M10 22v-8" }],
  ["path", { d: "M2.336 8.89 10 14l11.715-7.029" }],
  [
    "path",
    {
      d: "M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/cup-soda.mjs
var CupSoda = [
  ["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }],
  ["path", { d: "M5 8h14" }],
  ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }],
  ["path", { d: "m12 8 1-6h2" }]
];

// node_modules/lucide/dist/esm/icons/crown.mjs
var Crown = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
    }
  ],
  ["path", { d: "M5 21h14" }]
];

// node_modules/lucide/dist/esm/icons/currency.mjs
var Currency = [
  ["circle", { cx: "12", cy: "12", r: "8" }],
  ["line", { x1: "3", x2: "6", y1: "3", y2: "6" }],
  ["line", { x1: "21", x2: "18", y1: "3", y2: "6" }],
  ["line", { x1: "3", x2: "6", y1: "21", y2: "18" }],
  ["line", { x1: "21", x2: "18", y1: "21", y2: "18" }]
];

// node_modules/lucide/dist/esm/icons/cupcake.mjs
var Cupcake = [
  ["path", { d: "M12 22v-9" }],
  ["path", { d: "M14 4h1a3 3 0 013 3l-.004.125A4 4 0 0121 11v2" }],
  ["path", { d: "m15.5 22 1.5-9" }],
  [
    "path",
    {
      d: "M21 13a1 1 0 01.919 1.394l-2.74 6.394A2 2 0 0117.34 22H6.659a2 2 0 01-1.838-1.212l-2.74-6.394A1 1 0 013 13z"
    }
  ],
  ["path", { d: "M3 13v-2a4 4 0 013.003-3.875L6 7a3 3 0 013-3h1" }],
  ["path", { d: "M8.5 22 7 13" }],
  ["circle", { cx: "12", cy: "4", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/cylinder.mjs
var Cylinder = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }]
];

// node_modules/lucide/dist/esm/icons/dam.mjs
var Dam = [
  ["path", { d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
  ["path", { d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
  ["path", { d: "M2 10h4" }],
  ["path", { d: "M2 14h4" }],
  ["path", { d: "M2 18h4" }],
  ["path", { d: "M2 6h4" }],
  ["path", { d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" }]
];

// node_modules/lucide/dist/esm/icons/database-arrow-down.mjs
var DatabaseArrowDown = [
  ["path", { d: "m16 19 3 3 3-3" }],
  ["path", { d: "M19 16v6" }],
  ["path", { d: "M21 12.536V5" }],
  ["path", { d: "M3 12A9 3 0 0 0 15.182 14.806" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 13.318 21.968" }],
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }]
];

// node_modules/lucide/dist/esm/icons/database-arrow-up.mjs
var DatabaseArrowUp = [
  ["path", { d: "M19 22v-6" }],
  ["path", { d: "M21 12.536V5" }],
  ["path", { d: "m22 19-3-3-3 3" }],
  ["path", { d: "M3 12A9 3 0 0 0 14.457 14.886" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 13.318 21.968" }],
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }]
];

// node_modules/lucide/dist/esm/icons/database-backup.mjs
var DatabaseBackup = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
  ["path", { d: "M3 12a9 3 0 0 0 5 2.69" }],
  ["path", { d: "M21 9.3V5" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88" }],
  ["path", { d: "M12 12v4h4" }],
  ["path", { d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" }]
];

// node_modules/lucide/dist/esm/icons/database-check.mjs
var DatabaseCheck = [
  ["path", { d: "m16 19 2 2 4-4" }],
  ["path", { d: "M21 13.127V5" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 13.318 21.968" }],
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }]
];

// node_modules/lucide/dist/esm/icons/database-minus.mjs
var DatabaseMinus = [
  ["path", { d: "M21 15V5" }],
  ["path", { d: "M22 19h-6" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 13.318 21.968" }],
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }]
];

// node_modules/lucide/dist/esm/icons/database-plus.mjs
var DatabasePlus = [
  ["path", { d: "M19 16v6" }],
  ["path", { d: "M21 12.536V5" }],
  ["path", { d: "M22 19h-6" }],
  ["path", { d: "M3 12A9 3 0 0 0 15.1824 14.8061" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 13.318 21.968" }],
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }]
];

// node_modules/lucide/dist/esm/icons/database-search.mjs
var DatabaseSearch = [
  ["path", { d: "M21 11.693V5" }],
  ["path", { d: "m22 22-1.875-1.875" }],
  ["path", { d: "M3 12a9 3 0 0 0 8.697 2.998" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 9.28 2.999" }],
  ["circle", { cx: "18", cy: "18", r: "3" }],
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }]
];

// node_modules/lucide/dist/esm/icons/database-x.mjs
var DatabaseX = [
  ["path", { d: "m17 17 5 5" }],
  ["path", { d: "M19.323 13.744A9 3 0 0 0 21 12" }],
  ["path", { d: "M21 13.127V5" }],
  ["path", { d: "m22 17-5 5" }],
  ["path", { d: "M3 12A9 3 0 0 0 13.563 14.954" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 13 21.981" }],
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }]
];

// node_modules/lucide/dist/esm/icons/database-zap.mjs
var DatabaseZap = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84" }],
  ["path", { d: "M21 5V8" }],
  ["path", { d: "M21 12L18 17H22L19 22" }],
  ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87" }]
];

// node_modules/lucide/dist/esm/icons/database.mjs
var Database = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12" }]
];

// node_modules/lucide/dist/esm/icons/decimals-arrow-left.mjs
var DecimalsArrowLeft = [
  ["path", { d: "m13 21-3-3 3-3" }],
  ["path", { d: "M20 18H10" }],
  ["path", { d: "M3 11h.01" }],
  ["rect", { x: "6", y: "3", width: "5", height: "8", rx: "2.5" }]
];

// node_modules/lucide/dist/esm/icons/decimals-arrow-right.mjs
var DecimalsArrowRight = [
  ["path", { d: "M10 18h10" }],
  ["path", { d: "m17 21 3-3-3-3" }],
  ["path", { d: "M3 11h.01" }],
  ["rect", { x: "15", y: "3", width: "5", height: "8", rx: "2.5" }],
  ["rect", { x: "6", y: "3", width: "5", height: "8", rx: "2.5" }]
];

// node_modules/lucide/dist/esm/icons/delete.mjs
var Delete = [
  [
    "path",
    {
      d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
    }
  ],
  ["path", { d: "m12 9 6 6" }],
  ["path", { d: "m18 9-6 6" }]
];

// node_modules/lucide/dist/esm/icons/dessert.mjs
var Dessert = [
  [
    "path",
    {
      d: "M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826"
    }
  ],
  ["path", { d: "M20.804 14.869a9 9 0 0 1-17.608 0" }],
  ["circle", { cx: "12", cy: "4", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/diameter.mjs
var Diameter = [
  ["circle", { cx: "19", cy: "19", r: "2" }],
  ["circle", { cx: "5", cy: "5", r: "2" }],
  ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86" }],
  ["path", { d: "m6.41 6.41 11.18 11.18" }],
  ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86" }]
];

// node_modules/lucide/dist/esm/icons/diamond-percent.mjs
var DiamondPercent = [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
    }
  ],
  ["path", { d: "M9.2 9.2h.01" }],
  ["path", { d: "m14.5 9.5-5 5" }],
  ["path", { d: "M14.7 14.8h.01" }]
];

// node_modules/lucide/dist/esm/icons/diamond-minus.mjs
var DiamondMinus = [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
    }
  ],
  ["path", { d: "M8 12h8" }]
];

// node_modules/lucide/dist/esm/icons/diamond-plus.mjs
var DiamondPlus = [
  ["path", { d: "M12 8v8" }],
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
    }
  ],
  ["path", { d: "M8 12h8" }]
];

// node_modules/lucide/dist/esm/icons/diamond.mjs
var Diamond = [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/dice-1.mjs
var Dice1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["path", { d: "M12 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/dice-3.mjs
var Dice3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["path", { d: "M16 8h.01" }],
  ["path", { d: "M12 12h.01" }],
  ["path", { d: "M8 16h.01" }]
];

// node_modules/lucide/dist/esm/icons/dice-2.mjs
var Dice2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["path", { d: "M15 9h.01" }],
  ["path", { d: "M9 15h.01" }]
];

// node_modules/lucide/dist/esm/icons/dice-4.mjs
var Dice4 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["path", { d: "M16 8h.01" }],
  ["path", { d: "M8 8h.01" }],
  ["path", { d: "M8 16h.01" }],
  ["path", { d: "M16 16h.01" }]
];

// node_modules/lucide/dist/esm/icons/dice-5.mjs
var Dice5 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["path", { d: "M16 8h.01" }],
  ["path", { d: "M8 8h.01" }],
  ["path", { d: "M8 16h.01" }],
  ["path", { d: "M16 16h.01" }],
  ["path", { d: "M12 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/dice-6.mjs
var Dice6 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["path", { d: "M16 8h.01" }],
  ["path", { d: "M16 12h.01" }],
  ["path", { d: "M16 16h.01" }],
  ["path", { d: "M8 8h.01" }],
  ["path", { d: "M8 12h.01" }],
  ["path", { d: "M8 16h.01" }]
];

// node_modules/lucide/dist/esm/icons/dices.mjs
var Dices = [
  ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2" }],
  ["path", { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" }],
  ["path", { d: "M6 18h.01" }],
  ["path", { d: "M10 14h.01" }],
  ["path", { d: "M15 6h.01" }],
  ["path", { d: "M18 9h.01" }]
];

// node_modules/lucide/dist/esm/icons/diff.mjs
var Diff = [
  ["path", { d: "M12 3v14" }],
  ["path", { d: "M5 10h14" }],
  ["path", { d: "M5 21h14" }]
];

// node_modules/lucide/dist/esm/icons/disc-2.mjs
var Disc2 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["circle", { cx: "12", cy: "12", r: "4" }],
  ["path", { d: "M12 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/disc-3.mjs
var Disc3 = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2" }],
  ["circle", { cx: "12", cy: "12", r: "2" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2" }]
];

// node_modules/lucide/dist/esm/icons/disc-album.mjs
var DiscAlbum = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["circle", { cx: "12", cy: "12", r: "5" }],
  ["path", { d: "M12 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/disc.mjs
var Disc = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["circle", { cx: "12", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/divide.mjs
var Divide = [
  ["circle", { cx: "12", cy: "6", r: "1" }],
  ["line", { x1: "5", x2: "19", y1: "12", y2: "12" }],
  ["circle", { cx: "12", cy: "18", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/dna-off.mjs
var DnaOff = [
  ["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" }],
  ["path", { d: "m17 6-2.891-2.891" }],
  ["path", { d: "M2 15c3.333-3 6.667-3 10-3" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "m20 9 .891.891" }],
  ["path", { d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" }],
  ["path", { d: "M3.109 14.109 4 15" }],
  ["path", { d: "m6.5 12.5 1 1" }],
  ["path", { d: "m7 18 2.891 2.891" }],
  ["path", { d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" }]
];

// node_modules/lucide/dist/esm/icons/dna.mjs
var Dna = [
  ["path", { d: "m10 16 1.5 1.5" }],
  ["path", { d: "m14 8-1.5-1.5" }],
  ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }],
  ["path", { d: "m16.5 10.5 1 1" }],
  ["path", { d: "m17 6-2.891-2.891" }],
  ["path", { d: "M2 15c6.667-6 13.333 0 20-6" }],
  ["path", { d: "m20 9 .891.891" }],
  ["path", { d: "M3.109 14.109 4 15" }],
  ["path", { d: "m6.5 12.5 1 1" }],
  ["path", { d: "m7 18 2.891 2.891" }],
  ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }]
];

// node_modules/lucide/dist/esm/icons/dock.mjs
var Dock = [
  ["path", { d: "M2 8h20" }],
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
  ["path", { d: "M6 16h12" }]
];

// node_modules/lucide/dist/esm/icons/dog.mjs
var Dog = [
  ["path", { d: "M11.25 16.25h1.5L12 17z" }],
  ["path", { d: "M16 14v.5" }],
  [
    "path",
    {
      d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"
    }
  ],
  ["path", { d: "M8 14v.5" }],
  [
    "path",
    {
      d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/dome.mjs
var Dome = [
  ["path", { d: "M10 21v-3a2 2 0 014 0v3" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M18 12v9" }],
  ["path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a1 1 0 011-1h18a1 1 0 011 1z" }],
  ["path", { d: "M4 12a8 8 0 0116 0" }],
  ["path", { d: "M6 12v9" }]
];

// node_modules/lucide/dist/esm/icons/dollar-sign.mjs
var DollarSign = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }]
];

// node_modules/lucide/dist/esm/icons/donut.mjs
var Donut = [
  [
    "path",
    {
      d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/door-closed-locked.mjs
var DoorClosedLocked = [
  ["path", { d: "M19 8V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }],
  ["path", { d: "M2 21h8" }],
  ["path", { d: "M20 16v-2a2 2 0 00-4 0v2" }],
  ["path", { d: "M9 12h.01" }],
  ["rect", { x: "14", y: "16", width: "8", height: "5", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/door-closed-package.mjs
var DoorClosedPackage = [
  ["path", { d: "M18 13v3" }],
  ["path", { d: "M19 9V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }],
  ["path", { d: "M2 21h8" }],
  ["path", { d: "M9 12h.01" }],
  ["rect", { x: "14", y: "13", width: "8", height: "8", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/door-closed.mjs
var DoorClosed = [
  ["path", { d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }],
  ["path", { d: "M2 21h20" }],
  ["path", { d: "M9 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/door-open.mjs
var DoorOpen = [
  ["path", { d: "M10 21H2" }],
  ["path", { d: "M10 3H7a2 2 0 00-2 2v16" }],
  ["path", { d: "M14 12h.01" }],
  ["path", { d: "M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z" }],
  ["path", { d: "M22 21h-3" }]
];

// node_modules/lucide/dist/esm/icons/door-stairwell.mjs
var DoorStairwell = [
  ["path", { d: "M12 17v-3a1 1 0 011-1h6" }],
  ["path", { d: "M19 17h-9a1 1 0 00-1 1v3" }],
  ["path", { d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" }],
  ["path", { d: "M19 9h-3a1 1 0 00-1 1v3" }],
  ["path", { d: "M22 21H2" }]
];

// node_modules/lucide/dist/esm/icons/dot.mjs
var Dot = [["circle", { cx: "12", cy: "12", r: "1" }]];

// node_modules/lucide/dist/esm/icons/download.mjs
var Download = [
  ["path", { d: "M12 15V3" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
  ["path", { d: "m7 10 5 5 5-5" }]
];

// node_modules/lucide/dist/esm/icons/drafting-compass.mjs
var DraftingCompass = [
  ["path", { d: "m12.99 6.74 1.93 3.44" }],
  ["path", { d: "M19.136 12a10 10 0 0 1-14.271 0" }],
  ["path", { d: "m21 21-2.16-3.84" }],
  ["path", { d: "m3 21 8.02-14.26" }],
  ["circle", { cx: "12", cy: "5", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/drama.mjs
var Drama = [
  ["path", { d: "M10 11h.01" }],
  ["path", { d: "M14 6h.01" }],
  ["path", { d: "M18 6h.01" }],
  ["path", { d: "M6.5 13.1h.01" }],
  ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" }],
  ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0" }],
  [
    "path",
    {
      d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
    }
  ],
  ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" }]
];

// node_modules/lucide/dist/esm/icons/drill.mjs
var Drill = [
  ["path", { d: "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" }],
  [
    "path",
    {
      d: "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"
    }
  ],
  ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" }],
  ["path", { d: "M18 6h4" }],
  ["path", { d: "m5 10-2 8" }],
  ["path", { d: "m7 18 2-8" }]
];

// node_modules/lucide/dist/esm/icons/drone.mjs
var Drone = [
  ["path", { d: "M10 10 7 7" }],
  ["path", { d: "m10 14-3 3" }],
  ["path", { d: "m14 10 3-3" }],
  ["path", { d: "m14 14 3 3" }],
  ["path", { d: "M14.205 4.139a4 4 0 1 1 5.439 5.863" }],
  ["path", { d: "M19.637 14a4 4 0 1 1-5.432 5.868" }],
  ["path", { d: "M4.367 10a4 4 0 1 1 5.438-5.862" }],
  ["path", { d: "M9.795 19.862a4 4 0 1 1-5.429-5.873" }],
  ["rect", { x: "10", y: "8", width: "4", height: "8", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/droplet-off.mjs
var DropletOff = [
  [
    "path",
    {
      d: "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"
    }
  ],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" }]
];

// node_modules/lucide/dist/esm/icons/droplet.mjs
var Droplet = [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/droplets.mjs
var Droplets = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/drum.mjs
var Drum = [
  ["path", { d: "m2 2 8 8" }],
  ["path", { d: "m22 2-8 8" }],
  ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5" }],
  ["path", { d: "M7 13.4v7.9" }],
  ["path", { d: "M12 14v8" }],
  ["path", { d: "M17 13.4v7.9" }],
  ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9" }]
];

// node_modules/lucide/dist/esm/icons/drumstick.mjs
var Drumstick = [
  ["path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }],
  ["path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" }]
];

// node_modules/lucide/dist/esm/icons/dumbbell.mjs
var Dumbbell = [
  [
    "path",
    {
      d: "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"
    }
  ],
  ["path", { d: "m2.5 21.5 1.4-1.4" }],
  ["path", { d: "m20.1 3.9 1.4-1.4" }],
  [
    "path",
    {
      d: "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"
    }
  ],
  ["path", { d: "m9.6 14.4 4.8-4.8" }]
];

// node_modules/lucide/dist/esm/icons/ear-off.mjs
var EarOff = [
  ["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" }],
  ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14" }],
  ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" }],
  ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/ear.mjs
var Ear = [
  ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }],
  ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" }]
];

// node_modules/lucide/dist/esm/icons/earth-lock.mjs
var EarthLock = [
  ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3" }],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }],
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }],
  ["path", { d: "M12 2a10 10 0 1 0 9.54 13" }],
  ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }],
  ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/earth.mjs
var Earth = [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }],
  [
    "path",
    { d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/eclipse.mjs
var Eclipse = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 2a7 7 0 1 0 10 10" }]
];

// node_modules/lucide/dist/esm/icons/egg-fried.mjs
var EggFried = [
  ["circle", { cx: "11.5", cy: "12.5", r: "3.5" }],
  [
    "path",
    {
      d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/egg-off.mjs
var EggOff = [
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" }],
  ["path", { d: "M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" }]
];

// node_modules/lucide/dist/esm/icons/egg.mjs
var Egg = [["path", { d: "M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" }]];

// node_modules/lucide/dist/esm/icons/eject.mjs
var Eject = [
  [
    "path",
    { d: "M4 13a1 1 0 0 1-.72-1.695l7.257-7.668a2 2 0 0 1 2.926 0l7.256 7.668A1 1 0 0 1 20 13z" }
  ],
  ["rect", { x: "3", y: "17", width: "18", height: "4", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/ellipse.mjs
var Ellipse = [["ellipse", { cx: "12", cy: "12", rx: "10", ry: "6" }]];

// node_modules/lucide/dist/esm/icons/ellipsis-vertical.mjs
var EllipsisVertical = [
  ["circle", { cx: "12", cy: "12", r: "1" }],
  ["circle", { cx: "12", cy: "5", r: "1" }],
  ["circle", { cx: "12", cy: "19", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/ellipsis.mjs
var Ellipsis = [
  ["circle", { cx: "12", cy: "12", r: "1" }],
  ["circle", { cx: "19", cy: "12", r: "1" }],
  ["circle", { cx: "5", cy: "12", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/engine.mjs
var Engine = [
  ["path", { d: "M10 3h6" }],
  ["path", { d: "M13 3v4" }],
  ["path", { d: "M2 10v6" }],
  ["path", { d: "M2 13h4" }],
  [
    "path",
    {
      d: "M6 16a2 2 0 002 2h1a2 2 0 011.6.8l.3.4a2 2 0 001.6.8h2.264a2 2 0 001.789-1.106l1.67-3.341a1 1 0 01.895-.553H21a1 1 0 001-1v-4a1 1 0 00-1-1h-3.5a1 1 0 01-.8-.4l-.9-1.2A1 1 0 0015 7h-4a1 1 0 00-.8.4l-.9 1.2a1 1 0 01-.8.4H7a1 1 0 00-1 1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/equal-approximately-not.mjs
var EqualApproximatelyNot = [
  ["path", { d: "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }],
  ["path", { d: "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }],
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]
];

// node_modules/lucide/dist/esm/icons/equal-approximately.mjs
var EqualApproximately = [
  ["path", { d: "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }],
  ["path", { d: "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }]
];

// node_modules/lucide/dist/esm/icons/equal-not.mjs
var EqualNot = [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }],
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]
];

// node_modules/lucide/dist/esm/icons/equal.mjs
var Equal = [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }]
];

// node_modules/lucide/dist/esm/icons/eraser.mjs
var Eraser = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828" }]
];

// node_modules/lucide/dist/esm/icons/euro.mjs
var Euro = [
  ["path", { d: "M4 10h12" }],
  ["path", { d: "M4 14h9" }],
  [
    "path",
    { d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" }
  ]
];

// node_modules/lucide/dist/esm/icons/ethernet-port.mjs
var EthernetPort = [
  ["path", { d: "M10 8v1" }],
  ["path", { d: "M14 8v1" }],
  ["path", { d: "M18 8v1" }],
  [
    "path",
    {
      d: "M19 17a2 2 0 00-1.765 1.059l-.47.882A2 2 0 0115 20H9a2 2 0 01-1.765-1.059l-.47-.882A2 2 0 005 17H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2z"
    }
  ],
  ["path", { d: "M6 8v1" }]
];

// node_modules/lucide/dist/esm/icons/ev-charger.mjs
var EvCharger = [
  ["path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" }],
  ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" }],
  ["path", { d: "M2 21h13" }],
  ["path", { d: "M3 7h11" }],
  ["path", { d: "m9 11-2 3h3l-2 3" }]
];

// node_modules/lucide/dist/esm/icons/expand.mjs
var Expand = [
  ["path", { d: "m15 15 6 6" }],
  ["path", { d: "m15 9 6-6" }],
  ["path", { d: "M21 16v5h-5" }],
  ["path", { d: "M21 8V3h-5" }],
  ["path", { d: "M3 16v5h5" }],
  ["path", { d: "m3 21 6-6" }],
  ["path", { d: "M3 8V3h5" }],
  ["path", { d: "M9 9 3 3" }]
];

// node_modules/lucide/dist/esm/icons/external-link.mjs
var ExternalLink = [
  ["path", { d: "M15 3h6v6" }],
  ["path", { d: "M10 14 21 3" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]
];

// node_modules/lucide/dist/esm/icons/eye-closed.mjs
var EyeClosed = [
  ["path", { d: "m15 18-.722-3.25" }],
  ["path", { d: "M2 8a10.645 10.645 0 0 0 20 0" }],
  ["path", { d: "m20 15-1.726-2.05" }],
  ["path", { d: "m4 15 1.726-2.05" }],
  ["path", { d: "m9 18 .722-3.25" }]
];

// node_modules/lucide/dist/esm/icons/eye-dashed.mjs
var EyeDashed = [
  ["path", { d: "M13.054 18.946a11 11 0 0 1-2.11 0" }],
  ["path", { d: "M13.054 5.054a11 11 0 0 0-2.11-.001" }],
  ["path", { d: "M17.072 6.274a11 11 0 0 1 1.753 1.173" }],
  ["path", { d: "M18.825 16.552a11 11 0 0 1-1.753 1.174" }],
  ["path", { d: "M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955" }],
  ["path", { d: "M21.485 10.697a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954" }],
  ["path", { d: "M5.173 7.448a11 11 0 0 1 1.753-1.174" }],
  ["path", { d: "M6.926 17.726a11 11 0 0 1-1.753-1.174" }],
  ["circle", { cx: "12", cy: "12", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/eye.mjs
var Eye = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/eye-off.mjs
var EyeOff = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
    }
  ],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/face-angry.mjs
var FaceAngry = [
  ["path", { d: "M15 12v-1.584" }],
  ["path", { d: "M17 10a5 5 0 00-3 1" }],
  ["path", { d: "M7 10a5 5 0 013 1" }],
  ["path", { d: "M9 12v-1.584" }],
  ["path", { d: "M9 17a5 5 0 016.001 0" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/face-expressionless.mjs
var FaceExpressionless = [
  ["path", { d: "M14 10h2" }],
  ["path", { d: "M8 10h2" }],
  ["path", { d: "M8 16h8" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/face-grinning.mjs
var FaceGrinning = [
  ["path", { d: "M15 10V9" }],
  [
    "path",
    { d: "M7.084 14.302a5.12 5.12 0 009.833 0 .24.24 0 00-.235-.302H7.32a.24.24 0 00-.235.302" }
  ],
  ["path", { d: "M9 10V9" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/face-neutral.mjs
var FaceNeutral = [
  ["path", { d: "M15 10V9" }],
  ["path", { d: "M8 16h8" }],
  ["path", { d: "M9 10V9" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/face-slightly-frowning.mjs
var FaceSlightlyFrowning = [
  ["path", { d: "M15 10V9" }],
  ["path", { d: "M9 10V9" }],
  ["path", { d: "M9 16a5 5 0 016 0" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/face-slightly-smiling-plus.mjs
var FaceSlightlySmilingPlus = [
  ["path", { d: "M13.267 2.08a10 10 0 108.653 8.653" }],
  ["path", { d: "M15 10V9" }],
  ["path", { d: "M16 5h6" }],
  ["path", { d: "M16.472 15a6 6 0 01-8.943 0" }],
  ["path", { d: "M19 2v6" }],
  ["path", { d: "M9 10V9" }]
];

// node_modules/lucide/dist/esm/icons/face-slightly-smiling.mjs
var FaceSlightlySmiling = [
  ["path", { d: "M15 10V9" }],
  ["path", { d: "M16.472 15a6 6 0 01-8.943 0" }],
  ["path", { d: "M9 10V9" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/factory.mjs
var Factory = [
  ["path", { d: "M12 16h.01" }],
  ["path", { d: "M16 16h.01" }],
  [
    "path",
    {
      d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"
    }
  ],
  ["path", { d: "M8 16h.01" }]
];

// node_modules/lucide/dist/esm/icons/fan.mjs
var Fan = [
  [
    "path",
    {
      d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
    }
  ],
  ["path", { d: "M12 12v.01" }]
];

// node_modules/lucide/dist/esm/icons/fast-forward.mjs
var FastForward = [
  ["path", { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" }],
  ["path", { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" }]
];

// node_modules/lucide/dist/esm/icons/faucet.mjs
var Faucet = [
  ["path", { d: "M10.083 5.428 5.57 4.083a2 2 0 10.001 3.834l4.512-1.345" }],
  ["path", { d: "M12 8v3" }],
  ["path", { d: "m13.917 5.428 4.511-1.345a2 2 0 110 3.834l-4.51-1.345" }],
  ["path", { d: "M18 17v-4.006" }],
  ["path", { d: "M22 11v8" }],
  [
    "path",
    {
      d: "M22 12h-3a1 1 0 00-1 .994h-2.539a4 4 0 00-6.915-.012L7 13a5 5 0 00-5 5v1a1 1 0 001 1h2a1 1 0 001-1v-1a1 1 0 01.995-1l1.552.018a4 4 0 006.907 0L18 17a1 1 0 001 1h3"
    }
  ],
  ["circle", { cx: "12", cy: "6", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/fence.mjs
var Fence = [
  ["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }],
  ["path", { d: "M6 8h4" }],
  ["path", { d: "M6 18h4" }],
  ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }],
  ["path", { d: "M14 8h4" }],
  ["path", { d: "M14 18h4" }],
  ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }]
];

// node_modules/lucide/dist/esm/icons/feather.mjs
var Feather = [
  [
    "path",
    {
      d: "M14.086 18.412A2 2 0 0112.67 19H5v-7.672a2 2 0 01.586-1.414L11.75 3.75a6 6 0 118.49 8.49z"
    }
  ],
  ["path", { d: "M16 8 2 22" }],
  ["path", { d: "M17.488 15H9" }]
];

// node_modules/lucide/dist/esm/icons/ferris-wheel.mjs
var FerrisWheel = [
  ["circle", { cx: "12", cy: "12", r: "2" }],
  ["path", { d: "M12 2v4" }],
  ["path", { d: "m6.8 15-3.5 2" }],
  ["path", { d: "m20.7 7-3.5 2" }],
  ["path", { d: "M6.8 9 3.3 7" }],
  ["path", { d: "m20.7 17-3.5-2" }],
  ["path", { d: "m9 22 3-8 3 8" }],
  ["path", { d: "M8 22h8" }],
  ["path", { d: "M18 18.7a9 9 0 1 0-12 0" }]
];

// node_modules/lucide/dist/esm/icons/file-archive.mjs
var FileArchive = [
  [
    "path",
    {
      d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M8 12v-1" }],
  ["path", { d: "M8 18v-2" }],
  ["path", { d: "M8 7V6" }],
  ["circle", { cx: "8", cy: "20", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/file-axis-3d.mjs
var FileAxis3d = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m8 18 4-4" }],
  ["path", { d: "M8 10v8h8" }]
];

// node_modules/lucide/dist/esm/icons/file-badge.mjs
var FileBadge = [
  [
    "path",
    {
      d: "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  [
    "path",
    {
      d: "m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"
    }
  ],
  ["circle", { cx: "6", cy: "14", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/file-box.mjs
var FileBox = [
  ["path", { d: "M14 2v5a1 1 0 001 1h5" }],
  [
    "path",
    {
      d: "M14.692 22H18a2 2 0 002-2V8a2.4 2.4 0 00-.706-1.706l-3.588-3.588A2.4 2.4 0 0014 2H6a2 2 0 00-2 2v3.804"
    }
  ],
  ["path", { d: "M2.264 13.752 7 16.5l4.737-2.748" }],
  [
    "path",
    {
      d: "M2.995 13.014A2 2 0 002 14.744v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0012 18.26v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z"
    }
  ],
  ["path", { d: "M7 16.5V22" }]
];

// node_modules/lucide/dist/esm/icons/file-braces-corner.mjs
var FileBracesCorner = [
  [
    "path",
    {
      d: "M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1" }],
  ["path", { d: "M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1" }]
];

// node_modules/lucide/dist/esm/icons/file-braces.mjs
var FileBraces = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }],
  ["path", { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]
];

// node_modules/lucide/dist/esm/icons/file-chart-column-increasing.mjs
var FileChartColumnIncreasing = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M8 18v-2" }],
  ["path", { d: "M12 18v-4" }],
  ["path", { d: "M16 18v-6" }]
];

// node_modules/lucide/dist/esm/icons/file-chart-column.mjs
var FileChartColumn = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M8 18v-1" }],
  ["path", { d: "M12 18v-6" }],
  ["path", { d: "M16 18v-3" }]
];

// node_modules/lucide/dist/esm/icons/file-chart-line.mjs
var FileChartLine = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m16 13-3.5 3.5-2-2L8 17" }]
];

// node_modules/lucide/dist/esm/icons/file-chart-pie.mjs
var FileChartPie = [
  [
    "path",
    {
      d: "M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M4.017 11.512a6 6 0 1 0 8.466 8.475" }],
  [
    "path",
    {
      d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/file-check-corner.mjs
var FileCheckCorner = [
  [
    "path",
    {
      d: "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m14 20 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/file-check.mjs
var FileCheck = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m9 15 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/file-clock.mjs
var FileClock = [
  [
    "path",
    {
      d: "M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M8 14v2.2l1.6 1" }],
  ["circle", { cx: "8", cy: "16", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/file-code-corner.mjs
var FileCodeCorner = [
  [
    "path",
    {
      d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m5 16-3 3 3 3" }],
  ["path", { d: "m9 22 3-3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/file-code.mjs
var FileCode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M10 12.5 8 15l2 2.5" }],
  ["path", { d: "m14 12.5 2 2.5-2 2.5" }]
];

// node_modules/lucide/dist/esm/icons/file-cog.mjs
var FileCog = [
  ["path", { d: "M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z" }],
  ["path", { d: "M20 8v12a2 2 0 0 1-2 2h-4.182" }],
  ["path", { d: "m3.305 19.53.923-.382" }],
  ["path", { d: "M4 10.592V4a2 2 0 0 1 2-2h8" }],
  ["path", { d: "m4.228 16.852-.924-.383" }],
  ["path", { d: "m5.852 15.228-.383-.923" }],
  ["path", { d: "m5.852 20.772-.383.924" }],
  ["path", { d: "m8.148 15.228.383-.923" }],
  ["path", { d: "m8.53 21.696-.382-.924" }],
  ["path", { d: "m9.773 16.852.922-.383" }],
  ["path", { d: "m9.773 19.148.922.383" }],
  ["circle", { cx: "7", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/file-diff.mjs
var FileDiff = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M9 10h6" }],
  ["path", { d: "M12 13V7" }],
  ["path", { d: "M9 17h6" }]
];

// node_modules/lucide/dist/esm/icons/file-digit.mjs
var FileDigit = [
  [
    "path",
    {
      d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M10 16h2v6" }],
  ["path", { d: "M10 22h4" }],
  ["rect", { x: "2", y: "16", width: "4", height: "6", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/file-down.mjs
var FileDown = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M12 18v-6" }],
  ["path", { d: "m9 15 3 3 3-3" }]
];

// node_modules/lucide/dist/esm/icons/file-exclamation-point.mjs
var FileExclamationPoint = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M12 9v4" }],
  ["path", { d: "M12 17h.01" }]
];

// node_modules/lucide/dist/esm/icons/file-headphone.mjs
var FileHeadphone = [
  [
    "path",
    {
      d: "M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  [
    "path",
    { d: "M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0" }
  ]
];

// node_modules/lucide/dist/esm/icons/file-heart.mjs
var FileHeart = [
  [
    "path",
    {
      d: "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  [
    "path",
    {
      d: "M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/file-image.mjs
var FileImage = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["circle", { cx: "10", cy: "12", r: "2" }],
  ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" }]
];

// node_modules/lucide/dist/esm/icons/file-input.mjs
var FileInput = [
  [
    "path",
    {
      d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M2 15h10" }],
  ["path", { d: "m9 18 3-3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/file-key.mjs
var FileKey = [
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M4 12v6" }],
  ["path", { d: "M4 14h2" }],
  [
    "path",
    {
      d: "M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4"
    }
  ],
  ["circle", { cx: "4", cy: "20", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/file-lock.mjs
var FileLock = [
  [
    "path",
    {
      d: "M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M9 17v-2a2 2 0 0 0-4 0v2" }],
  ["rect", { width: "8", height: "5", x: "3", y: "17", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/file-minus-corner.mjs
var FileMinusCorner = [
  [
    "path",
    {
      d: "M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M14 18h6" }]
];

// node_modules/lucide/dist/esm/icons/file-minus.mjs
var FileMinus = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M9 15h6" }]
];

// node_modules/lucide/dist/esm/icons/file-music.mjs
var FileMusic = [
  [
    "path",
    {
      d: "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M8 20v-7l3 1.474" }],
  ["circle", { cx: "6", cy: "20", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/file-pen-line.mjs
var FilePenLine = [
  [
    "path",
    {
      d: "M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z"
    }
  ],
  ["path", { d: "M14.487 7.858A1 1 0 0 1 14 7V2" }],
  [
    "path",
    {
      d: "M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516"
    }
  ],
  ["path", { d: "M8 18h1" }]
];

// node_modules/lucide/dist/esm/icons/file-output.mjs
var FileOutput = [
  [
    "path",
    {
      d: "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m5 11-3 3" }],
  ["path", { d: "m5 17-3-3h10" }]
];

// node_modules/lucide/dist/esm/icons/file-pen.mjs
var FilePen = [
  [
    "path",
    {
      d: "M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  [
    "path",
    {
      d: "M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/file-play.mjs
var FilePlay = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  [
    "path",
    {
      d: "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/file-plus-corner.mjs
var FilePlusCorner = [
  [
    "path",
    {
      d: "M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M14 19h6" }],
  ["path", { d: "M17 16v6" }]
];

// node_modules/lucide/dist/esm/icons/file-plus.mjs
var FilePlus = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M9 15h6" }],
  ["path", { d: "M12 18v-6" }]
];

// node_modules/lucide/dist/esm/icons/file-question-mark.mjs
var FileQuestionMark = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M12 17h.01" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }]
];

// node_modules/lucide/dist/esm/icons/file-search-corner.mjs
var FileSearchCorner = [
  [
    "path",
    {
      d: "M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m21 22-2.88-2.88" }],
  ["circle", { cx: "16", cy: "17", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/file-scan.mjs
var FileScan = [
  [
    "path",
    {
      d: "M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M16 14a2 2 0 0 0-2 2" }],
  ["path", { d: "M16 22a2 2 0 0 1-2-2" }],
  ["path", { d: "M20 14a2 2 0 0 1 2 2" }],
  ["path", { d: "M20 22a2 2 0 0 0 2-2" }]
];

// node_modules/lucide/dist/esm/icons/file-search.mjs
var FileSearch = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["circle", { cx: "11.5", cy: "14.5", r: "2.5" }],
  ["path", { d: "M13.3 16.3 15 18" }]
];

// node_modules/lucide/dist/esm/icons/file-signal.mjs
var FileSignal = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M8 15h.01" }],
  ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3" }],
  ["path", { d: "M15 12a5 5 0 0 1 0 6" }]
];

// node_modules/lucide/dist/esm/icons/file-sliders.mjs
var FileSliders = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M8 12h8" }],
  ["path", { d: "M10 11v2" }],
  ["path", { d: "M8 17h8" }],
  ["path", { d: "M14 16v2" }]
];

// node_modules/lucide/dist/esm/icons/file-spreadsheet.mjs
var FileSpreadsheet = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M8 13h2" }],
  ["path", { d: "M14 13h2" }],
  ["path", { d: "M8 17h2" }],
  ["path", { d: "M14 17h2" }]
];

// node_modules/lucide/dist/esm/icons/file-stack.mjs
var FileStack = [
  ["path", { d: "M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" }],
  ["path", { d: "M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" }],
  [
    "path",
    {
      d: "M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/file-symlink.mjs
var FileSymlink = [
  [
    "path",
    {
      d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m10 18 3-3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/file-terminal.mjs
var FileTerminal = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m8 16 2-2-2-2" }],
  ["path", { d: "M12 18h4" }]
];

// node_modules/lucide/dist/esm/icons/file-text.mjs
var FileText = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M10 9H8" }],
  ["path", { d: "M16 13H8" }],
  ["path", { d: "M16 17H8" }]
];

// node_modules/lucide/dist/esm/icons/file-type-corner.mjs
var FileTypeCorner = [
  [
    "path",
    {
      d: "M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16" }],
  ["path", { d: "M6 22h2" }],
  ["path", { d: "M7 14v8" }]
];

// node_modules/lucide/dist/esm/icons/file-type.mjs
var FileType = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M11 18h2" }],
  ["path", { d: "M12 12v6" }],
  ["path", { d: "M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5" }]
];

// node_modules/lucide/dist/esm/icons/file-up.mjs
var FileUp = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M12 12v6" }],
  ["path", { d: "m15 15-3-3-3 3" }]
];

// node_modules/lucide/dist/esm/icons/file-user.mjs
var FileUser = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M16 22a4 4 0 0 0-8 0" }],
  ["circle", { cx: "12", cy: "15", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/file-video-camera.mjs
var FileVideoCamera = [
  [
    "path",
    {
      d: "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  [
    "path",
    { d: "m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157" }
  ],
  ["rect", { width: "7", height: "6", x: "3", y: "16", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/file-volume.mjs
var FileVolume = [
  [
    "path",
    {
      d: "M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M12 15a5 5 0 0 1 0 6" }],
  [
    "path",
    {
      d: "M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/file-x-corner.mjs
var FileXCorner = [
  [
    "path",
    {
      d: "M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m15 17 5 5" }],
  ["path", { d: "m20 17-5 5" }]
];

// node_modules/lucide/dist/esm/icons/file-x.mjs
var FileX = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m14.5 12.5-5 5" }],
  ["path", { d: "m9.5 12.5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/file.mjs
var File = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }]
];

// node_modules/lucide/dist/esm/icons/files.mjs
var Files = [
  ["path", { d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }],
  ["path", { d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z" }],
  ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" }]
];

// node_modules/lucide/dist/esm/icons/film.mjs
var Film = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M7 3v18" }],
  ["path", { d: "M3 7.5h4" }],
  ["path", { d: "M3 12h18" }],
  ["path", { d: "M3 16.5h4" }],
  ["path", { d: "M17 3v18" }],
  ["path", { d: "M17 7.5h4" }],
  ["path", { d: "M17 16.5h4" }]
];

// node_modules/lucide/dist/esm/icons/fingerprint-pattern.mjs
var FingerprintPattern = [
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02" }],
  ["path", { d: "M2 12a10 10 0 0 1 18-6" }],
  ["path", { d: "M2 16h.01" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2" }]
];

// node_modules/lucide/dist/esm/icons/fire-extinguisher.mjs
var FireExtinguisher = [
  ["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" }],
  ["path", { d: "M9 18h8" }],
  ["path", { d: "M18 3h-3" }],
  ["path", { d: "M11 3a6 6 0 0 0-6 6v11" }],
  ["path", { d: "M5 13h4" }],
  ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" }]
];

// node_modules/lucide/dist/esm/icons/fish-off.mjs
var FishOff = [
  [
    "path",
    {
      d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"
    }
  ],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"
    }
  ],
  [
    "path",
    {
      d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/fish.mjs
var Fish = [
  [
    "path",
    {
      d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
    }
  ],
  ["path", { d: "M18 12v.5" }],
  ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
    }
  ],
  ["path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }],
  ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" }]
];

// node_modules/lucide/dist/esm/icons/fish-symbol.mjs
var FishSymbol = [["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8" }]];

// node_modules/lucide/dist/esm/icons/fishing-hook.mjs
var FishingHook = [
  ["path", { d: "m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10" }],
  ["path", { d: "M20.414 8.586 22 7" }],
  ["circle", { cx: "19", cy: "10", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/fishing-rod.mjs
var FishingRod = [
  ["path", { d: "M4 11h1" }],
  ["path", { d: "M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4" }],
  ["circle", { cx: "18", cy: "18", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/flag-off.mjs
var FlagOff = [
  ["path", { d: "M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M4 22V4" }],
  ["path", { d: "M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" }]
];

// node_modules/lucide/dist/esm/icons/flag-triangle-left.mjs
var FlagTriangleLeft = [
  ["path", { d: "M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5" }]
];

// node_modules/lucide/dist/esm/icons/flag-triangle-right.mjs
var FlagTriangleRight = [
  ["path", { d: "M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5" }]
];

// node_modules/lucide/dist/esm/icons/flag.mjs
var Flag = [
  [
    "path",
    {
      d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/flame-kindling.mjs
var FlameKindling = [
  [
    "path",
    {
      d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
    }
  ],
  ["path", { d: "m5 22 14-4" }],
  ["path", { d: "m5 18 14 4" }]
];

// node_modules/lucide/dist/esm/icons/flame.mjs
var Flame = [
  [
    "path",
    {
      d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/flashlight.mjs
var Flashlight = [
  ["path", { d: "M12 13v1" }],
  [
    "path",
    {
      d: "M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z"
    }
  ],
  ["path", { d: "M6 6h12" }]
];

// node_modules/lucide/dist/esm/icons/flashlight-off.mjs
var FlashlightOff = [
  ["path", { d: "M11.652 6H18" }],
  ["path", { d: "M12 13v1" }],
  [
    "path",
    { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6" }
  ],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007" }]
];

// node_modules/lucide/dist/esm/icons/flask-conical-off.mjs
var FlaskConicalOff = [
  ["path", { d: "M10 2v2.343" }],
  ["path", { d: "M14 2v6.343" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" }],
  ["path", { d: "M6.453 15H15" }],
  ["path", { d: "M8.5 2h7" }]
];

// node_modules/lucide/dist/esm/icons/flask-conical.mjs
var FlaskConical = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
    }
  ],
  ["path", { d: "M6.453 15h11.094" }],
  ["path", { d: "M8.5 2h7" }]
];

// node_modules/lucide/dist/esm/icons/flask-round.mjs
var FlaskRound = [
  ["path", { d: "M10 2v6.292a7 7 0 1 0 4 0V2" }],
  ["path", { d: "M5 15h14" }],
  ["path", { d: "M8.5 2h7" }]
];

// node_modules/lucide/dist/esm/icons/flower-2.mjs
var Flower2 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2" }],
  ["path", { d: "M12 10v12" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }],
  ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }]
];

// node_modules/lucide/dist/esm/icons/flower.mjs
var Flower = [
  ["circle", { cx: "12", cy: "12", r: "3" }],
  [
    "path",
    {
      d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
    }
  ],
  ["path", { d: "M12 7.5V9" }],
  ["path", { d: "M7.5 12H9" }],
  ["path", { d: "M16.5 12H15" }],
  ["path", { d: "M12 16.5V15" }],
  ["path", { d: "m8 8 1.88 1.88" }],
  ["path", { d: "M14.12 9.88 16 8" }],
  ["path", { d: "m8 16 1.88-1.88" }],
  ["path", { d: "M14.12 14.12 16 16" }]
];

// node_modules/lucide/dist/esm/icons/focus.mjs
var Focus = [
  ["circle", { cx: "12", cy: "12", r: "3" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
];

// node_modules/lucide/dist/esm/icons/fold-horizontal.mjs
var FoldHorizontal = [
  ["path", { d: "M2 12h6" }],
  ["path", { d: "M22 12h-6" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 8v2" }],
  ["path", { d: "M12 14v2" }],
  ["path", { d: "M12 20v2" }],
  ["path", { d: "m19 9-3 3 3 3" }],
  ["path", { d: "m5 15 3-3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/fold-vertical.mjs
var FoldVertical = [
  ["path", { d: "M12 22v-6" }],
  ["path", { d: "M12 8V2" }],
  ["path", { d: "M4 12H2" }],
  ["path", { d: "M10 12H8" }],
  ["path", { d: "M16 12h-2" }],
  ["path", { d: "M22 12h-2" }],
  ["path", { d: "m15 19-3-3-3 3" }],
  ["path", { d: "m15 5-3 3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/folder-archive.mjs
var FolderArchive = [
  ["circle", { cx: "15", cy: "19", r: "2" }],
  [
    "path",
    {
      d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
    }
  ],
  ["path", { d: "M15 11v-1" }],
  ["path", { d: "M15 17v-2" }]
];

// node_modules/lucide/dist/esm/icons/folder-bookmark.mjs
var FolderBookmark = [
  [
    "path",
    {
      d: "M12 6v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834a.25.25 0 00.406-.195V6"
    }
  ],
  [
    "path",
    {
      d: "M20 20a2 2 0 002-2V8a2 2 0 00-2-2h-7.9a2 2 0 01-1.69-.9L9.6 3.9A2 2 0 007.93 3H4a2 2 0 00-2 2v13a2 2 0 002 2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/folder-check.mjs
var FolderCheck = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }
  ],
  ["path", { d: "m9 13 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/folder-clock.mjs
var FolderClock = [
  ["path", { d: "M16 14v2.2l1.6 1" }],
  [
    "path",
    {
      d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"
    }
  ],
  ["circle", { cx: "16", cy: "16", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/folder-closed.mjs
var FolderClosed = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }
  ],
  ["path", { d: "M2 10h20" }]
];

// node_modules/lucide/dist/esm/icons/folder-code.mjs
var FolderCode = [
  ["path", { d: "M10 10.5 8 13l2 2.5" }],
  ["path", { d: "m14 10.5 2 2.5-2 2.5" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/folder-cog.mjs
var FolderCog = [
  [
    "path",
    {
      d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"
    }
  ],
  ["path", { d: "m14.305 19.53.923-.382" }],
  ["path", { d: "m15.228 16.852-.923-.383" }],
  ["path", { d: "m16.852 15.228-.383-.923" }],
  ["path", { d: "m16.852 20.772-.383.924" }],
  ["path", { d: "m19.148 15.228.383-.923" }],
  ["path", { d: "m19.53 21.696-.382-.924" }],
  ["path", { d: "m20.772 16.852.924-.383" }],
  ["path", { d: "m20.772 19.148.924.383" }],
  ["circle", { cx: "18", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/folder-dot.mjs
var FolderDot = [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/folder-down.mjs
var FolderDown = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }
  ],
  ["path", { d: "M12 10v6" }],
  ["path", { d: "m15 13-3 3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/folder-git-2.mjs
var FolderGit2 = [
  ["path", { d: "M18 19a5 5 0 0 1-5-5v8" }],
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
    }
  ],
  ["circle", { cx: "13", cy: "12", r: "2" }],
  ["circle", { cx: "20", cy: "19", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/folder-git.mjs
var FolderGit = [
  ["circle", { cx: "12", cy: "13", r: "2" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }
  ],
  ["path", { d: "M14 13h3" }],
  ["path", { d: "M7 13h3" }]
];

// node_modules/lucide/dist/esm/icons/folder-heart.mjs
var FolderHeart = [
  [
    "path",
    {
      d: "M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417"
    }
  ],
  [
    "path",
    {
      d: "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/folder-input.mjs
var FolderInput = [
  [
    "path",
    {
      d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
    }
  ],
  ["path", { d: "M2 13h10" }],
  ["path", { d: "m9 16 3-3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/folder-kanban.mjs
var FolderKanban = [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
    }
  ],
  ["path", { d: "M8 10v4" }],
  ["path", { d: "M12 10v2" }],
  ["path", { d: "M16 10v6" }]
];

// node_modules/lucide/dist/esm/icons/folder-key.mjs
var FolderKey = [
  [
    "path",
    {
      d: "M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36"
    }
  ],
  ["path", { d: "M19 12v6" }],
  ["path", { d: "M19 14h2" }],
  ["circle", { cx: "19", cy: "20", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/folder-lock.mjs
var FolderLock = [
  ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1" }],
  [
    "path",
    {
      d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"
    }
  ],
  ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2" }]
];

// node_modules/lucide/dist/esm/icons/folder-minus.mjs
var FolderMinus = [
  ["path", { d: "M9 13h6" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/folder-open-dot.mjs
var FolderOpenDot = [
  [
    "path",
    {
      d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
    }
  ],
  ["circle", { cx: "14", cy: "15", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/folder-open.mjs
var FolderOpen = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/folder-output.mjs
var FolderOutput = [
  [
    "path",
    {
      d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"
    }
  ],
  ["path", { d: "M2 13h10" }],
  ["path", { d: "m5 10-3 3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/folder-pen.mjs
var FolderPen = [
  [
    "path",
    {
      d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"
    }
  ],
  [
    "path",
    {
      d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/folder-plus.mjs
var FolderPlus = [
  ["path", { d: "M12 10v6" }],
  ["path", { d: "M9 13h6" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/folder-root.mjs
var FolderRoot = [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "2" }],
  ["path", { d: "M12 15v5" }]
];

// node_modules/lucide/dist/esm/icons/folder-search-2.mjs
var FolderSearch2 = [
  ["circle", { cx: "11.5", cy: "12.5", r: "2.5" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }
  ],
  ["path", { d: "M13.3 14.3 15 16" }]
];

// node_modules/lucide/dist/esm/icons/folder-search.mjs
var FolderSearch = [
  [
    "path",
    {
      d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"
    }
  ],
  ["path", { d: "m21 21-1.9-1.9" }],
  ["circle", { cx: "17", cy: "17", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/folder-symlink.mjs
var FolderSymlink = [
  [
    "path",
    {
      d: "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
    }
  ],
  ["path", { d: "m8 16 3-3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/folder-sync.mjs
var FolderSync = [
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"
    }
  ],
  ["path", { d: "M12 10v4h4" }],
  ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5" }],
  ["path", { d: "M22 22v-4h-4" }],
  ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5" }]
];

// node_modules/lucide/dist/esm/icons/folder-tree.mjs
var FolderTree = [
  [
    "path",
    {
      d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
    }
  ],
  [
    "path",
    {
      d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
    }
  ],
  ["path", { d: "M3 5a2 2 0 0 0 2 2h3" }],
  ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3" }]
];

// node_modules/lucide/dist/esm/icons/folder-up.mjs
var FolderUp = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }
  ],
  ["path", { d: "M12 10v6" }],
  ["path", { d: "m9 13 3-3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/folder.mjs
var Folder = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/folder-x.mjs
var FolderX = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }
  ],
  ["path", { d: "m9.5 10.5 5 5" }],
  ["path", { d: "m14.5 10.5-5 5" }]
];

// node_modules/lucide/dist/esm/icons/folders.mjs
var Folders = [
  [
    "path",
    {
      d: "M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"
    }
  ],
  ["path", { d: "M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1" }]
];

// node_modules/lucide/dist/esm/icons/footprints.mjs
var Footprints = [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
    }
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
    }
  ],
  ["path", { d: "M16 17h4" }],
  ["path", { d: "M4 13h4" }]
];

// node_modules/lucide/dist/esm/icons/forklift.mjs
var Forklift = [
  ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5" }],
  ["path", { d: "M15 19h7" }],
  ["path", { d: "M16 19V2" }],
  [
    "path",
    { d: "M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828" }
  ],
  ["path", { d: "M7 19h4" }],
  ["circle", { cx: "13", cy: "19", r: "2" }],
  ["circle", { cx: "5", cy: "19", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/form.mjs
var Form = [
  ["path", { d: "M4 14h6" }],
  ["path", { d: "M4 2h10" }],
  ["rect", { x: "4", y: "18", width: "16", height: "4", rx: "1" }],
  ["rect", { x: "4", y: "6", width: "16", height: "4", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/forward.mjs
var Forward = [
  ["path", { d: "m15 17 5-5-5-5" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12" }]
];

// node_modules/lucide/dist/esm/icons/frame.mjs
var Frame = [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/fuel.mjs
var Fuel = [
  ["path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" }],
  ["path", { d: "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" }],
  ["path", { d: "M2 21h13" }],
  ["path", { d: "M3 9h11" }]
];

// node_modules/lucide/dist/esm/icons/fullscreen.mjs
var Fullscreen = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
  ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/funnel-plus.mjs
var FunnelPlus = [
  [
    "path",
    {
      d: "M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"
    }
  ],
  ["path", { d: "M16 6h6" }],
  ["path", { d: "M19 3v6" }]
];

// node_modules/lucide/dist/esm/icons/funnel-x.mjs
var FunnelX = [
  [
    "path",
    {
      d: "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"
    }
  ],
  ["path", { d: "m16.5 3.5 5 5" }],
  ["path", { d: "m21.5 3.5-5 5" }]
];

// node_modules/lucide/dist/esm/icons/funnel.mjs
var Funnel = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/galaxy.mjs
var Galaxy = [
  [
    "path",
    {
      d: "M16.005 15.108a5.041 6.52 28.25 00-8.008-6.217 5.041 6.52 28.25 008.008 6.217A11.884 7.288-60.76 014.029 7.001"
    }
  ],
  ["path", { d: "M17 21h.01" }],
  ["path", { d: "M7 3h.01" }],
  ["path", { d: "M7.997 8.891a11.885 7.288-60.756 0111.977 8.107" }],
  ["circle", { cx: "12", cy: "12", r: "1", fill: "currentColor" }]
];

// node_modules/lucide/dist/esm/icons/gallery-horizontal-end.mjs
var GalleryHorizontalEnd = [
  ["path", { d: "M2 7v10" }],
  ["path", { d: "M6 5v14" }],
  ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/gallery-horizontal.mjs
var GalleryHorizontal = [
  ["path", { d: "M2 3v18" }],
  ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2" }],
  ["path", { d: "M22 3v18" }]
];

// node_modules/lucide/dist/esm/icons/gallery-thumbnails.mjs
var GalleryThumbnails = [
  ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M4 21h1" }],
  ["path", { d: "M9 21h1" }],
  ["path", { d: "M14 21h1" }],
  ["path", { d: "M19 21h1" }]
];

// node_modules/lucide/dist/esm/icons/gallery-vertical-end.mjs
var GalleryVerticalEnd = [
  ["path", { d: "M7 2h10" }],
  ["path", { d: "M5 6h14" }],
  ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/gallery-vertical.mjs
var GalleryVertical = [
  ["path", { d: "M3 2h18" }],
  ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2" }],
  ["path", { d: "M3 22h18" }]
];

// node_modules/lucide/dist/esm/icons/gamepad-2.mjs
var Gamepad2 = [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/gamepad-directional.mjs
var GamepadDirectional = [
  [
    "path",
    {
      d: "M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z"
    }
  ],
  [
    "path",
    {
      d: "M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"
    }
  ],
  [
    "path",
    {
      d: "M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z"
    }
  ],
  [
    "path",
    {
      d: "M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/gamepad.mjs
var Gamepad = [
  ["line", { x1: "6", x2: "10", y1: "12", y2: "12" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
  ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13" }],
  ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/gap-horizontal.mjs
var GapHorizontal = [
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 8v2" }],
  ["path", { d: "M12 14v2" }],
  ["path", { d: "M12 20v2" }],
  ["path", { d: "M21 3h-3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" }],
  ["path", { d: "M3 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3" }]
];

// node_modules/lucide/dist/esm/icons/gauge.mjs
var Gauge = [
  ["path", { d: "m12 14 4-4" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }]
];

// node_modules/lucide/dist/esm/icons/gap-vertical.mjs
var GapVertical = [
  ["path", { d: "M2 12h2" }],
  ["path", { d: "M8 12h2" }],
  ["path", { d: "M14 12h2" }],
  ["path", { d: "M20 12h2" }],
  ["path", { d: "M3 21v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" }],
  ["path", { d: "M3 3v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3" }]
];

// node_modules/lucide/dist/esm/icons/gavel.mjs
var Gavel = [
  ["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }],
  ["path", { d: "m16 16 6-6" }],
  ["path", { d: "m21.5 10.5-8-8" }],
  ["path", { d: "m8 8 6-6" }],
  ["path", { d: "m8.5 7.5 8 8" }]
];

// node_modules/lucide/dist/esm/icons/gem.mjs
var Gem = [
  ["path", { d: "M10.5 3 8 9l4 13 4-13-2.5-6" }],
  [
    "path",
    {
      d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"
    }
  ],
  ["path", { d: "M2 9h20" }]
];

// node_modules/lucide/dist/esm/icons/georgian-lari.mjs
var GeorgianLari = [
  ["path", { d: "M11.5 21a7.5 7.5 0 1 1 7.35-9" }],
  ["path", { d: "M13 12V3" }],
  ["path", { d: "M4 21h16" }],
  ["path", { d: "M9 12V3" }]
];

// node_modules/lucide/dist/esm/icons/germ.mjs
var Germ = [
  ["path", { d: "m11 2 .925 1.848" }],
  ["path", { d: "M13 15h.01" }],
  ["path", { d: "m16 21-1-2.472" }],
  ["path", { d: "m19 2-1 1.804" }],
  ["path", { d: "m2 19 2.746-1.373" }],
  ["path", { d: "m22 16-2.474-2.13" }],
  ["path", { d: "m22 5-1.804 1" }],
  ["path", { d: "m3 10 2 2" }],
  ["path", { d: "M9 16h.01" }],
  ["path", { d: "M9 20v2" }],
  [
    "path",
    {
      d: "M9.33 7.035c-.51 1.478-1.786 2.93-3.09 3.794A5 5 0 009 20a12.1 12.1 0 0011.902-9.916A6 6 0 009.33 7.035"
    }
  ],
  ["circle", { cx: "15", cy: "9", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/germ-off.mjs
var GermOff = [
  ["path", { d: "m11 2 .925 1.848" }],
  ["path", { d: "M13 15h.01" }],
  ["path", { d: "M13.424 7.768a2 2 0 112.808 2.808" }],
  ["path", { d: "m16 21-1-2.472" }],
  ["path", { d: "M16.988 16.988A12 12 0 019 20a5 5 0 01-2.759-9.171 8.8 8.8 0 002.307-2.28" }],
  ["path", { d: "m19 2-1 1.804" }],
  ["path", { d: "m2 19 2.746-1.373" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "m22 16-2.474-2.13a12 12 0 001.376-3.786 6 6 0 00-10.313-5.151" }],
  ["path", { d: "m22 5-1.804 1" }],
  ["path", { d: "m3 10 2 2" }],
  ["path", { d: "M9 16h.01" }],
  ["path", { d: "M9 20v2" }]
];

// node_modules/lucide/dist/esm/icons/ghost.mjs
var Ghost = [
  ["path", { d: "M15 10v1" }],
  [
    "path",
    {
      d: "M7.528 20.472a1.6 1.6 0 012.277 0l1.057 1.056a1.6 1.6 0 002.276 0l1.057-1.056a1.6 1.6 0 012.277 0l1.114 1.114a1.4 1.4 0 002.414-1V10a8 8 0 00-16 0v10.586a1.4 1.4 0 002.414 1z"
    }
  ],
  ["path", { d: "M9 10v1" }]
];

// node_modules/lucide/dist/esm/icons/gift.mjs
var Gift = [
  ["path", { d: "M12 7v14" }],
  ["path", { d: "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }],
  ["path", { d: "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" }],
  ["rect", { x: "3", y: "7", width: "18", height: "4", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/git-branch-minus.mjs
var GitBranchMinus = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3" }],
  ["path", { d: "M21 18h-6" }],
  ["circle", { cx: "18", cy: "6", r: "3" }],
  ["circle", { cx: "6", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/git-branch-plus.mjs
var GitBranchPlus = [
  ["path", { d: "M6 3v12" }],
  ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
  ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
  ["path", { d: "M15 6a9 9 0 0 0-9 9" }],
  ["path", { d: "M18 15v6" }],
  ["path", { d: "M21 18h-6" }]
];

// node_modules/lucide/dist/esm/icons/git-branch.mjs
var GitBranch = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3" }],
  ["circle", { cx: "18", cy: "6", r: "3" }],
  ["circle", { cx: "6", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/git-commit-horizontal.mjs
var GitCommitHorizontal = [
  ["circle", { cx: "12", cy: "12", r: "3" }],
  ["line", { x1: "3", x2: "9", y1: "12", y2: "12" }],
  ["line", { x1: "15", x2: "21", y1: "12", y2: "12" }]
];

// node_modules/lucide/dist/esm/icons/git-commit-vertical.mjs
var GitCommitVertical = [
  ["path", { d: "M12 3v6" }],
  ["circle", { cx: "12", cy: "12", r: "3" }],
  ["path", { d: "M12 15v6" }]
];

// node_modules/lucide/dist/esm/icons/git-compare-arrows.mjs
var GitCompareArrows = [
  ["circle", { cx: "5", cy: "6", r: "3" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }],
  ["path", { d: "m15 9-3-3 3-3" }],
  ["circle", { cx: "19", cy: "18", r: "3" }],
  ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9" }],
  ["path", { d: "m9 15 3 3-3 3" }]
];

// node_modules/lucide/dist/esm/icons/git-fork.mjs
var GitFork = [
  ["circle", { cx: "12", cy: "18", r: "3" }],
  ["circle", { cx: "6", cy: "6", r: "3" }],
  ["circle", { cx: "18", cy: "6", r: "3" }],
  ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }],
  ["path", { d: "M12 12v3" }]
];

// node_modules/lucide/dist/esm/icons/git-compare.mjs
var GitCompare = [
  ["circle", { cx: "18", cy: "18", r: "3" }],
  ["circle", { cx: "6", cy: "6", r: "3" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }],
  ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9" }]
];

// node_modules/lucide/dist/esm/icons/git-graph.mjs
var GitGraph = [
  ["circle", { cx: "5", cy: "6", r: "3" }],
  ["path", { d: "M5 9v6" }],
  ["circle", { cx: "5", cy: "18", r: "3" }],
  ["path", { d: "M12 3v18" }],
  ["circle", { cx: "19", cy: "6", r: "3" }],
  ["path", { d: "M16 15.7A9 9 0 0 0 19 9" }]
];

// node_modules/lucide/dist/esm/icons/git-merge-conflict.mjs
var GitMergeConflict = [
  ["path", { d: "M12 6h4a2 2 0 0 1 2 2v7" }],
  ["path", { d: "M6 12v9" }],
  ["path", { d: "m8.5 3.5-5 5" }],
  ["path", { d: "m8.5 8.5-5-5" }],
  ["circle", { cx: "18", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/git-merge.mjs
var GitMerge = [
  ["circle", { cx: "18", cy: "18", r: "3" }],
  ["circle", { cx: "6", cy: "6", r: "3" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9" }]
];

// node_modules/lucide/dist/esm/icons/git-pull-request-arrow.mjs
var GitPullRequestArrow = [
  ["circle", { cx: "5", cy: "6", r: "3" }],
  ["path", { d: "M5 9v12" }],
  ["circle", { cx: "19", cy: "18", r: "3" }],
  ["path", { d: "m15 9-3-3 3-3" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }]
];

// node_modules/lucide/dist/esm/icons/git-pull-request-closed.mjs
var GitPullRequestClosed = [
  ["path", { d: "m15.5 3.5 5 5" }],
  ["path", { d: "m15.5 8.5 5-5" }],
  ["path", { d: "M18 11.62V15" }],
  ["path", { d: "M6 9v12" }],
  ["circle", { cx: "18", cy: "18", r: "3" }],
  ["circle", { cx: "6", cy: "6", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/git-pull-request-create-arrow.mjs
var GitPullRequestCreateArrow = [
  ["circle", { cx: "5", cy: "6", r: "3" }],
  ["path", { d: "M5 9v12" }],
  ["path", { d: "m15 9-3-3 3-3" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3" }],
  ["path", { d: "M19 15v6" }],
  ["path", { d: "M22 18h-6" }]
];

// node_modules/lucide/dist/esm/icons/git-pull-request-create.mjs
var GitPullRequestCreate = [
  ["circle", { cx: "6", cy: "6", r: "3" }],
  ["path", { d: "M6 9v12" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3" }],
  ["path", { d: "M18 15v6" }],
  ["path", { d: "M21 18h-6" }]
];

// node_modules/lucide/dist/esm/icons/git-pull-request-draft.mjs
var GitPullRequestDraft = [
  ["circle", { cx: "18", cy: "18", r: "3" }],
  ["circle", { cx: "6", cy: "6", r: "3" }],
  ["path", { d: "M18 6V5" }],
  ["path", { d: "M18 11v-1" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]
];

// node_modules/lucide/dist/esm/icons/git-pull-request.mjs
var GitPullRequest = [
  ["circle", { cx: "18", cy: "18", r: "3" }],
  ["circle", { cx: "6", cy: "6", r: "3" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]
];

// node_modules/lucide/dist/esm/icons/glass-water.mjs
var GlassWater = [
  [
    "path",
    {
      d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"
    }
  ],
  ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" }]
];

// node_modules/lucide/dist/esm/icons/glasses.mjs
var Glasses = [
  ["circle", { cx: "6", cy: "15", r: "4" }],
  ["circle", { cx: "18", cy: "15", r: "4" }],
  ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }],
  ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }],
  ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }]
];

// node_modules/lucide/dist/esm/icons/globe-check.mjs
var GlobeCheck = [
  ["path", { d: "m15 6 2 2 4-4" }],
  ["path", { d: "M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" }]
];

// node_modules/lucide/dist/esm/icons/globe-code.mjs
var GlobeCode = [
  ["path", { d: "M15.5 10 13 7.5 15.5 5" }],
  ["path", { d: "M15.861 14A14.5 14.5 0 0112 22a14.48 14.48 0 010-20 10 10 0 109.888 11.5" }],
  ["path", { d: "M19.5 5 22 7.5 19.5 10" }],
  ["path", { d: "M2 12h8.5" }]
];

// node_modules/lucide/dist/esm/icons/globe-lock.mjs
var GlobeLock = [
  ["path", { d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" }],
  ["path", { d: "M2 12h8.5" }],
  ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }],
  ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/globe-off.mjs
var GlobeOff = [
  ["path", { d: "M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643" }],
  ["path", { d: "M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929" }],
  ["path", { d: "M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687" }],
  ["path", { d: "M17.656 12H22" }],
  ["path", { d: "M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45" }],
  ["path", { d: "M2 12h10" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/globe-x.mjs
var GlobeX = [
  ["path", { d: "m16 3 5 5" }],
  ["path", { d: "M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" }],
  ["path", { d: "m21 3-5 5" }]
];

// node_modules/lucide/dist/esm/icons/globe.mjs
var Globe = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }],
  ["path", { d: "M2 12h20" }]
];

// node_modules/lucide/dist/esm/icons/goal.mjs
var Goal = [
  ["path", { d: "M12 13V2l8 4-8 4" }],
  ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29" }],
  ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02" }]
];

// node_modules/lucide/dist/esm/icons/gpu.mjs
var Gpu = [
  ["path", { d: "M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2" }],
  ["path", { d: "M2 21V3" }],
  ["path", { d: "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" }],
  ["circle", { cx: "16", cy: "11", r: "2" }],
  ["circle", { cx: "8", cy: "11", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/graduation-cap.mjs
var GraduationCap = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
    }
  ],
  ["path", { d: "M22 10v6" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]
];

// node_modules/lucide/dist/esm/icons/grape.mjs
var Grape = [
  ["path", { d: "M22 5V2l-5.89 5.89" }],
  ["circle", { cx: "16.6", cy: "15.89", r: "3" }],
  ["circle", { cx: "8.11", cy: "7.4", r: "3" }],
  ["circle", { cx: "12.35", cy: "11.65", r: "3" }],
  ["circle", { cx: "13.91", cy: "5.85", r: "3" }],
  ["circle", { cx: "18.15", cy: "10.09", r: "3" }],
  ["circle", { cx: "6.56", cy: "13.2", r: "3" }],
  ["circle", { cx: "10.8", cy: "17.44", r: "3" }],
  ["circle", { cx: "5", cy: "19", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/grid-2x2-check.mjs
var Grid2x2Check = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
    }
  ],
  ["path", { d: "m16 19 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/grid-2x2-plus.mjs
var Grid2x2Plus = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
    }
  ],
  ["path", { d: "M16 19h6" }],
  ["path", { d: "M19 22v-6" }]
];

// node_modules/lucide/dist/esm/icons/grid-2x2-x.mjs
var Grid2x2X = [
  [
    "path",
    {
      d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
    }
  ],
  ["path", { d: "m16.5 16.5 5 5" }],
  ["path", { d: "m16.5 21.5 5-5" }]
];

// node_modules/lucide/dist/esm/icons/grid-2x2.mjs
var Grid2x2 = [
  ["path", { d: "M12 3v18" }],
  ["path", { d: "M3 12h18" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/grid-3x2.mjs
var Grid3x2 = [
  ["path", { d: "M15 3v18" }],
  ["path", { d: "M3 12h18" }],
  ["path", { d: "M9 3v18" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/grid-3x3.mjs
var Grid3x3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M3 15h18" }],
  ["path", { d: "M9 3v18" }],
  ["path", { d: "M15 3v18" }]
];

// node_modules/lucide/dist/esm/icons/grip-horizontal.mjs
var GripHorizontal = [
  ["circle", { cx: "12", cy: "9", r: "1" }],
  ["circle", { cx: "19", cy: "9", r: "1" }],
  ["circle", { cx: "5", cy: "9", r: "1" }],
  ["circle", { cx: "12", cy: "15", r: "1" }],
  ["circle", { cx: "19", cy: "15", r: "1" }],
  ["circle", { cx: "5", cy: "15", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/grip-vertical.mjs
var GripVertical = [
  ["circle", { cx: "9", cy: "12", r: "1" }],
  ["circle", { cx: "9", cy: "5", r: "1" }],
  ["circle", { cx: "9", cy: "19", r: "1" }],
  ["circle", { cx: "15", cy: "12", r: "1" }],
  ["circle", { cx: "15", cy: "5", r: "1" }],
  ["circle", { cx: "15", cy: "19", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/grip.mjs
var Grip = [
  ["circle", { cx: "12", cy: "5", r: "1" }],
  ["circle", { cx: "19", cy: "5", r: "1" }],
  ["circle", { cx: "5", cy: "5", r: "1" }],
  ["circle", { cx: "12", cy: "12", r: "1" }],
  ["circle", { cx: "19", cy: "12", r: "1" }],
  ["circle", { cx: "5", cy: "12", r: "1" }],
  ["circle", { cx: "12", cy: "19", r: "1" }],
  ["circle", { cx: "19", cy: "19", r: "1" }],
  ["circle", { cx: "5", cy: "19", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/group.mjs
var Group = [
  ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2" }],
  ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2" }],
  ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2" }],
  ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2" }],
  ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1" }],
  ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/guitar.mjs
var Guitar = [
  ["path", { d: "m11.9 12.1 4.514-4.514" }],
  [
    "path",
    {
      d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"
    }
  ],
  ["path", { d: "m6 16 2 2" }],
  [
    "path",
    {
      d: "M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/hamburger.mjs
var Hamburger = [
  ["path", { d: "M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" }],
  ["path", { d: "M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" }],
  ["path", { d: "M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" }],
  ["path", { d: "m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }]
];

// node_modules/lucide/dist/esm/icons/ham.mjs
var Ham = [
  ["path", { d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" }],
  [
    "path",
    { d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" }
  ],
  [
    "path",
    {
      d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"
    }
  ],
  ["path", { d: "m8.5 16.5-1-1" }]
];

// node_modules/lucide/dist/esm/icons/hammer.mjs
var Hammer = [
  ["path", { d: "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" }],
  ["path", { d: "m18 15 4-4" }],
  [
    "path",
    {
      d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/hand-coins.mjs
var HandCoins = [
  ["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }],
  [
    "path",
    {
      d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
    }
  ],
  ["path", { d: "m2 16 6 6" }],
  ["circle", { cx: "16", cy: "9", r: "2.9" }],
  ["circle", { cx: "6", cy: "5", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/hand-fist.mjs
var HandFist = [
  [
    "path",
    {
      d: "M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0"
    }
  ],
  ["path", { d: "M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5" }],
  ["path", { d: "M9 5A2 2 0 1 0 5 5V10" }],
  ["path", { d: "M9 7V4A2 2 0 1 1 13 4V7.268" }]
];

// node_modules/lucide/dist/esm/icons/hand-heart.mjs
var HandHeart = [
  ["path", { d: "M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" }],
  [
    "path",
    {
      d: "m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95"
    }
  ],
  ["path", { d: "m2 15 6 6" }],
  [
    "path",
    { d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" }
  ]
];

// node_modules/lucide/dist/esm/icons/hand-helping.mjs
var HandHelping = [
  ["path", { d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" }],
  [
    "path",
    {
      d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
    }
  ],
  ["path", { d: "m2 13 6 6" }]
];

// node_modules/lucide/dist/esm/icons/hand-grab.mjs
var HandGrab = [
  ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }],
  ["path", { d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }],
  ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }],
  ["path", { d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
  ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" }]
];

// node_modules/lucide/dist/esm/icons/hand-metal.mjs
var HandMetal = [
  ["path", { d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }],
  ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2" }],
  ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9" }],
  [
    "path",
    {
      d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/hand-platter.mjs
var HandPlatter = [
  ["path", { d: "M12 3V2" }],
  [
    "path",
    {
      d: "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"
    }
  ],
  ["path", { d: "M2 14h12a2 2 0 0 1 0 4h-2" }],
  ["path", { d: "M4 10h16" }],
  ["path", { d: "M5 10a7 7 0 0 1 14 0" }],
  ["path", { d: "M5 14v6a1 1 0 0 1-1 1H2" }]
];

// node_modules/lucide/dist/esm/icons/hand.mjs
var Hand = [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/handbag.mjs
var Handbag = [
  [
    "path",
    {
      d: "M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z"
    }
  ],
  ["path", { d: "M8 11V6a4 4 0 0 1 8 0v5" }]
];

// node_modules/lucide/dist/esm/icons/handshake.mjs
var Handshake = [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
    }
  ],
  ["path", { d: "m21 3 1 11h-2" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }],
  ["path", { d: "M3 4h8" }]
];

// node_modules/lucide/dist/esm/icons/hard-drive-download.mjs
var HardDriveDownload = [
  ["path", { d: "M12 2v8" }],
  ["path", { d: "m16 6-4 4-4-4" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
  ["path", { d: "M6 18h.01" }],
  ["path", { d: "M10 18h.01" }]
];

// node_modules/lucide/dist/esm/icons/hard-drive-upload.mjs
var HardDriveUpload = [
  ["path", { d: "m16 6-4-4-4 4" }],
  ["path", { d: "M12 2v8" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
  ["path", { d: "M6 18h.01" }],
  ["path", { d: "M10 18h.01" }]
];

// node_modules/lucide/dist/esm/icons/hard-drive.mjs
var HardDrive = [
  ["path", { d: "M10 16h.01" }],
  [
    "path",
    {
      d: "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    }
  ],
  ["path", { d: "M21.946 12.013H2.054" }],
  ["path", { d: "M6 16h.01" }]
];

// node_modules/lucide/dist/esm/icons/hard-hat.mjs
var HardHat = [
  ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }],
  ["path", { d: "M14 6a6 6 0 0 1 6 6v3" }],
  ["path", { d: "M4 15v-3a6 6 0 0 1 6-6" }],
  ["rect", { x: "2", y: "15", width: "20", height: "4", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/hash.mjs
var Hash = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21" }]
];

// node_modules/lucide/dist/esm/icons/hat-glasses.mjs
var HatGlasses = [
  ["path", { d: "M14 18a2 2 0 0 0-4 0" }],
  [
    "path",
    {
      d: "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"
    }
  ],
  ["path", { d: "M2 11h20" }],
  ["circle", { cx: "17", cy: "18", r: "3" }],
  ["circle", { cx: "7", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/haze.mjs
var Haze = [
  ["path", { d: "m5.2 6.2 1.4 1.4" }],
  ["path", { d: "M2 13h2" }],
  ["path", { d: "M20 13h2" }],
  ["path", { d: "m17.4 7.6 1.4-1.4" }],
  ["path", { d: "M22 17H2" }],
  ["path", { d: "M22 21H2" }],
  ["path", { d: "M16 13a4 4 0 0 0-8 0" }],
  ["path", { d: "M12 5V2.5" }]
];

// node_modules/lucide/dist/esm/icons/hd.mjs
var Hd = [
  ["path", { d: "M10 12H6" }],
  ["path", { d: "M10 15V9" }],
  [
    "path",
    {
      d: "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z"
    }
  ],
  ["path", { d: "M6 15V9" }],
  ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/hdmi-port.mjs
var HdmiPort = [
  [
    "path",
    {
      d: "M22 9a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h.5a2 2 0 011.6.8l.3.4A2 2 0 007 16h10a2 2 0 001.6-.8l.3-.4a2 2 0 011.6-.8h.5a1 1 0 001-1z"
    }
  ],
  ["path", { d: "M8 12h8" }]
];

// node_modules/lucide/dist/esm/icons/heading-1.mjs
var Heading1 = [
  ["path", { d: "M4 12h8" }],
  ["path", { d: "M4 18V6" }],
  ["path", { d: "M12 18V6" }],
  ["path", { d: "m17 12 3-2v8" }]
];

// node_modules/lucide/dist/esm/icons/heading-2.mjs
var Heading2 = [
  ["path", { d: "M4 12h8" }],
  ["path", { d: "M4 18V6" }],
  ["path", { d: "M12 18V6" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }]
];

// node_modules/lucide/dist/esm/icons/heading-3.mjs
var Heading3 = [
  ["path", { d: "M4 12h8" }],
  ["path", { d: "M4 18V6" }],
  ["path", { d: "M12 18V6" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }]
];

// node_modules/lucide/dist/esm/icons/heading-5.mjs
var Heading5 = [
  ["path", { d: "M4 12h8" }],
  ["path", { d: "M4 18V6" }],
  ["path", { d: "M12 18V6" }],
  ["path", { d: "M17 13v-3h4" }],
  ["path", { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" }]
];

// node_modules/lucide/dist/esm/icons/heading-4.mjs
var Heading4 = [
  ["path", { d: "M12 18V6" }],
  ["path", { d: "M17 10v3a1 1 0 0 0 1 1h3" }],
  ["path", { d: "M21 10v8" }],
  ["path", { d: "M4 12h8" }],
  ["path", { d: "M4 18V6" }]
];

// node_modules/lucide/dist/esm/icons/heading-6.mjs
var Heading6 = [
  ["path", { d: "M4 12h8" }],
  ["path", { d: "M4 18V6" }],
  ["path", { d: "M12 18V6" }],
  ["circle", { cx: "19", cy: "16", r: "2" }],
  ["path", { d: "M20 10c-2 2-3 3.5-3 6" }]
];

// node_modules/lucide/dist/esm/icons/heading.mjs
var Heading = [
  ["path", { d: "M6 12h12" }],
  ["path", { d: "M6 20V4" }],
  ["path", { d: "M18 20V4" }]
];

// node_modules/lucide/dist/esm/icons/headphone-off.mjs
var HeadphoneOff = [
  ["path", { d: "M21 14h-1.343" }],
  ["path", { d: "M9.128 3.47A9 9 0 0 1 21 12v3.343" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" }],
  ["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" }]
];

// node_modules/lucide/dist/esm/icons/headphones.mjs
var Headphones = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/headset.mjs
var Headset = [
  [
    "path",
    {
      d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
    }
  ],
  ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" }]
];

// node_modules/lucide/dist/esm/icons/heart-crack.mjs
var HeartCrack = [
  [
    "path",
    {
      d: "M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15"
    }
  ],
  [
    "path",
    {
      d: "M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/heart-handshake.mjs
var HeartHandshake = [
  [
    "path",
    {
      d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/heart-minus.mjs
var HeartMinus = [
  [
    "path",
    {
      d: "m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572"
    }
  ],
  ["path", { d: "M15 15h6" }]
];

// node_modules/lucide/dist/esm/icons/heart-off.mjs
var HeartOff = [
  [
    "path",
    {
      d: "M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655"
    }
  ],
  [
    "path",
    {
      d: "m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761"
    }
  ],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/heart-plus.mjs
var HeartPlus = [
  [
    "path",
    {
      d: "m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49"
    }
  ],
  ["path", { d: "M15 15h6" }],
  ["path", { d: "M18 12v6" }]
];

// node_modules/lucide/dist/esm/icons/heart-x.mjs
var HeartX = [
  ["path", { d: "m15.5 12.5 5 5" }],
  ["path", { d: "m20.5 12.5-5 5" }],
  [
    "path",
    {
      d: "M21.955 8.774a5.5 5.5 0 0 0-9.546-2.95.6.6 0 0 1-.818 0A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.508 5.332a2 2 0 0 0 2.57.352"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/heart-pulse.mjs
var HeartPulse = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
    }
  ],
  ["path", { d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" }]
];

// node_modules/lucide/dist/esm/icons/heart.mjs
var Heart = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/heater.mjs
var Heater = [
  ["path", { d: "M11 8c2-3-2-3 0-6" }],
  ["path", { d: "M15.5 8c2-3-2-3 0-6" }],
  ["path", { d: "M6 10h.01" }],
  ["path", { d: "M6 14h.01" }],
  ["path", { d: "M10 16v-4" }],
  ["path", { d: "M14 16v-4" }],
  ["path", { d: "M18 16v-4" }],
  ["path", { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" }],
  ["path", { d: "M5 20v2" }],
  ["path", { d: "M19 20v2" }]
];

// node_modules/lucide/dist/esm/icons/helicopter.mjs
var Helicopter = [
  ["path", { d: "M11 17v4" }],
  ["path", { d: "M14 3v8a2 2 0 0 0 2 2h5.865" }],
  ["path", { d: "M17 17v4" }],
  ["path", { d: "M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z" }],
  ["path", { d: "M2 10v5" }],
  ["path", { d: "M6 3h16" }],
  ["path", { d: "M7 21h14" }],
  ["path", { d: "M8 13H2" }]
];

// node_modules/lucide/dist/esm/icons/hexagon.mjs
var Hexagon = [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/hop-off.mjs
var HopOff = [
  ["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" }],
  [
    "path",
    { d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" }
  ],
  ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" }],
  [
    "path",
    { d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" }
  ],
  ["path", { d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" }],
  [
    "path",
    {
      d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"
    }
  ],
  [
    "path",
    { d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" }
  ],
  ["path", { d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/highlighter.mjs
var Highlighter = [
  ["path", { d: "m9 11-6 6v3h9l3-3" }],
  ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" }]
];

// node_modules/lucide/dist/esm/icons/hop.mjs
var Hop = [
  [
    "path",
    { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" }
  ],
  [
    "path",
    {
      d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"
    }
  ],
  [
    "path",
    { d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" }
  ],
  [
    "path",
    { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" }
  ],
  [
    "path",
    { d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" }
  ],
  [
    "path",
    { d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" }
  ],
  ["path", { d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1" }],
  [
    "path",
    {
      d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/hospital.mjs
var Hospital = [
  ["path", { d: "M12 7v4" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }],
  ["path", { d: "M14 9h-4" }],
  ["path", { d: "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" }]
];

// node_modules/lucide/dist/esm/icons/hotel.mjs
var Hotel = [
  ["path", { d: "M10 22v-6.57" }],
  ["path", { d: "M12 11h.01" }],
  ["path", { d: "M12 7h.01" }],
  ["path", { d: "M14 15.43V22" }],
  ["path", { d: "M15 16a5 5 0 0 0-6 0" }],
  ["path", { d: "M16 11h.01" }],
  ["path", { d: "M16 7h.01" }],
  ["path", { d: "M8 11h.01" }],
  ["path", { d: "M8 7h.01" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/hourglass-cog.mjs
var HourglassCog = [
  ["path", { d: "m14.305 19.53.923-.382" }],
  ["path", { d: "m15.228 16.852-.923-.383" }],
  ["path", { d: "m16.852 15.228-.383-.923" }],
  ["path", { d: "m16.852 20.772-.383.924" }],
  ["path", { d: "M17 2v4.172a2 2 0 0 1-.586 1.414l-8.828 8.828A2 2 0 0 0 7 17.828V22" }],
  ["path", { d: "m19.148 15.228.383-.923" }],
  ["path", { d: "m19.53 21.696-.382-.924" }],
  ["path", { d: "m20.772 16.852.924-.383" }],
  ["path", { d: "m20.772 19.148.924.383" }],
  ["path", { d: "M5 22h6.159" }],
  ["path", { d: "M5 2h14" }],
  ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414l5.188 5.188" }],
  ["circle", { cx: "18", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/hourglass.mjs
var Hourglass = [
  ["path", { d: "M5 22h14" }],
  ["path", { d: "M5 2h14" }],
  ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" }],
  ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" }]
];

// node_modules/lucide/dist/esm/icons/house-heart.mjs
var HouseHeart = [
  [
    "path",
    {
      d: "M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"
    }
  ],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/house-plug.mjs
var HousePlug = [
  ["path", { d: "M10 12V8.964" }],
  ["path", { d: "M14 12V8.964" }],
  ["path", { d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" }],
  [
    "path",
    {
      d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/house-plus.mjs
var HousePlus = [
  [
    "path",
    {
      d: "M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35"
    }
  ],
  ["path", { d: "M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" }],
  ["path", { d: "M15 18h6" }],
  ["path", { d: "M18 15v6" }]
];

// node_modules/lucide/dist/esm/icons/house-wifi.mjs
var HouseWifi = [
  ["path", { d: "M9.5 13.866a4 4 0 0 1 5 .01" }],
  ["path", { d: "M12 17h.01" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    }
  ],
  ["path", { d: "M7 10.754a8 8 0 0 1 10 0" }]
];

// node_modules/lucide/dist/esm/icons/house.mjs
var House = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/houses.mjs
var Houses = [
  [
    "path",
    {
      d: "m12.681 4.24.834-.715a1.45 1.45 0 011.88 0l5.09 4.364A1.45 1.45 0 0121 9v6.546a1.45 1.45 0 01-1 1.381"
    }
  ],
  [
    "path",
    {
      d: "M15.485 11.889A1.45 1.45 0 0116 13v6.546A1.454 1.454 0 0114.546 21H4.364a1.454 1.454 0 01-1.454-1.454V13a1.45 1.45 0 01.515-1.111l5.09-4.364a1.45 1.45 0 011.88 0z"
    }
  ],
  ["path", { d: "M7.41 20.546v-4a1 1 0 011-1h2a1 1 0 011 1v4" }]
];

// node_modules/lucide/dist/esm/icons/ice-cream-bowl.mjs
var IceCreamBowl = [
  [
    "path",
    { d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" }
  ],
  ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0" }],
  ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0" }]
];

// node_modules/lucide/dist/esm/icons/ice-cream-cone.mjs
var IceCreamCone = [
  ["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }],
  ["path", { d: "M17 7A5 5 0 0 0 7 7" }],
  ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" }]
];

// node_modules/lucide/dist/esm/icons/id-card-lanyard.mjs
var IdCardLanyard = [
  ["path", { d: "M13.5 8h-3" }],
  ["path", { d: "m15 2-1 2h3a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h3" }],
  ["path", { d: "M16 22a4 4 0 00-8 0" }],
  ["path", { d: "m9 2 3 6" }],
  ["circle", { cx: "12", cy: "15", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/id-card.mjs
var IdCard = [
  ["path", { d: "M13 19a4 4 0 00-8 0" }],
  ["path", { d: "M16 10h2" }],
  ["path", { d: "M16 14h2" }],
  ["circle", { cx: "9", cy: "12", r: "3" }],
  ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/image-minus.mjs
var ImageMinus = [
  ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5" }],
  ["circle", { cx: "9", cy: "9", r: "2" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
];

// node_modules/lucide/dist/esm/icons/image-down.mjs
var ImageDown = [
  [
    "path",
    {
      d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
    }
  ],
  ["path", { d: "m14 19 3 3v-5.5" }],
  ["path", { d: "m17 22 3-3" }],
  ["circle", { cx: "9", cy: "9", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/image-off.mjs
var ImageOff = [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15" }],
  ["path", { d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" }],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }]
];

// node_modules/lucide/dist/esm/icons/image-play.mjs
var ImagePlay = [
  [
    "path",
    {
      d: "M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"
    }
  ],
  ["path", { d: "M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }],
  ["path", { d: "m6 21 5-5" }],
  ["circle", { cx: "9", cy: "9", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/image-plus.mjs
var ImagePlus = [
  ["path", { d: "M16 5h6" }],
  ["path", { d: "M19 2v6" }],
  ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }],
  ["circle", { cx: "9", cy: "9", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/image-upscale.mjs
var ImageUpscale = [
  ["path", { d: "M16 3h5v5" }],
  ["path", { d: "M17 21h2a2 2 0 0 0 2-2" }],
  ["path", { d: "M21 12v3" }],
  ["path", { d: "m21 3-5 5" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2" }],
  ["path", { d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" }],
  ["path", { d: "M9 3h3" }],
  ["rect", { x: "3", y: "11", width: "10", height: "10", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/image-up.mjs
var ImageUp = [
  [
    "path",
    {
      d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
    }
  ],
  ["path", { d: "m14 19.5 3-3 3 3" }],
  ["path", { d: "M17 22v-5.5" }],
  ["circle", { cx: "9", cy: "9", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/image.mjs
var Image = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["circle", { cx: "9", cy: "9", r: "2" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
];

// node_modules/lucide/dist/esm/icons/images.mjs
var Images = [
  ["path", { d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" }],
  ["path", { d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" }],
  ["circle", { cx: "13", cy: "7", r: "1", fill: "currentColor" }],
  ["rect", { x: "8", y: "2", width: "14", height: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/import.mjs
var Import = [
  ["path", { d: "M12 3v12" }],
  ["path", { d: "m8 11 4 4 4-4" }],
  ["path", { d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" }]
];

// node_modules/lucide/dist/esm/icons/indian-rupee.mjs
var IndianRupee = [
  ["path", { d: "M6 3h12" }],
  ["path", { d: "M6 8h12" }],
  ["path", { d: "m6 13 8.5 8" }],
  ["path", { d: "M6 13h3" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10" }]
];

// node_modules/lucide/dist/esm/icons/inbox.mjs
var Inbox = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/infinity.mjs
var Infinity = [
  ["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" }]
];

// node_modules/lucide/dist/esm/icons/info.mjs
var Info = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 16v-4" }],
  ["path", { d: "M12 8h.01" }]
];

// node_modules/lucide/dist/esm/icons/inspection-panel.mjs
var InspectionPanel = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M7 7h.01" }],
  ["path", { d: "M17 7h.01" }],
  ["path", { d: "M7 17h.01" }],
  ["path", { d: "M17 17h.01" }]
];

// node_modules/lucide/dist/esm/icons/italic.mjs
var Italic = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20" }]
];

// node_modules/lucide/dist/esm/icons/iteration-ccw.mjs
var IterationCcw = [
  ["path", { d: "m16 14 4 4-4 4" }],
  ["path", { d: "M20 10a8 8 0 1 0-8 8h8" }]
];

// node_modules/lucide/dist/esm/icons/iteration-cw.mjs
var IterationCw = [
  ["path", { d: "M4 10a8 8 0 1 1 8 8H4" }],
  ["path", { d: "m8 22-4-4 4-4" }]
];

// node_modules/lucide/dist/esm/icons/iv-bag.mjs
var IvBag = [
  ["path", { d: "M12 18v2a2 2 0 002 2h6" }],
  ["path", { d: "M6 11c.72.5 1.44 1 3 1 3 0 3-2 6-2 1.56 0 2.28.5 3 1" }],
  [
    "path",
    {
      d: "M9.293 3c.453 0 .887-.18 1.207-.5s.754-.5 1.207-.5h.586c.453 0 .887.18 1.207.5s.754.5 1.207.5H16a2 2 0 012 2v11a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/joystick.mjs
var Joystick = [
  ["path", { d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" }],
  ["path", { d: "M6 15v-2" }],
  ["path", { d: "M12 15V9" }],
  ["circle", { cx: "12", cy: "6", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/japanese-yen.mjs
var JapaneseYen = [
  ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }],
  ["path", { d: "M6 15h12" }],
  ["path", { d: "M6 11h12" }]
];

// node_modules/lucide/dist/esm/icons/kanban.mjs
var Kanban = [
  ["path", { d: "M5 3v14" }],
  ["path", { d: "M12 3v8" }],
  ["path", { d: "M19 3v18" }]
];

// node_modules/lucide/dist/esm/icons/kayak.mjs
var Kayak = [
  ["path", { d: "M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" }],
  [
    "path",
    {
      d: "M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61"
    }
  ],
  ["path", { d: "m6.707 6.707 10.586 10.586" }],
  ["path", { d: "M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" }]
];

// node_modules/lucide/dist/esm/icons/key-round.mjs
var KeyRound = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }]
];

// node_modules/lucide/dist/esm/icons/key-square.mjs
var KeySquare = [
  [
    "path",
    {
      d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"
    }
  ],
  ["path", { d: "m14 7 3 3" }],
  [
    "path",
    {
      d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/key.mjs
var Key = [
  ["path", { d: "m2 21 9.6-9.6" }],
  ["path", { d: "m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19" }],
  ["circle", { cx: "15.5", cy: "7.5", r: "5.5" }]
];

// node_modules/lucide/dist/esm/icons/keyboard-music.mjs
var KeyboardMusic = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
  ["path", { d: "M6 8h4" }],
  ["path", { d: "M14 8h.01" }],
  ["path", { d: "M18 8h.01" }],
  ["path", { d: "M2 12h20" }],
  ["path", { d: "M6 12v4" }],
  ["path", { d: "M10 12v4" }],
  ["path", { d: "M14 12v4" }],
  ["path", { d: "M18 12v4" }]
];

// node_modules/lucide/dist/esm/icons/keyboard-off.mjs
var KeyboardOff = [
  ["path", { d: "M 20 4 A2 2 0 0 1 22 6" }],
  ["path", { d: "M 22 6 L 22 16.41" }],
  ["path", { d: "M 7 16 L 16 16" }],
  ["path", { d: "M 9.69 4 L 20 4" }],
  ["path", { d: "M14 8h.01" }],
  ["path", { d: "M18 8h.01" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }],
  ["path", { d: "M6 8h.01" }],
  ["path", { d: "M8 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/keyboard.mjs
var Keyboard = [
  ["path", { d: "M10 8h.01" }],
  ["path", { d: "M12 12h.01" }],
  ["path", { d: "M14 8h.01" }],
  ["path", { d: "M16 12h.01" }],
  ["path", { d: "M18 8h.01" }],
  ["path", { d: "M6 8h.01" }],
  ["path", { d: "M7 16h10" }],
  ["path", { d: "M8 12h.01" }],
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/lambda.mjs
var Lambda = [
  ["path", { d: "M11.38 10 5 20" }],
  ["path", { d: "M19 18a2 2 0 01-2 2c-4.87-.003-5.052-16-10-16a2 2 0 00-2 2" }]
];

// node_modules/lucide/dist/esm/icons/lamp-ceiling.mjs
var LampCeiling = [
  ["path", { d: "M12 2v5" }],
  ["path", { d: "M14.829 15.998a3 3 0 1 1-5.658 0" }],
  [
    "path",
    {
      d: "M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/lamp-desk.mjs
var LampDesk = [
  [
    "path",
    {
      d: "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z"
    }
  ],
  ["path", { d: "m14.207 4.793-3.414 3.414" }],
  ["path", { d: "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" }],
  ["path", { d: "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" }]
];

// node_modules/lucide/dist/esm/icons/lamp-floor.mjs
var LampFloor = [
  ["path", { d: "M12 10v12" }],
  [
    "path",
    {
      d: "M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z"
    }
  ],
  ["path", { d: "M9 22h6" }]
];

// node_modules/lucide/dist/esm/icons/lamp-wall-down.mjs
var LampWallDown = [
  [
    "path",
    {
      d: "M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z"
    }
  ],
  ["path", { d: "M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" }],
  ["path", { d: "M8 6h4a2 2 0 0 1 2 2v5" }]
];

// node_modules/lucide/dist/esm/icons/lamp-wall-up.mjs
var LampWallUp = [
  [
    "path",
    {
      d: "M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z"
    }
  ],
  ["path", { d: "M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" }],
  ["path", { d: "M8 18h4a2 2 0 0 0 2-2v-5" }]
];

// node_modules/lucide/dist/esm/icons/lamp.mjs
var Lamp = [
  ["path", { d: "M12 12v6" }],
  [
    "path",
    {
      d: "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"
    }
  ],
  ["path", { d: "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" }]
];

// node_modules/lucide/dist/esm/icons/land-plot.mjs
var LandPlot = [
  ["path", { d: "m12 8 6-3-6-3v10" }],
  [
    "path",
    {
      d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
    }
  ],
  ["path", { d: "m6.49 12.85 11.02 6.3" }],
  ["path", { d: "M17.51 12.85 6.5 19.15" }]
];

// node_modules/lucide/dist/esm/icons/landmark.mjs
var Landmark = [
  ["path", { d: "M10 18v-7" }],
  [
    "path",
    { d: "M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" }
  ],
  ["path", { d: "M14 18v-7" }],
  ["path", { d: "M18 18v-7" }],
  ["path", { d: "M3 22h18" }],
  ["path", { d: "M6 18v-7" }]
];

// node_modules/lucide/dist/esm/icons/languages.mjs
var Languages = [
  ["path", { d: "m5 8 6 6" }],
  ["path", { d: "m4 14 6-6 2-3" }],
  ["path", { d: "M2 5h12" }],
  ["path", { d: "M7 2h1" }],
  ["path", { d: "m22 22-5-10-5 10" }],
  ["path", { d: "M14 18h6" }]
];

// node_modules/lucide/dist/esm/icons/laptop-minimal-check.mjs
var LaptopMinimalCheck = [
  ["path", { d: "M2 20h20" }],
  ["path", { d: "m9 10 2 2 4-4" }],
  ["rect", { x: "3", y: "4", width: "18", height: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/laptop-minimal.mjs
var LaptopMinimal = [
  ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2" }],
  ["line", { x1: "2", x2: "22", y1: "20", y2: "20" }]
];

// node_modules/lucide/dist/esm/icons/laptop.mjs
var Laptop = [
  [
    "path",
    {
      d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"
    }
  ],
  ["path", { d: "M20.054 15.987H3.946" }]
];

// node_modules/lucide/dist/esm/icons/lasso-select.mjs
var LassoSelect = [
  ["path", { d: "M7 22a5 5 0 0 1-2-4" }],
  ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91" }],
  [
    "path",
    { d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" }
  ],
  ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }],
  [
    "path",
    {
      d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/lasso.mjs
var Lasso = [
  ["path", { d: "M3.704 14.467a10 8 0 1 1 3.115 2.375" }],
  ["path", { d: "M7 22a5 5 0 0 1-2-3.994" }],
  ["circle", { cx: "5", cy: "16", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/layer-arrow-down.mjs
var LayerArrowDown = [
  ["path", { d: "M12 10v10" }],
  ["path", { d: "M22 10a1 1 0 01-.59.92l-5.077 2.308" }],
  [
    "path",
    {
      d: "M22.017 10.005a1 1 0 00-.597-.916l-8.59-3.91a2 2 0 00-1.66.001L2.6 9.08a1 1 0 00-.02 1.831l5.093 2.316"
    }
  ],
  ["path", { d: "m9 17 3 3 3-3" }]
];

// node_modules/lucide/dist/esm/icons/layer-arrow-up.mjs
var LayerArrowUp = [
  ["path", { d: "M12 14V4" }],
  [
    "path",
    {
      d: "M7.674 10.774 2.58 13.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308"
    }
  ],
  ["path", { d: "m9 7 3-3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/layers-2.mjs
var Layers2 = [
  [
    "path",
    {
      d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"
    }
  ],
  [
    "path",
    {
      d: "m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/layers-arrow-up.mjs
var LayersArrowUp = [
  ["path", { d: "M12 12V2" }],
  ["path", { d: "M2 17.002a1 1 0 00.58.91l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92" }],
  [
    "path",
    {
      d: "M7.674 8.774 2.58 11.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308"
    }
  ],
  ["path", { d: "m9 5 3-3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/layers-arrow-down.mjs
var LayersArrowDown = [
  ["path", { d: "M12 7v15" }],
  ["path", { d: "M2 12a1 1 0 00.58.91l5.093 2.316" }],
  ["path", { d: "M22 12a1 1 0 01-.59.92l-5.077 2.308" }],
  [
    "path",
    {
      d: "M8 10.37 2.6 7.91a1 1 0 010-1.831l8.57-3.9a2 2 0 011.66.001l8.59 3.91a1 1 0 010 1.831l-5.392 2.45"
    }
  ],
  ["path", { d: "m9 19 3 3 3-3" }]
];

// node_modules/lucide/dist/esm/icons/layers-minus.mjs
var LayersMinus = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.832z"
    }
  ],
  ["path", { d: "M16 17h6" }],
  ["path", { d: "M2.003 11.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18" }],
  [
    "path",
    { d: "M2.003 16.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l2.11-.96" }
  ],
  ["path", { d: "M22.018 12.004a1 1 0 0 1-.598.916l-.177.08" }]
];

// node_modules/lucide/dist/esm/icons/layers.mjs
var Layers = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
    }
  ],
  ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }],
  ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" }]
];

// node_modules/lucide/dist/esm/icons/layers-plus.mjs
var LayersPlus = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z"
    }
  ],
  ["path", { d: "M16 17h6" }],
  ["path", { d: "M19 14v6" }],
  ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178" }],
  ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962" }]
];

// node_modules/lucide/dist/esm/icons/layout-arrow-down.mjs
var LayoutArrowDown = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
  ["path", { d: "M18 3v18" }],
  ["path", { d: "m21 18-3 3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/layout-arrow-right.mjs
var LayoutArrowRight = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
  ["path", { d: "M3 18h18" }],
  ["path", { d: "m18 21 3-3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/layout-dashboard.mjs
var LayoutDashboard = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/layout-freeform.mjs
var LayoutFreeform = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "14", y: "4", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "4", y: "14", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/layout-grid.mjs
var LayoutGrid = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/layout-list.mjs
var LayoutList = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
  ["path", { d: "M14 4h7" }],
  ["path", { d: "M14 9h7" }],
  ["path", { d: "M14 15h7" }],
  ["path", { d: "M14 20h7" }]
];

// node_modules/lucide/dist/esm/icons/layout-panel-left.mjs
var LayoutPanelLeft = [
  ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/layout-panel-top.mjs
var LayoutPanelTop = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/layout-template.mjs
var LayoutTemplate = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/leaf.mjs
var Leaf = [
  [
    "path",
    {
      d: "M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20"
    }
  ],
  ["path", { d: "M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13" }]
];

// node_modules/lucide/dist/esm/icons/lectern.mjs
var Lectern = [
  [
    "path",
    {
      d: "M15 13h4a2 2 0 001.901-1.38l1.057-4.333A1 1 0 0021 6H3a1 1 0 00-.958 1.287L3.1 11.621A2 2 0 005.001 13h4"
    }
  ],
  ["path", { d: "M15 22V11a1 1 0 00-1-1h-4a1 1 0 00-1 1v11" }],
  ["path", { d: "M18 22H6" }],
  ["path", { d: "M18 6V3a1 1 0 00-1-1h-3" }]
];

// node_modules/lucide/dist/esm/icons/leafy-green.mjs
var LeafyGreen = [
  [
    "path",
    {
      d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
    }
  ],
  ["path", { d: "M2 22 17 7" }]
];

// node_modules/lucide/dist/esm/icons/lens-concave.mjs
var LensConcave = [
  [
    "path",
    {
      d: "M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/lens-convex.mjs
var LensConvex = [
  [
    "path",
    {
      d: "M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/library-big.mjs
var LibraryBig = [
  ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1" }],
  ["path", { d: "M7 3v18" }],
  [
    "path",
    {
      d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/library.mjs
var Library = [
  ["path", { d: "m16 6 4 14" }],
  ["path", { d: "M12 6v14" }],
  ["path", { d: "M8 8v12" }],
  ["path", { d: "M4 4v16" }]
];

// node_modules/lucide/dist/esm/icons/life-buoy.mjs
var LifeBuoy = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m4.93 4.93 4.24 4.24" }],
  ["path", { d: "m14.83 9.17 4.24-4.24" }],
  ["path", { d: "m14.83 14.83 4.24 4.24" }],
  ["path", { d: "m9.17 14.83-4.24 4.24" }],
  ["circle", { cx: "12", cy: "12", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/ligature.mjs
var Ligature = [
  ["path", { d: "M14 12h2v8" }],
  ["path", { d: "M14 20h4" }],
  ["path", { d: "M6 12h4" }],
  ["path", { d: "M6 20h4" }],
  ["path", { d: "M8 20V8a4 4 0 0 1 7.464-2" }]
];

// node_modules/lucide/dist/esm/icons/lightbulb-off.mjs
var LightbulbOff = [
  ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }],
  ["path", { d: "M9 18h6" }],
  ["path", { d: "M10 22h4" }]
];

// node_modules/lucide/dist/esm/icons/lightbulb.mjs
var Lightbulb = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
    }
  ],
  ["path", { d: "M9 18h6" }],
  ["path", { d: "M10 22h4" }]
];

// node_modules/lucide/dist/esm/icons/lighthouse.mjs
var Lighthouse = [
  ["path", { d: "M12 3V2" }],
  ["path", { d: "M16.066 16.865 7 22l2-11V6a3 3 0 016 0v5l2 11" }],
  ["path", { d: "m19.792 4.5.866-.5" }],
  ["path", { d: "m19.797 13.5.866.5" }],
  ["path", { d: "M21 9h1" }],
  ["path", { d: "M3 9H2" }],
  ["path", { d: "m4.203 13.5-.866.5" }],
  ["path", { d: "M4.208 4.5 3.342 4" }],
  ["path", { d: "M5.5 22h13" }],
  ["path", { d: "m7.932 16.875 7.377-4.178" }],
  ["path", { d: "M8 11h8" }],
  ["path", { d: "M8 7h8" }]
];

// node_modules/lucide/dist/esm/icons/line-dot-right-horizontal.mjs
var LineDotRightHorizontal = [
  ["path", { d: "M 3 12 L 15 12" }],
  ["circle", { cx: "18", cy: "12", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/line-squiggle.mjs
var LineSquiggle = [
  [
    "path",
    { d: "M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2" }
  ]
];

// node_modules/lucide/dist/esm/icons/line-style.mjs
var LineStyle = [
  ["path", { d: "M11 5h2" }],
  ["path", { d: "M15 12h6" }],
  ["path", { d: "M19 5h2" }],
  ["path", { d: "M3 12h6" }],
  ["path", { d: "M3 19h18" }],
  ["path", { d: "M3 5h2" }]
];

// node_modules/lucide/dist/esm/icons/link-2-off.mjs
var Link2Off = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7" }],
  ["path", { d: "M15 7h2a5 5 0 0 1 4 8" }],
  ["line", { x1: "8", x2: "12", y1: "12", y2: "12" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/link-2.mjs
var Link2 = [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
];

// node_modules/lucide/dist/esm/icons/link.mjs
var Link = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]
];

// node_modules/lucide/dist/esm/icons/list-check.mjs
var ListCheck = [
  ["path", { d: "M16 5H3" }],
  ["path", { d: "M16 12H3" }],
  ["path", { d: "M11 19H3" }],
  ["path", { d: "m15 18 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/list-checks.mjs
var ListChecks = [
  ["path", { d: "M13 5h8" }],
  ["path", { d: "M13 12h8" }],
  ["path", { d: "M13 19h8" }],
  ["path", { d: "m3 17 2 2 4-4" }],
  ["path", { d: "m3 7 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/list-chevrons-down-up.mjs
var ListChevronsDownUp = [
  ["path", { d: "M3 5h8" }],
  ["path", { d: "M3 12h8" }],
  ["path", { d: "M3 19h8" }],
  ["path", { d: "m15 5 3 3 3-3" }],
  ["path", { d: "m15 19 3-3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/list-chevrons-up-down.mjs
var ListChevronsUpDown = [
  ["path", { d: "M3 5h8" }],
  ["path", { d: "M3 12h8" }],
  ["path", { d: "M3 19h8" }],
  ["path", { d: "m15 8 3-3 3 3" }],
  ["path", { d: "m15 16 3 3 3-3" }]
];

// node_modules/lucide/dist/esm/icons/list-clock.mjs
var ListClock = [
  ["path", { d: "M16 13v2.2l1.6 1" }],
  ["path", { d: "M3 12h3.458" }],
  ["path", { d: "M3 19h3.832" }],
  ["path", { d: "M3 5h18" }],
  ["circle", { cx: "16", cy: "15", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/list-collapse.mjs
var ListCollapse = [
  ["path", { d: "M10 5h11" }],
  ["path", { d: "M10 12h11" }],
  ["path", { d: "M10 19h11" }],
  ["path", { d: "m3 10 3-3-3-3" }],
  ["path", { d: "m3 20 3-3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/list-end.mjs
var ListEnd = [
  ["path", { d: "M16 5H3" }],
  ["path", { d: "M16 12H3" }],
  ["path", { d: "M9 19H3" }],
  ["path", { d: "m16 16-3 3 3 3" }],
  ["path", { d: "M21 5v12a2 2 0 0 1-2 2h-6" }]
];

// node_modules/lucide/dist/esm/icons/list-filter-plus.mjs
var ListFilterPlus = [
  ["path", { d: "M12 5H2" }],
  ["path", { d: "M6 12h12" }],
  ["path", { d: "M9 19h6" }],
  ["path", { d: "M16 5h6" }],
  ["path", { d: "M19 8V2" }]
];

// node_modules/lucide/dist/esm/icons/list-filter.mjs
var ListFilter = [
  ["path", { d: "M2 5h20" }],
  ["path", { d: "M6 12h12" }],
  ["path", { d: "M9 19h6" }]
];

// node_modules/lucide/dist/esm/icons/list-indent-decrease.mjs
var ListIndentDecrease = [
  ["path", { d: "M21 5H11" }],
  ["path", { d: "M21 12H11" }],
  ["path", { d: "M21 19H11" }],
  ["path", { d: "m7 8-4 4 4 4" }]
];

// node_modules/lucide/dist/esm/icons/list-indent-increase.mjs
var ListIndentIncrease = [
  ["path", { d: "M21 5H11" }],
  ["path", { d: "M21 12H11" }],
  ["path", { d: "M21 19H11" }],
  ["path", { d: "m3 8 4 4-4 4" }]
];

// node_modules/lucide/dist/esm/icons/list-minus.mjs
var ListMinus = [
  ["path", { d: "M16 5H3" }],
  ["path", { d: "M11 12H3" }],
  ["path", { d: "M16 19H3" }],
  ["path", { d: "M21 12h-6" }]
];

// node_modules/lucide/dist/esm/icons/list-music.mjs
var ListMusic = [
  ["path", { d: "M16 5H3" }],
  ["path", { d: "M11 12H3" }],
  ["path", { d: "M11 19H3" }],
  ["path", { d: "M21 16V5" }],
  ["circle", { cx: "18", cy: "16", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/list-ordered.mjs
var ListOrdered = [
  ["path", { d: "M11 5h10" }],
  ["path", { d: "M11 12h10" }],
  ["path", { d: "M11 19h10" }],
  ["path", { d: "M4 4h1v5" }],
  ["path", { d: "M4 9h2" }],
  ["path", { d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" }]
];

// node_modules/lucide/dist/esm/icons/list-plus.mjs
var ListPlus = [
  ["path", { d: "M16 5H3" }],
  ["path", { d: "M11 12H3" }],
  ["path", { d: "M16 19H3" }],
  ["path", { d: "M18 9v6" }],
  ["path", { d: "M21 12h-6" }]
];

// node_modules/lucide/dist/esm/icons/list-sort-ascending.mjs
var ListSortAscending = [
  ["path", { d: "M3 19h18" }],
  ["path", { d: "M15 12H3" }],
  ["path", { d: "M9 5H3" }]
];

// node_modules/lucide/dist/esm/icons/list-restart.mjs
var ListRestart = [
  ["path", { d: "M21 5H3" }],
  ["path", { d: "M7 12H3" }],
  ["path", { d: "M7 19H3" }],
  ["path", { d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" }],
  ["path", { d: "M11 10v4h4" }]
];

// node_modules/lucide/dist/esm/icons/list-sort-descending.mjs
var ListSortDescending = [
  ["path", { d: "M15 12H3" }],
  ["path", { d: "M3 5h18" }],
  ["path", { d: "M9 19H3" }]
];

// node_modules/lucide/dist/esm/icons/list-start.mjs
var ListStart = [
  ["path", { d: "M3 5h6" }],
  ["path", { d: "M3 12h13" }],
  ["path", { d: "M3 19h13" }],
  ["path", { d: "m16 8-3-3 3-3" }],
  ["path", { d: "M21 19V7a2 2 0 0 0-2-2h-6" }]
];

// node_modules/lucide/dist/esm/icons/list-todo.mjs
var ListTodo = [
  ["path", { d: "M13 5h8" }],
  ["path", { d: "M13 12h8" }],
  ["path", { d: "M13 19h8" }],
  ["path", { d: "m3 17 2 2 4-4" }],
  ["rect", { x: "3", y: "4", width: "6", height: "6", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/list-tree.mjs
var ListTree = [
  ["path", { d: "M8 5h13" }],
  ["path", { d: "M13 12h8" }],
  ["path", { d: "M13 19h8" }],
  ["path", { d: "M3 10a2 2 0 0 0 2 2h3" }],
  ["path", { d: "M3 5v12a2 2 0 0 0 2 2h3" }]
];

// node_modules/lucide/dist/esm/icons/list-video.mjs
var ListVideo = [
  ["path", { d: "M21 5H3" }],
  ["path", { d: "M10 12H3" }],
  ["path", { d: "M10 19H3" }],
  [
    "path",
    {
      d: "M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/list-x.mjs
var ListX = [
  ["path", { d: "M16 5H3" }],
  ["path", { d: "M11 12H3" }],
  ["path", { d: "M16 19H3" }],
  ["path", { d: "m15.5 9.5 5 5" }],
  ["path", { d: "m20.5 9.5-5 5" }]
];

// node_modules/lucide/dist/esm/icons/list.mjs
var List = [
  ["path", { d: "M3 5h.01" }],
  ["path", { d: "M3 12h.01" }],
  ["path", { d: "M3 19h.01" }],
  ["path", { d: "M8 5h13" }],
  ["path", { d: "M8 12h13" }],
  ["path", { d: "M8 19h13" }]
];

// node_modules/lucide/dist/esm/icons/loader-circle.mjs
var LoaderCircle = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }]];

// node_modules/lucide/dist/esm/icons/loader-pinwheel.mjs
var LoaderPinwheel = [
  ["path", { d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" }],
  ["path", { d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }],
  ["path", { d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/loader.mjs
var Loader = [
  ["path", { d: "M12 2v4" }],
  ["path", { d: "m16.2 7.8 2.9-2.9" }],
  ["path", { d: "M18 12h4" }],
  ["path", { d: "m16.2 16.2 2.9 2.9" }],
  ["path", { d: "M12 18v4" }],
  ["path", { d: "m4.9 19.1 2.9-2.9" }],
  ["path", { d: "M2 12h4" }],
  ["path", { d: "m4.9 4.9 2.9 2.9" }]
];

// node_modules/lucide/dist/esm/icons/locate-fixed.mjs
var LocateFixed = [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
  ["circle", { cx: "12", cy: "12", r: "7" }],
  ["circle", { cx: "12", cy: "12", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/locate-off.mjs
var LocateOff = [
  ["path", { d: "M12 19v3" }],
  ["path", { d: "M12 2v3" }],
  ["path", { d: "M18.89 13.24a7 7 0 0 0-8.13-8.13" }],
  ["path", { d: "M19 12h3" }],
  ["path", { d: "M2 12h3" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M7.05 7.05a7 7 0 0 0 9.9 9.9" }]
];

// node_modules/lucide/dist/esm/icons/locate.mjs
var Locate = [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
  ["circle", { cx: "12", cy: "12", r: "7" }]
];

// node_modules/lucide/dist/esm/icons/lock-keyhole-open.mjs
var LockKeyholeOpen = [
  ["circle", { cx: "12", cy: "16", r: "1" }],
  ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5" }]
];

// node_modules/lucide/dist/esm/icons/lock-keyhole.mjs
var LockKeyhole = [
  ["circle", { cx: "12", cy: "16", r: "1" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3" }]
];

// node_modules/lucide/dist/esm/icons/lock-open.mjs
var LockOpen = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }]
];

// node_modules/lucide/dist/esm/icons/lock.mjs
var Lock = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]
];

// node_modules/lucide/dist/esm/icons/log-in.mjs
var LogIn = [
  ["path", { d: "m10 17 5-5-5-5" }],
  ["path", { d: "M15 12H3" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }]
];

// node_modules/lucide/dist/esm/icons/logs.mjs
var Logs = [
  ["path", { d: "M3 5h1" }],
  ["path", { d: "M3 12h1" }],
  ["path", { d: "M3 19h1" }],
  ["path", { d: "M8 5h1" }],
  ["path", { d: "M8 12h1" }],
  ["path", { d: "M8 19h1" }],
  ["path", { d: "M13 5h8" }],
  ["path", { d: "M13 12h8" }],
  ["path", { d: "M13 19h8" }]
];

// node_modules/lucide/dist/esm/icons/log-out.mjs
var LogOut = [
  ["path", { d: "m16 17 5-5-5-5" }],
  ["path", { d: "M21 12H9" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
];

// node_modules/lucide/dist/esm/icons/lollipop.mjs
var Lollipop = [
  ["circle", { cx: "11", cy: "11", r: "8" }],
  ["path", { d: "m21 21-4.3-4.3" }],
  ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" }]
];

// node_modules/lucide/dist/esm/icons/luggage.mjs
var Luggage = [
  ["path", { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }],
  ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }],
  ["path", { d: "M10 20h4" }],
  ["circle", { cx: "16", cy: "20", r: "2" }],
  ["circle", { cx: "8", cy: "20", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/magnet.mjs
var Magnet = [
  ["path", { d: "m12 15 4 4" }],
  [
    "path",
    {
      d: "M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z"
    }
  ],
  ["path", { d: "m5 8 4 4" }]
];

// node_modules/lucide/dist/esm/icons/mail-badge.mjs
var MailBadge = [
  ["path", { d: "M22 7.7V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.25" }],
  ["path", { d: "M12 12.996a1.94 1.94 0 0 1-1.03-.296L2 7" }],
  [
    "path",
    {
      d: "m20.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"
    }
  ],
  ["circle", { cx: "19", cy: "14", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/mail-check.mjs
var MailCheck = [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
  ["path", { d: "m16 19 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/mail-clock.mjs
var MailClock = [
  ["path", { d: "M16 14v2.2l1.6 1" }],
  ["path", { d: "m22 7-.759.484" }],
  ["path", { d: "M6.835 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v2" }],
  ["path", { d: "M7.605 10.567 2 7" }],
  ["circle", { cx: "16", cy: "16", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/mail-open.mjs
var MailOpen = [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" }]
];

// node_modules/lucide/dist/esm/icons/mail-minus.mjs
var MailMinus = [
  ["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
  ["path", { d: "M16 19h6" }]
];

// node_modules/lucide/dist/esm/icons/mail-pen.mjs
var MailPen = [
  [
    "path",
    {
      d: "M15.506 17.646A2 2 0 0015 18.5l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l3.013-3.009a1 1 0 00-3.004-3.004z"
    }
  ],
  ["path", { d: "M22 10.346V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h6.396" }],
  ["path", { d: "m22 7-8.991 5.727a2 2 0 01-2.009 0L2 7" }]
];

// node_modules/lucide/dist/esm/icons/mail-plus.mjs
var MailPlus = [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
  ["path", { d: "M19 16v6" }],
  ["path", { d: "M16 19h6" }]
];

// node_modules/lucide/dist/esm/icons/mail-question-mark.mjs
var MailQuestionMark = [
  ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
  ["path", { d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" }],
  ["path", { d: "M20 22v.01" }]
];

// node_modules/lucide/dist/esm/icons/mail-search.mjs
var MailSearch = [
  ["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
  ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }],
  ["circle", { cx: "18", cy: "18", r: "3" }],
  ["path", { d: "m22 22-1.5-1.5" }]
];

// node_modules/lucide/dist/esm/icons/mail-warning.mjs
var MailWarning = [
  ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
  ["path", { d: "M20 14v4" }],
  ["path", { d: "M20 22v.01" }]
];

// node_modules/lucide/dist/esm/icons/mail.mjs
var Mail = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/mail-x.mjs
var MailX = [
  ["path", { d: "M22 12.532V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.792" }],
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
  ["path", { d: "m16.5 16.5 5 5" }],
  ["path", { d: "m21.5 16.5-5 5" }]
];

// node_modules/lucide/dist/esm/icons/mailbox.mjs
var Mailbox = [
  ["path", { d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" }],
  ["polyline", { points: "15,9 18,9 18,11" }],
  ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }],
  ["line", { x1: "6", x2: "7", y1: "10", y2: "10" }]
];

// node_modules/lucide/dist/esm/icons/mails.mjs
var Mails = [
  ["path", { d: "M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" }],
  ["path", { d: "m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" }],
  ["rect", { x: "7", y: "3", width: "15", height: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/map-minus.mjs
var MapMinus = [
  [
    "path",
    {
      d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14"
    }
  ],
  ["path", { d: "M15 5.764V14" }],
  ["path", { d: "M21 18h-6" }],
  ["path", { d: "M9 3.236v15" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-check-inside.mjs
var MapPinCheckInside = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }
  ],
  ["path", { d: "m9 10 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-check.mjs
var MapPinCheck = [
  [
    "path",
    {
      d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3" }],
  ["path", { d: "m16 18 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-house.mjs
var MapPinHouse = [
  [
    "path",
    {
      d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"
    }
  ],
  ["path", { d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" }],
  ["path", { d: "M18 22v-3" }],
  ["circle", { cx: "10", cy: "10", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-minus-inside.mjs
var MapPinMinusInside = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }
  ],
  ["path", { d: "M9 10h6" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-off.mjs
var MapPinOff = [
  ["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16" }],
  [
    "path",
    {
      d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"
    }
  ],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" }],
  ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-minus.mjs
var MapPinMinus = [
  [
    "path",
    {
      d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3" }],
  ["path", { d: "M16 18h6" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-pen.mjs
var MapPinPen = [
  ["path", { d: "M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" }],
  [
    "path",
    {
      d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }
  ],
  ["circle", { cx: "10", cy: "10", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-plus-inside.mjs
var MapPinPlusInside = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }
  ],
  ["path", { d: "M12 7v6" }],
  ["path", { d: "M9 10h6" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-plus.mjs
var MapPinPlus = [
  [
    "path",
    {
      d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3" }],
  ["path", { d: "M16 18h6" }],
  ["path", { d: "M19 15v6" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-search.mjs
var MapPinSearch = [
  [
    "path",
    {
      d: "M 12.248 21.969 a 1 1 0 0 1 -0.849 -0.17 C 9.539 20.193 4 14.993 4 10 a 8 8 0 0 1 16 0 C 20 10.42 19.961 10.841 19.888 11.262"
    }
  ],
  ["path", { d: "m22 22-1.88-1.88" }],
  ["circle", { cx: "12", cy: "10", r: "3" }],
  ["circle", { cx: "18", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-x-inside.mjs
var MapPinXInside = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }
  ],
  ["path", { d: "m14.5 7.5-5 5" }],
  ["path", { d: "m9.5 7.5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/map-pin.mjs
var MapPin = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/map-pin-x.mjs
var MapPinX = [
  [
    "path",
    {
      d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3" }],
  ["path", { d: "m21.5 15.5-5 5" }],
  ["path", { d: "m21.5 20.5-5-5" }]
];

// node_modules/lucide/dist/esm/icons/map-pinned.mjs
var MapPinned = [
  [
    "path",
    {
      d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2" }],
  [
    "path",
    {
      d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/map-plus.mjs
var MapPlus = [
  [
    "path",
    {
      d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"
    }
  ],
  ["path", { d: "M15 5.764V12" }],
  ["path", { d: "M18 15v6" }],
  ["path", { d: "M21 18h-6" }],
  ["path", { d: "M9 3.236v15" }]
];

// node_modules/lucide/dist/esm/icons/map.mjs
var Map2 = [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
    }
  ],
  ["path", { d: "M15 5.764v15" }],
  ["path", { d: "M9 3.236v15" }]
];

// node_modules/lucide/dist/esm/icons/mars-stroke.mjs
var MarsStroke = [
  ["path", { d: "m14 6 4 4" }],
  ["path", { d: "M17 3h4v4" }],
  ["path", { d: "m21 3-7.75 7.75" }],
  ["circle", { cx: "9", cy: "15", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/mars.mjs
var Mars = [
  ["path", { d: "M16 3h5v5" }],
  ["path", { d: "m21 3-6.75 6.75" }],
  ["circle", { cx: "10", cy: "14", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/martini.mjs
var Martini = [
  ["path", { d: "M12 12 4.207 4.207A.707.707 0 0 1 4.707 3h14.586a.707.707 0 0 1 .5 1.207z" }],
  ["path", { d: "M12 12v10" }],
  ["path", { d: "M7 22h10" }]
];

// node_modules/lucide/dist/esm/icons/maximize-2.mjs
var Maximize2 = [
  ["path", { d: "M15 3h6v6" }],
  ["path", { d: "m21 3-7 7" }],
  ["path", { d: "m3 21 7-7" }],
  ["path", { d: "M9 21H3v-6" }]
];

// node_modules/lucide/dist/esm/icons/maximize.mjs
var Maximize = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]
];

// node_modules/lucide/dist/esm/icons/medal.mjs
var Medal = [
  [
    "path",
    {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
    }
  ],
  ["path", { d: "M11 12 5.12 2.2" }],
  ["path", { d: "m13 12 5.88-9.8" }],
  ["path", { d: "M8 7h8" }],
  ["circle", { cx: "12", cy: "17", r: "5" }],
  ["path", { d: "M12 18v-2h-.5" }]
];

// node_modules/lucide/dist/esm/icons/megaphone-off.mjs
var MegaphoneOff = [
  ["path", { d: "M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344" }],
  ["path", { d: "M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }],
  ["path", { d: "M8 8v6" }]
];

// node_modules/lucide/dist/esm/icons/megaphone.mjs
var Megaphone = [
  [
    "path",
    {
      d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
    }
  ],
  ["path", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }],
  ["path", { d: "M8 6v8" }]
];

// node_modules/lucide/dist/esm/icons/memory-stick.mjs
var MemoryStick = [
  ["path", { d: "M12 12v-2" }],
  ["path", { d: "M12 18v-2" }],
  ["path", { d: "M16 12v-2" }],
  ["path", { d: "M16 18v-2" }],
  ["path", { d: "M2 11h1.5" }],
  ["path", { d: "M20 18v-2" }],
  ["path", { d: "M20.5 11H22" }],
  ["path", { d: "M4 18v-2" }],
  ["path", { d: "M8 12v-2" }],
  ["path", { d: "M8 18v-2" }],
  ["rect", { x: "2", y: "6", width: "20", height: "10", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/menu.mjs
var Menu = [
  ["path", { d: "M4 5h16" }],
  ["path", { d: "M4 12h16" }],
  ["path", { d: "M4 19h16" }]
];

// node_modules/lucide/dist/esm/icons/merge.mjs
var Merge = [
  ["path", { d: "m8 6 4-4 4 4" }],
  ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }],
  ["path", { d: "m20 22-5-5" }]
];

// node_modules/lucide/dist/esm/icons/message-circle-check.mjs
var MessageCircleCheck = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    }
  ],
  ["path", { d: "m16 9-5.5 5.5L8 12" }]
];

// node_modules/lucide/dist/esm/icons/message-circle-code.mjs
var MessageCircleCode = [
  ["path", { d: "m10 9-3 3 3 3" }],
  ["path", { d: "m14 15 3-3-3-3" }],
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/message-circle-dashed-check.mjs
var MessageCircleDashedCheck = [
  ["path", { d: "M10.1 2.182a10 10 0 013.8 0" }],
  ["path", { d: "M13.9 21.818a10 10 0 01-3.8 0" }],
  ["path", { d: "M17.609 3.72a10 10 0 012.69 2.7" }],
  ["path", { d: "M2.182 13.9a10 10 0 010-3.8" }],
  ["path", { d: "M20.28 17.61a10 10 0 01-2.7 2.69" }],
  ["path", { d: "M21.818 10.1a10 10 0 010 3.8" }],
  ["path", { d: "M3.721 6.391a10 10 0 012.7-2.69" }],
  ["path", { d: "m6.163 21.117-2.906.85a1 1 0 01-1.236-1.169l.965-2.98" }],
  ["path", { d: "m16 9-5.5 5.5L8 12" }]
];

// node_modules/lucide/dist/esm/icons/message-circle-dashed.mjs
var MessageCircleDashed = [
  ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0" }],
  ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0" }],
  ["path", { d: "M17.609 3.72a10 10 0 0 1 2.69 2.7" }],
  ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8" }],
  ["path", { d: "M20.28 17.61a10 10 0 0 1-2.7 2.69" }],
  ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8" }],
  ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69" }],
  ["path", { d: "m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98" }]
];

// node_modules/lucide/dist/esm/icons/message-circle-heart.mjs
var MessageCircleHeart = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    }
  ],
  [
    "path",
    {
      d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/message-circle-more.mjs
var MessageCircleMore = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    }
  ],
  ["path", { d: "M8 12h.01" }],
  ["path", { d: "M12 12h.01" }],
  ["path", { d: "M16 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/message-circle-off.mjs
var MessageCircleOff = [
  ["path", { d: "m2 2 20 20" }],
  [
    "path",
    {
      d: "M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989"
    }
  ],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }]
];

// node_modules/lucide/dist/esm/icons/message-circle-plus.mjs
var MessageCirclePlus = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    }
  ],
  ["path", { d: "M8 12h8" }],
  ["path", { d: "M12 8v8" }]
];

// node_modules/lucide/dist/esm/icons/message-circle-question-mark.mjs
var MessageCircleQuestionMark = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    }
  ],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
  ["path", { d: "M12 17h.01" }]
];

// node_modules/lucide/dist/esm/icons/message-circle-reply.mjs
var MessageCircleReply = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    }
  ],
  ["path", { d: "m10 15-3-3 3-3" }],
  ["path", { d: "M7 12h8a2 2 0 0 1 2 2v1" }]
];

// node_modules/lucide/dist/esm/icons/message-circle-warning.mjs
var MessageCircleWarning = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    }
  ],
  ["path", { d: "M12 8v4" }],
  ["path", { d: "M12 16h.01" }]
];

// node_modules/lucide/dist/esm/icons/message-circle-x.mjs
var MessageCircleX = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    }
  ],
  ["path", { d: "m15 9-6 6" }],
  ["path", { d: "m9 9 6 6" }]
];

// node_modules/lucide/dist/esm/icons/message-circle.mjs
var MessageCircle = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/message-square-check.mjs
var MessageSquareCheck = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "m9 11 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/message-square-code.mjs
var MessageSquareCode = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "m10 8-3 3 3 3" }],
  ["path", { d: "m14 14 3-3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/message-square-dashed.mjs
var MessageSquareDashed = [
  ["path", { d: "M14 3h2" }],
  ["path", { d: "M16 19h-2" }],
  ["path", { d: "M2 12v-2" }],
  ["path", { d: "M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149" }],
  ["path", { d: "M20 19a2 2 0 0 0 2-2v-1" }],
  ["path", { d: "M22 10v2" }],
  ["path", { d: "M22 6V5a2 2 0 0 0-2-2" }],
  ["path", { d: "M4 3a2 2 0 0 0-2 2v1" }],
  ["path", { d: "M8 19h2" }],
  ["path", { d: "M8 3h2" }]
];

// node_modules/lucide/dist/esm/icons/message-square-diff.mjs
var MessageSquareDiff = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "M10 15h4" }],
  ["path", { d: "M10 9h4" }],
  ["path", { d: "M12 7v4" }]
];

// node_modules/lucide/dist/esm/icons/message-square-dot.mjs
var MessageSquareDot = [
  [
    "path",
    {
      d: "M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7"
    }
  ],
  ["circle", { cx: "19", cy: "6", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/message-square-heart.mjs
var MessageSquareHeart = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  [
    "path",
    {
      d: "M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/message-square-lock.mjs
var MessageSquareLock = [
  [
    "path",
    {
      d: "M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10"
    }
  ],
  ["path", { d: "M20 15v-2a2 2 0 0 0-4 0v2" }],
  ["rect", { x: "14", y: "15", width: "8", height: "5", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/message-square-more.mjs
var MessageSquareMore = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "M12 11h.01" }],
  ["path", { d: "M16 11h.01" }],
  ["path", { d: "M8 11h.01" }]
];

// node_modules/lucide/dist/esm/icons/message-square-off.mjs
var MessageSquareOff = [
  [
    "path",
    {
      d: "M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826"
    }
  ],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M8.656 3H20a2 2 0 0 1 2 2v11.344" }]
];

// node_modules/lucide/dist/esm/icons/message-square-plus.mjs
var MessageSquarePlus = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "M12 8v6" }],
  ["path", { d: "M9 11h6" }]
];

// node_modules/lucide/dist/esm/icons/message-square-quote.mjs
var MessageSquareQuote = [
  ["path", { d: "M14 14a2 2 0 0 0 2-2V8h-2" }],
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "M8 14a2 2 0 0 0 2-2V8H8" }]
];

// node_modules/lucide/dist/esm/icons/message-square-reply.mjs
var MessageSquareReply = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "m10 8-3 3 3 3" }],
  ["path", { d: "M17 14v-1a2 2 0 0 0-2-2H7" }]
];

// node_modules/lucide/dist/esm/icons/message-square-share.mjs
var MessageSquareShare = [
  [
    "path",
    {
      d: "M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4"
    }
  ],
  ["path", { d: "M16 3h6v6" }],
  ["path", { d: "m16 9 6-6" }]
];

// node_modules/lucide/dist/esm/icons/message-square-text.mjs
var MessageSquareText = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "M7 11h10" }],
  ["path", { d: "M7 15h6" }],
  ["path", { d: "M7 7h8" }]
];

// node_modules/lucide/dist/esm/icons/message-square-warning.mjs
var MessageSquareWarning = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "M12 15h.01" }],
  ["path", { d: "M12 7v4" }]
];

// node_modules/lucide/dist/esm/icons/message-square-x.mjs
var MessageSquareX = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ],
  ["path", { d: "m14.5 8.5-5 5" }],
  ["path", { d: "m9.5 8.5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/message-square.mjs
var MessageSquare = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/messages-circle.mjs
var MessagesCircle = [
  [
    "path",
    {
      d: "M19.95 10.05a7 7 0 011.412 7.872 1 1 0 00-.058.787l.675 2.089a1 1 0 01-1.236 1.168l-2.155-.631a1 1 0 00-.745.06 7 7 0 01-7.793-1.445"
    }
  ],
  [
    "path",
    {
      d: "M2.696 12.708a1 1 0 00-.058-.785 7 7 0 113.518 3.473 1 1 0 00-.744-.061l-2.155.63a1 1 0 01-1.236-1.167z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/messages-square.mjs
var MessagesSquare = [
  [
    "path",
    {
      d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
    }
  ],
  [
    "path",
    {
      d: "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/metronome.mjs
var Metronome = [
  ["path", { d: "M12 11.4V9.1" }],
  ["path", { d: "m12 17 6.59-6.59" }],
  [
    "path",
    {
      d: "m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2"
    }
  ],
  ["circle", { cx: "20", cy: "9", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/mic-audio-lines.mjs
var MicAudioLines = [
  ["path", { d: "M10 3v2.341" }],
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M14 5v.341" }],
  ["path", { d: "M18 5v13" }],
  ["path", { d: "M2 10v3" }],
  ["path", { d: "M22 10v3" }],
  ["path", { d: "M6 6v11" }],
  ["path", { d: "M9 21h6" }],
  ["rect", { width: "4", height: "8", x: "10", y: "9", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/mic-off.mjs
var MicOff = [
  ["path", { d: "M12 19v3" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33" }],
  ["path", { d: "M16.95 16.95A7 7 0 0 1 5 12v-2" }],
  ["path", { d: "M18.89 13.23A7 7 0 0 0 19 12v-2" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12" }]
];

// node_modules/lucide/dist/esm/icons/mic-vocal.mjs
var MicVocal = [
  ["path", { d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" }],
  [
    "path",
    {
      d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"
    }
  ],
  ["circle", { cx: "16", cy: "7", r: "5" }]
];

// node_modules/lucide/dist/esm/icons/mic.mjs
var Mic = [
  ["path", { d: "M12 19v3" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3" }]
];

// node_modules/lucide/dist/esm/icons/mic-signal.mjs
var MicSignal = [
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M18 11a6 6 0 00-3-5.197" }],
  ["path", { d: "M2 11a10 10 0 015-8.662" }],
  ["path", { d: "M22 11a10 10 0 00-5-8.662" }],
  ["path", { d: "M6 11a6 6 0 013-5.197" }],
  ["path", { d: "M9 21h6" }],
  ["rect", { x: "10", y: "9", width: "4", height: "8", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/microchip.mjs
var Microchip = [
  ["path", { d: "M10 12h4" }],
  ["path", { d: "M10 17h4" }],
  ["path", { d: "M10 7h4" }],
  ["path", { d: "M18 12h2" }],
  ["path", { d: "M18 18h2" }],
  ["path", { d: "M18 6h2" }],
  ["path", { d: "M4 12h2" }],
  ["path", { d: "M4 18h2" }],
  ["path", { d: "M4 6h2" }],
  ["rect", { x: "6", y: "2", width: "12", height: "20", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/microscope.mjs
var Microscope = [
  ["path", { d: "M6 18h8" }],
  ["path", { d: "M3 22h18" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1" }],
  ["path", { d: "M9 14h2" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]
];

// node_modules/lucide/dist/esm/icons/microwave.mjs
var Microwave = [
  ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2" }],
  ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1" }],
  ["path", { d: "M18 8v7" }],
  ["path", { d: "M6 19v2" }],
  ["path", { d: "M18 19v2" }]
];

// node_modules/lucide/dist/esm/icons/midi-port.mjs
var MidiPort = [
  ["path", { d: "M12 18h.01" }],
  ["path", { d: "M15 2.458V5a1 1 0 01-1 1h-4a1 1 0 01-1-1V2.458" }],
  ["path", { d: "M16 16h.01" }],
  ["path", { d: "M18 12h.01" }],
  ["path", { d: "M6 12h.01" }],
  ["path", { d: "M8 16h.01" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/milestone.mjs
var Milestone = [
  ["path", { d: "M12 13v8" }],
  ["path", { d: "M12 3v3" }],
  [
    "path",
    {
      d: "M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/milk-off.mjs
var MilkOff = [
  ["path", { d: "M8 2h8" }],
  [
    "path",
    {
      d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"
    }
  ],
  ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/milk.mjs
var Milk = [
  ["path", { d: "M8 2h8" }],
  [
    "path",
    {
      d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
    }
  ],
  ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }]
];

// node_modules/lucide/dist/esm/icons/minimize-2.mjs
var Minimize2 = [
  ["path", { d: "m14 10 7-7" }],
  ["path", { d: "M20 10h-6V4" }],
  ["path", { d: "m3 21 7-7" }],
  ["path", { d: "M4 14h6v6" }]
];

// node_modules/lucide/dist/esm/icons/minimize.mjs
var Minimize = [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]
];

// node_modules/lucide/dist/esm/icons/minus.mjs
var Minus = [["path", { d: "M5 12h14" }]];

// node_modules/lucide/dist/esm/icons/mirror-rectangular.mjs
var MirrorRectangular = [
  ["path", { d: "M11 6 8 9" }],
  ["path", { d: "m16 7-8 8" }],
  ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/mirror-round.mjs
var MirrorRound = [
  ["path", { d: "M10 6.6 8.6 8" }],
  ["path", { d: "M12 18v4" }],
  ["path", { d: "M15 7.5 9.5 13" }],
  ["path", { d: "M7 22h10" }],
  ["circle", { cx: "12", cy: "10", r: "8" }]
];

// node_modules/lucide/dist/esm/icons/monitor-check.mjs
var MonitorCheck = [
  ["path", { d: "m9 10 2 2 4-4" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M8 21h8" }]
];

// node_modules/lucide/dist/esm/icons/monitor-cloud.mjs
var MonitorCloud = [
  ["path", { d: "M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" }],
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M8 21h8" }],
  ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/monitor-cog.mjs
var MonitorCog = [
  ["path", { d: "M12 17v4" }],
  ["path", { d: "m14.305 7.53.923-.382" }],
  ["path", { d: "m15.228 4.852-.923-.383" }],
  ["path", { d: "m16.852 3.228-.383-.924" }],
  ["path", { d: "m16.852 8.772-.383.923" }],
  ["path", { d: "m19.148 3.228.383-.924" }],
  ["path", { d: "m19.53 9.696-.382-.924" }],
  ["path", { d: "m20.772 4.852.924-.383" }],
  ["path", { d: "m20.772 7.148.924.383" }],
  ["path", { d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }],
  ["path", { d: "M8 21h8" }],
  ["circle", { cx: "18", cy: "6", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/monitor-dot.mjs
var MonitorDot = [
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" }],
  ["path", { d: "M8 21h8" }],
  ["circle", { cx: "19", cy: "6", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/monitor-down.mjs
var MonitorDown = [
  ["path", { d: "M12 13V7" }],
  ["path", { d: "m15 10-3 3-3-3" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M8 21h8" }]
];

// node_modules/lucide/dist/esm/icons/monitor-off.mjs
var MonitorOff = [
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M8 21h8" }],
  ["path", { d: "M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042" }]
];

// node_modules/lucide/dist/esm/icons/monitor-pause.mjs
var MonitorPause = [
  ["path", { d: "M10 13V7" }],
  ["path", { d: "M14 13V7" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M8 21h8" }]
];

// node_modules/lucide/dist/esm/icons/monitor-pc.mjs
var MonitorPc = [
  ["path", { d: "M10 15H4a2 2 0 01-2-2V7a2 2 0 012-2h6" }],
  ["path", { d: "M10 19H5" }],
  ["path", { d: "M14 11h8" }],
  ["path", { d: "M14 7h8" }],
  ["path", { d: "M18 17h.01" }],
  ["path", { d: "M9 19v-4" }],
  ["rect", { x: "14", y: "3", width: "8", height: "18", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/monitor-play.mjs
var MonitorPlay = [
  [
    "path",
    {
      d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"
    }
  ],
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M8 21h8" }],
  ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/monitor-smartphone.mjs
var MonitorSmartphone = [
  ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }],
  ["path", { d: "M10 19v-3.96 3.15" }],
  ["path", { d: "M7 19h5" }],
  ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/monitor-speaker.mjs
var MonitorSpeaker = [
  ["path", { d: "M5.5 20H8" }],
  ["path", { d: "M17 9h.01" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }],
  ["circle", { cx: "17", cy: "15", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/monitor-stop.mjs
var MonitorStop = [
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M8 21h8" }],
  ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }],
  ["rect", { x: "9", y: "7", width: "6", height: "6", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/monitor-up.mjs
var MonitorUp = [
  ["path", { d: "m9 10 3-3 3 3" }],
  ["path", { d: "M12 13V7" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M8 21h8" }]
];

// node_modules/lucide/dist/esm/icons/monitor-x.mjs
var MonitorX = [
  ["path", { d: "m14.5 12.5-5-5" }],
  ["path", { d: "m9.5 12.5 5-5" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M8 21h8" }]
];

// node_modules/lucide/dist/esm/icons/monitor.mjs
var Monitor = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21" }]
];

// node_modules/lucide/dist/esm/icons/moon-star.mjs
var MoonStar = [
  ["path", { d: "M18 5h4" }],
  ["path", { d: "M20 3v4" }],
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/moon.mjs
var Moon = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/mop-sparkles.mjs
var MopSparkles = [
  ["path", { d: "M10 22a3 3 0 01-3-3" }],
  ["path", { d: "M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a4.501 4.501 0 000 9z" }],
  ["path", { d: "M10 3H8" }],
  ["path", { d: "M12.5 11.5 22 2" }],
  ["path", { d: "M20 13v4" }],
  ["path", { d: "M22 15h-4" }],
  ["path", { d: "M4 5v4" }],
  ["path", { d: "M6 7H2" }],
  [
    "path",
    {
      d: "m6.98 13.02 2.665-2.664a1.21 1.21 0 011.71 0l2.29 2.288a1.21 1.21 0 010 1.712l-2.088 2.087"
    }
  ],
  ["path", { d: "M9 2v2" }]
];

// node_modules/lucide/dist/esm/icons/mop.mjs
var Mop = [
  ["path", { d: "M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a1 1 0 100 9za3 3 0 01-3-3" }],
  ["path", { d: "M12.5 11.5 22 2" }],
  [
    "path",
    {
      d: "m6.98 13.02 2.665-2.664a1.21 1.21 0 011.71 0l2.29 2.288a1.21 1.21 0 010 1.712l-2.088 2.087"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/mosque.mjs
var Mosque = [
  ["path", { d: "M12.268 2a2 2 0 003.465 2" }],
  ["path", { d: "M14 5 L14 8" }],
  ["path", { d: "M16 22v-3a2 2 0 00-4 0v3" }],
  [
    "path",
    {
      d: "M21 13c-.662-1.497-1.666-2.753-2.9-3.63C16.825 8.47 15.422 8 14 8s-2.826.47-4.1 1.37C8.668 10.248 7.663 11.504 7 13z"
    }
  ],
  ["path", { d: "M3 9h4" }],
  ["path", { d: "M7 22V6a5 5 0 00-2-4 5 5 0 00-2 4v14a2 2 0 002 2h14a2 2 0 002-2v-7" }]
];

// node_modules/lucide/dist/esm/icons/motorbike.mjs
var Motorbike = [
  ["path", { d: "m18 14-1-3" }],
  ["path", { d: "m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81" }],
  ["path", { d: "M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5" }],
  ["circle", { cx: "19", cy: "17", r: "3" }],
  ["circle", { cx: "5", cy: "17", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/mountain.mjs
var Mountain = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }]];

// node_modules/lucide/dist/esm/icons/mountain-snow.mjs
var MountainSnow = [
  ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }],
  ["path", { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" }]
];

// node_modules/lucide/dist/esm/icons/mouse-left.mjs
var MouseLeft = [
  ["path", { d: "M12 7.318V10" }],
  ["path", { d: "M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" }],
  ["circle", { cx: "7", cy: "4", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/mouse-off.mjs
var MouseOff = [
  ["path", { d: "M12 6v.343" }],
  ["path", { d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }],
  ["path", { d: "M19 13.343V9A7 7 0 0 0 8.56 2.902" }],
  ["path", { d: "M22 22 2 2" }]
];

// node_modules/lucide/dist/esm/icons/mouse-pointer-2-off.mjs
var MousePointer2Off = [
  [
    "path",
    {
      d: "m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551"
    }
  ],
  ["path", { d: "M22 2 2 22" }],
  ["path", { d: "m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779" }]
];

// node_modules/lucide/dist/esm/icons/mouse-pointer-2.mjs
var MousePointer2 = [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/mouse-pointer-ban.mjs
var MousePointerBan = [
  [
    "path",
    {
      d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"
    }
  ],
  ["circle", { cx: "16", cy: "16", r: "6" }],
  ["path", { d: "m11.8 11.8 8.4 8.4" }]
];

// node_modules/lucide/dist/esm/icons/mouse-right.mjs
var MouseRight = [
  ["path", { d: "M12 7.318V10" }],
  ["path", { d: "M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" }],
  ["circle", { cx: "17", cy: "4", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/mouse-pointer-click.mjs
var MousePointerClick = [
  ["path", { d: "M14 4.1 12 6" }],
  ["path", { d: "m5.1 8-2.9-.8" }],
  ["path", { d: "m6 12-1.9 2" }],
  ["path", { d: "M7.2 2.2 8 5.1" }],
  [
    "path",
    {
      d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/mouse-pointer.mjs
var MousePointer = [
  ["path", { d: "M12.586 12.586 19 19" }],
  [
    "path",
    {
      d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/mouse.mjs
var Mouse = [
  ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7" }],
  ["path", { d: "M12 6v4" }]
];

// node_modules/lucide/dist/esm/icons/mouth-off.mjs
var MouthOff = [
  [
    "path",
    {
      d: "M13.074 7.417a2.6 2.6 0 012.989.099c1.829 1.36 3.053 2.076 5.479 3.644a1 1 0 01.308 1.368 11.6 11.6 0 01-1.617 2.05"
    }
  ],
  ["path", { d: "M2 12a50.5 50.5 0 0010.99.99" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M21 11a1 1 0 011 1 51 51 0 01-3.734.61" }],
  [
    "path",
    {
      d: "M7.695 7.695c-1.7 1.247-2.92 1.967-5.238 3.464a1 1 0 00-.307 1.369 11.6 11.6 0 0014.766 4.388"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/mouth.mjs
var Mouth = [
  ["path", { d: "M2 12a50.5 50.5 0 0020 0 1 1 0 00-1-1" }],
  [
    "path",
    {
      d: "M2.457 11.159a1 1 0 00-.307 1.369 11.59 11.59 0 0019.7 0 1 1 0 00-.308-1.368c-2.426-1.568-3.65-2.284-5.479-3.644a2.6 2.6 0 00-3.373.208 1 1 0 01-1.38 0 2.62 2.62 0 00-3.373-.208c-1.83 1.36-3.053 2.076-5.48 3.643"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/move-3d.mjs
var Move3d = [
  ["path", { d: "M5 3v16h16" }],
  ["path", { d: "m5 19 6-6" }],
  ["path", { d: "m2 6 3-3 3 3" }],
  ["path", { d: "m18 16 3 3-3 3" }]
];

// node_modules/lucide/dist/esm/icons/move-diagonal-2.mjs
var MoveDiagonal2 = [
  ["path", { d: "M19 13v6h-6" }],
  ["path", { d: "M5 11V5h6" }],
  ["path", { d: "m5 5 14 14" }]
];

// node_modules/lucide/dist/esm/icons/move-diagonal.mjs
var MoveDiagonal = [
  ["path", { d: "M11 19H5v-6" }],
  ["path", { d: "M13 5h6v6" }],
  ["path", { d: "M19 5 5 19" }]
];

// node_modules/lucide/dist/esm/icons/move-down-left.mjs
var MoveDownLeft = [
  ["path", { d: "M11 19H5V13" }],
  ["path", { d: "M19 5L5 19" }]
];

// node_modules/lucide/dist/esm/icons/move-down-right.mjs
var MoveDownRight = [
  ["path", { d: "M19 13V19H13" }],
  ["path", { d: "M5 5L19 19" }]
];

// node_modules/lucide/dist/esm/icons/move-down.mjs
var MoveDown = [
  ["path", { d: "M8 18L12 22L16 18" }],
  ["path", { d: "M12 2V22" }]
];

// node_modules/lucide/dist/esm/icons/move-horizontal.mjs
var MoveHorizontal = [
  ["path", { d: "m18 8 4 4-4 4" }],
  ["path", { d: "M2 12h20" }],
  ["path", { d: "m6 8-4 4 4 4" }]
];

// node_modules/lucide/dist/esm/icons/move-left.mjs
var MoveLeft = [
  ["path", { d: "M6 8L2 12L6 16" }],
  ["path", { d: "M2 12H22" }]
];

// node_modules/lucide/dist/esm/icons/move-right.mjs
var MoveRight = [
  ["path", { d: "M18 8L22 12L18 16" }],
  ["path", { d: "M2 12H22" }]
];

// node_modules/lucide/dist/esm/icons/move-up-left.mjs
var MoveUpLeft = [
  ["path", { d: "M5 11V5H11" }],
  ["path", { d: "M5 5L19 19" }]
];

// node_modules/lucide/dist/esm/icons/move-up-right.mjs
var MoveUpRight = [
  ["path", { d: "M13 5H19V11" }],
  ["path", { d: "M19 5L5 19" }]
];

// node_modules/lucide/dist/esm/icons/move-up.mjs
var MoveUp = [
  ["path", { d: "M8 6L12 2L16 6" }],
  ["path", { d: "M12 2V22" }]
];

// node_modules/lucide/dist/esm/icons/move-vertical.mjs
var MoveVertical = [
  ["path", { d: "M12 2v20" }],
  ["path", { d: "m8 18 4 4 4-4" }],
  ["path", { d: "m8 6 4-4 4 4" }]
];

// node_modules/lucide/dist/esm/icons/music-2.mjs
var Music2 = [
  ["circle", { cx: "8", cy: "18", r: "4" }],
  ["path", { d: "M12 18V2l7 4" }]
];

// node_modules/lucide/dist/esm/icons/move.mjs
var Move = [
  ["path", { d: "M12 2v20" }],
  ["path", { d: "m15 19-3 3-3-3" }],
  ["path", { d: "m19 9 3 3-3 3" }],
  ["path", { d: "M2 12h20" }],
  ["path", { d: "m5 9-3 3 3 3" }],
  ["path", { d: "m9 5 3-3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/music-3.mjs
var Music3 = [
  ["circle", { cx: "12", cy: "18", r: "4" }],
  ["path", { d: "M16 18V2" }]
];

// node_modules/lucide/dist/esm/icons/music-4.mjs
var Music4 = [
  ["path", { d: "M9 18V5l12-2v13" }],
  ["path", { d: "m9 9 12-2" }],
  ["circle", { cx: "6", cy: "18", r: "3" }],
  ["circle", { cx: "18", cy: "16", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/music.mjs
var Music = [
  ["path", { d: "M9 18V5l12-2v13" }],
  ["circle", { cx: "6", cy: "18", r: "3" }],
  ["circle", { cx: "18", cy: "16", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/navigation-2-off.mjs
var Navigation2Off = [
  ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }],
  ["path", { d: "M14.53 8.88 12 2l-1.17 3.17" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/navigation-2.mjs
var Navigation2 = [["polygon", { points: "12 2 19 21 12 17 5 21 12 2" }]];

// node_modules/lucide/dist/esm/icons/navigation-off.mjs
var NavigationOff = [
  ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }],
  ["path", { d: "M17.39 11.73 22 2l-9.73 4.61" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/navigation.mjs
var Navigation = [["polygon", { points: "3 11 22 2 13 21 11 13 3 11" }]];

// node_modules/lucide/dist/esm/icons/network.mjs
var Network = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }],
  ["path", { d: "M12 12V8" }]
];

// node_modules/lucide/dist/esm/icons/nepali-rupee.mjs
var NepaliRupee = [
  ["path", { d: "M18 16.173 A4.74 4.74 0 0 0 13.496 8.005" }],
  ["path", { d: "M4 3 L20 3" }],
  ["path", { d: "M5 13 L13.5 21" }],
  ["path", { d: "M5 13 L9 13" }],
  ["path", { d: "M8 13 C15.5 13 14.667 3 8 3" }]
];

// node_modules/lucide/dist/esm/icons/newspaper.mjs
var Newspaper = [
  ["path", { d: "M15 18h-5" }],
  ["path", { d: "M18 14h-8" }],
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"
    }
  ],
  ["rect", { width: "8", height: "4", x: "10", y: "6", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/nfc.mjs
var Nfc = [
  ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36" }],
  ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58" }],
  ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" }],
  ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20" }]
];

// node_modules/lucide/dist/esm/icons/non-binary.mjs
var NonBinary = [
  ["path", { d: "M12 2v10" }],
  ["path", { d: "m8.5 4 7 4" }],
  ["path", { d: "m8.5 8 7-4" }],
  ["circle", { cx: "12", cy: "17", r: "5" }]
];

// node_modules/lucide/dist/esm/icons/notebook-dot.mjs
var NotebookDot = [
  ["path", { d: "M16 11.75V22" }],
  ["path", { d: "M2 10h4" }],
  ["path", { d: "M2 14h4" }],
  ["path", { d: "M2 18h4" }],
  ["path", { d: "M2 6h4" }],
  ["path", { d: "M20 11.75V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.65" }],
  ["circle", { cx: "18", cy: "5", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/notebook-pen.mjs
var NotebookPen = [
  ["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" }],
  ["path", { d: "M2 6h4" }],
  ["path", { d: "M2 10h4" }],
  ["path", { d: "M2 14h4" }],
  ["path", { d: "M2 18h4" }],
  [
    "path",
    {
      d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/notebook-tabs.mjs
var NotebookTabs = [
  ["path", { d: "M2 6h4" }],
  ["path", { d: "M2 10h4" }],
  ["path", { d: "M2 14h4" }],
  ["path", { d: "M2 18h4" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
  ["path", { d: "M15 2v20" }],
  ["path", { d: "M15 7h5" }],
  ["path", { d: "M15 12h5" }],
  ["path", { d: "M15 17h5" }]
];

// node_modules/lucide/dist/esm/icons/notebook-text.mjs
var NotebookText = [
  ["path", { d: "M2 6h4" }],
  ["path", { d: "M2 10h4" }],
  ["path", { d: "M2 14h4" }],
  ["path", { d: "M2 18h4" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
  ["path", { d: "M9.5 8h5" }],
  ["path", { d: "M9.5 12H16" }],
  ["path", { d: "M9.5 16H14" }]
];

// node_modules/lucide/dist/esm/icons/notebook.mjs
var Notebook = [
  ["path", { d: "M2 6h4" }],
  ["path", { d: "M2 10h4" }],
  ["path", { d: "M2 14h4" }],
  ["path", { d: "M2 18h4" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
  ["path", { d: "M16 2v20" }]
];

// node_modules/lucide/dist/esm/icons/notepad-text-dashed.mjs
var NotepadTextDashed = [
  ["path", { d: "M8 2v4" }],
  ["path", { d: "M12 2v4" }],
  ["path", { d: "M16 2v4" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M20 12v2" }],
  ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1" }],
  ["path", { d: "M13 22h-2" }],
  ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2" }],
  ["path", { d: "M4 14v-2" }],
  ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M8 10h6" }],
  ["path", { d: "M8 14h8" }],
  ["path", { d: "M8 18h5" }]
];

// node_modules/lucide/dist/esm/icons/notepad-text.mjs
var NotepadText = [
  ["path", { d: "M8 2v4" }],
  ["path", { d: "M12 2v4" }],
  ["path", { d: "M16 2v4" }],
  ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2" }],
  ["path", { d: "M8 10h6" }],
  ["path", { d: "M8 14h8" }],
  ["path", { d: "M8 18h5" }]
];

// node_modules/lucide/dist/esm/icons/nut-off.mjs
var NutOff = [
  ["path", { d: "M12 4V2" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"
    }
  ],
  ["path", { d: "M19 10v3.343" }],
  [
    "path",
    {
      d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/nut.mjs
var Nut = [
  ["path", { d: "M12 4V2" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"
    }
  ],
  [
    "path",
    {
      d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/octagon-alert.mjs
var OctagonAlert = [
  ["path", { d: "M12 16h.01" }],
  ["path", { d: "M12 8v4" }],
  [
    "path",
    {
      d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/octagon-minus.mjs
var OctagonMinus = [
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
    }
  ],
  ["path", { d: "M8 12h8" }]
];

// node_modules/lucide/dist/esm/icons/octagon-pause.mjs
var OctagonPause = [
  ["path", { d: "M10 15V9" }],
  ["path", { d: "M14 15V9" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/octagon-x.mjs
var OctagonX = [
  ["path", { d: "m15 9-6 6" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
    }
  ],
  ["path", { d: "m9 9 6 6" }]
];

// node_modules/lucide/dist/esm/icons/octagon.mjs
var Octagon = [
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/omega.mjs
var Omega = [
  [
    "path",
    {
      d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/option.mjs
var Option = [
  ["path", { d: "M14 3h7" }],
  ["path", { d: "M3 3h5.28a1 1 0 0 1 .948.684l5.544 16.632a1 1 0 0 0 .949.684H21" }]
];

// node_modules/lucide/dist/esm/icons/orbit.mjs
var Orbit = [
  ["path", { d: "M20.341 6.484A10 10 0 0 1 10.266 21.85" }],
  ["path", { d: "M3.659 17.516A10 10 0 0 1 13.74 2.152" }],
  ["circle", { cx: "12", cy: "12", r: "3" }],
  ["circle", { cx: "19", cy: "5", r: "2" }],
  ["circle", { cx: "5", cy: "19", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/origami.mjs
var Origami = [
  ["path", { d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" }],
  [
    "path",
    { d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" }
  ],
  [
    "path",
    {
      d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/package-2.mjs
var Package2 = [
  ["path", { d: "M12 3v6" }],
  [
    "path",
    {
      d: "M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z"
    }
  ],
  ["path", { d: "M3.054 9.013h17.893" }]
];

// node_modules/lucide/dist/esm/icons/package-check.mjs
var PackageCheck = [
  ["path", { d: "M12 22V12" }],
  ["path", { d: "m16 17 2 2 4-4" }],
  [
    "path",
    {
      d: "M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753"
    }
  ],
  ["path", { d: "M3.29 7 12 12l8.71-5" }],
  ["path", { d: "m7.5 4.27 8.997 5.148" }]
];

// node_modules/lucide/dist/esm/icons/package-minus.mjs
var PackageMinus = [
  ["path", { d: "M12 22V12" }],
  ["path", { d: "M16 17h6" }],
  [
    "path",
    {
      d: "M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"
    }
  ],
  ["path", { d: "M3.29 7 12 12l8.71-5" }],
  ["path", { d: "m7.5 4.27 8.997 5.148" }]
];

// node_modules/lucide/dist/esm/icons/package-open.mjs
var PackageOpen = [
  ["path", { d: "M12 22v-9" }],
  [
    "path",
    {
      d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"
    }
  ],
  [
    "path",
    {
      d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"
    }
  ],
  [
    "path",
    {
      d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/package-plus.mjs
var PackagePlus = [
  ["path", { d: "M12 22V12" }],
  ["path", { d: "M16 17h6" }],
  ["path", { d: "M19 14v6" }],
  [
    "path",
    {
      d: "M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955"
    }
  ],
  ["path", { d: "M3.29 7 12 12l8.71-5" }],
  ["path", { d: "m7.5 4.27 8.997 5.148" }]
];

// node_modules/lucide/dist/esm/icons/package-search.mjs
var PackageSearch = [
  ["path", { d: "M12 22V12" }],
  ["path", { d: "M20.27 18.27 22 20" }],
  [
    "path",
    {
      d: "M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559"
    }
  ],
  ["path", { d: "M3.29 7 12 12l8.71-5" }],
  ["path", { d: "m7.5 4.27 8.997 5.148" }],
  ["circle", { cx: "18.5", cy: "16.5", r: "2.5" }]
];

// node_modules/lucide/dist/esm/icons/package-x.mjs
var PackageX = [
  ["path", { d: "M12 22V12" }],
  ["path", { d: "m16.5 14.5 5 5" }],
  ["path", { d: "m16.5 19.5 5-5" }],
  [
    "path",
    {
      d: "M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074"
    }
  ],
  ["path", { d: "M3.29 7 12 12l8.71-5" }],
  ["path", { d: "m7.5 4.27 8.997 5.148" }]
];

// node_modules/lucide/dist/esm/icons/package.mjs
var Package = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
    }
  ],
  ["path", { d: "M12 22V12" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7" }],
  ["path", { d: "m7.5 4.27 9 5.15" }]
];

// node_modules/lucide/dist/esm/icons/paint-bucket.mjs
var PaintBucket = [
  ["path", { d: "M11 7 6 2" }],
  ["path", { d: "M18.992 12H2.041" }],
  [
    "path",
    {
      d: "M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595"
    }
  ],
  [
    "path",
    {
      d: "m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/paint-roller.mjs
var PaintRoller = [
  ["rect", { width: "16", height: "6", x: "2", y: "2", rx: "2" }],
  ["path", { d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }],
  ["rect", { width: "4", height: "6", x: "8", y: "16", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/paintbrush-vertical.mjs
var PaintbrushVertical = [
  ["path", { d: "M10 2v2" }],
  ["path", { d: "M14 2v4" }],
  ["path", { d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" }],
  [
    "path",
    {
      d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/palette.mjs
var Palette = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor" }]
];

// node_modules/lucide/dist/esm/icons/paintbrush.mjs
var Paintbrush = [
  ["path", { d: "m14.622 17.897-10.68-2.913" }],
  [
    "path",
    {
      d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
    }
  ],
  [
    "path",
    {
      d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/panda.mjs
var Panda = [
  ["path", { d: "M11.25 17.25h1.5L12 18z" }],
  ["path", { d: "m15 12 2 2" }],
  ["path", { d: "M17.902 6.599a8 8 0 0 0-.5-.5" }],
  [
    "path",
    {
      d: "M2 14.5C2 19.47 6.48 22 12 22s10-2.53 10-7.5a10 10 0 0 0-1.3-4.83 4.5 4.5 0 1 0-7.05-5.5 8 8 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5A10 10 0 0 0 2 14.5"
    }
  ],
  ["path", { d: "M6.099 6.599a8 8 0 0 1 .5-.5" }],
  ["path", { d: "m9 12-2 2" }]
];

// node_modules/lucide/dist/esm/icons/panel-bottom-close.mjs
var PanelBottomClose = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 15h18" }],
  ["path", { d: "m15 8-3 3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/panel-bottom-dashed.mjs
var PanelBottomDashed = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M14 15h1" }],
  ["path", { d: "M19 15h2" }],
  ["path", { d: "M3 15h2" }],
  ["path", { d: "M9 15h1" }]
];

// node_modules/lucide/dist/esm/icons/panel-bottom-open.mjs
var PanelBottomOpen = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 15h18" }],
  ["path", { d: "m9 10 3-3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/panel-bottom.mjs
var PanelBottom = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 15h18" }]
];

// node_modules/lucide/dist/esm/icons/panel-left-close.mjs
var PanelLeftClose = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M9 3v18" }],
  ["path", { d: "m16 15-3-3 3-3" }]
];

// node_modules/lucide/dist/esm/icons/panel-left-dashed.mjs
var PanelLeftDashed = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M9 14v1" }],
  ["path", { d: "M9 19v2" }],
  ["path", { d: "M9 3v2" }],
  ["path", { d: "M9 9v1" }]
];

// node_modules/lucide/dist/esm/icons/panel-left-open.mjs
var PanelLeftOpen = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M9 3v18" }],
  ["path", { d: "m14 9 3 3-3 3" }]
];

// node_modules/lucide/dist/esm/icons/panel-left-right-dashed.mjs
var PanelLeftRightDashed = [
  ["path", { d: "M15 10V9" }],
  ["path", { d: "M15 15v-1" }],
  ["path", { d: "M15 21v-2" }],
  ["path", { d: "M15 5V3" }],
  ["path", { d: "M9 10V9" }],
  ["path", { d: "M9 15v-1" }],
  ["path", { d: "M9 21v-2" }],
  ["path", { d: "M9 5V3" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/panel-left.mjs
var PanelLeft = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M9 3v18" }]
];

// node_modules/lucide/dist/esm/icons/panel-right-close.mjs
var PanelRightClose = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M15 3v18" }],
  ["path", { d: "m8 9 3 3-3 3" }]
];

// node_modules/lucide/dist/esm/icons/panel-right-dashed.mjs
var PanelRightDashed = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M15 14v1" }],
  ["path", { d: "M15 19v2" }],
  ["path", { d: "M15 3v2" }],
  ["path", { d: "M15 9v1" }]
];

// node_modules/lucide/dist/esm/icons/panel-right-open.mjs
var PanelRightOpen = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M15 3v18" }],
  ["path", { d: "m10 15-3-3 3-3" }]
];

// node_modules/lucide/dist/esm/icons/panel-top-bottom-dashed.mjs
var PanelTopBottomDashed = [
  ["path", { d: "M14 15h1" }],
  ["path", { d: "M14 9h1" }],
  ["path", { d: "M19 15h2" }],
  ["path", { d: "M19 9h2" }],
  ["path", { d: "M3 15h2" }],
  ["path", { d: "M3 9h2" }],
  ["path", { d: "M9 15h1" }],
  ["path", { d: "M9 9h1" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/panel-right.mjs
var PanelRight = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M15 3v18" }]
];

// node_modules/lucide/dist/esm/icons/panel-top-close.mjs
var PanelTopClose = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "m9 16 3-3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/panel-top-dashed.mjs
var PanelTopDashed = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M14 9h1" }],
  ["path", { d: "M19 9h2" }],
  ["path", { d: "M3 9h2" }],
  ["path", { d: "M9 9h1" }]
];

// node_modules/lucide/dist/esm/icons/panel-top-open.mjs
var PanelTopOpen = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "m15 14-3 3-3-3" }]
];

// node_modules/lucide/dist/esm/icons/panel-top.mjs
var PanelTop = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 9h18" }]
];

// node_modules/lucide/dist/esm/icons/panels-left-bottom.mjs
var PanelsLeftBottom = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M9 3v18" }],
  ["path", { d: "M9 15h12" }]
];

// node_modules/lucide/dist/esm/icons/panels-right-bottom.mjs
var PanelsRightBottom = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 15h12" }],
  ["path", { d: "M15 3v18" }]
];

// node_modules/lucide/dist/esm/icons/panels-top-left.mjs
var PanelsTopLeft = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M9 21V9" }]
];

// node_modules/lucide/dist/esm/icons/paper-bag.mjs
var PaperBag = [
  [
    "path",
    {
      d: "M5.364 3.848C4 6 3 9.652 3 12.652V19a2 2 0 002 2h14a2 2 0 002-2v-5c0-2.334-1.816-4.668-2.622-7.002"
    }
  ],
  [
    "path",
    {
      d: "M7 3h11.379a2 2 0 011.789 1.106l.723 1.447A1 1 0 0119.997 7h-8.525a2 2 0 01-1.789-1.106L8.79 4.105a2 2 0 10-3.579 1.789l2.261 4.522A5 5 0 018 12.652V21"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/paperclip.mjs
var Paperclip = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/parasol.mjs
var Parasol = [
  ["path", { d: "M12.5 11.134 18.196 21" }],
  [
    "path",
    {
      d: "M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413"
    }
  ],
  ["path", { d: "M21 21H3" }]
];

// node_modules/lucide/dist/esm/icons/parentheses.mjs
var Parentheses = [
  ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }],
  ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }]
];

// node_modules/lucide/dist/esm/icons/park.mjs
var Park = [
  ["path", { d: "M12 18h10" }],
  ["path", { d: "M13.248 9.998A4.5 4.5 0 0 0 11.75 8.6V8a1 1 0 0 0-7.5 0 4.9 4.9 0 0 0 2.25 9H8" }],
  ["path", { d: "m15 14-2 6" }],
  ["path", { d: "m19 14 2 6" }],
  ["path", { d: "M21 14h-8" }],
  ["path", { d: "M8 20v-5.922a2 2 0 0 0-.586-1.414L6.5 11.75" }],
  ["path", { d: "M9.205 12.795 8 14" }],
  ["circle", { cx: "19", cy: "6", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/parking-meter.mjs
var ParkingMeter = [
  ["path", { d: "M11 15h2" }],
  ["path", { d: "M12 12v3" }],
  ["path", { d: "M12 19v3" }],
  [
    "path",
    {
      d: "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"
    }
  ],
  ["path", { d: "M9 9a3 3 0 1 1 6 0" }]
];

// node_modules/lucide/dist/esm/icons/party-popper.mjs
var PartyPopper = [
  ["path", { d: "M5.8 11.3 2 22l10.7-3.79" }],
  ["path", { d: "M4 3h.01" }],
  ["path", { d: "M22 8h.01" }],
  ["path", { d: "M15 2h.01" }],
  ["path", { d: "M22 20h.01" }],
  [
    "path",
    {
      d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
    }
  ],
  ["path", { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" }],
  ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" }],
  [
    "path",
    {
      d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/pause.mjs
var Pause = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/paw-print.mjs
var PawPrint = [
  ["circle", { cx: "11", cy: "4", r: "2" }],
  ["circle", { cx: "18", cy: "8", r: "2" }],
  ["circle", { cx: "20", cy: "16", r: "2" }],
  [
    "path",
    {
      d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/pc-case.mjs
var PcCase = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2" }],
  ["path", { d: "M15 14h.01" }],
  ["path", { d: "M9 6h6" }],
  ["path", { d: "M9 10h6" }]
];

// node_modules/lucide/dist/esm/icons/pen-line.mjs
var PenLine = [
  ["path", { d: "M13 21h8" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/pen-off.mjs
var PenOff = [
  [
    "path",
    {
      d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
    }
  ],
  ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/pen-tool.mjs
var PenTool = [
  [
    "path",
    {
      d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"
    }
  ],
  [
    "path",
    {
      d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"
    }
  ],
  ["path", { d: "m2.3 2.3 7.286 7.286" }],
  ["circle", { cx: "11", cy: "11", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/pen.mjs
var Pen = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/pencil-line.mjs
var PencilLine = [
  ["path", { d: "M13 21h8" }],
  ["path", { d: "m15 5 4 4" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/pencil-ruler.mjs
var PencilRuler = [
  ["path", { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" }],
  ["path", { d: "m8 6 2-2" }],
  ["path", { d: "m18 16 2-2" }],
  ["path", { d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" }],
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }
  ],
  ["path", { d: "m15 5 4 4" }]
];

// node_modules/lucide/dist/esm/icons/pencil-sparkles.mjs
var PencilSparkles = [
  ["path", { d: "M10 3H8" }],
  ["path", { d: "m15.007 5.008 3.987 3.986" }],
  ["path", { d: "M20 15v4" }],
  [
    "path",
    {
      d: "M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }
  ],
  ["path", { d: "M22 17h-4" }],
  ["path", { d: "M4 5v4" }],
  ["path", { d: "M6 7H2" }],
  ["path", { d: "M9 2v2" }]
];

// node_modules/lucide/dist/esm/icons/pencil-off.mjs
var PencilOff = [
  [
    "path",
    {
      d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
    }
  ],
  ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }],
  ["path", { d: "m15 5 4 4" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/pencil.mjs
var Pencil = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }
  ],
  ["path", { d: "m15 5 4 4" }]
];

// node_modules/lucide/dist/esm/icons/percent.mjs
var Percent = [
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }],
  ["circle", { cx: "6.5", cy: "6.5", r: "2.5" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "2.5" }]
];

// node_modules/lucide/dist/esm/icons/pentagon.mjs
var Pentagon = [
  [
    "path",
    {
      d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/person-standing.mjs
var PersonStanding = [
  ["circle", { cx: "12", cy: "5", r: "1" }],
  ["path", { d: "m9 20 3-6 3 6" }],
  ["path", { d: "m6 8 6 2 6-2" }],
  ["path", { d: "M12 10v4" }]
];

// node_modules/lucide/dist/esm/icons/phi.mjs
var Phi = [
  ["path", { d: "M12 2v20" }],
  ["circle", { cx: "12", cy: "12", r: "7" }]
];

// node_modules/lucide/dist/esm/icons/philippine-peso.mjs
var PhilippinePeso = [
  ["path", { d: "M20 11H4" }],
  ["path", { d: "M20 7H4" }],
  ["path", { d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" }]
];

// node_modules/lucide/dist/esm/icons/phone-call.mjs
var PhoneCall = [
  ["path", { d: "M13 2a9 9 0 0 1 9 9" }],
  ["path", { d: "M13 6a5 5 0 0 1 5 5" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/phone-forwarded.mjs
var PhoneForwarded = [
  ["path", { d: "M14 6h8" }],
  ["path", { d: "m18 2 4 4-4 4" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/phone-incoming.mjs
var PhoneIncoming = [
  ["path", { d: "M16 2v6h6" }],
  ["path", { d: "m22 2-6 6" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/phone-missed.mjs
var PhoneMissed = [
  ["path", { d: "m16 2 6 6" }],
  ["path", { d: "m22 2-6 6" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/phone-off.mjs
var PhoneOff = [
  [
    "path",
    {
      d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"
    }
  ],
  ["path", { d: "M22 2 2 22" }],
  [
    "path",
    {
      d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/phone-outgoing.mjs
var PhoneOutgoing = [
  ["path", { d: "m16 8 6-6" }],
  ["path", { d: "M22 8V2h-6" }],
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/phone.mjs
var Phone = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/pi.mjs
var Pi = [
  ["line", { x1: "9", x2: "9", y1: "4", y2: "20" }],
  ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13" }],
  ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4" }]
];

// node_modules/lucide/dist/esm/icons/piano.mjs
var Piano = [
  ["path", { d: "M10 13v4" }],
  ["path", { d: "M14 13v4" }],
  ["path", { d: "M18 13v4" }],
  ["path", { d: "M2 13h20" }],
  [
    "path",
    {
      d: "M22 11.5A3.5 3.5 0 0018.5 8a3.52 3.52 0 01-3.173-2A7 7 0 002 9v10a2 2 0 002 2h16a2 2 0 002-2z"
    }
  ],
  ["path", { d: "M6 13v4" }]
];

// node_modules/lucide/dist/esm/icons/pickaxe.mjs
var Pickaxe = [
  ["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" }],
  [
    "path",
    {
      d: "M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"
    }
  ],
  [
    "path",
    {
      d: "M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"
    }
  ],
  [
    "path",
    {
      d: "M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/picture-in-picture-2.mjs
var PictureInPicture2 = [
  ["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }],
  ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/picture-in-picture.mjs
var PictureInPicture = [
  ["path", { d: "M2 10h6V4" }],
  ["path", { d: "m2 4 6 6" }],
  ["path", { d: "M21 10V7a2 2 0 0 0-2-2h-7" }],
  ["path", { d: "M3 14v2a2 2 0 0 0 2 2h3" }],
  ["rect", { x: "12", y: "14", width: "10", height: "7", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/piggy-bank.mjs
var PiggyBank = [
  [
    "path",
    {
      d: "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"
    }
  ],
  ["path", { d: "M16 10h.01" }],
  ["path", { d: "M2 8v1a2 2 0 0 0 2 2h1" }]
];

// node_modules/lucide/dist/esm/icons/pilcrow-left.mjs
var PilcrowLeft = [
  ["path", { d: "M14 3v11" }],
  ["path", { d: "M14 9h-3a3 3 0 0 1 0-6h9" }],
  ["path", { d: "M18 3v11" }],
  ["path", { d: "M22 18H2l4-4" }],
  ["path", { d: "m6 22-4-4" }]
];

// node_modules/lucide/dist/esm/icons/pilcrow-right.mjs
var PilcrowRight = [
  ["path", { d: "M10 3v11" }],
  ["path", { d: "M10 9H7a1 1 0 0 1 0-6h8" }],
  ["path", { d: "M14 3v11" }],
  ["path", { d: "m18 14 4 4H2" }],
  ["path", { d: "m22 18-4 4" }]
];

// node_modules/lucide/dist/esm/icons/pilcrow.mjs
var Pilcrow = [
  ["path", { d: "M13 4v16" }],
  ["path", { d: "M17 4v16" }],
  ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }]
];

// node_modules/lucide/dist/esm/icons/pill-bottle.mjs
var PillBottle = [
  ["path", { d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }],
  ["path", { d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }],
  ["rect", { width: "16", height: "5", x: "4", y: "2", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/pill.mjs
var Pill = [
  ["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }],
  ["path", { d: "m8.5 8.5 7 7" }]
];

// node_modules/lucide/dist/esm/icons/pin-off.mjs
var PinOff = [
  ["path", { d: "M12 17v5" }],
  ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" }]
];

// node_modules/lucide/dist/esm/icons/pin.mjs
var Pin = [
  ["path", { d: "M12 17v5" }],
  [
    "path",
    {
      d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/pipette.mjs
var Pipette = [
  [
    "path",
    {
      d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"
    }
  ],
  ["path", { d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" }],
  ["path", { d: "m2 22 .414-.414" }]
];

// node_modules/lucide/dist/esm/icons/pizza.mjs
var Pizza = [
  ["path", { d: "m12 14-1 1" }],
  ["path", { d: "m13.75 18.25-1.25 1.42" }],
  ["path", { d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }],
  ["path", { d: "M18.8 9.3a1 1 0 0 0 2.1 7.7" }],
  [
    "path",
    {
      d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/plane-landing.mjs
var PlaneLanding = [
  ["path", { d: "M2 22h20" }],
  [
    "path",
    {
      d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/plane-takeoff.mjs
var PlaneTakeoff = [
  ["path", { d: "M2 22h20" }],
  [
    "path",
    {
      d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/plane.mjs
var Plane = [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/plant-pot.mjs
var PlantPot = [
  [
    "path",
    {
      d: "M14 8.536V6a4 4 0 014-4h1.5a.5.5 0 01.5.5V4a4 4 0 01-4 4 4 4 0 00-4 4 5 5 0 01-8-4 5 5 0 018 4c0 2 1 3 1 5"
    }
  ],
  ["path", { d: "m18 17-1.085 3.58A2 2 0 0115 22H9.002a2 2 0 01-1.913-1.418L6 17" }],
  ["path", { d: "M5 17h14" }]
];

// node_modules/lucide/dist/esm/icons/play-off.mjs
var PlayOff = [
  ["path", { d: "m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23" }],
  ["path", { d: "m16.042 16.042-8.034 4.686A2 2 0 0 1 5 19V5" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/play.mjs
var Play = [
  [
    "path",
    { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" }
  ]
];

// node_modules/lucide/dist/esm/icons/playing-card.mjs
var PlayingCard = [
  [
    "path",
    {
      d: "M12.832 8.445a1 1 0 00-1.589-.098l-2.075 3.098a1 1 0 000 1.11l2 3a1 1 0 001.664 0l2-3a1 1 0 000-1.11z"
    }
  ],
  ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/playing-cards-fan.mjs
var PlayingCardsFan = [
  [
    "path",
    {
      d: "M12.65 7.65a2 2 0 012.629-1.046l5.51 2.374a2 2 0 011.046 2.628l-3.957 9.184a2 2 0 01-2.628 1.046l-5.51-2.374a2 2 0 01-1.046-2.628z"
    }
  ],
  ["path", { d: "M18 7.777V4a2 2 0 00-2-2h-6a2 2 0 00-2 2v10a2 2 0 001.137 1.805" }],
  [
    "path",
    { d: "m8 4.389-4.364.809a2 2 0 00-1.602 2.33l1.822 9.833a2 2 0 002.331 1.602l2.542-.47" }
  ]
];

// node_modules/lucide/dist/esm/icons/playing-cards.mjs
var PlayingCards = [
  [
    "path",
    {
      d: "M14.832 8.445a1 1 0 00-1.589-.098l-2.075 3.098a1 1 0 000 1.11l2 3a1 1 0 001.664 0l2-3a1 1 0 000-1.11z"
    }
  ],
  ["path", { d: "m7.18 20.827-5-11a2 2 0 01.993-2.647L7 5.44" }],
  ["rect", { x: "7", y: "2", width: "14", height: "20", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/plug-2.mjs
var Plug2 = [
  ["path", { d: "M9 2v6" }],
  ["path", { d: "M15 2v6" }],
  ["path", { d: "M12 17v5" }],
  ["path", { d: "M5 8h14" }],
  ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z" }]
];

// node_modules/lucide/dist/esm/icons/plug.mjs
var Plug = [
  ["path", { d: "M12 22v-5" }],
  ["path", { d: "M15 8V2" }],
  ["path", { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" }],
  ["path", { d: "M9 8V2" }]
];

// node_modules/lucide/dist/esm/icons/plug-zap.mjs
var PlugZap = [
  ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }],
  ["path", { d: "m2 22 3-3" }],
  ["path", { d: "M7.5 13.5 10 11" }],
  ["path", { d: "M10.5 16.5 13 14" }],
  ["path", { d: "m18 3-4 4h6l-4 4" }]
];

// node_modules/lucide/dist/esm/icons/plus.mjs
var Plus = [
  ["path", { d: "M5 12h14" }],
  ["path", { d: "M12 5v14" }]
];

// node_modules/lucide/dist/esm/icons/pocket-knife.mjs
var PocketKnife = [
  ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }],
  ["path", { d: "M18 6h.01" }],
  ["path", { d: "M6 18h.01" }],
  ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }],
  ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" }]
];

// node_modules/lucide/dist/esm/icons/podium.mjs
var Podium = [
  ["path", { d: "M12 6V2h-1" }],
  [
    "path",
    {
      d: "M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1"
    }
  ],
  ["path", { d: "M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10" }]
];

// node_modules/lucide/dist/esm/icons/pointer-off.mjs
var PointerOff = [
  ["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957" }],
  ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295" }],
  ["path", { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" }],
  [
    "path",
    { d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" }
  ],
  ["path", { d: "M6 6v8" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/pointer.mjs
var Pointer = [
  ["path", { d: "M22 14a8 8 0 0 1-8 8" }],
  ["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
  ["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" }],
  ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" }],
  [
    "path",
    {
      d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/popcorn.mjs
var Popcorn = [
  ["path", { d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" }],
  ["path", { d: "M10 22 9 8" }],
  ["path", { d: "m14 22 1-14" }],
  [
    "path",
    {
      d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/popsicle.mjs
var Popsicle = [
  [
    "path",
    { d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" }
  ],
  ["path", { d: "m22 22-5.5-5.5" }]
];

// node_modules/lucide/dist/esm/icons/pound-sterling.mjs
var PoundSterling = [
  ["path", { d: "M18 7c0-5.333-8-5.333-8 0" }],
  ["path", { d: "M10 7v14" }],
  ["path", { d: "M6 21h12" }],
  ["path", { d: "M6 13h10" }]
];

// node_modules/lucide/dist/esm/icons/power-off.mjs
var PowerOff = [
  ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }],
  ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }],
  ["path", { d: "M12 2v4" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/power.mjs
var Power = [
  ["path", { d: "M12 2v10" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04" }]
];

// node_modules/lucide/dist/esm/icons/presentation.mjs
var Presentation = [
  ["path", { d: "M2 3h20" }],
  ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }],
  ["path", { d: "m7 21 5-5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/printer-check.mjs
var PrinterCheck = [
  ["path", { d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" }],
  ["path", { d: "m16 19 2 2 4-4" }],
  ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }]
];

// node_modules/lucide/dist/esm/icons/printer.mjs
var Printer = [
  ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/printer-x.mjs
var PrinterX = [
  ["path", { d: "M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377" }],
  ["path", { d: "m16.5 16.5 5 5" }],
  ["path", { d: "m16.5 21.5 5-5" }],
  ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5" }],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }]
];

// node_modules/lucide/dist/esm/icons/projector.mjs
var Projector = [
  ["path", { d: "M5 7 3 5" }],
  ["path", { d: "M9 6V3" }],
  ["path", { d: "m13 7 2-2" }],
  ["circle", { cx: "9", cy: "13", r: "3" }],
  [
    "path",
    { d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" }
  ],
  ["path", { d: "M16 16h2" }]
];

// node_modules/lucide/dist/esm/icons/proportions.mjs
var Proportions = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
  ["path", { d: "M12 9v11" }],
  ["path", { d: "M2 9h13a2 2 0 0 1 2 2v9" }]
];

// node_modules/lucide/dist/esm/icons/puzzle.mjs
var Puzzle = [
  [
    "path",
    {
      d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/qr-code.mjs
var QrCode = [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }],
  ["path", { d: "M21 21v.01" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }],
  ["path", { d: "M3 12h.01" }],
  ["path", { d: "M12 3h.01" }],
  ["path", { d: "M12 16v.01" }],
  ["path", { d: "M16 12h1" }],
  ["path", { d: "M21 12v.01" }],
  ["path", { d: "M12 21v-1" }]
];

// node_modules/lucide/dist/esm/icons/pyramid.mjs
var Pyramid = [
  [
    "path",
    {
      d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
    }
  ],
  ["path", { d: "M12 2v20" }]
];

// node_modules/lucide/dist/esm/icons/quote.mjs
var Quote = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/rabbit.mjs
var Rabbit = [
  ["path", { d: "M13 16a3 3 0 0 1 2.24 5" }],
  ["path", { d: "M18 12h.01" }],
  [
    "path",
    {
      d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"
    }
  ],
  ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3" }],
  ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3" }]
];

// node_modules/lucide/dist/esm/icons/radar.mjs
var Radar = [
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34" }],
  ["path", { d: "M4 6h.01" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67" }],
  ["path", { d: "M12 18h.01" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67" }],
  ["circle", { cx: "12", cy: "12", r: "2" }],
  ["path", { d: "m13.41 10.59 5.66-5.66" }]
];

// node_modules/lucide/dist/esm/icons/radiation.mjs
var Radiation = [
  ["path", { d: "M12 12h.01" }],
  [
    "path",
    {
      d: "M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z"
    }
  ],
  [
    "path",
    {
      d: "M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z"
    }
  ],
  [
    "path",
    {
      d: "M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/radical.mjs
var Radical = [
  [
    "path",
    {
      d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/radio-off.mjs
var RadioOff = [
  ["path", { d: "M13.414 13.414a2 2 0 1 1-2.828-2.828" }],
  ["path", { d: "M16.247 7.761a6 6 0 0 1 1.744 4.572" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 2.234 10.72" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478" }]
];

// node_modules/lucide/dist/esm/icons/radio-receiver.mjs
var RadioReceiver = [
  ["path", { d: "M5 16v2" }],
  ["path", { d: "M19 16v2" }],
  ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2" }],
  ["path", { d: "M18 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/radio-tower.mjs
var RadioTower = [
  ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }],
  ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }],
  ["circle", { cx: "12", cy: "9", r: "2" }],
  ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47" }],
  ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }],
  ["path", { d: "M9.5 18h5" }],
  ["path", { d: "m8 22 4-11 4 11" }]
];

// node_modules/lucide/dist/esm/icons/radio.mjs
var Radio = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478" }],
  ["circle", { cx: "12", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/radius.mjs
var Radius = [
  ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82" }],
  ["circle", { cx: "19", cy: "19", r: "2" }],
  ["path", { d: "m13.41 13.41 4.18 4.18" }],
  ["circle", { cx: "12", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/rainbow.mjs
var Rainbow = [
  ["path", { d: "M22 17a10 10 0 0 0-20 0" }],
  ["path", { d: "M6 17a6 6 0 0 1 12 0" }],
  ["path", { d: "M10 17a2 2 0 0 1 4 0" }]
];

// node_modules/lucide/dist/esm/icons/rat.mjs
var Rat = [
  ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12" }],
  ["path", { d: "M13.236 18a3 3 0 0 0-2.2-5" }],
  ["path", { d: "M16 9h.01" }],
  [
    "path",
    {
      d: "M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"
    }
  ],
  ["path", { d: "M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" }]
];

// node_modules/lucide/dist/esm/icons/ratio.mjs
var Ratio = [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/receipt-cent.mjs
var ReceiptCent = [
  ["path", { d: "M12 7v10" }],
  ["path", { d: "M14.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/receipt-indian-rupee.mjs
var ReceiptIndianRupee = [
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    }
  ],
  ["path", { d: "M8 11h8" }],
  ["path", { d: "M8 7h8" }],
  ["path", { d: "M9 7a4 4 0 0 1 0 8H8l3 2" }]
];

// node_modules/lucide/dist/esm/icons/receipt-euro.mjs
var ReceiptEuro = [
  ["path", { d: "M15.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    }
  ],
  ["path", { d: "M8 12h5" }]
];

// node_modules/lucide/dist/esm/icons/receipt-japanese-yen.mjs
var ReceiptJapaneseYen = [
  ["path", { d: "m12 10 3-3" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    }
  ],
  ["path", { d: "M9 11h6" }],
  ["path", { d: "M9 15h6" }],
  ["path", { d: "m9 7 3 3v7" }]
];

// node_modules/lucide/dist/esm/icons/receipt-pound-sterling.mjs
var ReceiptPoundSterling = [
  ["path", { d: "M10 17V9.5a1 1 0 0 1 5 0" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    }
  ],
  ["path", { d: "M8 13h5" }],
  ["path", { d: "M8 17h7" }]
];

// node_modules/lucide/dist/esm/icons/receipt-russian-ruble.mjs
var ReceiptRussianRuble = [
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    }
  ],
  ["path", { d: "M8 11h5a2 2 0 0 0 0-4h-3v10" }],
  ["path", { d: "M8 15h5" }]
];

// node_modules/lucide/dist/esm/icons/receipt-swiss-franc.mjs
var ReceiptSwissFranc = [
  ["path", { d: "M10 11h4" }],
  ["path", { d: "M10 17V7h5" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    }
  ],
  ["path", { d: "M8 15h5" }]
];

// node_modules/lucide/dist/esm/icons/receipt-text.mjs
var ReceiptText = [
  ["path", { d: "M13 16H8" }],
  ["path", { d: "M14 8H8" }],
  ["path", { d: "M16 12H8" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/receipt-turkish-lira.mjs
var ReceiptTurkishLira = [
  ["path", { d: "M10 7v10a5 5 0 0 0 5-5" }],
  ["path", { d: "m14 8-6 3" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/receipt.mjs
var Receipt = [
  ["path", { d: "M12 17V7" }],
  ["path", { d: "M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" }],
  [
    "path",
    {
      d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/rectangle-circle.mjs
var RectangleCircle = [
  ["path", { d: "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" }],
  ["circle", { cx: "14", cy: "12", r: "8" }]
];

// node_modules/lucide/dist/esm/icons/rectangle-ellipsis.mjs
var RectangleEllipsis = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }],
  ["path", { d: "M12 12h.01" }],
  ["path", { d: "M17 12h.01" }],
  ["path", { d: "M7 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/rectangle-horizontal.mjs
var RectangleHorizontal = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/rectangle-goggles.mjs
var RectangleGoggles = [
  [
    "path",
    {
      d: "M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/rectangle-vertical.mjs
var RectangleVertical = [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/recycle.mjs
var Recycle = [
  ["path", { d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" }],
  ["path", { d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" }],
  ["path", { d: "m14 16-3 3 3 3" }],
  ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598" }],
  [
    "path",
    {
      d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
    }
  ],
  ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096" }]
];

// node_modules/lucide/dist/esm/icons/redo-2.mjs
var Redo2 = [
  ["path", { d: "m15 14 5-5-5-5" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" }]
];

// node_modules/lucide/dist/esm/icons/redo-dot.mjs
var RedoDot = [
  ["circle", { cx: "12", cy: "17", r: "1" }],
  ["path", { d: "M21 7v6h-6" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
];

// node_modules/lucide/dist/esm/icons/redo.mjs
var Redo = [
  ["path", { d: "M21 7v6h-6" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
];

// node_modules/lucide/dist/esm/icons/refresh-ccw-dot.mjs
var RefreshCcwDot = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
  ["path", { d: "M3 3v5h5" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }],
  ["path", { d: "M16 16h5v5" }],
  ["circle", { cx: "12", cy: "12", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/refresh-ccw.mjs
var RefreshCcw = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
  ["path", { d: "M3 3v5h5" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }],
  ["path", { d: "M16 16h5v5" }]
];

// node_modules/lucide/dist/esm/icons/refresh-cw-off.mjs
var RefreshCwOff = [
  ["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" }],
  ["path", { d: "M8 16H3v5" }],
  ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64" }],
  ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" }],
  ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87" }],
  ["path", { d: "M21 3v5h-5" }],
  ["path", { d: "M22 22 2 2" }]
];

// node_modules/lucide/dist/esm/icons/refresh-cw.mjs
var RefreshCw = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }],
  ["path", { d: "M21 3v5h-5" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }],
  ["path", { d: "M8 16H3v5" }]
];

// node_modules/lucide/dist/esm/icons/refrigerator.mjs
var Refrigerator = [
  ["path", { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" }],
  ["path", { d: "M5 10h14" }],
  ["path", { d: "M15 7v6" }]
];

// node_modules/lucide/dist/esm/icons/regex.mjs
var Regex = [
  ["path", { d: "M17 3v10" }],
  ["path", { d: "m12.67 5.5 8.66 5" }],
  ["path", { d: "m12.67 10.5 8.66-5" }],
  ["path", { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" }]
];

// node_modules/lucide/dist/esm/icons/remove-formatting.mjs
var RemoveFormatting = [
  ["path", { d: "M4 7V4h16v3" }],
  ["path", { d: "M5 20h6" }],
  ["path", { d: "M13 4 8 20" }],
  ["path", { d: "m15 15 5 5" }],
  ["path", { d: "m20 15-5 5" }]
];

// node_modules/lucide/dist/esm/icons/repeat-1.mjs
var Repeat1 = [
  ["path", { d: "m17 2 4 4-4 4" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }],
  ["path", { d: "m7 22-4-4 4-4" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }],
  ["path", { d: "M11 10h1v4" }]
];

// node_modules/lucide/dist/esm/icons/repeat-2.mjs
var Repeat2 = [
  ["path", { d: "m2 9 3-3 3 3" }],
  ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6" }],
  ["path", { d: "m22 15-3 3-3-3" }],
  ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10" }]
];

// node_modules/lucide/dist/esm/icons/repeat.mjs
var Repeat = [
  ["path", { d: "m17 2 4 4-4 4" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }],
  ["path", { d: "m7 22-4-4 4-4" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }]
];

// node_modules/lucide/dist/esm/icons/repeat-off.mjs
var RepeatOff = [
  ["path", { d: "M11.656 6H21l-4-4" }],
  ["path", { d: "M17.898 17.898A4 4 0 0 1 17 18H3l4-4" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-.171 1.159" }],
  ["path", { d: "m21 6-4 4" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 3.102-3.898" }],
  ["path", { d: "m7 22-4-4" }]
];

// node_modules/lucide/dist/esm/icons/replace-all.mjs
var ReplaceAll = [
  ["path", { d: "M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }],
  ["path", { d: "M14 4a1 1 0 0 1 1-1" }],
  ["path", { d: "M15 10a1 1 0 0 1-1-1" }],
  ["path", { d: "M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }],
  ["path", { d: "M21 4a1 1 0 0 0-1-1" }],
  ["path", { d: "M21 9a1 1 0 0 1-1 1" }],
  ["path", { d: "m3 7 3 3 3-3" }],
  ["path", { d: "M6 10V5a2 2 0 0 1 2-2h2" }],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/replace.mjs
var Replace = [
  ["path", { d: "M14 4a1 1 0 0 1 1-1" }],
  ["path", { d: "M15 10a1 1 0 0 1-1-1" }],
  ["path", { d: "M21 4a1 1 0 0 0-1-1" }],
  ["path", { d: "M21 9a1 1 0 0 1-1 1" }],
  ["path", { d: "m3 7 3 3 3-3" }],
  ["path", { d: "M6 10V5a2 2 0 0 1 2-2h2" }],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/reply-all.mjs
var ReplyAll = [
  ["path", { d: "m12 17-5-5 5-5" }],
  ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7" }],
  ["path", { d: "m7 17-5-5 5-5" }]
];

// node_modules/lucide/dist/esm/icons/reply.mjs
var Reply = [
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" }],
  ["path", { d: "m9 17-5-5 5-5" }]
];

// node_modules/lucide/dist/esm/icons/rewind.mjs
var Rewind = [
  ["path", { d: "M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" }],
  ["path", { d: "M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" }]
];

// node_modules/lucide/dist/esm/icons/ribbon.mjs
var Ribbon = [
  ["path", { d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" }],
  ["path", { d: "m12 18 2.57-3.5" }],
  ["path", { d: "M6.243 9.016a7 7 0 0 1 11.507-.009" }],
  ["path", { d: "M9.35 14.53 12 11.22" }],
  [
    "path",
    {
      d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/road.mjs
var Road = [
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M12 5V3" }],
  ["path", { d: "M12 9v3" }],
  [
    "path",
    {
      d: "M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/robot-arm.mjs
var RobotArm = [
  ["path", { d: "M12 21 7.5 8.322" }],
  ["path", { d: "m14 7 1.75-3.767a.5.5 0 0 1 .662-.172L20 5.005" }],
  ["path", { d: "m20 8.998-3.588 1.944a.5.5 0 0 1-.662-.172L14 7H8" }],
  ["path", { d: "M3.486 21h10" }],
  ["path", { d: "M5 21V8.732" }],
  ["circle", { cx: "6", cy: "7", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/robot-vacuum.mjs
var RobotVacuum = [
  ["path", { d: "M11 17h2" }],
  ["path", { d: "M12 12h.01" }],
  ["path", { d: "M17 12a5 5 0 00-10 0" }],
  ["path", { d: "M19 2v2.8" }],
  ["path", { d: "M2 5h2.8" }],
  ["path", { d: "M22 5h-2.8" }],
  ["path", { d: "M5 2v2.8" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/rocket.mjs
var Rocket = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" }]
];

// node_modules/lucide/dist/esm/icons/rocking-chair.mjs
var RockingChair = [
  ["path", { d: "m15 13 3.708 7.416" }],
  ["path", { d: "M3 19a15 15 0 0 0 18 0" }],
  ["path", { d: "m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" }],
  ["path", { d: "m9 13-3.708 7.416" }]
];

// node_modules/lucide/dist/esm/icons/roller-coaster.mjs
var RollerCoaster = [
  ["path", { d: "M6 19V5" }],
  ["path", { d: "M10 19V6.8" }],
  ["path", { d: "M14 19v-7.8" }],
  ["path", { d: "M18 5v4" }],
  ["path", { d: "M18 19v-6" }],
  ["path", { d: "M22 19V9" }],
  ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" }]
];

// node_modules/lucide/dist/esm/icons/rose.mjs
var Rose = [
  ["path", { d: "M17 10h-1a4 4 0 1 1 4-4v.534" }],
  ["path", { d: "M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" }],
  [
    "path",
    { d: "M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" }
  ],
  ["path", { d: "M9.77 12C4 15 2 22 2 22" }],
  ["circle", { cx: "17", cy: "8", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/rotate-3d.mjs
var Rotate3d = [
  ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814" }],
  ["path", { d: "M16.47214 7.52786 A 5 10 0 1 0 13 21.79796" }],
  ["path", { d: "M21.79796 11 A 10 5 0 1 0 19 15.57071" }]
];

// node_modules/lucide/dist/esm/icons/rotate-ccw-clock.mjs
var RotateCcwClock = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
  ["path", { d: "M3 3v5h5" }],
  ["path", { d: "M12 7v5l4 2" }]
];

// node_modules/lucide/dist/esm/icons/rotate-ccw-square.mjs
var RotateCcwSquare = [
  ["path", { d: "M20 9V7a2 2 0 0 0-2-2h-6" }],
  ["path", { d: "m15 2-3 3 3 3" }],
  ["path", { d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" }]
];

// node_modules/lucide/dist/esm/icons/rotate-ccw-key.mjs
var RotateCcwKey = [
  ["path", { d: "M12 7v6" }],
  ["path", { d: "M12 9h2" }],
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" }],
  ["path", { d: "M3 3v5h5" }],
  ["circle", { cx: "12", cy: "15", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/rotate-ccw.mjs
var RotateCcw = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
  ["path", { d: "M3 3v5h5" }]
];

// node_modules/lucide/dist/esm/icons/rotate-cw-clock.mjs
var RotateCwClock = [
  ["path", { d: "M12 7v5l4 2" }],
  ["path", { d: "M16 8h5V3" }],
  ["path", { d: "m21 8-2.3-2.3A9.7 9.7 0 0012 3a9 9 0 109 9" }]
];

// node_modules/lucide/dist/esm/icons/rotate-cw-square.mjs
var RotateCwSquare = [
  ["path", { d: "M12 5H6a2 2 0 0 0-2 2v3" }],
  ["path", { d: "m9 8 3-3-3-3" }],
  ["path", { d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }]
];

// node_modules/lucide/dist/esm/icons/rotate-cw-fading-clock.mjs
var RotateCwFadingClock = [
  ["path", { d: "M12 3a9.75 9.75 0 0 1 6.74 2.74" }],
  ["path", { d: "M18.74 5.74 21 8" }],
  ["path", { d: "M21 8V3" }],
  ["path", { d: "M7.5 19.794c-6-3.464-6-12.124 0-15.588" }],
  ["path", { d: "M7.5 4.206A9 9 0 0 1 12 3" }],
  ["path", { d: "M12 7v5l4 2" }],
  ["path", { d: "M14 20.775A9 9 0 0 1 12 21" }],
  ["path", { d: "M19 17.656a9 9 0 0 1-1.5 1.456" }],
  ["path", { d: "M21 12a9 9 0 0 1-.228 2" }],
  ["path", { d: "M21 8h-5" }]
];

// node_modules/lucide/dist/esm/icons/rotate-cw.mjs
var RotateCw = [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }],
  ["path", { d: "M21 3v5h-5" }]
];

// node_modules/lucide/dist/esm/icons/route-off.mjs
var RouteOff = [
  ["circle", { cx: "6", cy: "19", r: "3" }],
  ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2" }],
  ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }],
  ["path", { d: "M15 5h-4.3" }],
  ["circle", { cx: "18", cy: "5", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/route.mjs
var Route = [
  ["circle", { cx: "6", cy: "19", r: "3" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }],
  ["circle", { cx: "18", cy: "5", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/router.mjs
var Router = [
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
  ["path", { d: "M6.01 18H6" }],
  ["path", { d: "M10.01 18H10" }],
  ["path", { d: "M15 10v4" }],
  ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0" }],
  ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0" }]
];

// node_modules/lucide/dist/esm/icons/rows-2.mjs
var Rows2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 12h18" }]
];

// node_modules/lucide/dist/esm/icons/rows-3.mjs
var Rows3 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M21 9H3" }],
  ["path", { d: "M21 15H3" }]
];

// node_modules/lucide/dist/esm/icons/rows-4.mjs
var Rows4 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M21 7.5H3" }],
  ["path", { d: "M21 12H3" }],
  ["path", { d: "M21 16.5H3" }]
];

// node_modules/lucide/dist/esm/icons/rss.mjs
var Rss = [
  ["path", { d: "M4 11a9 9 0 0 1 9 9" }],
  ["path", { d: "M4 4a16 16 0 0 1 16 16" }],
  ["circle", { cx: "5", cy: "19", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/ruler-dimension-line.mjs
var RulerDimensionLine = [
  ["path", { d: "M10 15v-3" }],
  ["path", { d: "M14 15v-3" }],
  ["path", { d: "M18 15v-3" }],
  ["path", { d: "M2 8V4" }],
  ["path", { d: "M22 6H2" }],
  ["path", { d: "M22 8V4" }],
  ["path", { d: "M6 15v-3" }],
  ["rect", { x: "2", y: "12", width: "20", height: "8", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/ruler.mjs
var Ruler = [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2" }],
  ["path", { d: "m11.5 9.5 2-2" }],
  ["path", { d: "m8.5 6.5 2-2" }],
  ["path", { d: "m17.5 15.5 2-2" }]
];

// node_modules/lucide/dist/esm/icons/sailboat.mjs
var Sailboat = [
  ["path", { d: "M10 2v15" }],
  ["path", { d: "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" }],
  [
    "path",
    { d: "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" }
  ]
];

// node_modules/lucide/dist/esm/icons/russian-ruble.mjs
var RussianRuble = [
  ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18" }],
  ["path", { d: "M6 15h8" }]
];

// node_modules/lucide/dist/esm/icons/salad.mjs
var Salad = [
  ["path", { d: "M7 21h10" }],
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }],
  [
    "path",
    {
      d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
    }
  ],
  ["path", { d: "m13 12 4-4" }],
  ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" }]
];

// node_modules/lucide/dist/esm/icons/sandwich.mjs
var Sandwich = [
  ["path", { d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }],
  ["path", { d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }],
  ["path", { d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }],
  ["path", { d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }],
  ["rect", { width: "20", height: "4", x: "2", y: "11", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/satellite.mjs
var Satellite = [
  [
    "path",
    {
      d: "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"
    }
  ],
  ["path", { d: "M16.5 7.5 19 5" }],
  [
    "path",
    {
      d: "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"
    }
  ],
  ["path", { d: "M9 21a6 6 0 0 0-6-6" }],
  [
    "path",
    {
      d: "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/satellite-dish.mjs
var SatelliteDish = [
  ["path", { d: "M18 12a6 6 0 00-6-6" }],
  [
    "path",
    {
      d: "M2.824 10.459a8 8 0 0010.717 10.717c.558-.276.623-1.012.183-1.452l-9.448-9.448c-.44-.44-1.176-.375-1.452.183"
    }
  ],
  ["path", { d: "M22 12A10 10 0 0012 2" }],
  ["path", { d: "m9 15 4-4" }]
];

// node_modules/lucide/dist/esm/icons/saudi-riyal.mjs
var SaudiRiyal = [
  ["path", { d: "m20 19.5-5.5 1.2" }],
  ["path", { d: "M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" }],
  ["path", { d: "m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" }],
  ["path", { d: "M20 10 4 13.5" }]
];

// node_modules/lucide/dist/esm/icons/save-all.mjs
var SaveAll = [
  ["path", { d: "M10 2v3a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }],
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }],
  [
    "path",
    {
      d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/save-off.mjs
var SaveOff = [
  ["path", { d: "M13 13H8a1 1 0 0 0-1 1v7" }],
  ["path", { d: "M14 8h1" }],
  ["path", { d: "M17 21v-4" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" }],
  ["path", { d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" }]
];

// node_modules/lucide/dist/esm/icons/save-check.mjs
var SaveCheck = [
  [
    "path",
    {
      d: "M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35"
    }
  ],
  ["path", { d: "m16 19 2 2 4-4" }],
  ["path", { d: "M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]
];

// node_modules/lucide/dist/esm/icons/save-pen.mjs
var SavePen = [
  ["path", { d: "M13.33 13H8a1 1 0 00-1 1v7" }],
  [
    "path",
    {
      d: "M14.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l4.013-4.009a1 1 0 10-3.004-3.004z"
    }
  ],
  ["path", { d: "M7 3v4a1 1 0 001 1h7" }],
  [
    "path",
    { d: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h10.2a2 2 0 011.4.6l3.8 3.8a2 2 0 01.6 1.4v.3" }
  ]
];

// node_modules/lucide/dist/esm/icons/save.mjs
var Save = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]
];

// node_modules/lucide/dist/esm/icons/save-plus.mjs
var SavePlus = [
  [
    "path",
    {
      d: "M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V12"
    }
  ],
  ["path", { d: "M16 13H8a1 1 0 0 0-1 1v7" }],
  ["path", { d: "M19 22v-6" }],
  ["path", { d: "M22 19h-6" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]
];

// node_modules/lucide/dist/esm/icons/scale-3d.mjs
var Scale3d = [
  ["path", { d: "M5 7v11a1 1 0 0 0 1 1h11" }],
  ["path", { d: "M5.293 18.707 11 13" }],
  ["circle", { cx: "19", cy: "19", r: "2" }],
  ["circle", { cx: "5", cy: "5", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/scale.mjs
var Scale = [
  ["path", { d: "M12 3v18" }],
  ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7" }],
  ["path", { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" }],
  ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7" }],
  ["path", { d: "M7 21h10" }]
];

// node_modules/lucide/dist/esm/icons/scaling.mjs
var Scaling = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }],
  ["path", { d: "M14 15H9v-5" }],
  ["path", { d: "M16 3h5v5" }],
  ["path", { d: "M21 3 9 15" }]
];

// node_modules/lucide/dist/esm/icons/scan-barcode.mjs
var ScanBarcode = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
  ["path", { d: "M8 7v10" }],
  ["path", { d: "M12 7v10" }],
  ["path", { d: "M17 7v10" }]
];

// node_modules/lucide/dist/esm/icons/scan-box.mjs
var ScanBox = [
  ["path", { d: "M12 12v5.5" }],
  ["path", { d: "M17 3h2a2 2 0 012 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 01-2 2h-2" }],
  ["path", { d: "M3 7V5a2 2 0 012-2h2" }],
  ["path", { d: "M7 21H5a2 2 0 01-2-2v-2" }],
  ["path", { d: "M7.264 9.252 12 12l4.737-2.748" }],
  [
    "path",
    {
      d: "M7.995 8.514A2 2 0 007 10.244v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0017 13.76v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/scan-eye.mjs
var ScanEye = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
  ["circle", { cx: "12", cy: "12", r: "1" }],
  [
    "path",
    {
      d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/scan-face.mjs
var ScanFace = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
  ["path", { d: "M9 9h.01" }],
  ["path", { d: "M15 9h.01" }]
];

// node_modules/lucide/dist/esm/icons/scan-heart.mjs
var ScanHeart = [
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
  [
    "path",
    { d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z" }
  ]
];

// node_modules/lucide/dist/esm/icons/scan-line.mjs
var ScanLine = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
  ["path", { d: "M7 12h10" }]
];

// node_modules/lucide/dist/esm/icons/scan-search.mjs
var ScanSearch = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
  ["circle", { cx: "12", cy: "12", r: "3" }],
  ["path", { d: "m16 16-1.9-1.9" }]
];

// node_modules/lucide/dist/esm/icons/scan-qr-code.mjs
var ScanQrCode = [
  ["path", { d: "M17 12v4a1 1 0 0 1-1 1h-4" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M17 8V7" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M7 17h.01" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
  ["rect", { x: "7", y: "7", width: "5", height: "5", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/scan-square.mjs
var ScanSquare = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
  ["rect", { width: "8", height: "8", x: "8", y: "8", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/scan-text.mjs
var ScanText = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
  ["path", { d: "M7 8h8" }],
  ["path", { d: "M7 12h10" }],
  ["path", { d: "M7 16h6" }]
];

// node_modules/lucide/dist/esm/icons/school.mjs
var School = [
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }],
  ["path", { d: "M18 4.933V21" }],
  ["path", { d: "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" }],
  [
    "path",
    {
      d: "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"
    }
  ],
  ["path", { d: "M6 4.933V21" }],
  ["circle", { cx: "12", cy: "9", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/scan.mjs
var Scan = [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
];

// node_modules/lucide/dist/esm/icons/scissors-line-dashed.mjs
var ScissorsLineDashed = [
  ["path", { d: "M5.42 9.42 8 12" }],
  ["circle", { cx: "4", cy: "8", r: "2" }],
  ["path", { d: "m14 6-8.58 8.58" }],
  ["circle", { cx: "4", cy: "16", r: "2" }],
  ["path", { d: "M10.8 14.8 14 18" }],
  ["path", { d: "M16 12h-2" }],
  ["path", { d: "M22 12h-2" }]
];

// node_modules/lucide/dist/esm/icons/scissors.mjs
var Scissors = [
  ["circle", { cx: "6", cy: "6", r: "3" }],
  ["path", { d: "M8.12 8.12 12 12" }],
  ["path", { d: "M20 4 8.12 15.88" }],
  ["circle", { cx: "6", cy: "18", r: "3" }],
  ["path", { d: "M14.8 14.8 20 20" }]
];

// node_modules/lucide/dist/esm/icons/scooter.mjs
var Scooter = [
  ["path", { d: "M21 4h-3.5l2 11.05" }],
  ["path", { d: "M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" }],
  ["circle", { cx: "19.5", cy: "17.5", r: "2.5" }],
  ["circle", { cx: "4.5", cy: "17.5", r: "2.5" }]
];

// node_modules/lucide/dist/esm/icons/screen-share-off.mjs
var ScreenShareOff = [
  ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }],
  ["path", { d: "M8 21h8" }],
  ["path", { d: "M12 17v4" }],
  ["path", { d: "m22 3-5 5" }],
  ["path", { d: "m17 3 5 5" }]
];

// node_modules/lucide/dist/esm/icons/screen-share.mjs
var ScreenShare = [
  ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }],
  ["path", { d: "M8 21h8" }],
  ["path", { d: "M12 17v4" }],
  ["path", { d: "m17 8 5-5" }],
  ["path", { d: "M17 3h5v5" }]
];

// node_modules/lucide/dist/esm/icons/scroll-text.mjs
var ScrollText = [
  ["path", { d: "M15 12h-5" }],
  ["path", { d: "M15 8h-5" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/search-alert.mjs
var SearchAlert = [
  ["circle", { cx: "11", cy: "11", r: "8" }],
  ["path", { d: "m21 21-4.3-4.3" }],
  ["path", { d: "M11 7v4" }],
  ["path", { d: "M11 15h.01" }]
];

// node_modules/lucide/dist/esm/icons/scroll.mjs
var Scroll = [
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/search-check.mjs
var SearchCheck = [
  ["path", { d: "m8 11 2 2 4-4" }],
  ["circle", { cx: "11", cy: "11", r: "8" }],
  ["path", { d: "m21 21-4.3-4.3" }]
];

// node_modules/lucide/dist/esm/icons/search-code.mjs
var SearchCode = [
  ["path", { d: "m13 13.5 2-2.5-2-2.5" }],
  ["path", { d: "m21 21-4.3-4.3" }],
  ["path", { d: "M9 8.5 7 11l2 2.5" }],
  ["circle", { cx: "11", cy: "11", r: "8" }]
];

// node_modules/lucide/dist/esm/icons/search-slash.mjs
var SearchSlash = [
  ["path", { d: "m13.5 8.5-5 5" }],
  ["circle", { cx: "11", cy: "11", r: "8" }],
  ["path", { d: "m21 21-4.3-4.3" }]
];

// node_modules/lucide/dist/esm/icons/search-x.mjs
var SearchX = [
  ["path", { d: "m13.5 8.5-5 5" }],
  ["path", { d: "m8.5 8.5 5 5" }],
  ["circle", { cx: "11", cy: "11", r: "8" }],
  ["path", { d: "m21 21-4.3-4.3" }]
];

// node_modules/lucide/dist/esm/icons/search.mjs
var Search = [
  ["path", { d: "m21 21-4.34-4.34" }],
  ["circle", { cx: "11", cy: "11", r: "8" }]
];

// node_modules/lucide/dist/esm/icons/section.mjs
var Section = [
  ["path", { d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" }],
  ["path", { d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" }]
];

// node_modules/lucide/dist/esm/icons/send-to-back.mjs
var SendToBack = [
  ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }],
  ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }],
  ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1" }],
  ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1" }]
];

// node_modules/lucide/dist/esm/icons/send-horizontal.mjs
var SendHorizontal = [
  [
    "path",
    {
      d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
    }
  ],
  ["path", { d: "M6 12h16" }]
];

// node_modules/lucide/dist/esm/icons/send.mjs
var Send = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939" }]
];

// node_modules/lucide/dist/esm/icons/separator-vertical.mjs
var SeparatorVertical = [
  ["path", { d: "M12 3v18" }],
  ["path", { d: "m16 16 4-4-4-4" }],
  ["path", { d: "m8 8-4 4 4 4" }]
];

// node_modules/lucide/dist/esm/icons/separator-horizontal.mjs
var SeparatorHorizontal = [
  ["path", { d: "m16 16-4 4-4-4" }],
  ["path", { d: "M3 12h18" }],
  ["path", { d: "m8 8 4-4 4 4" }]
];

// node_modules/lucide/dist/esm/icons/server-cog.mjs
var ServerCog = [
  ["path", { d: "m10.852 14.772-.383.923" }],
  ["path", { d: "M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" }],
  ["path", { d: "m13.148 9.228.383-.923" }],
  ["path", { d: "m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" }],
  ["path", { d: "m14.772 10.852.923-.383" }],
  ["path", { d: "m14.772 13.148.923.383" }],
  ["path", { d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" }],
  ["path", { d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" }],
  ["path", { d: "M6 18h.01" }],
  ["path", { d: "M6 6h.01" }],
  ["path", { d: "m9.228 10.852-.923-.383" }],
  ["path", { d: "m9.228 13.148-.923.383" }]
];

// node_modules/lucide/dist/esm/icons/server-crash.mjs
var ServerCrash = [
  ["path", { d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" }],
  ["path", { d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" }],
  ["path", { d: "M6 6h.01" }],
  ["path", { d: "M6 18h.01" }],
  ["path", { d: "m13 6-4 6h6l-4 6" }]
];

// node_modules/lucide/dist/esm/icons/server-off.mjs
var ServerOff = [
  ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }],
  ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }],
  ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1" }],
  ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }],
  ["path", { d: "M6 18h.01" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/server-plus.mjs
var ServerPlus = [
  ["path", { d: "M12.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }],
  ["path", { d: "M16 12h6" }],
  ["path", { d: "M19 9v6" }],
  ["path", { d: "M22 18v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8.5" }],
  ["path", { d: "M6 18h.01" }],
  ["path", { d: "M6 6h.01" }]
];

// node_modules/lucide/dist/esm/icons/server.mjs
var Server = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }]
];

// node_modules/lucide/dist/esm/icons/settings-2.mjs
var Settings2 = [
  ["path", { d: "M14 17H5" }],
  ["path", { d: "M19 7h-9" }],
  ["circle", { cx: "17", cy: "17", r: "3" }],
  ["circle", { cx: "7", cy: "7", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/settings.mjs
var Settings = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/shapes.mjs
var Shapes = [
  [
    "path",
    {
      d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
    }
  ],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }]
];

// node_modules/lucide/dist/esm/icons/share-2.mjs
var Share2 = [
  ["circle", { cx: "18", cy: "5", r: "3" }],
  ["circle", { cx: "6", cy: "12", r: "3" }],
  ["circle", { cx: "18", cy: "19", r: "3" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }]
];

// node_modules/lucide/dist/esm/icons/sheet.mjs
var Sheet = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }],
  ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }],
  ["line", { x1: "9", x2: "9", y1: "9", y2: "21" }],
  ["line", { x1: "15", x2: "15", y1: "9", y2: "21" }]
];

// node_modules/lucide/dist/esm/icons/share.mjs
var Share = [
  ["path", { d: "M12 2v13" }],
  ["path", { d: "m16 6-4-4-4 4" }],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }]
];

// node_modules/lucide/dist/esm/icons/shell.mjs
var Shell = [
  [
    "path",
    {
      d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/shelving-unit.mjs
var ShelvingUnit = [
  ["path", { d: "M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }],
  ["path", { d: "M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }],
  ["path", { d: "M20 22V2" }],
  ["path", { d: "M4 12h16" }],
  ["path", { d: "M4 20h16" }],
  ["path", { d: "M4 2v20" }],
  ["path", { d: "M4 4h16" }]
];

// node_modules/lucide/dist/esm/icons/shield-alert.mjs
var ShieldAlert = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "M12 8v4" }],
  ["path", { d: "M12 16h.01" }]
];

// node_modules/lucide/dist/esm/icons/shield-ban.mjs
var ShieldBan = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "m4.243 5.21 14.39 12.472" }]
];

// node_modules/lucide/dist/esm/icons/shield-check.mjs
var ShieldCheck = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/shield-cog-corner.mjs
var ShieldCogCorner = [
  [
    "path",
    {
      d: "M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4"
    }
  ],
  ["path", { d: "M14.923 16.547 14 16.164" }],
  ["path", { d: "m14.923 18.843-.923.383" }],
  ["path", { d: "M16.547 14.923 16.164 14" }],
  ["path", { d: "m16.547 20.467-.383.924" }],
  ["path", { d: "m18.843 14.923.383-.923" }],
  ["path", { d: "m19.225 21.391-.382-.924" }],
  ["path", { d: "m20.467 16.547.923-.383" }],
  ["path", { d: "m20.467 18.843.923.383" }],
  ["circle", { cx: "17.695", cy: "17.695", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/shield-cog.mjs
var ShieldCog = [
  ["path", { d: "m10.929 14.467-.383.924" }],
  ["path", { d: "M10.929 8.923 10.546 8" }],
  ["path", { d: "M13.225 8.923 13.608 8" }],
  ["path", { d: "m13.607 15.391-.382-.924" }],
  ["path", { d: "m14.849 10.547.923-.383" }],
  ["path", { d: "m14.849 12.843.923.383" }],
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "m9.305 10.547-.923-.383" }],
  ["path", { d: "m9.305 12.843-.923.383" }],
  ["circle", { cx: "12.077", cy: "11.695", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/shield-ellipsis.mjs
var ShieldEllipsis = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "M8 12h.01" }],
  ["path", { d: "M12 12h.01" }],
  ["path", { d: "M16 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/shield-half.mjs
var ShieldHalf = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "M12 22V2" }]
];

// node_modules/lucide/dist/esm/icons/shield-keyhole.mjs
var ShieldKeyhole = [
  ["path", { d: "M12 13v3" }],
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z"
    }
  ],
  ["circle", { cx: "12", cy: "11", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/shield-lock.mjs
var ShieldLock = [
  [
    "path",
    {
      d: "M20 9.807V6a1 1 0 00-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 00-1.52 0C9.5 3.8 7 5 5 5a1 1 0 00-1 1v7c0 3.88 2.107 6.254 5 7.796"
    }
  ],
  ["path", { d: "M19 17v-2a2 2 0 00-4 0v2" }],
  ["rect", { x: "13", y: "17", width: "8", height: "5", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/shield-minus.mjs
var ShieldMinus = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "M9 12h6" }]
];

// node_modules/lucide/dist/esm/icons/shield-plus.mjs
var ShieldPlus = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "M9 12h6" }],
  ["path", { d: "M12 9v6" }]
];

// node_modules/lucide/dist/esm/icons/shield-question-mark.mjs
var ShieldQuestionMark = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }],
  ["path", { d: "M12 17h.01" }]
];

// node_modules/lucide/dist/esm/icons/shield-off.mjs
var ShieldOff = [
  ["path", { d: "m2 2 20 20" }],
  [
    "path",
    {
      d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
    }
  ],
  [
    "path",
    {
      d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/shield-user.mjs
var ShieldUser = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "M6.376 18.91a6 6 0 0 1 11.249.003" }],
  ["circle", { cx: "12", cy: "11", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/shield-x.mjs
var ShieldX = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ],
  ["path", { d: "m14.5 9.5-5 5" }],
  ["path", { d: "m9.5 9.5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/shield.mjs
var Shield = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/ship-cargo.mjs
var ShipCargo = [
  ["path", { d: "M12 15v-3" }],
  ["path", { d: "M12 2v2" }],
  [
    "path",
    {
      d: "M16.5 12V9a1 1 0 011-1h1a1 1 0 001-1V5a1 1 0 00-1-1h-13a1 1 0 00-1 1v2a1 1 0 001 1h1a1 1 0 011 1v3"
    }
  ],
  [
    "path",
    {
      d: "M19.38 19c1.076-1.815 1.636-4.89 1.628-6.008a1 1 0 00-1-.992H3.984a1 1 0 00-1 .984c-.03 1.86.97 5.621 2.826 7.776"
    }
  ],
  [
    "path",
    {
      d: "M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/ship-wheel.mjs
var ShipWheel = [
  ["circle", { cx: "12", cy: "12", r: "8" }],
  ["path", { d: "M12 2v7.5" }],
  ["path", { d: "m19 5-5.23 5.23" }],
  ["path", { d: "M22 12h-7.5" }],
  ["path", { d: "m19 19-5.23-5.23" }],
  ["path", { d: "M12 14.5V22" }],
  ["path", { d: "M10.23 13.77 5 19" }],
  ["path", { d: "M9.5 12H2" }],
  ["path", { d: "M10.23 10.23 5 5" }],
  ["circle", { cx: "12", cy: "12", r: "2.5" }]
];

// node_modules/lucide/dist/esm/icons/ship.mjs
var Ship = [
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 9.189V13" }],
  ["path", { d: "M19 12V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6" }],
  [
    "path",
    {
      d: "M19.38 19A11.6 11.6 0 0021 13l-8.188-3.639a2 2 0 00-1.624 0L3 13.001a11.6 11.6 0 002.81 7.76"
    }
  ],
  [
    "path",
    {
      d: "M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/shirt.mjs
var Shirt = [
  [
    "path",
    {
      d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/shopping-bag.mjs
var ShoppingBag = [
  ["path", { d: "M16 10a4 4 0 0 1-8 0" }],
  ["path", { d: "M3.103 6.034h17.794" }],
  [
    "path",
    {
      d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/shopping-basket.mjs
var ShoppingBasket = [
  ["path", { d: "m15 11-1 9" }],
  ["path", { d: "m19 11-4-7" }],
  ["path", { d: "M2 11h20" }],
  ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }],
  ["path", { d: "M4.5 15.5h15" }],
  ["path", { d: "m5 11 4-7" }],
  ["path", { d: "m9 11 1 9" }]
];

// node_modules/lucide/dist/esm/icons/shopping-cart-minus.mjs
var ShoppingCartMinus = [
  ["path", { d: "M16 5h6" }],
  ["path", { d: "m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18" }],
  ["path", { d: "M4.564 5H12" }],
  ["path", { d: "M6.25 14h12.712a2 2 0 001.991-1.57l.514-3.113" }],
  ["circle", { cx: "18", cy: "20", r: "2" }],
  ["circle", { cx: "8", cy: "20", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/shopping-cart-plus.mjs
var ShoppingCartPlus = [
  ["path", { d: "M16 5h6" }],
  ["path", { d: "M19 2v6" }],
  ["path", { d: "m2.05 2.05 1.099-.028a1 1 0 011.008.815l2.69 14.347A1 1 0 007.83 18H18" }],
  ["path", { d: "M4.564 5H12" }],
  ["path", { d: "M6.25 14h12.712a2 2 0 001.991-1.57l.172-1.041" }],
  ["circle", { cx: "18", cy: "20", r: "2" }],
  ["circle", { cx: "8", cy: "20", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/shopping-cart.mjs
var ShoppingCart = [
  ["path", { d: "m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18" }],
  ["path", { d: "M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25" }],
  ["circle", { cx: "18", cy: "20", r: "2" }],
  ["circle", { cx: "8", cy: "20", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/shovel.mjs
var Shovel = [
  [
    "path",
    {
      d: "M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z"
    }
  ],
  [
    "path",
    {
      d: "M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z"
    }
  ],
  ["path", { d: "m9 15 7.879-7.878" }]
];

// node_modules/lucide/dist/esm/icons/shredder.mjs
var Shredder = [
  [
    "path",
    { d: "M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M10 22v-5" }],
  ["path", { d: "M14 19v-2" }],
  ["path", { d: "M18 20v-3" }],
  ["path", { d: "M2 13h20" }],
  ["path", { d: "M6 20v-3" }]
];

// node_modules/lucide/dist/esm/icons/shower-head.mjs
var ShowerHead = [
  ["path", { d: "m4 4 2.5 2.5" }],
  ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7" }],
  ["path", { d: "M15 5 5 15" }],
  ["path", { d: "M14 17v.01" }],
  ["path", { d: "M10 16v.01" }],
  ["path", { d: "M13 13v.01" }],
  ["path", { d: "M16 10v.01" }],
  ["path", { d: "M11 20v.01" }],
  ["path", { d: "M17 14v.01" }],
  ["path", { d: "M20 11v.01" }]
];

// node_modules/lucide/dist/esm/icons/shrimp-off.mjs
var ShrimpOff = [
  ["path", { d: "M10 2a3.28 3.28 0 003.227 1.798l6.17-.561A1 1 0 1119.614 8H13.5" }],
  ["path", { d: "M11 20c-.5.5-1.12 1-2.5 1a1 1 0 010-5H12a7 7 0 003.283-.817" }],
  ["path", { d: "M11 22c-.5-.5-1.12-1-2.5-1a6.5 6.5 0 01-5.63-3.25 6.44 6.44 0 015.236-9.744" }],
  ["path", { d: "M18.04 12.54A7 7 0 0019 9V8" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M8 16c-2 0-4.5-4-4-6" }],
  ["path", { d: "M9.43 9.33A8.5 8.5 0 0010 16" }]
];

// node_modules/lucide/dist/esm/icons/shrimp.mjs
var Shrimp = [
  [
    "path",
    {
      d: "M10 2a3.28 3.28 0 003.227 1.798l6.17-.561A1 1 0 1119.614 8H8.5a6.44 6.44 0 00-5.63 9.75A6.5 6.5 0 008.5 21c1.38 0 2-.5 2.5-1"
    }
  ],
  ["path", { d: "M10 8a8.5 8.5 0 000 8" }],
  ["path", { d: "M11 22c-.5-.5-1.12-1-2.5-1a1 1 0 010-5H12a7 7 0 007-7V8" }],
  ["path", { d: "M13 12h.01" }],
  ["path", { d: "M8 16c-2 0-4.5-4-4-6" }]
];

// node_modules/lucide/dist/esm/icons/shrink.mjs
var Shrink = [
  ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }],
  ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6" }],
  ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6" }],
  ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3" }]
];

// node_modules/lucide/dist/esm/icons/shrub.mjs
var Shrub = [
  ["path", { d: "M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" }],
  ["path", { d: "M14.5 14.5 12 17" }],
  ["path", { d: "M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" }]
];

// node_modules/lucide/dist/esm/icons/shuffle.mjs
var Shuffle = [
  ["path", { d: "m18 14 4 4-4 4" }],
  ["path", { d: "m18 2 4 4-4 4" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" }]
];

// node_modules/lucide/dist/esm/icons/sigma.mjs
var Sigma = [
  [
    "path",
    {
      d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/signal-high.mjs
var SignalHigh = [
  ["path", { d: "M2 20h.01" }],
  ["path", { d: "M7 20v-4" }],
  ["path", { d: "M12 20v-8" }],
  ["path", { d: "M17 20V8" }]
];

// node_modules/lucide/dist/esm/icons/signal-low.mjs
var SignalLow = [
  ["path", { d: "M2 20h.01" }],
  ["path", { d: "M7 20v-4" }]
];

// node_modules/lucide/dist/esm/icons/signal-medium.mjs
var SignalMedium = [
  ["path", { d: "M2 20h.01" }],
  ["path", { d: "M7 20v-4" }],
  ["path", { d: "M12 20v-8" }]
];

// node_modules/lucide/dist/esm/icons/signal-zero.mjs
var SignalZero = [["path", { d: "M2 20h.01" }]];

// node_modules/lucide/dist/esm/icons/signature.mjs
var Signature = [
  [
    "path",
    {
      d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
    }
  ],
  ["path", { d: "M3 21h18" }]
];

// node_modules/lucide/dist/esm/icons/signal.mjs
var Signal = [
  ["path", { d: "M2 20h.01" }],
  ["path", { d: "M7 20v-4" }],
  ["path", { d: "M12 20v-8" }],
  ["path", { d: "M17 20V8" }],
  ["path", { d: "M22 4v16" }]
];

// node_modules/lucide/dist/esm/icons/signpost-big.mjs
var SignpostBig = [
  ["path", { d: "M10 9H4L2 7l2-2h6" }],
  ["path", { d: "M14 5h6l2 2-2 2h-6" }],
  ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18" }],
  ["path", { d: "M8 22h8" }]
];

// node_modules/lucide/dist/esm/icons/signpost.mjs
var Signpost = [
  ["path", { d: "M12 13v8" }],
  ["path", { d: "M12 3v3" }],
  [
    "path",
    {
      d: "M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/siren.mjs
var Siren = [
  ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6" }],
  ["path", { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" }],
  ["path", { d: "M21 12h1" }],
  ["path", { d: "M18.5 4.5 18 5" }],
  ["path", { d: "M2 12h1" }],
  ["path", { d: "M12 2v1" }],
  ["path", { d: "m4.929 4.929.707.707" }],
  ["path", { d: "M12 12v6" }]
];

// node_modules/lucide/dist/esm/icons/skip-back.mjs
var SkipBack = [
  [
    "path",
    {
      d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"
    }
  ],
  ["path", { d: "M3 20V4" }]
];

// node_modules/lucide/dist/esm/icons/skip-forward.mjs
var SkipForward = [
  ["path", { d: "M21 4v16" }],
  [
    "path",
    { d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" }
  ]
];

// node_modules/lucide/dist/esm/icons/skull.mjs
var Skull = [
  ["path", { d: "m12.5 17-.5-1-.5 1h1z" }],
  [
    "path",
    {
      d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
    }
  ],
  ["circle", { cx: "15", cy: "12", r: "1" }],
  ["circle", { cx: "9", cy: "12", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/slash.mjs
var Slash = [["path", { d: "M22 2 2 22" }]];

// node_modules/lucide/dist/esm/icons/slice.mjs
var Slice = [
  [
    "path",
    {
      d: "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/sliders-horizontal.mjs
var SlidersHorizontal = [
  ["path", { d: "M10 5H3" }],
  ["path", { d: "M12 19H3" }],
  ["path", { d: "M14 3v4" }],
  ["path", { d: "M16 17v4" }],
  ["path", { d: "M21 12h-9" }],
  ["path", { d: "M21 19h-5" }],
  ["path", { d: "M21 5h-7" }],
  ["path", { d: "M8 10v4" }],
  ["path", { d: "M8 12H3" }]
];

// node_modules/lucide/dist/esm/icons/sliders-vertical.mjs
var SlidersVertical = [
  ["path", { d: "M10 8h4" }],
  ["path", { d: "M12 21v-9" }],
  ["path", { d: "M12 8V3" }],
  ["path", { d: "M17 16h4" }],
  ["path", { d: "M19 12V3" }],
  ["path", { d: "M19 21v-5" }],
  ["path", { d: "M3 14h4" }],
  ["path", { d: "M5 10V3" }],
  ["path", { d: "M5 21v-7" }]
];

// node_modules/lucide/dist/esm/icons/smartphone-charging.mjs
var SmartphoneCharging = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
  ["path", { d: "M12.667 8 10 12h4l-2.667 4" }]
];

// node_modules/lucide/dist/esm/icons/smartphone-nfc.mjs
var SmartphoneNfc = [
  ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1" }],
  ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36" }],
  ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }],
  ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }]
];

// node_modules/lucide/dist/esm/icons/smartphone.mjs
var Smartphone = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
  ["path", { d: "M12 18h.01" }]
];

// node_modules/lucide/dist/esm/icons/snail.mjs
var Snail = [
  ["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }],
  ["circle", { cx: "10", cy: "13", r: "8" }],
  ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }],
  ["path", { d: "M18 3 19.1 5.2" }],
  ["path", { d: "M22 3 20.9 5.2" }]
];

// node_modules/lucide/dist/esm/icons/snowflake.mjs
var Snowflake = [
  ["path", { d: "m10 20-1.25-2.5L6 18" }],
  ["path", { d: "M10 4 8.75 6.5 6 6" }],
  ["path", { d: "m14 20 1.25-2.5L18 18" }],
  ["path", { d: "m14 4 1.25 2.5L18 6" }],
  ["path", { d: "m17 21-3-6h-4" }],
  ["path", { d: "m17 3-3 6 1.5 3" }],
  ["path", { d: "M2 12h6.5L10 9" }],
  ["path", { d: "m20 10-1.5 2 1.5 2" }],
  ["path", { d: "M22 12h-6.5L14 15" }],
  ["path", { d: "m4 10 1.5 2L4 14" }],
  ["path", { d: "m7 21 3-6-1.5-3" }],
  ["path", { d: "m7 3 3 6h4" }]
];

// node_modules/lucide/dist/esm/icons/soap-dispenser-droplet.mjs
var SoapDispenserDroplet = [
  ["path", { d: "M10.5 2v4" }],
  ["path", { d: "M14 2H7a2 2 0 0 0-2 2" }],
  [
    "path",
    {
      d: "M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19"
    }
  ],
  ["path", { d: "M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]
];

// node_modules/lucide/dist/esm/icons/sofa.mjs
var Sofa = [
  ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }],
  [
    "path",
    {
      d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
    }
  ],
  ["path", { d: "M4 18v2" }],
  ["path", { d: "M20 18v2" }],
  ["path", { d: "M12 4v9" }]
];

// node_modules/lucide/dist/esm/icons/solar-panel.mjs
var SolarPanel = [
  ["path", { d: "M11 2h2" }],
  ["path", { d: "m14.28 14-4.56 8" }],
  ["path", { d: "m21 22-1.558-4H4.558" }],
  ["path", { d: "M3 10v2" }],
  [
    "path",
    {
      d: "M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z"
    }
  ],
  ["path", { d: "M7 2a4 4 0 0 1-4 4" }],
  ["path", { d: "m8.66 7.66 1.41 1.41" }]
];

// node_modules/lucide/dist/esm/icons/soup.mjs
var Soup = [
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }],
  ["path", { d: "M7 21h10" }],
  ["path", { d: "M19.5 12 22 6" }],
  ["path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }],
  ["path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }],
  ["path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" }]
];

// node_modules/lucide/dist/esm/icons/space.mjs
var Space = [["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]];

// node_modules/lucide/dist/esm/icons/spade.mjs
var Spade = [
  ["path", { d: "M12 18v4" }],
  [
    "path",
    {
      d: "M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/sparkle.mjs
var Sparkle = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/sparkles.mjs
var Sparkles = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
    }
  ],
  ["path", { d: "M20 2v4" }],
  ["path", { d: "M22 4h-4" }],
  ["circle", { cx: "4", cy: "20", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/speaker.mjs
var Speaker = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
  ["path", { d: "M12 6h.01" }],
  ["circle", { cx: "12", cy: "14", r: "4" }],
  ["path", { d: "M12 14h.01" }]
];

// node_modules/lucide/dist/esm/icons/speech.mjs
var Speech = [
  [
    "path",
    {
      d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
    }
  ],
  ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" }],
  ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975" }]
];

// node_modules/lucide/dist/esm/icons/spell-check-2.mjs
var SpellCheck2 = [
  ["path", { d: "m6 16 6-12 6 12" }],
  ["path", { d: "M8 12h8" }],
  [
    "path",
    {
      d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/spell-check.mjs
var SpellCheck = [
  ["path", { d: "m20 15-5.5 5.5L12 18" }],
  ["path", { d: "m4 16 6-12 5.115 10.23" }],
  ["path", { d: "M6 12h8" }]
];

// node_modules/lucide/dist/esm/icons/spline-pointer.mjs
var SplinePointer = [
  [
    "path",
    {
      d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
    }
  ],
  ["path", { d: "M5 17A12 12 0 0 1 17 5" }],
  ["circle", { cx: "19", cy: "5", r: "2" }],
  ["circle", { cx: "5", cy: "19", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/spline.mjs
var Spline = [
  ["circle", { cx: "19", cy: "5", r: "2" }],
  ["circle", { cx: "5", cy: "19", r: "2" }],
  ["path", { d: "M5 17A12 12 0 0 1 17 5" }]
];

// node_modules/lucide/dist/esm/icons/split.mjs
var Split = [
  ["path", { d: "M16 3h5v5" }],
  ["path", { d: "M8 3H3v5" }],
  ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }],
  ["path", { d: "m15 9 6-6" }]
];

// node_modules/lucide/dist/esm/icons/spool.mjs
var Spool = [
  [
    "path",
    {
      d: "M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66"
    }
  ],
  [
    "path",
    {
      d: "m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/sport-shoe.mjs
var SportShoe = [
  ["path", { d: "m15 10.42 4.8-5.07" }],
  ["path", { d: "M19 18h3" }],
  [
    "path",
    {
      d: "M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/spotlight.mjs
var Spotlight = [
  ["path", { d: "M15.295 19.562 16 22" }],
  ["path", { d: "m17 16 3.758 2.098" }],
  ["path", { d: "m19 12.5 3.026-.598" }],
  [
    "path",
    {
      d: "M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z"
    }
  ],
  ["path", { d: "M8 9V2" }]
];

// node_modules/lucide/dist/esm/icons/spray-can.mjs
var SprayCan = [
  ["path", { d: "M3 3h.01" }],
  ["path", { d: "M7 5h.01" }],
  ["path", { d: "M11 7h.01" }],
  ["path", { d: "M3 7h.01" }],
  ["path", { d: "M7 9h.01" }],
  ["path", { d: "M3 11h.01" }],
  ["rect", { width: "4", height: "4", x: "15", y: "5" }],
  ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }],
  ["path", { d: "m13 14 8-2" }],
  ["path", { d: "m13 19 8-2" }]
];

// node_modules/lucide/dist/esm/icons/sprout.mjs
var Sprout = [
  [
    "path",
    {
      d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"
    }
  ],
  ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" }],
  ["path", { d: "M5 21h14" }]
];

// node_modules/lucide/dist/esm/icons/square-activity.mjs
var SquareActivity = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-down-left.mjs
var SquareArrowDownLeft = [
  ["path", { d: "M15 15H9l6-6" }],
  ["path", { d: "M9 15V9" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-down-right.mjs
var SquareArrowDownRight = [
  ["path", { d: "M15 15 9 9" }],
  ["path", { d: "M9 15h6V9" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-down.mjs
var SquareArrowDown = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M12 8v8" }],
  ["path", { d: "m8 12 4 4 4-4" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-left.mjs
var SquareArrowLeft = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "m12 8-4 4 4 4" }],
  ["path", { d: "M16 12H8" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-out-down-left.mjs
var SquareArrowOutDownLeft = [
  ["path", { d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }],
  ["path", { d: "m3 21 9-9" }],
  ["path", { d: "M9 21H3v-6" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-out-down-right.mjs
var SquareArrowOutDownRight = [
  ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }],
  ["path", { d: "m21 21-9-9" }],
  ["path", { d: "M21 15v6h-6" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-out-up-left.mjs
var SquareArrowOutUpLeft = [
  ["path", { d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }],
  ["path", { d: "m3 3 9 9" }],
  ["path", { d: "M3 9V3h6" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-out-up-right.mjs
var SquareArrowOutUpRight = [
  ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }],
  ["path", { d: "m21 3-9 9" }],
  ["path", { d: "M15 3h6v6" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-right-enter.mjs
var SquareArrowRightEnter = [
  ["path", { d: "m10 16 4-4-4-4" }],
  ["path", { d: "M3 12h11" }],
  ["path", { d: "M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-right-exit.mjs
var SquareArrowRightExit = [
  ["path", { d: "M10 12h11" }],
  ["path", { d: "m17 16 4-4-4-4" }],
  [
    "path",
    { d: "M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" }
  ]
];

// node_modules/lucide/dist/esm/icons/square-arrow-right.mjs
var SquareArrowRight = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M8 12h8" }],
  ["path", { d: "m12 16 4-4-4-4" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-up-left.mjs
var SquareArrowUpLeft = [
  ["path", { d: "M15 15 9 9" }],
  ["path", { d: "M9 15V9h6" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-up-right.mjs
var SquareArrowUpRight = [
  ["path", { d: "M15 15V9H9" }],
  ["path", { d: "m9 15 6-6" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-arrow-up.mjs
var SquareArrowUp = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "m16 12-4-4-4 4" }],
  ["path", { d: "M12 16V8" }]
];

// node_modules/lucide/dist/esm/icons/square-bookmark.mjs
var SquareBookmark = [
  [
    "path",
    {
      d: "M11 3v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834a.25.25 0 00.406-.195V3"
    }
  ],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-asterisk.mjs
var SquareAsterisk = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M12 8v8" }],
  ["path", { d: "m8.5 14 7-4" }],
  ["path", { d: "m8.5 10 7 4" }]
];

// node_modules/lucide/dist/esm/icons/square-bottom-dashed-scissors.mjs
var SquareBottomDashedScissors = [
  ["path", { d: "M14 21h1" }],
  ["path", { d: "m17 17-2.18-2.18" }],
  ["path", { d: "M5 21a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2" }],
  ["path", { d: "M9 21h1" }],
  ["path", { d: "M9.56 14.44 17 7" }],
  ["path", { d: "M9.56 9.56 12 12" }],
  ["circle", { cx: "8.5", cy: "15.5", r: "1.5" }],
  ["circle", { cx: "8.5", cy: "8.5", r: "1.5" }]
];

// node_modules/lucide/dist/esm/icons/square-centerline-dashed-horizontal.mjs
var SquareCenterlineDashedHorizontal = [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }],
  ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }],
  ["path", { d: "M12 20v2" }],
  ["path", { d: "M12 14v2" }],
  ["path", { d: "M12 8v2" }],
  ["path", { d: "M12 2v2" }]
];

// node_modules/lucide/dist/esm/icons/square-centerline-dashed-vertical.mjs
var SquareCenterlineDashedVertical = [
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }],
  ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }],
  ["path", { d: "M4 12H2" }],
  ["path", { d: "M10 12H8" }],
  ["path", { d: "M16 12h-2" }],
  ["path", { d: "M22 12h-2" }]
];

// node_modules/lucide/dist/esm/icons/square-chart-gantt.mjs
var SquareChartGantt = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M9 8h7" }],
  ["path", { d: "M8 12h6" }],
  ["path", { d: "M11 16h5" }]
];

// node_modules/lucide/dist/esm/icons/square-check-big.mjs
var SquareCheckBig = [
  ["path", { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" }],
  ["path", { d: "m9 11 3 3L22 4" }]
];

// node_modules/lucide/dist/esm/icons/square-check.mjs
var SquareCheck = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "m16 9-5.5 5.5L8 12" }]
];

// node_modules/lucide/dist/esm/icons/square-chevron-down.mjs
var SquareChevronDown = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "m16 10-4 4-4-4" }]
];

// node_modules/lucide/dist/esm/icons/square-chevron-left.mjs
var SquareChevronLeft = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "m14 16-4-4 4-4" }]
];

// node_modules/lucide/dist/esm/icons/square-chevron-right.mjs
var SquareChevronRight = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "m10 8 4 4-4 4" }]
];

// node_modules/lucide/dist/esm/icons/square-chevron-up.mjs
var SquareChevronUp = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "m8 14 4-4 4 4" }]
];

// node_modules/lucide/dist/esm/icons/square-code.mjs
var SquareCode = [
  ["path", { d: "m10 9-3 3 3 3" }],
  ["path", { d: "m14 15 3-3-3-3" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-dashed-bottom-code.mjs
var SquareDashedBottomCode = [
  ["path", { d: "M10 9.5 8 12l2 2.5" }],
  ["path", { d: "M14 21h1" }],
  ["path", { d: "m14 9.5 2 2.5-2 2.5" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }],
  ["path", { d: "M9 21h1" }]
];

// node_modules/lucide/dist/esm/icons/square-dashed-bottom.mjs
var SquareDashedBottom = [
  ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }],
  ["path", { d: "M9 21h1" }],
  ["path", { d: "M14 21h1" }]
];

// node_modules/lucide/dist/esm/icons/square-dashed-kanban.mjs
var SquareDashedKanban = [
  ["path", { d: "M8 7v7" }],
  ["path", { d: "M12 7v4" }],
  ["path", { d: "M16 7v9" }],
  ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
  ["path", { d: "M9 3h1" }],
  ["path", { d: "M14 3h1" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
  ["path", { d: "M21 9v1" }],
  ["path", { d: "M21 14v1" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
  ["path", { d: "M14 21h1" }],
  ["path", { d: "M9 21h1" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
  ["path", { d: "M3 14v1" }],
  ["path", { d: "M3 9v1" }]
];

// node_modules/lucide/dist/esm/icons/square-dashed-mouse-pointer.mjs
var SquareDashedMousePointer = [
  [
    "path",
    {
      d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
    }
  ],
  ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
  ["path", { d: "M9 3h1" }],
  ["path", { d: "M9 21h2" }],
  ["path", { d: "M14 3h1" }],
  ["path", { d: "M3 9v1" }],
  ["path", { d: "M21 9v2" }],
  ["path", { d: "M3 14v1" }]
];

// node_modules/lucide/dist/esm/icons/square-dashed-plus.mjs
var SquareDashedPlus = [
  ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
  ["path", { d: "M9 3h1" }],
  ["path", { d: "M9 21h1" }],
  ["path", { d: "M14 3h1" }],
  ["path", { d: "M14 21h1" }],
  ["path", { d: "M3 9v1" }],
  ["path", { d: "M21 9v1" }],
  ["path", { d: "M3 14v1" }],
  ["path", { d: "M21 14v1" }],
  ["path", { d: "M8 12h8" }],
  ["path", { d: "M12 8v8" }]
];

// node_modules/lucide/dist/esm/icons/square-dashed-text.mjs
var SquareDashedText = [
  ["path", { d: "M14 21h1" }],
  ["path", { d: "M14 3h1" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
  ["path", { d: "M21 14v1" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
  ["path", { d: "M21 9v1" }],
  ["path", { d: "M3 14v1" }],
  ["path", { d: "M3 9v1" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
  ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
  ["path", { d: "M7 12h10" }],
  ["path", { d: "M7 16h6" }],
  ["path", { d: "M7 8h8" }],
  ["path", { d: "M9 21h1" }],
  ["path", { d: "M9 3h1" }]
];

// node_modules/lucide/dist/esm/icons/square-dashed-top-solid.mjs
var SquareDashedTopSolid = [
  ["path", { d: "M14 21h1" }],
  ["path", { d: "M21 14v1" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
  ["path", { d: "M21 9v1" }],
  ["path", { d: "M3 14v1" }],
  ["path", { d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }],
  ["path", { d: "M3 9v1" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
  ["path", { d: "M9 21h1" }]
];

// node_modules/lucide/dist/esm/icons/square-dashed-x-corner.mjs
var SquareDashedXCorner = [
  ["path", { d: "M14 3h1" }],
  ["path", { d: "m16 16 5 5" }],
  ["path", { d: "M19 3a2 2 0 012 2" }],
  ["path", { d: "m21 16-5 5" }],
  ["path", { d: "M21 9v1" }],
  ["path", { d: "M3 14v1" }],
  ["path", { d: "M3 9v1" }],
  ["path", { d: "M5 21a2 2 0 01-2-2" }],
  ["path", { d: "M5 3a2 2 0 00-2 2" }],
  ["path", { d: "M9 21h1" }],
  ["path", { d: "M9 3h1" }]
];

// node_modules/lucide/dist/esm/icons/square-dashed-x.mjs
var SquareDashedX = [
  ["path", { d: "M14 21h1" }],
  ["path", { d: "M14 3h1" }],
  ["path", { d: "M19 3a2 2 0 012 2" }],
  ["path", { d: "M21 14v1" }],
  ["path", { d: "M21 19a2 2 0 01-2 2" }],
  ["path", { d: "M21 9v1" }],
  ["path", { d: "M3 14v1" }],
  ["path", { d: "M3 9v1" }],
  ["path", { d: "M5 21a2 2 0 01-2-2" }],
  ["path", { d: "M5 3a2 2 0 00-2 2" }],
  ["path", { d: "m9 15 6-6" }],
  ["path", { d: "M9 21h1" }],
  ["path", { d: "M9 3h1" }],
  ["path", { d: "m9 9 6 6" }]
];

// node_modules/lucide/dist/esm/icons/square-dashed.mjs
var SquareDashed = [
  ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
  ["path", { d: "M9 3h1" }],
  ["path", { d: "M9 21h1" }],
  ["path", { d: "M14 3h1" }],
  ["path", { d: "M14 21h1" }],
  ["path", { d: "M3 9v1" }],
  ["path", { d: "M21 9v1" }],
  ["path", { d: "M3 14v1" }],
  ["path", { d: "M21 14v1" }]
];

// node_modules/lucide/dist/esm/icons/square-dimensions.mjs
var SquareDimensions = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M12 7H7v5" }],
  ["path", { d: "M12 17h5v-5" }]
];

// node_modules/lucide/dist/esm/icons/square-divide.mjs
var SquareDivide = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }]
];

// node_modules/lucide/dist/esm/icons/square-dot.mjs
var SquareDot = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["circle", { cx: "12", cy: "12", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/square-equal.mjs
var SquareEqual = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M7 10h10" }],
  ["path", { d: "M7 14h10" }]
];

// node_modules/lucide/dist/esm/icons/square-exclamation-point.mjs
var SquareExclamationPoint = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
];

// node_modules/lucide/dist/esm/icons/square-function.mjs
var SquareFunction = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }],
  ["path", { d: "M9 11.2h5.7" }]
];

// node_modules/lucide/dist/esm/icons/square-kanban.mjs
var SquareKanban = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M8 7v7" }],
  ["path", { d: "M12 7v4" }],
  ["path", { d: "M16 7v9" }]
];

// node_modules/lucide/dist/esm/icons/square-library.mjs
var SquareLibrary = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M7 7v10" }],
  ["path", { d: "M11 7v10" }],
  ["path", { d: "m15 7 2 10" }]
];

// node_modules/lucide/dist/esm/icons/square-m.mjs
var SquareM = [
  [
    "path",
    { d: "M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16" }
  ],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-menu.mjs
var SquareMenu = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M7 8h10" }],
  ["path", { d: "M7 12h10" }],
  ["path", { d: "M7 16h10" }]
];

// node_modules/lucide/dist/esm/icons/square-minus.mjs
var SquareMinus = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M8 12h8" }]
];

// node_modules/lucide/dist/esm/icons/square-mouse-pointer.mjs
var SquareMousePointer = [
  [
    "path",
    {
      d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
    }
  ],
  ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }]
];

// node_modules/lucide/dist/esm/icons/square-off.mjs
var SquareOff = [
  ["path", { d: "M20.4 20.4a2 2 0 01-1.4.6H5a2 2 0 01-2-2V5a2 2 0 01.59-1.41" }],
  ["path", { d: "M21 15.3V5a2 2 0 00-2-2H8.7" }],
  ["path", { d: "M22 22 2 2" }]
];

// node_modules/lucide/dist/esm/icons/square-parking-off.mjs
var SquareParkingOff = [
  ["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" }],
  ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }],
  ["path", { d: "M9 17v-2.3" }]
];

// node_modules/lucide/dist/esm/icons/square-parking.mjs
var SquareParking = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]
];

// node_modules/lucide/dist/esm/icons/square-pause.mjs
var SquarePause = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }],
  ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }]
];

// node_modules/lucide/dist/esm/icons/square-pen.mjs
var SquarePen = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/square-percent.mjs
var SquarePercent = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "m15 9-6 6" }],
  ["path", { d: "M9 9h.01" }],
  ["path", { d: "M15 15h.01" }]
];

// node_modules/lucide/dist/esm/icons/square-pi.mjs
var SquarePi = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M7 7h10" }],
  ["path", { d: "M10 7v10" }],
  ["path", { d: "M16 17a2 2 0 0 1-2-2V7" }]
];

// node_modules/lucide/dist/esm/icons/square-pilcrow.mjs
var SquarePilcrow = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }],
  ["path", { d: "M12 7v10" }],
  ["path", { d: "M16 7v10" }]
];

// node_modules/lucide/dist/esm/icons/square-play.mjs
var SquarePlay = [
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/square-plus.mjs
var SquarePlus = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M8 12h8" }],
  ["path", { d: "M12 8v8" }]
];

// node_modules/lucide/dist/esm/icons/square-power.mjs
var SquarePower = [
  ["path", { d: "M12 7v4" }],
  ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-radical.mjs
var SquareRadical = [
  ["path", { d: "M7 12h2l2 5 2-10h4" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-round-corner.mjs
var SquareRoundCorner = [
  ["path", { d: "M21 11a8 8 0 0 0-8-8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
];

// node_modules/lucide/dist/esm/icons/square-scissors.mjs
var SquareScissors = [
  ["path", { d: "m17 17-2.18-2.18" }],
  ["path", { d: "M9.56 14.44 17 7" }],
  ["path", { d: "M9.56 9.56 12 12" }],
  ["circle", { cx: "8.5", cy: "15.5", r: "1.5" }],
  ["circle", { cx: "8.5", cy: "8.5", r: "1.5" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-sigma.mjs
var SquareSigma = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9" }]
];

// node_modules/lucide/dist/esm/icons/square-slash.mjs
var SquareSlash = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]
];

// node_modules/lucide/dist/esm/icons/square-split-horizontal.mjs
var SquareSplitHorizontal = [
  ["path", { d: "M12 2v20" }],
  ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }],
  ["path", { d: "M8 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" }]
];

// node_modules/lucide/dist/esm/icons/square-split-vertical.mjs
var SquareSplitVertical = [
  ["path", { d: "M2 12h20" }],
  ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }],
  ["path", { d: "M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" }]
];

// node_modules/lucide/dist/esm/icons/square-square.mjs
var SquareSquare = [
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/square-stack.mjs
var SquareStack = [
  ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }],
  ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }],
  ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-star.mjs
var SquareStar = [
  [
    "path",
    {
      d: "M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"
    }
  ],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-stop.mjs
var SquareStop = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/square-terminal.mjs
var SquareTerminal = [
  ["path", { d: "m7 11 2-2-2-2" }],
  ["path", { d: "M11 13h4" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-text.mjs
var SquareText = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M7 8h8" }],
  ["path", { d: "M7 12h10" }],
  ["path", { d: "M7 16h6" }]
];

// node_modules/lucide/dist/esm/icons/square-user-round.mjs
var SquareUserRound = [
  ["path", { d: "M18 21a6 6 0 0 0-12 0" }],
  ["circle", { cx: "12", cy: "11", r: "4" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/square-user.mjs
var SquareUser = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["circle", { cx: "12", cy: "10", r: "3" }],
  ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }]
];

// node_modules/lucide/dist/esm/icons/square-x.mjs
var SquareX = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
  ["path", { d: "m15 9-6 6" }],
  ["path", { d: "m9 9 6 6" }]
];

// node_modules/lucide/dist/esm/icons/square.mjs
var Square = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]];

// node_modules/lucide/dist/esm/icons/squares-exclude.mjs
var SquaresExclude = [
  [
    "path",
    {
      d: "M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"
    }
  ],
  [
    "path",
    {
      d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/squares-intersect.mjs
var SquaresIntersect = [
  ["path", { d: "M10 22a2 2 0 0 1-2-2" }],
  ["path", { d: "M14 2a2 2 0 0 1 2 2" }],
  ["path", { d: "M16 22h-2" }],
  ["path", { d: "M2 10V8" }],
  ["path", { d: "M2 4a2 2 0 0 1 2-2" }],
  ["path", { d: "M20 8a2 2 0 0 1 2 2" }],
  ["path", { d: "M22 14v2" }],
  ["path", { d: "M22 20a2 2 0 0 1-2 2" }],
  ["path", { d: "M4 16a2 2 0 0 1-2-2" }],
  ["path", { d: "M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" }],
  ["path", { d: "M8 2h2" }]
];

// node_modules/lucide/dist/esm/icons/squares-subtract.mjs
var SquaresSubtract = [
  ["path", { d: "M10 22a2 2 0 0 1-2-2" }],
  ["path", { d: "M16 22h-2" }],
  [
    "path",
    {
      d: "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"
    }
  ],
  ["path", { d: "M20 8a2 2 0 0 1 2 2" }],
  ["path", { d: "M22 14v2" }],
  ["path", { d: "M22 20a2 2 0 0 1-2 2" }]
];

// node_modules/lucide/dist/esm/icons/squares-unite.mjs
var SquaresUnite = [
  [
    "path",
    {
      d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/squircle-dashed.mjs
var SquircleDashed = [
  ["path", { d: "M13.77 3.043a34 34 0 0 0-3.54 0" }],
  ["path", { d: "M13.771 20.956a33 33 0 0 1-3.541.001" }],
  ["path", { d: "M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" }],
  ["path", { d: "M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" }],
  ["path", { d: "M20.957 10.23a33 33 0 0 1 0 3.54" }],
  ["path", { d: "M3.043 10.23a34 34 0 0 0 .001 3.541" }],
  ["path", { d: "M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" }],
  ["path", { d: "M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" }]
];

// node_modules/lucide/dist/esm/icons/squircle.mjs
var Squircle = [
  ["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }]
];

// node_modules/lucide/dist/esm/icons/squirrel.mjs
var Squirrel = [
  ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5" }],
  ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }],
  ["path", { d: "M18 13h.01" }],
  [
    "path",
    {
      d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/stamp.mjs
var Stamp = [
  ["path", { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" }],
  [
    "path",
    {
      d: "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z"
    }
  ],
  ["path", { d: "M5 22h14" }]
];

// node_modules/lucide/dist/esm/icons/star-check.mjs
var StarCheck = [
  [
    "path",
    {
      d: "m19.06 12.501 2.78-2.707a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014"
    }
  ],
  ["path", { d: "m15 18 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/star-half.mjs
var StarHalf = [
  [
    "path",
    {
      d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/star-minus.mjs
var StarMinus = [
  ["path", { d: "M15 18h6" }],
  [
    "path",
    {
      d: "M17.688 14a2.1 2.1 0 0 1 .416-.568l3.736-3.638a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/star-off.mjs
var StarOff = [
  [
    "path",
    {
      d: "m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152"
    }
  ],
  [
    "path",
    {
      d: "m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099"
    }
  ],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/star-plus.mjs
var StarPlus = [
  [
    "path",
    {
      d: "M11.013 18.582 6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904L20 11.5"
    }
  ],
  ["path", { d: "M15 18h6" }],
  ["path", { d: "M18 15v6" }]
];

// node_modules/lucide/dist/esm/icons/star-x.mjs
var StarX = [
  ["path", { d: "m15.5 15.5 5 5" }],
  [
    "path",
    {
      d: "m20.063 11.525 1.777-1.731a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428a2.1 2.1 0 0 1 .987-.243 2 2 0 0 1 .132.004"
    }
  ],
  ["path", { d: "m20.5 15.5-5 5" }]
];

// node_modules/lucide/dist/esm/icons/star.mjs
var Star = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/step-back.mjs
var StepBack = [
  [
    "path",
    {
      d: "M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"
    }
  ],
  ["path", { d: "M21 20V4" }]
];

// node_modules/lucide/dist/esm/icons/step-forward.mjs
var StepForward = [
  [
    "path",
    { d: "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" }
  ],
  ["path", { d: "M3 4v16" }]
];

// node_modules/lucide/dist/esm/icons/stethoscope.mjs
var Stethoscope = [
  ["path", { d: "M11 2v2" }],
  ["path", { d: "M5 2v2" }],
  ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3" }],
  ["circle", { cx: "20", cy: "10", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/sticker.mjs
var Sticker = [
  [
    "path",
    {
      d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
    }
  ],
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M8 13h.01" }],
  ["path", { d: "M16 13h.01" }],
  ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1" }]
];

// node_modules/lucide/dist/esm/icons/sticky-note-check.mjs
var StickyNoteCheck = [
  ["path", { d: "m15 19 2 2 4-4" }],
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }],
  [
    "path",
    {
      d: "M21 13V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.5"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/sticky-note-minus.mjs
var StickyNoteMinus = [
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }],
  [
    "path",
    {
      d: "M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35"
    }
  ],
  ["path", { d: "M21 18h-6" }]
];

// node_modules/lucide/dist/esm/icons/sticky-note-off.mjs
var StickyNoteOff = [
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586" }],
  ["path", { d: "M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344" }]
];

// node_modules/lucide/dist/esm/icons/sticky-note-plus.mjs
var StickyNotePlus = [
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M18 15v6" }],
  [
    "path",
    {
      d: "M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355"
    }
  ],
  ["path", { d: "M21 18h-6" }]
];

// node_modules/lucide/dist/esm/icons/sticky-note-x.mjs
var StickyNoteX = [
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "m16 16 5 5" }],
  [
    "path",
    {
      d: "M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"
    }
  ],
  ["path", { d: "m21 16-5 5" }]
];

// node_modules/lucide/dist/esm/icons/sticky-note.mjs
var StickyNote = [
  [
    "path",
    {
      d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"
    }
  ],
  ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5" }]
];

// node_modules/lucide/dist/esm/icons/sticky-notes.mjs
var StickyNotes = [
  [
    "path",
    {
      d: "M10 8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 16 14v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"
    }
  ],
  ["path", { d: "M10 8v5a1 1 0 0 0 1 1h5" }],
  [
    "path",
    {
      d: "M8 4a2 2 0 0 1 2-2h6a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 22 8v6a2 2 0 0 1-2 2"
    }
  ],
  ["path", { d: "M16 2v5a1 1 0 0 0 1 1h5" }]
];

// node_modules/lucide/dist/esm/icons/stone.mjs
var Stone = [
  [
    "path",
    {
      d: "M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z"
    }
  ],
  ["path", { d: "M11.99 22 14 12l7.822 3.184" }],
  ["path", { d: "M14 12 8.47 2.302" }]
];

// node_modules/lucide/dist/esm/icons/store.mjs
var Store = [
  ["path", { d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" }],
  [
    "path",
    {
      d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"
    }
  ],
  ["path", { d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" }]
];

// node_modules/lucide/dist/esm/icons/stretch-horizontal.mjs
var StretchHorizontal = [
  ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2" }],
  ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/stretch-vertical.mjs
var StretchVertical = [
  ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2" }],
  ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/strikethrough.mjs
var Strikethrough = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]
];

// node_modules/lucide/dist/esm/icons/subscript.mjs
var Subscript = [
  ["path", { d: "m4 5 8 8" }],
  ["path", { d: "m12 5-8 8" }],
  [
    "path",
    {
      d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/summary.mjs
var Summary = [
  ["path", { d: "M15 4H7" }],
  ["path", { d: "m18 16 3 3-3 3" }],
  ["path", { d: "M3 4v13a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M7 14h7" }],
  ["path", { d: "M7 9h12" }]
];

// node_modules/lucide/dist/esm/icons/sun-dim.mjs
var SunDim = [
  ["circle", { cx: "12", cy: "12", r: "4" }],
  ["path", { d: "M12 4h.01" }],
  ["path", { d: "M20 12h.01" }],
  ["path", { d: "M12 20h.01" }],
  ["path", { d: "M4 12h.01" }],
  ["path", { d: "M17.657 6.343h.01" }],
  ["path", { d: "M17.657 17.657h.01" }],
  ["path", { d: "M6.343 17.657h.01" }],
  ["path", { d: "M6.343 6.343h.01" }]
];

// node_modules/lucide/dist/esm/icons/sun-medium.mjs
var SunMedium = [
  ["circle", { cx: "12", cy: "12", r: "4" }],
  ["path", { d: "M12 3v1" }],
  ["path", { d: "M12 20v1" }],
  ["path", { d: "M3 12h1" }],
  ["path", { d: "M20 12h1" }],
  ["path", { d: "m18.364 5.636-.707.707" }],
  ["path", { d: "m6.343 17.657-.707.707" }],
  ["path", { d: "m5.636 5.636.707.707" }],
  ["path", { d: "m17.657 17.657.707.707" }]
];

// node_modules/lucide/dist/esm/icons/sun-moon.mjs
var SunMoon = [
  ["path", { d: "M12 2v2" }],
  [
    "path",
    {
      d: "M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"
    }
  ],
  ["path", { d: "M16 12a4 4 0 0 0-4-4" }],
  ["path", { d: "m19 5-1.256 1.256" }],
  ["path", { d: "M20 12h2" }]
];

// node_modules/lucide/dist/esm/icons/sun.mjs
var Sun = [
  ["circle", { cx: "12", cy: "12", r: "4" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 20v2" }],
  ["path", { d: "m4.93 4.93 1.41 1.41" }],
  ["path", { d: "m17.66 17.66 1.41 1.41" }],
  ["path", { d: "M2 12h2" }],
  ["path", { d: "M20 12h2" }],
  ["path", { d: "m6.34 17.66-1.41 1.41" }],
  ["path", { d: "m19.07 4.93-1.41 1.41" }]
];

// node_modules/lucide/dist/esm/icons/sunrise.mjs
var Sunrise = [
  ["path", { d: "M12 2v8" }],
  ["path", { d: "m4.93 10.93 1.41 1.41" }],
  ["path", { d: "M2 18h2" }],
  ["path", { d: "M20 18h2" }],
  ["path", { d: "m19.07 10.93-1.41 1.41" }],
  ["path", { d: "M22 22H2" }],
  ["path", { d: "m8 6 4-4 4 4" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0" }]
];

// node_modules/lucide/dist/esm/icons/sun-snow.mjs
var SunSnow = [
  ["path", { d: "M10 21v-1" }],
  ["path", { d: "M10 4V3" }],
  ["path", { d: "M10 9a3 3 0 0 0 0 6" }],
  ["path", { d: "m14 20 1.25-2.5L18 18" }],
  ["path", { d: "m14 4 1.25 2.5L18 6" }],
  ["path", { d: "m17 21-3-6 1.5-3H22" }],
  ["path", { d: "m17 3-3 6 1.5 3" }],
  ["path", { d: "M2 12h1" }],
  ["path", { d: "m20 10-1.5 2 1.5 2" }],
  ["path", { d: "m3.64 18.36.7-.7" }],
  ["path", { d: "m4.34 6.34-.7-.7" }]
];

// node_modules/lucide/dist/esm/icons/sunset.mjs
var Sunset = [
  ["path", { d: "M12 10V2" }],
  ["path", { d: "m4.93 10.93 1.41 1.41" }],
  ["path", { d: "M2 18h2" }],
  ["path", { d: "M20 18h2" }],
  ["path", { d: "m19.07 10.93-1.41 1.41" }],
  ["path", { d: "M22 22H2" }],
  ["path", { d: "m16 6-4 4-4-4" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0" }]
];

// node_modules/lucide/dist/esm/icons/superscript.mjs
var Superscript = [
  ["path", { d: "m4 19 8-8" }],
  ["path", { d: "m12 19-8-8" }],
  [
    "path",
    {
      d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/swatch-book.mjs
var SwatchBook = [
  ["path", { d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" }],
  ["path", { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" }],
  ["path", { d: "M 7 17h.01" }],
  [
    "path",
    { d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" }
  ]
];

// node_modules/lucide/dist/esm/icons/swiss-franc.mjs
var SwissFranc = [
  ["path", { d: "M10 21V3h8" }],
  ["path", { d: "M6 16h9" }],
  ["path", { d: "M10 9.5h7" }]
];

// node_modules/lucide/dist/esm/icons/switch-camera.mjs
var SwitchCamera = [
  ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }],
  ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }],
  ["circle", { cx: "12", cy: "12", r: "3" }],
  ["path", { d: "m18 22-3-3 3-3" }],
  ["path", { d: "m6 2 3 3-3 3" }]
];

// node_modules/lucide/dist/esm/icons/sword.mjs
var Sword = [
  ["path", { d: "m11 19-6-6" }],
  ["path", { d: "m5 21-2-2" }],
  ["path", { d: "m8 16-4 4" }],
  ["path", { d: "M9.5 17.5 20.414 6.586A2 2 0 0021 5.172V3h-2.172a2 2 0 00-1.414.586L6.5 14.5" }]
];

// node_modules/lucide/dist/esm/icons/swords.mjs
var Swords = [
  ["path", { d: "m13 19 6-6" }],
  ["path", { d: "M14.5 17.5 3.586 6.586A2 2 0 013 5.172V3h2.172a2 2 0 011.414.586L17.5 14.5" }],
  [
    "path",
    { d: "m14.828 6.172 2.586-2.586A2 2 0 0118.828 3H21v2.172a2 2 0 01-.586 1.414l-2.586 2.586" }
  ],
  ["path", { d: "m16 16 4 4" }],
  ["path", { d: "m19 21 2-2" }],
  ["path", { d: "m5 14 4 4" }],
  ["path", { d: "m5 21-2-2" }],
  ["path", { d: "M7.5 16.5 4 20" }]
];

// node_modules/lucide/dist/esm/icons/syringe.mjs
var Syringe = [
  ["path", { d: "m18 2 4 4" }],
  ["path", { d: "m17 7 3-3" }],
  ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" }],
  ["path", { d: "m9 11 4 4" }],
  ["path", { d: "m5 19-3 3" }],
  ["path", { d: "m14 4 6 6" }]
];

// node_modules/lucide/dist/esm/icons/table-2.mjs
var Table2 = [
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M9 3v18" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/table-cells-merge.mjs
var TableCellsMerge = [
  ["path", { d: "M12 21v-6" }],
  ["path", { d: "M12 9V3" }],
  ["path", { d: "M3 15h18" }],
  ["path", { d: "M3 9h18" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/table-cells-split.mjs
var TableCellsSplit = [
  ["path", { d: "M12 15V9" }],
  ["path", { d: "M3 15h18" }],
  ["path", { d: "M3 9h18" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/table-columns-split.mjs
var TableColumnsSplit = [
  ["path", { d: "M14 14v2" }],
  ["path", { d: "M14 20v2" }],
  ["path", { d: "M14 2v2" }],
  ["path", { d: "M14 8v2" }],
  ["path", { d: "M2 15h8" }],
  ["path", { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }],
  ["path", { d: "M2 9h8" }],
  ["path", { d: "M22 15h-4" }],
  ["path", { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }],
  ["path", { d: "M22 9h-4" }],
  ["path", { d: "M5 3v18" }]
];

// node_modules/lucide/dist/esm/icons/table-of-contents.mjs
var TableOfContents = [
  ["path", { d: "M16 5H3" }],
  ["path", { d: "M16 12H3" }],
  ["path", { d: "M16 19H3" }],
  ["path", { d: "M21 5h.01" }],
  ["path", { d: "M21 12h.01" }],
  ["path", { d: "M21 19h.01" }]
];

// node_modules/lucide/dist/esm/icons/table-properties.mjs
var TableProperties = [
  ["path", { d: "M15 3v18" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M21 9H3" }],
  ["path", { d: "M21 15H3" }]
];

// node_modules/lucide/dist/esm/icons/table-rows-split.mjs
var TableRowsSplit = [
  ["path", { d: "M14 10h2" }],
  ["path", { d: "M15 22v-8" }],
  ["path", { d: "M15 2v4" }],
  ["path", { d: "M2 10h2" }],
  ["path", { d: "M20 10h2" }],
  ["path", { d: "M3 19h18" }],
  ["path", { d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" }],
  ["path", { d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" }],
  ["path", { d: "M8 10h2" }],
  ["path", { d: "M9 22v-8" }],
  ["path", { d: "M9 2v4" }]
];

// node_modules/lucide/dist/esm/icons/table.mjs
var Table = [
  ["path", { d: "M12 3v18" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M3 9h18" }],
  ["path", { d: "M3 15h18" }]
];

// node_modules/lucide/dist/esm/icons/tablet.mjs
var Tablet = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18" }]
];

// node_modules/lucide/dist/esm/icons/tablet-smartphone.mjs
var TabletSmartphone = [
  ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2" }],
  ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }],
  ["path", { d: "M8 18h.01" }]
];

// node_modules/lucide/dist/esm/icons/tablets.mjs
var Tablets = [
  ["circle", { cx: "7", cy: "7", r: "5" }],
  ["circle", { cx: "17", cy: "17", r: "5" }],
  ["path", { d: "M12 17h10" }],
  ["path", { d: "m3.46 10.54 7.08-7.08" }]
];

// node_modules/lucide/dist/esm/icons/tag-plus.mjs
var TagPlus = [
  ["path", { d: "M16 13h6" }],
  [
    "path",
    {
      d: "m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79"
    }
  ],
  ["path", { d: "M19 10v6" }],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }]
];

// node_modules/lucide/dist/esm/icons/tag-x.mjs
var TagX = [
  [
    "path",
    {
      d: "m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.43 2.43 0 0 0 3.42 0l1.79-1.79"
    }
  ],
  ["path", { d: "m16.5 10.5 5 5" }],
  ["path", { d: "m21.5 10.5-5 5" }],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }]
];

// node_modules/lucide/dist/esm/icons/tag.mjs
var Tag = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }]
];

// node_modules/lucide/dist/esm/icons/tags.mjs
var Tags = [
  [
    "path",
    {
      d: "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"
    }
  ],
  ["path", { d: "M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" }],
  ["circle", { cx: "10.5", cy: "6.5", r: ".5", fill: "currentColor" }]
];

// node_modules/lucide/dist/esm/icons/tally-1.mjs
var Tally1 = [["path", { d: "M4 4v16" }]];

// node_modules/lucide/dist/esm/icons/tally-2.mjs
var Tally2 = [
  ["path", { d: "M4 4v16" }],
  ["path", { d: "M9 4v16" }]
];

// node_modules/lucide/dist/esm/icons/tally-3.mjs
var Tally3 = [
  ["path", { d: "M4 4v16" }],
  ["path", { d: "M9 4v16" }],
  ["path", { d: "M14 4v16" }]
];

// node_modules/lucide/dist/esm/icons/tally-4.mjs
var Tally4 = [
  ["path", { d: "M4 4v16" }],
  ["path", { d: "M9 4v16" }],
  ["path", { d: "M14 4v16" }],
  ["path", { d: "M19 4v16" }]
];

// node_modules/lucide/dist/esm/icons/tally-5.mjs
var Tally5 = [
  ["path", { d: "M4 4v16" }],
  ["path", { d: "M9 4v16" }],
  ["path", { d: "M14 4v16" }],
  ["path", { d: "M19 4v16" }],
  ["path", { d: "M22 6 2 18" }]
];

// node_modules/lucide/dist/esm/icons/tangent.mjs
var Tangent = [
  ["circle", { cx: "17", cy: "4", r: "2" }],
  ["path", { d: "M15.59 5.41 5.41 15.59" }],
  ["circle", { cx: "4", cy: "17", r: "2" }],
  ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12" }]
];

// node_modules/lucide/dist/esm/icons/telescope.mjs
var Telescope = [
  [
    "path",
    {
      d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
    }
  ],
  ["path", { d: "m13.56 11.747 4.332-.924" }],
  ["path", { d: "m16 21-3.105-6.21" }],
  [
    "path",
    {
      d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
    }
  ],
  ["path", { d: "m6.158 8.633 1.114 4.456" }],
  ["path", { d: "m8 21 3.105-6.21" }],
  ["circle", { cx: "12", cy: "13", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/target.mjs
var Target = [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["circle", { cx: "12", cy: "12", r: "6" }],
  ["circle", { cx: "12", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/tent-tree.mjs
var TentTree = [
  ["circle", { cx: "4", cy: "4", r: "2" }],
  ["path", { d: "m14 5 3-3 3 3" }],
  ["path", { d: "m14 10 3-3 3 3" }],
  ["path", { d: "M17 14V2" }],
  ["path", { d: "M17 14H7l-5 8h20Z" }],
  ["path", { d: "M8 14v8" }],
  ["path", { d: "m9 14 5 8" }]
];

// node_modules/lucide/dist/esm/icons/tent.mjs
var Tent = [
  ["path", { d: "M3.5 21 14 3" }],
  ["path", { d: "M20.5 21 10 3" }],
  ["path", { d: "M15.5 21 12 15l-3.5 6" }],
  ["path", { d: "M2 21h20" }]
];

// node_modules/lucide/dist/esm/icons/terminal.mjs
var Terminal = [
  ["path", { d: "M12 19h8" }],
  ["path", { d: "m4 17 6-6-6-6" }]
];

// node_modules/lucide/dist/esm/icons/test-tube-diagonal.mjs
var TestTubeDiagonal = [
  ["path", { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" }],
  ["path", { d: "m16 2 6 6" }],
  ["path", { d: "M12 16H4" }]
];

// node_modules/lucide/dist/esm/icons/test-tube.mjs
var TestTube = [
  ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" }],
  ["path", { d: "M8.5 2h7" }],
  ["path", { d: "M14.5 16h-5" }]
];

// node_modules/lucide/dist/esm/icons/test-tubes.mjs
var TestTubes = [
  ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }],
  ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }],
  ["path", { d: "M3 2h7" }],
  ["path", { d: "M14 2h7" }],
  ["path", { d: "M9 16H4" }],
  ["path", { d: "M20 16h-5" }]
];

// node_modules/lucide/dist/esm/icons/text-align-center.mjs
var TextAlignCenter = [
  ["path", { d: "M21 5H3" }],
  ["path", { d: "M17 12H7" }],
  ["path", { d: "M19 19H5" }]
];

// node_modules/lucide/dist/esm/icons/text-align-end.mjs
var TextAlignEnd = [
  ["path", { d: "M21 5H3" }],
  ["path", { d: "M21 12H9" }],
  ["path", { d: "M21 19H7" }]
];

// node_modules/lucide/dist/esm/icons/text-align-justify.mjs
var TextAlignJustify = [
  ["path", { d: "M3 5h18" }],
  ["path", { d: "M3 12h18" }],
  ["path", { d: "M3 19h18" }]
];

// node_modules/lucide/dist/esm/icons/text-align-start.mjs
var TextAlignStart = [
  ["path", { d: "M21 5H3" }],
  ["path", { d: "M15 12H3" }],
  ["path", { d: "M17 19H3" }]
];

// node_modules/lucide/dist/esm/icons/text-cursor-input.mjs
var TextCursorInput = [
  ["path", { d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" }],
  ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }],
  ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }],
  ["path", { d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" }],
  ["path", { d: "M9 6v12" }]
];

// node_modules/lucide/dist/esm/icons/text-cursor.mjs
var TextCursor = [
  ["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }],
  ["path", { d: "M7 22h1a4 4 0 0 0 4-4" }],
  ["path", { d: "M7 2h1a4 4 0 0 1 4 4" }]
];

// node_modules/lucide/dist/esm/icons/text-initial.mjs
var TextInitial = [
  ["path", { d: "M15 5h6" }],
  ["path", { d: "M15 12h6" }],
  ["path", { d: "M3 19h18" }],
  ["path", { d: "m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" }],
  ["path", { d: "M3.92 10h6.16" }]
];

// node_modules/lucide/dist/esm/icons/text-quote.mjs
var TextQuote = [
  ["path", { d: "M17 5H3" }],
  ["path", { d: "M21 12H8" }],
  ["path", { d: "M21 19H8" }],
  ["path", { d: "M3 12v7" }]
];

// node_modules/lucide/dist/esm/icons/text-search.mjs
var TextSearch = [
  ["path", { d: "M21 5H3" }],
  ["path", { d: "M10 12H3" }],
  ["path", { d: "M10 19H3" }],
  ["circle", { cx: "17", cy: "15", r: "3" }],
  ["path", { d: "m21 19-1.9-1.9" }]
];

// node_modules/lucide/dist/esm/icons/text-wrap.mjs
var TextWrap = [
  ["path", { d: "m16 16-3 3 3 3" }],
  ["path", { d: "M3 12h14.5a1 1 0 0 1 0 7H13" }],
  ["path", { d: "M3 19h6" }],
  ["path", { d: "M3 5h18" }]
];

// node_modules/lucide/dist/esm/icons/theater.mjs
var Theater = [
  ["path", { d: "M2 10s3-3 3-8" }],
  ["path", { d: "M22 10s-3-3-3-8" }],
  ["path", { d: "M10 2c0 4.4-3.6 8-8 8" }],
  ["path", { d: "M14 2c0 4.4 3.6 8 8 8" }],
  ["path", { d: "M2 10s2 2 2 5" }],
  ["path", { d: "M22 10s-2 2-2 5" }],
  ["path", { d: "M8 15h8" }],
  ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }],
  ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }]
];

// node_modules/lucide/dist/esm/icons/thermometer-snowflake.mjs
var ThermometerSnowflake = [
  ["path", { d: "m10 20-1.25-2.5L6 18" }],
  ["path", { d: "M10 4 8.75 6.5 6 6" }],
  ["path", { d: "M10.585 15H10" }],
  ["path", { d: "M2 12h6.5L10 9" }],
  ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }],
  ["path", { d: "m4 10 1.5 2L4 14" }],
  ["path", { d: "m7 21 3-6-1.5-3" }],
  ["path", { d: "m7 3 3 6h2" }]
];

// node_modules/lucide/dist/esm/icons/thermometer-sun.mjs
var ThermometerSun = [
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 8a4 4 0 0 0-1.645 7.647" }],
  ["path", { d: "M2 12h2" }],
  ["path", { d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }],
  ["path", { d: "m4.93 4.93 1.41 1.41" }],
  ["path", { d: "m6.34 17.66-1.41 1.41" }]
];

// node_modules/lucide/dist/esm/icons/thermometer.mjs
var Thermometer = [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]];

// node_modules/lucide/dist/esm/icons/thumbs-down.mjs
var ThumbsDown = [
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
    }
  ],
  ["path", { d: "M17 14V2" }]
];

// node_modules/lucide/dist/esm/icons/thumbs-up.mjs
var ThumbsUp = [
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
    }
  ],
  ["path", { d: "M7 10v12" }]
];

// node_modules/lucide/dist/esm/icons/tic-tac-toe.mjs
var TicTacToe = [
  ["path", { d: "M12 2v20" }],
  ["path", { d: "m21 16-5 5" }],
  ["path", { d: "m21 21-5-5" }],
  ["path", { d: "M22 12H2" }],
  ["path", { d: "M8 3 3 8" }],
  ["path", { d: "M8 8 3 3" }],
  ["circle", { cx: "18.5", cy: "5.5", r: "2.5" }],
  ["circle", { cx: "5.5", cy: "18.5", r: "2.5" }]
];

// node_modules/lucide/dist/esm/icons/ticket-check.mjs
var TicketCheck = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/ticket-minus.mjs
var TicketMinus = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }
  ],
  ["path", { d: "M9 12h6" }]
];

// node_modules/lucide/dist/esm/icons/ticket-percent.mjs
var TicketPercent = [
  [
    "path",
    {
      d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }
  ],
  ["path", { d: "M9 9h.01" }],
  ["path", { d: "m15 9-6 6" }],
  ["path", { d: "M15 15h.01" }]
];

// node_modules/lucide/dist/esm/icons/ticket-plus.mjs
var TicketPlus = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }
  ],
  ["path", { d: "M9 12h6" }],
  ["path", { d: "M12 9v6" }]
];

// node_modules/lucide/dist/esm/icons/ticket-slash.mjs
var TicketSlash = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }
  ],
  ["path", { d: "m9.5 14.5 5-5" }]
];

// node_modules/lucide/dist/esm/icons/ticket-x.mjs
var TicketX = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }
  ],
  ["path", { d: "m9.5 14.5 5-5" }],
  ["path", { d: "m9.5 9.5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/ticket.mjs
var Ticket = [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }
  ],
  ["path", { d: "M13 5v2" }],
  ["path", { d: "M13 17v2" }],
  ["path", { d: "M13 11v2" }]
];

// node_modules/lucide/dist/esm/icons/tickets-plane.mjs
var TicketsPlane = [
  ["path", { d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" }],
  ["path", { d: "m12 13.5 3.794.506" }],
  ["path", { d: "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" }],
  ["path", { d: "M6 10V8" }],
  ["path", { d: "M6 14v1" }],
  ["path", { d: "M6 19v2" }],
  ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/timeline.mjs
var Timeline = [
  ["path", { d: "M4 12h.01" }],
  ["path", { d: "M4 16h.01" }],
  ["path", { d: "M4 20h.01" }],
  ["path", { d: "M4 4h.01" }],
  ["path", { d: "M4 8h.01" }],
  [
    "path",
    {
      d: "M9.414 13.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 12z"
    }
  ],
  [
    "path",
    {
      d: "M9.414 21.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 20z"
    }
  ],
  [
    "path",
    {
      d: "M9.414 5.414A2 2 0 0 0 10.828 6H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 4z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/tickets.mjs
var Tickets = [
  ["path", { d: "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" }],
  ["path", { d: "M6 10V8" }],
  ["path", { d: "M6 14v1" }],
  ["path", { d: "M6 19v2" }],
  ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/timer-off.mjs
var TimerOff = [
  ["path", { d: "M10 2h4" }],
  ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }],
  ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M12 12v-2" }]
];

// node_modules/lucide/dist/esm/icons/timer-reset.mjs
var TimerReset = [
  ["path", { d: "M10 2h4" }],
  ["path", { d: "M12 14v-4" }],
  ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }],
  ["path", { d: "M9 17H4v5" }]
];

// node_modules/lucide/dist/esm/icons/timer.mjs
var Timer = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11" }],
  ["circle", { cx: "12", cy: "14", r: "8" }]
];

// node_modules/lucide/dist/esm/icons/toggle-left.mjs
var ToggleLeft = [
  ["circle", { cx: "9", cy: "12", r: "3" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7" }]
];

// node_modules/lucide/dist/esm/icons/toggle-right.mjs
var ToggleRight = [
  ["circle", { cx: "15", cy: "12", r: "3" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7" }]
];

// node_modules/lucide/dist/esm/icons/toilet.mjs
var Toilet = [
  [
    "path",
    {
      d: "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"
    }
  ],
  ["path", { d: "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" }]
];

// node_modules/lucide/dist/esm/icons/tool-case.mjs
var ToolCase = [
  ["path", { d: "M10 15h4" }],
  [
    "path",
    {
      d: "m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27"
    }
  ],
  [
    "path",
    {
      d: "m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122"
    }
  ],
  ["path", { d: "M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }]
];

// node_modules/lucide/dist/esm/icons/toolbox.mjs
var Toolbox = [
  ["path", { d: "M16 12v4" }],
  ["path", { d: "M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" }],
  [
    "path",
    {
      d: "M17 6a2 2 0 011.414.586l3 3A2 2 0 0122 11v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 01.586-1.414l3-3A2 2 0 017 6z"
    }
  ],
  ["path", { d: "M2 14h20" }],
  ["path", { d: "M8 12v4" }]
];

// node_modules/lucide/dist/esm/icons/toothbrush-sparkles.mjs
var ToothbrushSparkles = [
  ["path", { d: "M10 3H8" }],
  ["path", { d: "M14.586 11.414 22 4" }],
  ["path", { d: "M15 11a8 8 0 01-.429.4" }],
  [
    "path",
    {
      d: "m2 22 7-7c1.857-1.857 3.714-1.99 5.571-3.6l-1.985-1.986A2 2 0 0114 6a2 2 0 012-2 2 2 0 013.262-1.552l2.152 2.138"
    }
  ],
  ["path", { d: "M20 15v4" }],
  ["path", { d: "M22 17h-4" }],
  ["path", { d: "M4 5v4" }],
  ["path", { d: "M6 7H2" }],
  ["path", { d: "M9 2v2" }]
];

// node_modules/lucide/dist/esm/icons/tornado.mjs
var Tornado = [
  ["path", { d: "M21 4H3" }],
  ["path", { d: "M18 8H6" }],
  ["path", { d: "M19 12H9" }],
  ["path", { d: "M16 16h-6" }],
  ["path", { d: "M11 20H9" }]
];

// node_modules/lucide/dist/esm/icons/torus.mjs
var Torus = [
  ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2" }],
  ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5" }]
];

// node_modules/lucide/dist/esm/icons/toothbrush.mjs
var Toothbrush = [
  ["path", { d: "M15 11c-2 2-4 2-6 4l-7 7" }],
  [
    "path",
    {
      d: "m22 4-7.414 7.414-2-2A2 2 0 0114 6c0-.512.196-1.024.586-1.414A2 2 0 0116 4a2 2 0 013.262-1.552l2.152 2.138"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/touchpad-off.mjs
var TouchpadOff = [
  ["path", { d: "M12 20v-6" }],
  ["path", { d: "M19.656 14H22" }],
  ["path", { d: "M2 14h12" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }],
  ["path", { d: "M9.656 4H20a2 2 0 0 1 2 2v10.344" }]
];

// node_modules/lucide/dist/esm/icons/towel-rack.mjs
var TowelRack = [
  ["path", { d: "M22 7h-2" }],
  [
    "path",
    {
      d: "M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4"
    }
  ],
  ["path", { d: "M9 7H2" }]
];

// node_modules/lucide/dist/esm/icons/touchpad.mjs
var Touchpad = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
  ["path", { d: "M2 14h20" }],
  ["path", { d: "M12 20v-6" }]
];

// node_modules/lucide/dist/esm/icons/tower-control.mjs
var TowerControl = [
  ["path", { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" }],
  ["path", { d: "M8 13v9" }],
  ["path", { d: "M16 22v-9" }],
  ["path", { d: "m9 6 1 7" }],
  ["path", { d: "m15 6-1 7" }],
  ["path", { d: "M12 6V2" }],
  ["path", { d: "M13 2h-2" }]
];

// node_modules/lucide/dist/esm/icons/toy-brick.mjs
var ToyBrick = [
  ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1" }],
  ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }],
  ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }]
];

// node_modules/lucide/dist/esm/icons/tractor.mjs
var Tractor = [
  ["path", { d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" }],
  ["path", { d: "M16 18h-5" }],
  ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573" }],
  ["path", { d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" }],
  ["path", { d: "M4 11V4" }],
  ["path", { d: "M7 15h.01" }],
  ["path", { d: "M8 10.1V4" }],
  ["circle", { cx: "18", cy: "18", r: "2" }],
  ["circle", { cx: "7", cy: "15", r: "5" }]
];

// node_modules/lucide/dist/esm/icons/traffic-cone.mjs
var TrafficCone = [
  ["path", { d: "M16.05 10.966a5 2.5 0 0 1-8.1 0" }],
  [
    "path",
    {
      d: "m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04"
    }
  ],
  ["path", { d: "M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" }],
  ["path", { d: "M9.194 6.57a5 2.5 0 0 0 5.61 0" }]
];

// node_modules/lucide/dist/esm/icons/trailer.mjs
var Trailer = [
  ["path", { d: "M10 11.341V10" }],
  ["path", { d: "M14 13v-3" }],
  ["path", { d: "M18 17V8a2 2 0 00-2-2H4a2 2 0 00-2 2v7a2 2 0 002 2h2" }],
  ["path", { d: "M22 15v1a1 1 0 01-1 1H10" }],
  ["path", { d: "M6 11.341V10" }],
  ["circle", { cx: "8", cy: "17", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/train-front-tunnel.mjs
var TrainFrontTunnel = [
  ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10" }],
  ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }],
  ["path", { d: "M10 15h.01" }],
  ["path", { d: "M14 15h.01" }],
  ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }],
  ["path", { d: "m9 19-2 3" }],
  ["path", { d: "m15 19 2 3" }]
];

// node_modules/lucide/dist/esm/icons/train-front.mjs
var TrainFront = [
  ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1" }],
  ["path", { d: "m9 15-1-1" }],
  ["path", { d: "m15 15 1-1" }],
  ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }],
  ["path", { d: "m8 19-2 3" }],
  ["path", { d: "m16 19 2 3" }]
];

// node_modules/lucide/dist/esm/icons/tram-front.mjs
var TramFront = [
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }],
  ["path", { d: "M4 11h16" }],
  ["path", { d: "M12 3v8" }],
  ["path", { d: "m8 19-2 3" }],
  ["path", { d: "m18 22-2-3" }],
  ["path", { d: "M8 15h.01" }],
  ["path", { d: "M16 15h.01" }]
];

// node_modules/lucide/dist/esm/icons/train-track.mjs
var TrainTrack = [
  ["path", { d: "M2 17 17 2" }],
  ["path", { d: "m2 14 8 8" }],
  ["path", { d: "m5 11 8 8" }],
  ["path", { d: "m8 8 8 8" }],
  ["path", { d: "m11 5 8 8" }],
  ["path", { d: "m14 2 8 8" }],
  ["path", { d: "M7 22 22 7" }]
];

// node_modules/lucide/dist/esm/icons/transgender.mjs
var Transgender = [
  ["path", { d: "M12 16v6" }],
  ["path", { d: "M14 20h-4" }],
  ["path", { d: "M18 2h4v4" }],
  ["path", { d: "m2 2 7.17 7.17" }],
  ["path", { d: "M2 5.355V2h3.357" }],
  ["path", { d: "m22 2-7.17 7.17" }],
  ["path", { d: "M8 5 5 8" }],
  ["circle", { cx: "12", cy: "12", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/trash-off.mjs
var TrashOff = [
  ["path", { d: "M10 11v6" }],
  ["path", { d: "M14 17v-3" }],
  ["path", { d: "M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-1.576.768" }],
  ["path", { d: "M19 6v7.344" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M21 6h-9.344" }],
  ["path", { d: "M3 6h3" }],
  ["path", { d: "M5 6v14a2 2 0 002 2h10a2 2 0 002-2v-1" }]
];

// node_modules/lucide/dist/esm/icons/trash.mjs
var Trash = [
  ["path", { d: "M10 11v6" }],
  ["path", { d: "M14 11v6" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
  ["path", { d: "M3 6h18" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
];

// node_modules/lucide/dist/esm/icons/tree-deciduous.mjs
var TreeDeciduous = [
  [
    "path",
    {
      d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"
    }
  ],
  ["path", { d: "M12 19v3" }]
];

// node_modules/lucide/dist/esm/icons/tree-palm.mjs
var TreePalm = [
  ["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }],
  ["path", { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" }],
  [
    "path",
    {
      d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"
    }
  ],
  ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" }]
];

// node_modules/lucide/dist/esm/icons/tree-pine.mjs
var TreePine = [
  [
    "path",
    {
      d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
    }
  ],
  ["path", { d: "M12 22v-3" }]
];

// node_modules/lucide/dist/esm/icons/trees.mjs
var Trees = [
  ["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }],
  ["path", { d: "M7 16v6" }],
  ["path", { d: "M13 19v3" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/trending-down.mjs
var TrendingDown = [
  ["path", { d: "M16 17h6v-6" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7" }]
];

// node_modules/lucide/dist/esm/icons/trending-up-down.mjs
var TrendingUpDown = [
  ["path", { d: "M14.828 14.828 21 21" }],
  ["path", { d: "M21 16v5h-5" }],
  ["path", { d: "m21 3-9 9-4-4-6 6" }],
  ["path", { d: "M21 8V3h-5" }]
];

// node_modules/lucide/dist/esm/icons/trending-up.mjs
var TrendingUp = [
  ["path", { d: "M16 7h6v6" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17" }]
];

// node_modules/lucide/dist/esm/icons/triangle-alert.mjs
var TriangleAlert = [
  ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }],
  ["path", { d: "M12 9v4" }],
  ["path", { d: "M12 17h.01" }]
];

// node_modules/lucide/dist/esm/icons/triangle-dashed.mjs
var TriangleDashed = [
  ["path", { d: "M10.17 4.193a2 2 0 0 1 3.666.013" }],
  ["path", { d: "M14 21h2" }],
  ["path", { d: "m15.874 7.743 1 1.732" }],
  ["path", { d: "m18.849 12.952 1 1.732" }],
  ["path", { d: "M21.824 18.18a2 2 0 0 1-1.835 2.824" }],
  ["path", { d: "M4.024 21a2 2 0 0 1-1.839-2.839" }],
  ["path", { d: "m5.136 12.952-1 1.732" }],
  ["path", { d: "M8 21h2" }],
  ["path", { d: "m8.102 7.743-1 1.732" }]
];

// node_modules/lucide/dist/esm/icons/triangle-right.mjs
var TriangleRight = [
  ["path", { d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" }]
];

// node_modules/lucide/dist/esm/icons/triangle.mjs
var Triangle = [
  ["path", { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }]
];

// node_modules/lucide/dist/esm/icons/triangles-centerline-dashed-horizontal.mjs
var TrianglesCenterlineDashedHorizontal = [
  ["path", { d: "M10 12H8" }],
  ["path", { d: "M16 12h-2" }],
  ["path", { d: "M22 12h-2" }],
  ["path", { d: "M4 12H2" }],
  [
    "path",
    { d: "M7.298 20.288A1 1 0 008 22h8a1 1 0 00.703-1.712l-3.991-3.99a1 1 0 00-1.424-.001z" }
  ],
  ["path", { d: "M7.298 3.712A1 1 0 018 2h8a1 1 0 01.703 1.712l-3.991 3.99a1 1 0 01-1.424.001z" }]
];

// node_modules/lucide/dist/esm/icons/triangles-centerline-dashed-vertical.mjs
var TrianglesCenterlineDashedVertical = [
  ["path", { d: "M12 14v2" }],
  ["path", { d: "M12 20v2" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 8v2" }],
  [
    "path",
    { d: "M20.288 16.703A1 1 0 0022 16V8a1 1 0 00-1.712-.703l-3.99 3.991a1 1 0 00-.001 1.424z" }
  ],
  ["path", { d: "M3.712 16.703A1 1 0 012 16V8a1 1 0 011.712-.703l3.99 3.991a1 1 0 01.001 1.424z" }]
];

// node_modules/lucide/dist/esm/icons/trophy.mjs
var Trophy = [
  ["path", { d: "M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" }],
  ["path", { d: "M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" }],
  ["path", { d: "M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" }],
  ["path", { d: "M4 22h16" }],
  ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" }],
  ["path", { d: "M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" }]
];

// node_modules/lucide/dist/esm/icons/truck-electric.mjs
var TruckElectric = [
  ["path", { d: "M14 19V7a2 2 0 0 0-2-2H9" }],
  ["path", { d: "M15 19H9" }],
  ["path", { d: "M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" }],
  ["path", { d: "M2 13v5a1 1 0 0 0 1 1h2" }],
  ["path", { d: "M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" }],
  ["circle", { cx: "17", cy: "19", r: "2" }],
  ["circle", { cx: "7", cy: "19", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/truck.mjs
var Truck = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }],
  ["path", { d: "M15 18H9" }],
  [
    "path",
    { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }
  ],
  ["circle", { cx: "17", cy: "18", r: "2" }],
  ["circle", { cx: "7", cy: "18", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/tube-lotion.mjs
var TubeLotion = [
  ["path", { d: "M15 18v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3" }],
  [
    "path",
    {
      d: "M17 2a2 2 0 0 1 1.6 3.2A8 8 0 0 0 17 10v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6a8 8 0 0 0-1.6-4.8A2 2 0 0 1 7 2z"
    }
  ],
  ["path", { d: "M7 10a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }]
];

// node_modules/lucide/dist/esm/icons/turkish-lira.mjs
var TurkishLira = [
  ["path", { d: "M15 4 5 9" }],
  ["path", { d: "m15 8.5-10 5" }],
  ["path", { d: "M18 12a9 9 0 0 1-9 9V3" }]
];

// node_modules/lucide/dist/esm/icons/turntable.mjs
var Turntable = [
  ["path", { d: "M10 12.01h.01" }],
  ["path", { d: "M18 8v4a8 8 0 0 1-1.07 4" }],
  ["circle", { cx: "10", cy: "12", r: "4" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/turtle.mjs
var Turtle = [
  [
    "path",
    {
      d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
    }
  ],
  ["path", { d: "M4.82 7.9 8 10" }],
  ["path", { d: "M15.18 7.9 12 10" }],
  ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2" }]
];

// node_modules/lucide/dist/esm/icons/tv-minimal-play.mjs
var TvMinimalPlay = [
  [
    "path",
    {
      d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"
    }
  ],
  ["path", { d: "M7 21h10" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/tv-minimal.mjs
var TvMinimal = [
  ["path", { d: "M7 21h10" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/tv.mjs
var Tv = [
  ["path", { d: "m17 2-5 5-5-5" }],
  ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/type-outline.mjs
var TypeOutline = [
  [
    "path",
    {
      d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/type.mjs
var Type = [
  ["path", { d: "M12 4v16" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }],
  ["path", { d: "M9 20h6" }]
];

// node_modules/lucide/dist/esm/icons/umbrella-off.mjs
var UmbrellaOff = [
  ["path", { d: "M12 13v7a2 2 0 0 0 4 0" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" }]
];

// node_modules/lucide/dist/esm/icons/umbrella.mjs
var Umbrella = [
  ["path", { d: "M12 13v7a2 2 0 0 0 4 0" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" }]
];

// node_modules/lucide/dist/esm/icons/undo-2.mjs
var Undo2 = [
  ["path", { d: "M9 14 4 9l5-5" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" }]
];

// node_modules/lucide/dist/esm/icons/underline.mjs
var Underline = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20" }]
];

// node_modules/lucide/dist/esm/icons/undo-dot.mjs
var UndoDot = [
  ["path", { d: "M21 17a9 9 0 0 0-15-6.7L3 13" }],
  ["path", { d: "M3 7v6h6" }],
  ["circle", { cx: "12", cy: "17", r: "1" }]
];

// node_modules/lucide/dist/esm/icons/undo.mjs
var Undo = [
  ["path", { d: "M3 7v6h6" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]
];

// node_modules/lucide/dist/esm/icons/unfold-horizontal.mjs
var UnfoldHorizontal = [
  ["path", { d: "M16 12h6" }],
  ["path", { d: "M8 12H2" }],
  ["path", { d: "M12 2v2" }],
  ["path", { d: "M12 8v2" }],
  ["path", { d: "M12 14v2" }],
  ["path", { d: "M12 20v2" }],
  ["path", { d: "m19 15 3-3-3-3" }],
  ["path", { d: "m5 9-3 3 3 3" }]
];

// node_modules/lucide/dist/esm/icons/unfold-vertical.mjs
var UnfoldVertical = [
  ["path", { d: "M12 22v-6" }],
  ["path", { d: "M12 8V2" }],
  ["path", { d: "M4 12H2" }],
  ["path", { d: "M10 12H8" }],
  ["path", { d: "M16 12h-2" }],
  ["path", { d: "M22 12h-2" }],
  ["path", { d: "m15 19-3 3-3-3" }],
  ["path", { d: "m15 5-3-3-3 3" }]
];

// node_modules/lucide/dist/esm/icons/university.mjs
var University = [
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3" }],
  ["path", { d: "M18 12h.01" }],
  ["path", { d: "M18 16h.01" }],
  [
    "path",
    {
      d: "M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"
    }
  ],
  ["path", { d: "M6 12h.01" }],
  ["path", { d: "M6 16h.01" }],
  ["circle", { cx: "12", cy: "10", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/ungroup.mjs
var Ungroup = [
  ["rect", { x: "11", y: "14", width: "10", height: "7", rx: "2" }],
  ["rect", { x: "3", y: "3", width: "10", height: "7", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/unlink-2.mjs
var Unlink2 = [["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" }]];

// node_modules/lucide/dist/esm/icons/unplug.mjs
var Unplug = [
  ["path", { d: "m19 5 3-3" }],
  ["path", { d: "m2 22 3-3" }],
  ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }],
  ["path", { d: "M7.5 13.5 10 11" }],
  ["path", { d: "M10.5 16.5 13 14" }],
  ["path", { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" }]
];

// node_modules/lucide/dist/esm/icons/unlink.mjs
var Unlink = [
  [
    "path",
    {
      d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
    }
  ],
  [
    "path",
    { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }
  ],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "5" }],
  ["line", { x1: "2", x2: "5", y1: "8", y2: "8" }],
  ["line", { x1: "16", x2: "16", y1: "19", y2: "22" }],
  ["line", { x1: "19", x2: "22", y1: "16", y2: "16" }]
];

// node_modules/lucide/dist/esm/icons/upload.mjs
var Upload = [
  ["path", { d: "M12 3v12" }],
  ["path", { d: "m17 8-5-5-5 5" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]
];

// node_modules/lucide/dist/esm/icons/usb-c-port.mjs
var UsbCPort = [
  ["path", { d: "M6 12h12" }],
  ["rect", { x: "2", y: "8", width: "20", height: "8", rx: "4" }]
];

// node_modules/lucide/dist/esm/icons/usb.mjs
var Usb = [
  ["circle", { cx: "10", cy: "7", r: "1" }],
  ["circle", { cx: "4", cy: "20", r: "1" }],
  ["path", { d: "M4.7 19.3 19 5" }],
  ["path", { d: "m21 3-3 1 2 2Z" }],
  ["path", { d: "M9.26 7.68 5 12l2 5" }],
  ["path", { d: "m10 14 5 2 3.5-3.5" }],
  ["path", { d: "m18 12 1-1 1 1-1 1Z" }]
];

// node_modules/lucide/dist/esm/icons/user-check.mjs
var UserCheck = [
  ["path", { d: "m16 11 2 2 4-4" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
  ["circle", { cx: "9", cy: "7", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/user-cog.mjs
var UserCog = [
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }],
  ["path", { d: "m14.305 16.53.923-.382" }],
  ["path", { d: "m15.228 13.852-.923-.383" }],
  ["path", { d: "m16.852 12.228-.383-.923" }],
  ["path", { d: "m16.852 17.772-.383.924" }],
  ["path", { d: "m19.148 12.228.383-.923" }],
  ["path", { d: "m19.53 18.696-.382-.924" }],
  ["path", { d: "m20.772 13.852.924-.383" }],
  ["path", { d: "m20.772 16.148.924.383" }],
  ["circle", { cx: "18", cy: "15", r: "3" }],
  ["circle", { cx: "9", cy: "7", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/user-group.mjs
var UserGroup = [
  ["path", { d: "M17 21v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1" }],
  ["path", { d: "M19 10h1a2 2 0 012 2v1" }],
  ["path", { d: "M5 10H4a2 2 0 00-2 2v1" }],
  ["circle", { cx: "12", cy: "11", r: "3" }],
  ["circle", { cx: "18", cy: "4", r: "2" }],
  ["circle", { cx: "6", cy: "4", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/user-key.mjs
var UserKey = [
  ["path", { d: "M20 11v6" }],
  ["path", { d: "M20 13h2" }],
  ["path", { d: "M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" }],
  ["circle", { cx: "10", cy: "7", r: "4" }],
  ["circle", { cx: "20", cy: "19", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/user-lock.mjs
var UserLock = [
  ["path", { d: "M19 16v-2a2 2 0 0 0-4 0v2" }],
  ["path", { d: "M9.5 15H7a4 4 0 0 0-4 4v2" }],
  ["circle", { cx: "10", cy: "7", r: "4" }],
  ["rect", { x: "13", y: "16", width: "8", height: "5", rx: ".899" }]
];

// node_modules/lucide/dist/esm/icons/user-minus.mjs
var UserMinus = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
  ["circle", { cx: "9", cy: "7", r: "4" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
];

// node_modules/lucide/dist/esm/icons/user-pen.mjs
var UserPen = [
  ["path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }],
  [
    "path",
    {
      d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }
  ],
  ["circle", { cx: "10", cy: "7", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/user-plus.mjs
var UserPlus = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
  ["circle", { cx: "9", cy: "7", r: "4" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
];

// node_modules/lucide/dist/esm/icons/user-round-arrow-left.mjs
var UserRoundArrowLeft = [
  ["path", { d: "m19 16-3 3" }],
  ["path", { d: "M2 21a8 8 0 0 1 12.664-6.5" }],
  ["path", { d: "M22 19h-6l3 3" }],
  ["circle", { cx: "10", cy: "8", r: "5" }]
];

// node_modules/lucide/dist/esm/icons/user-round-check.mjs
var UserRoundCheck = [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
  ["circle", { cx: "10", cy: "8", r: "5" }],
  ["path", { d: "m16 19 2 2 4-4" }]
];

// node_modules/lucide/dist/esm/icons/user-round-cog.mjs
var UserRoundCog = [
  ["path", { d: "m14.305 19.53.923-.382" }],
  ["path", { d: "m15.228 16.852-.923-.383" }],
  ["path", { d: "m16.852 15.228-.383-.923" }],
  ["path", { d: "m16.852 20.772-.383.924" }],
  ["path", { d: "m19.148 15.228.383-.923" }],
  ["path", { d: "m19.53 21.696-.382-.924" }],
  ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }],
  ["path", { d: "m20.772 16.852.924-.383" }],
  ["path", { d: "m20.772 19.148.924.383" }],
  ["circle", { cx: "10", cy: "8", r: "5" }],
  ["circle", { cx: "18", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/user-round-group.mjs
var UserRoundGroup = [
  ["path", { d: "M17 21a5 5 0 00-10 0" }],
  ["path", { d: "M22 10.5a3.5 3.5 0 00-5.507-2.868" }],
  ["path", { d: "M7.507 7.632A3.5 3.5 0 002 10.5" }],
  ["circle", { cx: "12", cy: "13", r: "3" }],
  ["circle", { cx: "18.5", cy: "4.5", r: "2.5" }],
  ["circle", { cx: "5.5", cy: "4.5", r: "2.5" }]
];

// node_modules/lucide/dist/esm/icons/user-round-key.mjs
var UserRoundKey = [
  ["path", { d: "M19 11v6" }],
  ["path", { d: "M19 13h2" }],
  ["path", { d: "M2 21a8 8 0 0 1 12.868-6.349" }],
  ["circle", { cx: "10", cy: "8", r: "5" }],
  ["circle", { cx: "19", cy: "19", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/user-round-minus.mjs
var UserRoundMinus = [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
  ["circle", { cx: "10", cy: "8", r: "5" }],
  ["path", { d: "M22 19h-6" }]
];

// node_modules/lucide/dist/esm/icons/user-round-pen.mjs
var UserRoundPen = [
  ["path", { d: "M2 21a8 8 0 0 1 10.821-7.487" }],
  [
    "path",
    {
      d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }
  ],
  ["circle", { cx: "10", cy: "8", r: "5" }]
];

// node_modules/lucide/dist/esm/icons/user-round-plus.mjs
var UserRoundPlus = [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
  ["circle", { cx: "10", cy: "8", r: "5" }],
  ["path", { d: "M19 16v6" }],
  ["path", { d: "M22 19h-6" }]
];

// node_modules/lucide/dist/esm/icons/user-round-search.mjs
var UserRoundSearch = [
  ["circle", { cx: "10", cy: "8", r: "5" }],
  ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }],
  ["circle", { cx: "18", cy: "18", r: "3" }],
  ["path", { d: "m22 22-1.9-1.9" }]
];

// node_modules/lucide/dist/esm/icons/user-round-x.mjs
var UserRoundX = [
  ["path", { d: "m16.5 16.5 5 5" }],
  ["path", { d: "M2 21a8 8 0 0 1 11.531-7.18" }],
  ["path", { d: "m21.5 16.5-5 5" }],
  ["circle", { cx: "10", cy: "8", r: "5" }]
];

// node_modules/lucide/dist/esm/icons/user-round.mjs
var UserRound = [
  ["circle", { cx: "12", cy: "8", r: "5" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0" }]
];

// node_modules/lucide/dist/esm/icons/user-search.mjs
var UserSearch = [
  ["circle", { cx: "10", cy: "7", r: "4" }],
  ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2" }],
  ["circle", { cx: "17", cy: "17", r: "3" }],
  ["path", { d: "m21 21-1.9-1.9" }]
];

// node_modules/lucide/dist/esm/icons/user-shield.mjs
var UserShield = [
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }],
  [
    "path",
    {
      d: "M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z"
    }
  ],
  ["circle", { cx: "9", cy: "7", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/user-star.mjs
var UserStar = [
  [
    "path",
    {
      d: "M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"
    }
  ],
  ["path", { d: "M8 15H7a4 4 0 0 0-4 4v2" }],
  ["circle", { cx: "10", cy: "7", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/user-x.mjs
var UserX = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
  ["circle", { cx: "9", cy: "7", r: "4" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13" }]
];

// node_modules/lucide/dist/esm/icons/user.mjs
var User = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
  ["circle", { cx: "12", cy: "7", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/users-round.mjs
var UsersRound = [
  ["path", { d: "M18 21a8 8 0 0 0-16 0" }],
  ["circle", { cx: "10", cy: "8", r: "5" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }]
];

// node_modules/lucide/dist/esm/icons/users.mjs
var Users = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
  ["circle", { cx: "9", cy: "7", r: "4" }]
];

// node_modules/lucide/dist/esm/icons/utensils-crossed.mjs
var UtensilsCrossed = [
  ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }],
  ["path", { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" }],
  ["path", { d: "m2.1 21.8 6.4-6.3" }],
  ["path", { d: "m19 5-7 7" }]
];

// node_modules/lucide/dist/esm/icons/utensils.mjs
var Utensils = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }],
  ["path", { d: "M7 2v20" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }]
];

// node_modules/lucide/dist/esm/icons/utility-pole.mjs
var UtilityPole = [
  ["path", { d: "M12 2v20" }],
  ["path", { d: "M2 5h20" }],
  ["path", { d: "M3 3v2" }],
  ["path", { d: "M7 3v2" }],
  ["path", { d: "M17 3v2" }],
  ["path", { d: "M21 3v2" }],
  ["path", { d: "m19 5-7 7-7-7" }]
];

// node_modules/lucide/dist/esm/icons/van.mjs
var Van = [
  [
    "path",
    {
      d: "M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3"
    }
  ],
  ["path", { d: "M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2" }],
  ["path", { d: "M9 18h5" }],
  ["circle", { cx: "16", cy: "18", r: "2" }],
  ["circle", { cx: "7", cy: "18", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/variable.mjs
var Variable = [
  ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }],
  ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }],
  ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }],
  ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]
];

// node_modules/lucide/dist/esm/icons/vault.mjs
var Vault = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }],
  ["path", { d: "m7.9 7.9 2.7 2.7" }],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }],
  ["path", { d: "m13.4 10.6 2.7-2.7" }],
  ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }],
  ["path", { d: "m7.9 16.1 2.7-2.7" }],
  ["circle", { cx: "16.5", cy: "16.5", r: ".5", fill: "currentColor" }],
  ["path", { d: "m13.4 13.4 2.7 2.7" }],
  ["circle", { cx: "12", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/vector-polygon.mjs
var VectorPolygon = [
  ["path", { d: "m12.828 4.813 5.344 2.375" }],
  ["path", { d: "m15.769 18.153 3.461-8.306" }],
  ["path", { d: "m5.687 14.074 7.625 4.852" }],
  ["path", { d: "M9.772 5.579 5.228 11.42" }],
  ["circle", { cx: "11", cy: "4", r: "2" }],
  ["circle", { cx: "15", cy: "20", r: "2" }],
  ["circle", { cx: "20", cy: "8", r: "2" }],
  ["circle", { cx: "4", cy: "13", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/vector-square.mjs
var VectorSquare = [
  ["path", { d: "M17.055 4.533a24 24 0 00-10.11 0" }],
  ["path", { d: "M19.467 17.055a24 24 0 000-10.11" }],
  ["path", { d: "M4.533 6.945a24 24 0 000 10.11" }],
  ["path", { d: "M6.945 19.467a24 24 0 0010.11 0" }],
  ["circle", { cx: "19", cy: "19", r: "2" }],
  ["circle", { cx: "19", cy: "5", r: "2" }],
  ["circle", { cx: "5", cy: "19", r: "2" }],
  ["circle", { cx: "5", cy: "5", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/vegan.mjs
var Vegan = [
  ["path", { d: "M16 8q6 0 6-6-6 0-6 6" }],
  ["path", { d: "M17.41 3.59a10 10 0 1 0 3 3" }],
  ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" }]
];

// node_modules/lucide/dist/esm/icons/venetian-mask.mjs
var VenetianMask = [
  ["path", { d: "M18 11c-1.5 0-2.5.5-3 2" }],
  [
    "path",
    {
      d: "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"
    }
  ],
  ["path", { d: "M6 11c1.5 0 2.5.5 3 2" }]
];

// node_modules/lucide/dist/esm/icons/venus-and-mars.mjs
var VenusAndMars = [
  ["path", { d: "M10 20h4" }],
  ["path", { d: "M12 16v6" }],
  ["path", { d: "M17 2h4v4" }],
  ["path", { d: "m21 2-5.46 5.46" }],
  ["circle", { cx: "12", cy: "11", r: "5" }]
];

// node_modules/lucide/dist/esm/icons/venus.mjs
var Venus = [
  ["path", { d: "M12 15v7" }],
  ["path", { d: "M9 19h6" }],
  ["circle", { cx: "12", cy: "9", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/vibrate-off.mjs
var VibrateOff = [
  ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }],
  ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }],
  ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }],
  ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/video-off.mjs
var VideoOff = [
  ["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" }],
  ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/video.mjs
var Video = [
  ["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/vibrate.mjs
var Vibrate = [
  ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }],
  ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }],
  ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1" }]
];

// node_modules/lucide/dist/esm/icons/videotape.mjs
var Videotape = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
  ["path", { d: "M2 8h20" }],
  ["circle", { cx: "8", cy: "14", r: "2" }],
  ["path", { d: "M8 12h8" }],
  ["circle", { cx: "16", cy: "14", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/view.mjs
var View = [
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }],
  ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }],
  ["circle", { cx: "12", cy: "12", r: "1" }],
  [
    "path",
    {
      d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/virus.mjs
var Virus = [
  ["path", { d: "M12 14.991h.01" }],
  ["path", { d: "M12 22v-3" }],
  ["path", { d: "M12 2v3" }],
  ["path", { d: "M13 22h-2" }],
  ["path", { d: "M13 2h-2" }],
  ["path", { d: "M13.99 10H14" }],
  ["path", { d: "m16.5 19.794-1-1.733" }],
  ["path", { d: "m16.5 4.205-1 1.732" }],
  ["path", { d: "m19.794 16.5-1.732-1" }],
  ["path", { d: "m19.794 7.5-1.732 1" }],
  ["path", { d: "M2 12h3" }],
  ["path", { d: "M2 13v-2" }],
  ["path", { d: "M22 12h-3" }],
  ["path", { d: "M22 13v-2" }],
  ["path", { d: "m4.206 16.5 1.732-1" }],
  ["path", { d: "m4.206 7.5 1.732 1" }],
  ["path", { d: "m7.5 19.794 1-1.733" }],
  ["path", { d: "m7.5 4.205 1 1.732" }],
  ["path", { d: "M9 12h.01" }],
  ["circle", { cx: "12", cy: "12", r: "7" }]
];

// node_modules/lucide/dist/esm/icons/voicemail.mjs
var Voicemail = [
  ["circle", { cx: "6", cy: "12", r: "4" }],
  ["circle", { cx: "18", cy: "12", r: "4" }],
  ["line", { x1: "6", x2: "18", y1: "16", y2: "16" }]
];

// node_modules/lucide/dist/esm/icons/virus-off.mjs
var VirusOff = [
  ["path", { d: "M10.01 10h.01" }],
  ["path", { d: "M12 14.991h.01" }],
  ["path", { d: "M12 22v-3" }],
  ["path", { d: "M12 2v3" }],
  ["path", { d: "M13 22h-2" }],
  ["path", { d: "M13 2h-2" }],
  ["path", { d: "m16.5 19.794-1-1.733" }],
  ["path", { d: "m16.5 4.205-1 1.732" }],
  ["path", { d: "M18.891 13.235a7 7 0 00-8.126-8.126" }],
  ["path", { d: "m19.794 7.5-1.732 1" }],
  ["path", { d: "M2 12h3" }],
  ["path", { d: "M2 13v-2" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M22 12h-3" }],
  ["path", { d: "M22 13v-2" }],
  ["path", { d: "m4.206 16.5 1.732-1" }],
  ["path", { d: "m4.206 7.5 1.732 1" }],
  ["path", { d: "M7.05 7.05a7 7 0 009.9 9.9" }],
  ["path", { d: "m7.5 19.794 1-1.733" }],
  ["path", { d: "M9 12h.01" }]
];

// node_modules/lucide/dist/esm/icons/volleyball.mjs
var Volleyball = [
  ["path", { d: "M11 7a16 16 20 0 1 10.98 4.362" }],
  ["path", { d: "M12 12a13 13 0 0 1-8.66 5" }],
  ["path", { d: "M16.83 13.634a16 16 0 0 1-9.267 7.328" }],
  ["path", { d: "M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10" }],
  ["path", { d: "M8.17 15.366a16 16 0 0 1-1.713-11.69" }],
  ["circle", { cx: "12", cy: "12", r: "10" }]
];

// node_modules/lucide/dist/esm/icons/volume-1.mjs
var Volume1 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6" }]
];

// node_modules/lucide/dist/esm/icons/volume-2.mjs
var Volume2 = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728" }]
];

// node_modules/lucide/dist/esm/icons/volume-off.mjs
var VolumeOff = [
  ["path", { d: "M16 9a5 5 0 0 1 .95 2.293" }],
  ["path", { d: "M19.364 5.636a9 9 0 0 1 1.889 9.96" }],
  ["path", { d: "m2 2 20 20" }],
  [
    "path",
    {
      d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"
    }
  ],
  ["path", { d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686" }]
];

// node_modules/lucide/dist/esm/icons/volume.mjs
var Volume = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/vote.mjs
var Vote = [
  ["path", { d: "m9 12 2 2 4-4" }],
  ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }],
  ["path", { d: "M22 19H2" }]
];

// node_modules/lucide/dist/esm/icons/volume-x.mjs
var VolumeX = [
  [
    "path",
    {
      d: "M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z"
    }
  ],
  ["path", { d: "m16.5 14.5 5-5" }],
  ["path", { d: "m16.5 9.5 5 5" }]
];

// node_modules/lucide/dist/esm/icons/wallet-cards.mjs
var WalletCards = [
  ["path", { d: "M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21" }],
  ["path", { d: "M3 7h18" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/wallet.mjs
var Wallet = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]
];

// node_modules/lucide/dist/esm/icons/wallet-minimal.mjs
var WalletMinimal = [
  ["path", { d: "M17 14h.01" }],
  ["path", { d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" }]
];

// node_modules/lucide/dist/esm/icons/wallpaper.mjs
var Wallpaper = [
  ["path", { d: "M12 17v4" }],
  ["path", { d: "M8 21h8" }],
  ["path", { d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" }],
  ["circle", { cx: "8", cy: "9", r: "2" }],
  ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/wand-sparkles.mjs
var WandSparkles = [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
    }
  ],
  ["path", { d: "m14 7 3 3" }],
  ["path", { d: "M5 6v4" }],
  ["path", { d: "M19 14v4" }],
  ["path", { d: "M10 2v2" }],
  ["path", { d: "M7 8H3" }],
  ["path", { d: "M21 16h-4" }],
  ["path", { d: "M11 3H9" }]
];

// node_modules/lucide/dist/esm/icons/warehouse.mjs
var Warehouse = [
  ["path", { d: "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" }],
  [
    "path",
    {
      d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"
    }
  ],
  ["path", { d: "M6 13h12" }],
  ["path", { d: "M6 17h12" }]
];

// node_modules/lucide/dist/esm/icons/wand.mjs
var Wand = [
  ["path", { d: "M15 4V2" }],
  ["path", { d: "M15 16v-2" }],
  ["path", { d: "M8 9h2" }],
  ["path", { d: "M20 9h2" }],
  ["path", { d: "M17.8 11.8 19 13" }],
  ["path", { d: "M15 9h.01" }],
  ["path", { d: "M17.8 6.2 19 5" }],
  ["path", { d: "m3 21 9-9" }],
  ["path", { d: "M12.2 6.2 11 5" }]
];

// node_modules/lucide/dist/esm/icons/washing-machine.mjs
var WashingMachine = [
  ["path", { d: "M3 6h3" }],
  ["path", { d: "M17 6h.01" }],
  ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2" }],
  ["circle", { cx: "12", cy: "13", r: "5" }],
  ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }]
];

// node_modules/lucide/dist/esm/icons/watch.mjs
var Watch = [
  ["path", { d: "M12 10v2.2l1.6 1" }],
  ["path", { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" }],
  ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" }],
  ["circle", { cx: "12", cy: "12", r: "6" }]
];

// node_modules/lucide/dist/esm/icons/waves-arrow-down.mjs
var WavesArrowDown = [
  ["path", { d: "M12 10L12 2" }],
  ["path", { d: "M16 6L12 10L8 6" }],
  [
    "path",
    {
      d: "M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15"
    }
  ],
  [
    "path",
    {
      d: "M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/waves-arrow-up.mjs
var WavesArrowUp = [
  ["path", { d: "M12 2v8" }],
  [
    "path",
    {
      d: "M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    }
  ],
  [
    "path",
    {
      d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    }
  ],
  ["path", { d: "m8 6 4-4 4 4" }]
];

// node_modules/lucide/dist/esm/icons/waves-horizontal.mjs
var WavesHorizontal = [
  ["path", { d: "M2 12q2.5 2 5 0t5 0 5 0 5 0" }],
  ["path", { d: "M2 19q2.5 2 5 0t5 0 5 0 5 0" }],
  ["path", { d: "M2 5q2.5 2 5 0t5 0 5 0 5 0" }]
];

// node_modules/lucide/dist/esm/icons/waves-ladder.mjs
var WavesLadder = [
  ["path", { d: "M19 5a2 2 0 0 0-2 2v11" }],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    }
  ],
  ["path", { d: "M7 13h10" }],
  ["path", { d: "M7 9h10" }],
  ["path", { d: "M9 5a2 2 0 0 0-2 2v11" }]
];

// node_modules/lucide/dist/esm/icons/waves-vertical.mjs
var WavesVertical = [
  ["path", { d: "M12 2q2 2.5 0 5t0 5 0 5 0 5" }],
  ["path", { d: "M19 2q2 2.5 0 5t0 5 0 5 0 5" }],
  ["path", { d: "M5 2q2 2.5 0 5t0 5 0 5 0 5" }]
];

// node_modules/lucide/dist/esm/icons/webcam-off.mjs
var WebcamOff = [
  ["path", { d: "M12 22v-4" }],
  ["path", { d: "M12.754 7.096a3 3 0 0 1 2.15 2.15" }],
  ["path", { d: "M12.863 12.873a3 3 0 0 1-3.736-3.735" }],
  ["path", { d: "M16.566 16.57A8 8 0 0 1 5.43 5.433" }],
  ["path", { d: "m2 2 20 20" }],
  ["path", { d: "M7 22h10" }],
  ["path", { d: "M8.478 2.817a8 8 0 0 1 10.705 10.705" }]
];

// node_modules/lucide/dist/esm/icons/waypoints.mjs
var Waypoints = [
  ["path", { d: "m10.586 5.414-5.172 5.172" }],
  ["path", { d: "m18.586 13.414-5.172 5.172" }],
  ["path", { d: "M6 12h12" }],
  ["circle", { cx: "12", cy: "20", r: "2" }],
  ["circle", { cx: "12", cy: "4", r: "2" }],
  ["circle", { cx: "20", cy: "12", r: "2" }],
  ["circle", { cx: "4", cy: "12", r: "2" }]
];

// node_modules/lucide/dist/esm/icons/webcam.mjs
var Webcam = [
  ["circle", { cx: "12", cy: "10", r: "8" }],
  ["circle", { cx: "12", cy: "10", r: "3" }],
  ["path", { d: "M7 22h10" }],
  ["path", { d: "M12 22v-4" }]
];

// node_modules/lucide/dist/esm/icons/webhook-off.mjs
var WebhookOff = [
  ["path", { d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" }],
  ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66" }],
  ["path", { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" }],
  ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7" }],
  ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414" }],
  ["path", { d: "m12 6 .6 1" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/webhook.mjs
var Webhook = [
  ["path", { d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" }],
  ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" }],
  ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" }]
];

// node_modules/lucide/dist/esm/icons/weight-tilde.mjs
var WeightTilde = [
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z"
    }
  ],
  ["path", { d: "M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0" }],
  ["circle", { cx: "12", cy: "5", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/weight.mjs
var Weight = [
  ["circle", { cx: "12", cy: "5", r: "3" }],
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/wheat-off.mjs
var WheatOff = [
  ["path", { d: "m2 22 10-10" }],
  ["path", { d: "m16 8-1.17 1.17" }],
  [
    "path",
    { d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }
  ],
  ["path", { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" }],
  ["path", { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" }],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
    }
  ],
  ["path", { d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" }],
  ["path", { d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/wheat.mjs
var Wheat = [
  ["path", { d: "M2 22 16 8" }],
  [
    "path",
    { d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }
  ],
  [
    "path",
    { d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }
  ],
  [
    "path",
    { d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }
  ],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
    }
  ],
  [
    "path",
    {
      d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
    }
  ],
  [
    "path",
    {
      d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/whistle.mjs
var Whistle = [
  ["path", { d: "M10 6v4" }],
  ["path", { d: "M21 6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.675A7 7 0 1 1 9 6z" }]
];

// node_modules/lucide/dist/esm/icons/whole-word.mjs
var WholeWord = [
  ["circle", { cx: "7", cy: "12", r: "3" }],
  ["path", { d: "M10 9v6" }],
  ["circle", { cx: "17", cy: "12", r: "3" }],
  ["path", { d: "M14 7v8" }],
  ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]
];

// node_modules/lucide/dist/esm/icons/wifi-cog.mjs
var WifiCog = [
  ["path", { d: "m14.305 19.53.923-.382" }],
  ["path", { d: "m15.228 16.852-.923-.383" }],
  ["path", { d: "m16.852 15.228-.383-.923" }],
  ["path", { d: "m16.852 20.772-.383.924" }],
  ["path", { d: "m19.148 15.228.383-.923" }],
  ["path", { d: "m19.53 21.696-.382-.924" }],
  ["path", { d: "M2 7.82a15 15 0 0 1 20 0" }],
  ["path", { d: "m20.772 16.852.924-.383" }],
  ["path", { d: "m20.772 19.148.924.383" }],
  ["path", { d: "M5 11.858a10 10 0 0 1 11.5-1.785" }],
  ["path", { d: "M8.5 15.429a5 5 0 0 1 2.413-1.31" }],
  ["circle", { cx: "18", cy: "18", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/wifi-low.mjs
var WifiLow = [
  ["path", { d: "M12 20h.01" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
];

// node_modules/lucide/dist/esm/icons/wifi-off.mjs
var WifiOff = [
  ["path", { d: "M12 20h.01" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/wifi-pen.mjs
var WifiPen = [
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }],
  [
    "path",
    {
      d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }
  ],
  ["path", { d: "M5 12.859a10 10 0 0 1 10.5-2.222" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 3-1.406" }]
];

// node_modules/lucide/dist/esm/icons/wifi-high.mjs
var WifiHigh = [
  ["path", { d: "M12 20h.01" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
];

// node_modules/lucide/dist/esm/icons/wifi-sync.mjs
var WifiSync = [
  ["path", { d: "M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" }],
  ["path", { d: "M11.965 14.105h4" }],
  ["path", { d: "M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }],
  ["path", { d: "M21.965 22.105v-4" }],
  ["path", { d: "M5 12.86a10 10 0 0 1 3-2.032" }],
  ["path", { d: "M8.5 16.429h.01" }]
];

// node_modules/lucide/dist/esm/icons/wifi-zero.mjs
var WifiZero = [["path", { d: "M12 20h.01" }]];

// node_modules/lucide/dist/esm/icons/wifi.mjs
var Wifi = [
  ["path", { d: "M12 20h.01" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
];

// node_modules/lucide/dist/esm/icons/wind-arrow-down.mjs
var WindArrowDown = [
  ["path", { d: "M10 2v8" }],
  ["path", { d: "M12.8 21.6A2 2 0 1 0 14 18H2" }],
  ["path", { d: "M17.5 10a2.5 2.5 0 1 1 2 4H2" }],
  ["path", { d: "m6 6 4 4 4-4" }]
];

// node_modules/lucide/dist/esm/icons/wind.mjs
var Wind = [
  ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2" }],
  ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2" }],
  ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2" }]
];

// node_modules/lucide/dist/esm/icons/wine-off.mjs
var WineOff = [
  ["path", { d: "M8 22h8" }],
  ["path", { d: "M7 10h3m7 0h-1.343" }],
  ["path", { d: "M12 15v7" }],
  [
    "path",
    {
      d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
];

// node_modules/lucide/dist/esm/icons/wine.mjs
var Wine = [
  ["path", { d: "M8 22h8" }],
  ["path", { d: "M7 10h10" }],
  ["path", { d: "M12 15v7" }],
  ["path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" }]
];

// node_modules/lucide/dist/esm/icons/workflow.mjs
var Workflow = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2" }]
];

// node_modules/lucide/dist/esm/icons/worm.mjs
var Worm = [
  ["path", { d: "m19 12-1.5 3" }],
  ["path", { d: "M19.63 18.81 22 20" }],
  [
    "path",
    {
      d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/wrench-off.mjs
var WrenchOff = [
  [
    "path",
    {
      d: "M10.747 5.093a6 6 0 0 1 6.841-2.882c.438.12.54.662.219.984L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-2.882 6.842"
    }
  ],
  ["path", { d: "m13.5 13.5-7.88 7.88a1 1 0 0 1-2.999-3l7.88-7.88" }],
  ["path", { d: "m2 2 20 20" }]
];

// node_modules/lucide/dist/esm/icons/wrench.mjs
var Wrench = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/x-line-top.mjs
var XLineTop = [
  ["path", { d: "M18 4H6" }],
  ["path", { d: "M18 8 6 20" }],
  ["path", { d: "m6 8 12 12" }]
];

// node_modules/lucide/dist/esm/icons/x.mjs
var X = [
  ["path", { d: "M18 6 6 18" }],
  ["path", { d: "m6 6 12 12" }]
];

// node_modules/lucide/dist/esm/icons/zap-off.mjs
var ZapOff = [
  ["path", { d: "M10.768 5.111 13.44 2.44a1.5 1.5 0 012.474 1.561l-1.633 4.625" }],
  ["path", { d: "m18.889 13.232.672-.672A1.5 1.5 0 0018.5 10h-2.844" }],
  ["path", { d: "m2 2 20 20" }],
  [
    "path",
    {
      d: "m7.94 7.94-3.5 3.499A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l5.5-5.5"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/zap.mjs
var Zap = [
  [
    "path",
    {
      d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/zodiac-aries.mjs
var ZodiacAries = [
  ["path", { d: "M12 7.5a4.5 4.5 0 1 1 5 4.5" }],
  ["path", { d: "M7 12a4.5 4.5 0 1 1 5-4.5V21" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-aquarius.mjs
var ZodiacAquarius = [
  [
    "path",
    {
      d: "m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10"
    }
  ],
  [
    "path",
    {
      d: "m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002"
    }
  ]
];

// node_modules/lucide/dist/esm/icons/zodiac-capricorn.mjs
var ZodiacCapricorn = [
  ["path", { d: "M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0" }],
  ["path", { d: "M7 19V6a3 3 0 0 0-3-3h0" }],
  ["circle", { cx: "17", cy: "17", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-cancer.mjs
var ZodiacCancer = [
  ["path", { d: "M21 14.5A9 6.5 0 0 1 5.5 19" }],
  ["path", { d: "M3 9.5A9 6.5 0 0 1 18.5 5" }],
  ["circle", { cx: "17.5", cy: "14.5", r: "3.5" }],
  ["circle", { cx: "6.5", cy: "9.5", r: "3.5" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-gemini.mjs
var ZodiacGemini = [
  ["path", { d: "M16 4.525v14.948" }],
  ["path", { d: "M20 3A17 17 0 0 1 4 3" }],
  ["path", { d: "M4 21a17 17 0 0 1 16 0" }],
  ["path", { d: "M8 4.525v14.948" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-leo.mjs
var ZodiacLeo = [
  ["path", { d: "M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0" }],
  ["circle", { cx: "7", cy: "16", r: "3" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-libra.mjs
var ZodiacLibra = [
  [
    "path",
    { d: "M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21" }
  ],
  ["path", { d: "M3 20h18" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-ophiuchus.mjs
var ZodiacOphiuchus = [
  ["path", { d: "M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" }],
  ["path", { d: "M6 3v12a6 6 0 0 0 12 0V3" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-pisces.mjs
var ZodiacPisces = [
  ["path", { d: "M19 21a15 15 0 0 1 0-18" }],
  ["path", { d: "M20 12H4" }],
  ["path", { d: "M5 3a15 15 0 0 1 0 18" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-sagittarius.mjs
var ZodiacSagittarius = [
  ["path", { d: "M15 3h6v6" }],
  ["path", { d: "M21 3 3 21" }],
  ["path", { d: "m9 9 6 6" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-scorpio.mjs
var ZodiacScorpio = [
  ["path", { d: "M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" }],
  ["path", { d: "m22 19-3 3" }],
  ["path", { d: "M5 19V5.5a1 1 0 0 1 5 0" }],
  ["path", { d: "M5 5.5A2.5 2.5 0 0 0 2.5 3" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-taurus.mjs
var ZodiacTaurus = [
  ["circle", { cx: "12", cy: "15", r: "6" }],
  ["path", { d: "M18 3A6 6 0 0 1 6 3" }]
];

// node_modules/lucide/dist/esm/icons/zoom-in.mjs
var ZoomIn = [
  ["circle", { cx: "11", cy: "11", r: "8" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]
];

// node_modules/lucide/dist/esm/icons/zodiac-virgo.mjs
var ZodiacVirgo = [
  ["path", { d: "M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" }],
  ["path", { d: "M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" }],
  ["path", { d: "M6 19V6a3 3 0 0 0-3-3h0" }],
  ["path", { d: "M6 5.5a1 1 0 0 1 5 0V19" }]
];

// node_modules/lucide/dist/esm/icons/zoom-out.mjs
var ZoomOut = [
  ["circle", { cx: "11", cy: "11", r: "8" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]
];

// src/harness-ui.ts
var surfaces = /* @__PURE__ */ new Set();
function enhance(element) {
  const el = element;
  if (el.createDiv) return el;
  Object.assign(el, {
    createEl: (tag, options = {}, callback) => {
      const child = createEl(tag, options);
      el.appendChild(child);
      callback?.(child);
      return child;
    },
    createDiv: (options = {}, callback) => el.createEl("div", options, callback),
    createSpan: (options = {}, callback) => el.createEl("span", options, callback),
    empty: () => {
      el.replaceChildren();
      return el;
    },
    setText: (text) => {
      el.textContent = String(text ?? "");
      return el;
    },
    appendText: (text) => {
      el.append(document.createTextNode(String(text)));
      return el;
    },
    addClass: (...names) => {
      el.classList.add(...names.flatMap((n) => n.split(/\s+/)).filter(Boolean));
      return el;
    },
    removeClass: (...names) => {
      el.classList.remove(...names);
      return el;
    },
    hasClass: (name) => el.classList.contains(name),
    toggleClass: (name, on) => {
      el.classList.toggle(name, on);
      return el;
    },
    setAttr: (name, value) => {
      if (value == null) el.removeAttribute(name);
      else el.setAttribute(name, String(value));
      return el;
    },
    getAttr: (name) => el.getAttribute(name),
    setCssProps: (values) => {
      for (const [name, value] of Object.entries(values)) el.style.setProperty(name, value);
      return el;
    },
    hide: () => {
      el.style.display = "none";
    },
    show: () => {
      el.style.removeProperty("display");
    }
  });
  return el;
}
function createEl(tag, options = {}) {
  const el = enhance(document.createElement(tag));
  if (typeof options === "string") options = { cls: options };
  if (options.cls) el.className = options.cls;
  if (options.text != null) el.textContent = String(options.text);
  for (const key of ["type", "placeholder", "href", "title", "value"]) if (options[key] != null) el.setAttribute(key, String(options[key]));
  for (const [k, v] of Object.entries(options.attr || {})) el.setAttr(k, v);
  if (tag === "a") {
    el.setAttribute("rel", "noopener noreferrer");
  }
  return el;
}
function setIcon(el, name) {
  const key = name.replace(/(^|-)(\w)/g, (_, dash, c) => c.toUpperCase());
  const data = iconsAndAliases_exports[key];
  el.replaceChildren();
  if (!data) return;
  const svg = createElement(data, { class: "svg-icon", width: 18, height: 18, "aria-hidden": "true" });
  el.append(svg);
}
var Notice = class {
  el;
  timer;
  constructor(text, duration = 4500) {
    this.el = createEl("div", { cls: "qaudio-dsh-toast", text, attr: { role: "status" } });
    document.body.append(this.el);
    surfaces.add(this);
    if (duration) this.timer = setTimeout(() => this.hide(), duration);
  }
  hide() {
    clearTimeout(this.timer);
    this.el.remove();
    surfaces.delete(this);
  }
  close() {
    this.hide();
  }
};
var Modal = class _Modal {
  app;
  modalEl;
  contentEl;
  containerEl;
  scope;
  previous = null;
  keys = [];
  opened = false;
  constructor(app) {
    this.app = app;
    this.containerEl = createEl("div", { cls: "qaudio-dsh-surface qaudio-dsh-overlay modal-container" });
    this.modalEl = this.containerEl.createDiv({ cls: "modal", attr: { role: "dialog", "aria-modal": "true", tabindex: "-1" } });
    const close = this.modalEl.createEl("button", { cls: "modal-close-button", attr: { "aria-label": "\u5173\u95ED / Close" } });
    setIcon(close, "x");
    close.onclick = () => this.close();
    this.contentEl = this.modalEl.createDiv("modal-content");
    this.scope = { register: (_mods, key, fn) => this.keys.push({ key, fn }) };
    this.containerEl.addEventListener("pointerdown", (e) => {
      if (e.target === this.containerEl) this.close();
    });
  }
  onKey = (e) => {
    if ([...surfaces].filter((s) => s instanceof _Modal).at(-1) !== this) return;
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.close();
      return;
    }
    if (e.key === "Tab") {
      const nodes = [...this.modalEl.querySelectorAll('button:not([disabled]),input,textarea,select,a[href],[tabindex="0"]')].filter((el) => el.getClientRects().length);
      const first = nodes[0], last = nodes.at(-1);
      if (e.shiftKey && (document.activeElement === first || document.activeElement === this.modalEl)) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
    for (const binding of this.keys) if (e.key === binding.key && binding.fn() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  open() {
    if (this.opened) return;
    this.opened = true;
    this.previous = document.activeElement;
    surfaces.add(this);
    document.body.append(this.containerEl);
    applyHostTheme();
    document.addEventListener("keydown", this.onKey, true);
    try {
      this.onOpen();
    } catch (e) {
      new Notice(e.message);
      this.close();
      throw e;
    }
    this.modalEl.focus();
  }
  close() {
    if (!this.opened) return;
    this.opened = false;
    this.onClose();
    document.removeEventListener("keydown", this.onKey, true);
    this.containerEl.remove();
    surfaces.delete(this);
    if (this.previous instanceof HTMLElement && this.previous.isConnected) this.previous.focus();
  }
  setTitle(text) {
    let title = this.modalEl.querySelector(".modal-title");
    if (!title) {
      title = this.modalEl.createDiv("modal-title");
      this.modalEl.insertBefore(title, this.contentEl);
    }
    title.setText(text);
    this.modalEl.setAttribute("aria-label", text);
    return this;
  }
  onOpen() {
  }
  onClose() {
  }
};
var Control = class {
  constructor(el) {
    this.el = el;
  }
  el;
  get inputEl() {
    return this.el;
  }
  get selectEl() {
    return this.el;
  }
  get buttonEl() {
    return this.el;
  }
  get sliderEl() {
    return this.el;
  }
  get toggleEl() {
    return this.el;
  }
  getValue() {
    return this.el.type === "checkbox" ? this.el.checked : this.el.value;
  }
  setDisabled(on) {
    this.el.disabled = on;
    return this;
  }
  setCta() {
    this.el.addClass("mod-cta");
    return this;
  }
  setLimits(min, max, step) {
    Object.assign(this.el, { min, max, step });
    return this;
  }
  setDynamicTooltip() {
    return this;
  }
  setValue(value) {
    if (this.el.type === "checkbox") this.el.checked = !!value;
    else this.el.value = value;
    return this;
  }
  setPlaceholder(text) {
    this.el.placeholder = text;
    return this;
  }
  addOption(value, text) {
    this.el.createEl("option", { text, attr: { value } });
    return this;
  }
  onChange(fn) {
    this.el.addEventListener(this.el.tagName === "INPUT" && this.el.type !== "checkbox" ? "input" : "change", () => Promise.resolve(fn(this.el.type === "checkbox" ? this.el.checked : this.el.value)).catch((e) => new Notice(e.message)));
    return this;
  }
  setButtonText(text) {
    this.el.setText(text);
    return this;
  }
  setIcon(icon) {
    const span = this.el.createSpan();
    setIcon(span, icon);
    return this;
  }
  onClick(fn) {
    this.el.addEventListener("click", () => Promise.resolve().then(fn).catch((e) => new Notice(e.message)));
    return this;
  }
  setWarning() {
    this.el.addClass("mod-warning");
    return this;
  }
};
var Setting = class {
  el;
  name;
  desc;
  controls;
  constructor(root) {
    this.el = root.createDiv("setting-item");
    const info = this.el.createDiv("setting-item-info");
    this.name = info.createDiv("setting-item-name");
    this.desc = info.createDiv("setting-item-description");
    this.controls = this.el.createDiv("setting-item-control");
  }
  get settingEl() {
    return this.el;
  }
  get nameEl() {
    return this.name;
  }
  get descEl() {
    return this.desc;
  }
  get controlEl() {
    return this.controls;
  }
  setHeading() {
    this.el.classList.add("setting-item-heading");
    return this;
  }
  setClass(name) {
    this.el.addClass(name);
    return this;
  }
  setDisabled(on) {
    this.controls.querySelectorAll("input,select,button").forEach((el) => el.disabled = on);
    return this;
  }
  addSlider(fn) {
    fn(new Control(this.controls.createEl("input", { type: "range" })));
    return this;
  }
  addTextArea(fn) {
    fn(new Control(this.controls.createEl("textarea")));
    return this;
  }
  setName(s) {
    this.name.setText(s);
    return this;
  }
  setDesc(s) {
    if (s instanceof Node) this.desc.replaceChildren(s);
    else this.desc.setText(s);
    return this;
  }
  addDropdown(fn) {
    fn(new Control(this.controls.createEl("select")));
    return this;
  }
  addText(fn) {
    fn(new Control(this.controls.createEl("input", { type: "text" })));
    return this;
  }
  addToggle(fn) {
    fn(new Control(this.controls.createEl("input", { type: "checkbox" })));
    return this;
  }
  addButton(fn) {
    fn(new Control(this.controls.createEl("button")));
    return this;
  }
};
var Platform = { isDesktop: true, isDesktopApp: true, isMacOS: false };
function applyHostTheme() {
  const value = getComputedStyle(document.body).getPropertyValue("--dsw-alias-bg-base").trim();
  let channels = [];
  if (/^#[0-9a-f]{6,8}$/i.test(value)) channels = [1, 3, 5].map((at) => parseInt(value.slice(at, at + 2), 16));
  else if (value.startsWith("rgb")) channels = (value.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
  const dark = channels.length === 3 && channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722 < 128;
  for (const el of document.querySelectorAll(".qaudio-dsh-surface")) {
    el.classList.toggle("theme-dark", dark);
    el.classList.toggle("theme-light", !dark);
  }
}

// src/original/strings.js
var STRINGS = {
  "player.options": ["\u64AD\u653E\u9009\u9879", "Playback options"],
  "player.sound": ["\u58F0\u97F3\u4E0E\u8BBE\u7F6E", "Voice and settings"],
  "player.positionFollow": ["\u8FDB\u5EA6\u4E0E\u8DDF\u968F", "Position and follow"],
  "settings.cancel": ["\u53D6\u6D88", "Cancel"],
  "asr.addTitle": ["\u6DFB\u52A0\u8F6C\u5199\u670D\u52A1", "Add transcription service"],
  "asr.addHelp": ["\u9009\u62E9\u670D\u52A1\u5E76\u586B\u5199\u5FC5\u8981\u914D\u7F6E\uFF0C\u786E\u8BA4\u540E\u624D\u4F1A\u6DFB\u52A0\u5E76\u4F7F\u7528\u3002\u8FDE\u63A5\u53EF\u5728\u6DFB\u52A0\u540E\u6D4B\u8BD5\u3002", "Choose a service and enter its required settings. Confirm to add and use it, then test the connection."],
  "asr.chooseProvider": ["\u8BF7\u9009\u62E9\u670D\u52A1", "Choose a service"],
  "asr.addConfirm": ["\u6DFB\u52A0\u5E76\u4F7F\u7528", "Add and use"],
  "asr.alreadyAdded": ["\u8BE5\u914D\u7F6E\u5DF2\u5B58\u5728\uFF0C\u5DF2\u5207\u6362\u5230\u5DF2\u6709\u670D\u52A1\u3002", "This configuration already exists. Switched to the existing service."],
  "asr.profileLimit": ["\u6700\u591A\u53EF\u4FDD\u5B58 12 \u4E2A\u670D\u52A1\uFF0C\u8BF7\u5148\u5220\u9664\u4E0D\u518D\u4F7F\u7528\u7684\u914D\u7F6E\u3002", "Up to 12 services can be saved. Remove an unused configuration first."],
  "tts.voiceSearch": ["\u641C\u7D22\u97F3\u8272", "Search voices"],
  "tts.voicePicker": ["\u9009\u62E9\u4E0E\u8BD5\u542C\u97F3\u8272", "Choose and preview voices"],
  "tts.noVoices": ["\u6CA1\u6709\u5339\u914D\u7684\u97F3\u8272", "No matching voices"],
  "tts.customVoice": ["\u586B\u5199\u97F3\u8272 ID", "Enter a voice ID"],
  "tts.unavailableVoice": ["\u5DF2\u4FDD\u5B58\uFF0C\u4F46\u6B64\u8BBE\u5907\u5C1A\u672A\u627E\u5230", "Saved, but unavailable on this device"],
  "tts.macSystemHelp": ["\u6B64\u5217\u8868\u6765\u81EA\u6D4F\u89C8\u5668\uFF0C\u589E\u5F3A\u97F3\u8272\u8BF7\u9009\u300CMac \u7CFB\u7EDF\u8BED\u97F3\u300D\u3002", "This browser list may omit enhanced voices. Choose Mac system speech to access them."],
  "settings.importRss": ["\u4ECE Qiaomu AI RSS \u5BFC\u5165\u6717\u8BFB\u8BBE\u7F6E", "Import speech settings from Qiaomu AI RSS"],
  "settings.importRssDesc": ["\u590D\u5236\u670D\u52A1\u3001\u58F0\u97F3\u548C\u5BC6\u94A5\uFF1B\u6B64\u540E\u4E24\u4E2A\u63D2\u4EF6\u7684\u8BBE\u7F6E\u72EC\u7ACB\u4FDD\u5B58\u3002", "Copy service, voice and keys once; each plugin then saves its own preferences."],
  // Commands and entry points
  "cmd.read": ["\u6717\u8BFB\u5F53\u524D\u7B14\u8BB0", "Read current note aloud"],
  "cmd.readStart": ["\u4ECE\u5934\u6717\u8BFB\u5F53\u524D\u7B14\u8BB0", "Read current note from the start"],
  "cmd.readSelection": ["\u6717\u8BFB\u9009\u4E2D\u5185\u5BB9", "Read selection aloud"],
  "cmd.readHere": ["\u4ECE\u8FD9\u91CC\u6717\u8BFB", "Read aloud from here"],
  "cmd.toggle": ["\u6682\u505C\u6216\u7EE7\u7EED\u6717\u8BFB", "Pause or resume reading"],
  "cmd.stop": ["\u505C\u6B62\u6717\u8BFB", "Stop reading"],
  "cmd.next": ["\u6717\u8BFB\u4E0B\u4E00\u53E5", "Next sentence"],
  "cmd.previous": ["\u6717\u8BFB\u4E0A\u4E00\u53E5", "Previous sentence"],
  "cmd.dictate": ["\u5F00\u59CB\u6216\u7ED3\u675F\u542C\u5199", "Start or finish dictation"],
  "cmd.dictateHere": ["\u5728\u6B64\u5904\u542C\u5199", "Dictate here"],
  "cmd.cancelDictation": ["\u53D6\u6D88\u542C\u5199", "Cancel dictation"],
  "action.read": ["\u6717\u8BFB", "Read aloud"],
  "action.dictate": ["\u542C\u5199", "Dictate"],
  // Player
  "player.label": ["\u6717\u8BFB\u63A7\u5236", "Read-aloud controls"],
  "player.play": ["\u64AD\u653E", "Play"],
  "player.pause": ["\u6682\u505C", "Pause"],
  "player.previous": ["\u4E0A\u4E00\u53E5", "Previous sentence"],
  "player.next": ["\u4E0B\u4E00\u53E5", "Next sentence"],
  "player.speed": ["\u500D\u901F", "Speed"],
  "player.voice": ["\u97F3\u8272", "Voice"],
  "player.settings": ["\u6717\u8BFB\u8BBE\u7F6E", "Speech settings"],
  "player.close": ["\u7ED3\u675F\u6717\u8BFB", "End reading"],
  "player.follow": ["\u56DE\u5230\u6717\u8BFB\u5904", "Return to reading"],
  "player.unfollow": ["\u505C\u6B62\u81EA\u52A8\u8DDF\u968F", "Stop following reading"],
  "player.more": ["\u66F4\u591A\u6717\u8BFB\u64CD\u4F5C", "More reading actions"],
  "player.seek": ["\u8DF3\u8F6C\u5230\u6307\u5B9A\u53E5\u5B50", "Jump to a sentence"],
  "player.replay": ["\u91CD\u65B0\u6717\u8BFB", "Read again"],
  "player.selection": ["\u9009\u4E2D\u5185\u5BB9", "Selection"],
  "state.failed": ["\u6717\u8BFB\u5931\u8D25", "Reading failed"],
  "tts.recent": ["\u6700\u8FD1\u4F7F\u7528", "Recently used"],
  "tts.clearRecent": ["\u6E05\u9664\u6700\u8FD1\u4F7F\u7528", "Clear recent voices"],
  "notice.noTextAfterCursor": ["\u5149\u6807\u4E4B\u540E\u6CA1\u6709\u53EF\u6717\u8BFB\u7684\u6587\u5B57\uFF0C\u8BF7\u79FB\u52A8\u5149\u6807\u6216\u9009\u62E9\u4ECE\u5934\u6717\u8BFB\u3002", "No readable text after the cursor. Move the cursor or read from the start."],
  "notice.cursorInEditor": ["\u5207\u6362\u5230\u7F16\u8F91\u6A21\u5F0F\u5E76\u653E\u7F6E\u5149\u6807\uFF0C\u6216\u4F7F\u7528\u300C\u4ECE\u5934\u6717\u8BFB\u300D\u3002", "Switch to editing mode and place the cursor, or read from the start."],
  "notice.selectText": ["\u8BF7\u5148\u9009\u4E2D\u8981\u6717\u8BFB\u7684\u6587\u5B57\u3002", "Select the text to read first."],
  "player.moreVoices": ["\u66F4\u591A\u97F3\u8272\u4E0E\u670D\u52A1\u2026", "More voices and services\u2026"],
  "player.speedNote": ["\u7CFB\u7EDF\u8BED\u97F3\u5C06\u5728\u4E0B\u4E00\u53E5\u5E94\u7528\u65B0\u500D\u901F\u3002", "System speech applies the new speed from the next sentence."],
  "state.idle": ["\u51C6\u5907\u6717\u8BFB", "Ready"],
  "state.loading": ["\u6B63\u5728\u51C6\u5907\u8BED\u97F3\u2026", "Preparing speech\u2026"],
  "state.playing": ["\u6B63\u5728\u6717\u8BFB", "Reading aloud"],
  "state.paused": ["\u5DF2\u6682\u505C", "Paused"],
  "state.ended": ["\u6717\u8BFB\u7ED3\u675F", "Finished"],
  "state.verified": ["\u8BD5\u542C\u6210\u529F", "Voice test passed"],
  "state.position": ["\u7B2C {index} / {total} \u53E5", "Sentence {index} of {total}"],
  "player.retry": ["\u91CD\u8BD5", "Retry"],
  "player.openSettings": ["\u6253\u5F00\u8BBE\u7F6E", "Open settings"],
  "player.welcome": ["\u9ED8\u8BA4\u4F7F\u7528 Edge \u5728\u7EBF\u6717\u8BFB\uFF0C\u65E0\u9700\u5BC6\u94A5\uFF1B\u6717\u8BFB\u6587\u5B57\u4F1A\u53D1\u9001\u81F3\u5FAE\u8F6F\u3002\u53EF\u5728\u8BBE\u7F6E\u4E2D\u6362\u6210\u672C\u673A\u6216\u5176\u4ED6\u670D\u52A1\u3002", "Edge online speech needs no key and sends the text to Microsoft. Switch to a local or another service in settings."],
  "player.gotIt": ["\u77E5\u9053\u4E86", "Got it"],
  "notice.emptyText": ["\u8FD9\u7BC7\u7B14\u8BB0\u91CC\u6CA1\u6709\u53EF\u6717\u8BFB\u7684\u6587\u5B57\u3002", "This note has no readable text."],
  "notice.noNote": ["\u8BF7\u5148\u6253\u5F00\u4E00\u7BC7 Markdown \u7B14\u8BB0\u3002", "Open a Markdown note first."],
  "status.reading": ["\u6717\u8BFB\u4E2D", "Reading"],
  "status.paused": ["\u6717\u8BFB\u5DF2\u6682\u505C", "Reading paused"],
  // TTS services (labels)
  "tts.provider.system": ["\u7CFB\u7EDF\u8BED\u97F3", "System voice"],
  "tts.provider.macos": ["Mac \u7CFB\u7EDF\u8BED\u97F3", "Mac system speech"],
  "tts.provider.localModel": ["\u672C\u673A\u6A21\u578B", "Local model"],
  "tts.provider.doubao": ["\u8C46\u5305\u8BED\u97F3", "Doubao"],
  "tts.provider.siliconflow": ["\u7845\u57FA\u6D41\u52A8", "SiliconFlow"],
  "tts.provider.qwen": ["\u901A\u4E49\u5343\u95EE TTS", "Qwen TTS"],
  "tts.help.system": ["\u4F7F\u7528\u8BBE\u5907\u81EA\u5E26\u7684\u8BED\u97F3\uFF1B\u90E8\u5206\u7CFB\u7EDF\u97F3\u8272\u9700\u8981\u8054\u7F51\u3002", "Uses device voices; some system voices need a network connection."],
  "tts.help.macos": ["\u8C03\u7528\u8FD9\u53F0 Mac \u4E0A\u5DF2\u5B89\u88C5\u7684\u97F3\u8272\uFF0C\u65E0\u9700\u5BC6\u94A5\u3002\u81EA\u52A8\u8BFB\u53D6\u5DF2\u5B89\u88C5\u7684\u589E\u5F3A\u97F3\u8272\uFF1B\u4E0B\u8F7D\u65B0\u58F0\u97F3\u540E\u53EF\u66F4\u65B0\u5217\u8868\u3002", "Uses voices installed on this Mac, no key needed. After downloading new voices, refresh the list."],
  "tts.help.localModel": ["\u5728\u8FD9\u53F0\u7535\u8111\u4E0A\u5408\u6210\uFF0C\u65E0\u9700\u5BC6\u94A5\uFF1B\u9996\u6B21\u4F7F\u7528\u9700\u4E0B\u8F7D\u4E00\u6B21\u6A21\u578B\u3002", "Synthesis stays on this computer with no key. The model downloads once."],
  "tts.help.edge": ["\u514D\u8D39\u5728\u7EBF\u8BED\u97F3\uFF0C\u9700\u8981\u8054\u7F51\uFF1B\u4EC5\u684C\u9762\u7AEF\u53EF\u7528\u3002\u6717\u8BFB\u6587\u5B57\u4F1A\u53D1\u9001\u81F3\u5FAE\u8F6F\u3002", "Free online speech that needs a network connection; desktop only. Text is sent to Microsoft."],
  "tts.help.cloud": ["\u5728\u7EBF\u5408\u6210\uFF1A\u6717\u8BFB\u6587\u5B57\u4F1A\u53D1\u9001\u5230\u6240\u9009\u670D\u52A1\uFF1B\u4ED8\u8D39\u670D\u52A1\u6309\u7528\u91CF\u8BA1\u8D39\u3002", "Online synthesis sends the text to the chosen service. Paid services bill by usage."],
  "tts.help.doubao": ["\u4F7F\u7528\u8C46\u5305\u8BED\u97F3\u63A7\u5236\u53F0\u7684 API Key\uFF1B\u97F3\u8272\u9700\u4E0E\u8BED\u97F3\u8D44\u6E90\u5339\u914D\u3002", "Use an API key from the Doubao Voice console. The voice must match the speech resource."],
  "tts.help.minimax": ["\u9ED8\u8BA4\u4F7F\u7528\u56FD\u5185\u7AD9\uFF1B\u56FD\u9645\u7AD9\u8D26\u53F7\u8BF7\u5728\u9AD8\u7EA7\u8BBE\u7F6E\u4E2D\u6539\u4E3A https://api.minimax.io/v1\u3002", "Defaults to the China endpoint. International accounts: set https://api.minimax.io/v1 under Advanced."],
  "tts.systemVoice": ["\u81EA\u52A8\u9009\u62E9", "Automatic"],
  "tts.recommended": ["\u63A8\u8350", "Recommended"],
  "tts.voiceEnhanced": ["\u589E\u5F3A", "Enhanced"],
  "tts.voicePremium": ["\u9AD8\u54C1\u8D28", "Premium"],
  "tts.voiceDisplayName": ["\u4E54\u6728\u663E\u793A\u540D", "Qiaomu display name"],
  "tts.sample": ["\u4F60\u597D\uFF0C\u8FD9\u662F\u4E54\u6728\u8BED\u97F3\u7684\u6717\u8BFB\u6D4B\u8BD5\u3002", "Hello. This is a Qiaomu Audio voice test."],
  // Settings: general
  "settings.title": ["\u4E54\u6728\u8BED\u97F3", "Qiaomu Audio"],
  "settings.titleDesc": ["\u6717\u8BFB\u7B14\u8BB0\u4E0E\u8BED\u97F3\u8F6C\u6587\u5B57\uFF1A\u670D\u52A1\u3001\u97F3\u8272\u3001\u672C\u673A\u6A21\u578B\u548C\u542C\u5199\u65B9\u5F0F\u3002", "Read notes aloud and dictate: services, voices, local models and dictation."],
  "settings.read": ["\u6717\u8BFB", "Read aloud"],
  "settings.dictation": ["\u8BED\u97F3\u8F6C\u6587\u5B57", "Speech to text"],
  "settings.service": ["\u8BED\u97F3\u670D\u52A1", "Voice service"],
  "settings.key": ["API \u5BC6\u94A5", "API key"],
  "settings.keyGet": ["\u83B7\u53D6\u5BC6\u94A5", "Get a key"],
  "settings.serviceDocs": ["\u5F00\u901A\u4E0E\u4F7F\u7528\u8BF4\u660E", "Setup guide"],
  "settings.customKeyHelp": ["\u5BC6\u94A5\u7531\u4F60\u4F7F\u7528\u7684\u670D\u52A1\u5546\u63D0\u4F9B\uFF1B\u672C\u673A\u670D\u52A1\u901A\u5E38\u65E0\u9700\u5BC6\u94A5\u3002", "Get the key from your service provider. Local services usually need no key."],
  "settings.keyPlaceholder": ["\u7C98\u8D34 API \u5BC6\u94A5", "Paste an API key"],
  "settings.showKey": ["\u663E\u793A", "Show"],
  "settings.hideKey": ["\u9690\u85CF", "Hide"],
  "settings.unverified": ["\u5C1A\u672A\u6D4B\u8BD5\uFF0C\u8BF7\u786E\u8BA4\u80FD\u7528\u540E\u518D\u5F00\u59CB\u3002", "Not tested yet. Test before using this service."],
  "settings.cancelTest": ["\u53D6\u6D88\u6D4B\u8BD5", "Cancel test"],
  "settings.urlHelp": ["\u586B\u670D\u52A1\u6839\u5730\u5740\uFF1B\u5DF2\u6709\u5B8C\u6574\u8BED\u97F3\u63A5\u53E3\u5730\u5740\u4E5F\u53EF\u4EE5\u3002", "Enter the service base URL. A full speech endpoint also works."],
  "settings.urlPlaceholder": ["https://\u2026/v1", "https://\u2026/v1"],
  "settings.regionHelp": ["\u4E0E Azure \u8BED\u97F3\u8D44\u6E90\u7684\u533A\u57DF\u4FDD\u6301\u4E00\u81F4\uFF0C\u53EF\u5728\u63A7\u5236\u53F0\u300C\u5BC6\u94A5\u548C\u7EC8\u7ED3\u70B9\u300D\u67E5\u770B\u3002", "Use your Speech resource region, shown under Keys and Endpoint in Azure."],
  "settings.previewCloudDesc": ["\u53D1\u9001\u4E00\u53E5\u793A\u4F8B\u8BD5\u542C\uFF1B\u4E91\u7AEF\u670D\u52A1\u53EF\u80FD\u4EA7\u751F\u5C11\u91CF\u8D39\u7528\u3002", "Sends a sample sentence to test the voice. Cloud services may charge a small fee."],
  "settings.model": ["\u6A21\u578B", "Model"],
  "settings.voice": ["\u97F3\u8272", "Voice"],
  "settings.url": ["\u670D\u52A1\u5730\u5740", "Service URL"],
  "settings.region": ["\u533A\u57DF", "Region"],
  "settings.regionPlaceholder": ["\u4F8B\u5982 eastasia", "For example, eastasia"],
  "settings.protocol": ["\u63A5\u53E3\u683C\u5F0F", "Protocol"],
  "settings.resourceId": ["\u8BED\u97F3\u8D44\u6E90 ID", "Speech resource ID"],
  "settings.advanced": ["\u9AD8\u7EA7\u8BBE\u7F6E", "Advanced"],
  "settings.custom": ["\u81EA\u5B9A\u4E49\u2026", "Custom\u2026"],
  "settings.customValue": ["\u81EA\u5B9A\u4E49 ID", "Custom ID"],
  "settings.preview": ["\u8BD5\u542C", "Test voice"],
  "settings.stop": ["\u505C\u6B62", "Stop"],
  "settings.refreshVoices": ["\u66F4\u65B0\u97F3\u8272\u5217\u8868", "Refresh voice list"],
  "settings.catalogReady": ["\u97F3\u8272\u5217\u8868\u5DF2\u66F4\u65B0", "Voice list updated"],
  "settings.catalogPartial": ["\u5DF2\u52A0\u8F7D\u524D 1000 \u4E2A\u97F3\u8272\uFF1B\u5176\u4ED6\u97F3\u8272\u53EF\u586B ID\u3002", "Loaded the first 1,000 voices; enter an ID for others."],
  "settings.importReader": ["\u4ECE\u4E54\u6728 Reader \u5BFC\u5165", "Import from Qiaomu Reader"],
  "settings.importReaderDesc": ["\u5E26\u8FC7\u6717\u8BFB\u670D\u52A1\u3001\u97F3\u8272\u3001\u500D\u901F\u548C\u5DF2\u4FDD\u5B58\u7684\u5BC6\u94A5\u3002", "Copies the voice service, voice, speed and saved keys."],
  "settings.import": ["\u5BFC\u5165", "Import"],
  "settings.imported": ["\u5DF2\u5BFC\u5165\u4E54\u6728 Reader \u7684\u6717\u8BFB\u8BBE\u7F6E\uFF08{keys} \u4E2A\u5BC6\u94A5\uFF09\u3002", "Imported Qiaomu Reader speech settings ({keys} keys)."],
  "settings.importNone": ["\u6CA1\u6709\u627E\u5230\u4E54\u6728 Reader \u7684\u6717\u8BFB\u8BBE\u7F6E\u3002", "No Qiaomu Reader speech settings found."],
  "settings.saveError": ["\u8BBE\u7F6E\u672A\u80FD\u4FDD\u5B58\uFF0C\u8BF7\u91CD\u8BD5\u3002", "Could not save settings. Please retry."],
  "settings.keySaveError": ["\u5BC6\u94A5\u672A\u80FD\u4FDD\u5B58\uFF0C\u8BF7\u91CD\u8BD5\u3002", "Could not save the key. Please retry."],
  "settings.about": ["\u5173\u4E8E", "About"],
  "settings.tagline": ["\u8BA9\u7B14\u8BB0\u5F00\u53E3\u8BF4\u8BDD\uFF0C\u4E5F\u542C\u4F60\u8BF4\u8BDD\u3002", "Notes that read aloud \u2014 and listen."],
  "settings.voiceSection": ["\u6717\u8BFB\u670D\u52A1", "Voice"],
  "settings.voiceSectionDesc": ["\u9009\u4E00\u4E2A\u670D\u52A1\u548C\u97F3\u8272\uFF0C\u70B9\u8BD5\u542C\u786E\u8BA4\u80FD\u7528\u3002", "Pick a service and voice, then test it."],
  "settings.previewDesc": ["\u7528\u5F53\u524D\u97F3\u8272\u8BFB\u4E00\u53E5\u793A\u4F8B\u3002", "Plays a sample sentence with this voice."],
  "settings.engineSection": ["\u8F6C\u5199\u5F15\u64CE", "Recognition"],
  "settings.engineSectionDesc": ["\u51B3\u5B9A\u4F60\u7684\u58F0\u97F3\u5728\u54EA\u91CC\u53D8\u6210\u6587\u5B57\u3002", "Where your speech turns into text."],
  "settings.habitSection": ["\u542C\u5199\u4E60\u60EF", "Preferences"],
  "settings.habitSectionDesc": ["\u51FA\u5B57\u8282\u594F\u3001\u8BC6\u522B\u8BED\u8A00\u4E0E\u5F55\u97F3\u3002", "Pacing, language and recordings."],
  "about.version": ["\u5F53\u524D\u7248\u672C", "Version"],
  "about.changelog": ["\u66F4\u65B0\u65E5\u5FD7", "Changelog"],
  "about.feedback": ["\u53CD\u9988\u95EE\u9898", "Report an issue"],
  "about.guide": ["\u4F7F\u7528\u8BF4\u660E", "Guide"],
  "about.support": ["\u652F\u6301\u4E54\u6728", "Support the author"],
  "about.supportDesc": ["\u89C9\u5F97\u597D\u7528\uFF0C\u5C31\u5173\u6CE8\u4E00\u4E0B\u6216\u8BF7\u6211\u559D\u676F\u5496\u5561\u3002", "If it helps you, follow along or buy me a coffee."],
  "about.follow": ["\u5173\u6CE8\u516C\u4F17\u53F7", "Follow on WeChat"],
  "about.followHint": ["\u5FAE\u4FE1\u641C\u7D22\u300C\u5411\u9633\u4E54\u6728\u63A8\u8350\u770B\u300D", "Search \u201C\u5411\u9633\u4E54\u6728\u63A8\u8350\u770B\u201D in WeChat"],
  "about.followAlt": ["\u5411\u9633\u4E54\u6728\u63A8\u8350\u770B\u516C\u4F17\u53F7\u4E8C\u7EF4\u7801", "QR code for the \u5411\u9633\u4E54\u6728\u63A8\u8350\u770B WeChat account"],
  "about.tip": ["\u8BF7\u6211\u559D\u676F\u5496\u5561", "Buy me a coffee"],
  "about.tipHint": ["\u5FAE\u4FE1\u626B\u7801\uFF0C\u652F\u6301\u6301\u7EED\u66F4\u65B0", "Scan with WeChat to support updates"],
  "about.tipAlt": ["\u5411\u9633\u4E54\u6728\u6253\u8D4F\u4E8C\u7EF4\u7801", "Tip QR code for \u5411\u9633\u4E54\u6728"],
  "about.blog": ["\u535A\u5BA2", "Blog"],
  "about.email": ["\u90AE\u7BB1", "Email"],
  "about.privacy": ["\u5BC6\u94A5\u53EA\u5B58\u5728\u672C\u673A\u94A5\u5319\u4E32\uFF1B\u6587\u5B57\u548C\u97F3\u9891\u53EA\u53D1\u9001\u7ED9\u4F60\u9009\u62E9\u7684\u670D\u52A1\uFF0C\u672C\u673A\u6A21\u578B\u5B8C\u5168\u79BB\u7EBF\u3002\u4E8C\u7EF4\u7801\u56FE\u7247\u6253\u5F00\u672C\u9875\u65F6\u4ECE radio.qiaomu.ai \u52A0\u8F7D\u3002", "Keys stay in this device\u2019s keychain; text and audio go only to the service you choose, and local models run offline. QR images load from radio.qiaomu.ai when this page opens."],
  "about.license": ["\xA9 \u5411\u9633\u4E54\u6728 \xB7 GPL-3.0 \u8BB8\u53EF \xB7 Edge \u6717\u8BFB\u4E92\u901A\u8BF4\u660E\u89C1\u63D2\u4EF6\u76EE\u5F55 licenses/", "\xA9 \u5411\u9633\u4E54\u6728 \xB7 GPL-3.0 \xB7 Edge TTS notice in the plugin\u2019s licenses/ folder"],
  // Settings: dictation
  "asr.engine": ["\u8F6C\u5199\u65B9\u5F0F", "Recognition"],
  "asr.engine.local": ["\u672C\u673A\u8F6C\u5199\uFF08SenseVoice\uFF09", "On this computer (SenseVoice)"],
  "asr.engine.none": ["\u5C1A\u672A\u9009\u62E9", "Not chosen"],
  "asr.engine.add": ["\u6DFB\u52A0\u4E91\u7AEF\u670D\u52A1\u2026", "Add a cloud service\u2026"],
  "asr.localHelp": ["\u97F3\u9891\u53EA\u5728\u8FD9\u53F0\u7535\u8111\u4E0A\u8BC6\u522B\uFF0C\u4E0D\u4E0A\u4F20\u3001\u4E0D\u82B1\u94B1\uFF1B\u652F\u6301\u4E2D\u3001\u82F1\u3001\u65E5\u3001\u97E9\u3001\u7CA4\u8BED\u3002", "Audio is recognised on this computer: nothing is uploaded or billed. Chinese, English, Japanese, Korean and Cantonese."],
  "asr.cloudHelp": ["\u97F3\u9891\u4F1A\u4E0A\u4F20\u5230\u6240\u9009\u670D\u52A1\u8BC6\u522B\uFF0C\u6309\u5B83\u7684\u89C4\u5219\u8BA1\u8D39\u3002", "Audio is uploaded to the chosen service and billed by its rules."],
  "asr.localServiceHelp": ["\u4F60\u81EA\u5DF1\u5728\u672C\u673A\u8FD0\u884C\u7684\u8BC6\u522B\u670D\u52A1\uFF1B\u97F3\u9891\u4E0D\u79BB\u5F00\u8FD9\u53F0\u7535\u8111\u3002", "A recognition service you run on this computer; audio stays here."],
  "asr.provider": ["\u670D\u52A1\u5546", "Provider"],
  "asr.name": ["\u663E\u793A\u540D\u79F0", "Display name"],
  "asr.remove": ["\u5220\u9664\u6B64\u670D\u52A1", "Remove this service"],
  "asr.test": ["\u6D4B\u8BD5\u8FDE\u63A5", "Test connection"],
  "asr.testing": ["\u6B63\u5728\u6D4B\u8BD5\u2026", "Testing\u2026"],
  "asr.testOk": ["\u8FDE\u63A5\u6210\u529F", "Connection works"],
  "asr.testDesc": ["\u53D1\u9001 1 \u79D2\u6D4B\u8BD5\u97F3\u9891\uFF0C\u4E0D\u4F7F\u7528\u9EA6\u514B\u98CE\uFF1B\u53EF\u80FD\u4EA7\u751F\u5C11\u91CF\u8D39\u7528\u3002", "Sends one second of test audio without using your microphone. A small charge may apply."],
  "asr.testLocalDesc": ["\u53D1\u9001 1 \u79D2\u6D4B\u8BD5\u97F3\u9891\u5230\u672C\u673A\u670D\u52A1\uFF0C\u4E0D\u4F7F\u7528\u9EA6\u514B\u98CE\u3002", "Sends one second of test audio to your local service without using your microphone."],
  "asr.mode": ["\u51FA\u5B57\u65B9\u5F0F", "Text appears"],
  "asr.mode.batch": ["\u8BF4\u5B8C\u518D\u51FA\u5B57", "After you finish"],
  "asr.mode.live": ["\u8FB9\u8BF4\u8FB9\u51FA\u5B57", "While you speak"],
  "asr.modeHelp": ["\u300C\u8FB9\u8BF4\u8FB9\u51FA\u5B57\u300D\u5728\u6BCF\u6B21\u505C\u987F\u540E\u8BC6\u522B\u4E00\u53E5\uFF1B\u300C\u8BF4\u5B8C\u518D\u51FA\u5B57\u300D\u6574\u6BB5\u8BC6\u522B\uFF0C\u6700\u7A33\u3002", '"While you speak" recognises each phrase after a pause; "After you finish" recognises the whole recording and is the most robust.'],
  "asr.language": ["\u8BC6\u522B\u8BED\u8A00", "Language"],
  "asr.keepAudio": ["\u4FDD\u7559\u5F55\u97F3", "Keep recordings"],
  "asr.keepAudioHelp": ["\u628A\u5F55\u97F3\u5B58\u8FDB\u9644\u4EF6\u6587\u4EF6\u5939\uFF0C\u5E76\u5728\u6587\u5B57\u4E0B\u65B9\u63D2\u5165\u5F55\u97F3\u3002", "Save the recording as an attachment and embed it below the text."],
  "lang.auto": ["\u81EA\u52A8", "Automatic"],
  "lang.zh": ["\u4E2D\u6587", "Chinese"],
  "lang.en": ["\u82F1\u6587", "English"],
  "lang.ja": ["\u65E5\u6587", "Japanese"],
  "lang.ko": ["\u97E9\u6587", "Korean"],
  "lang.yue": ["\u7CA4\u8BED", "Cantonese"],
  "lang.de": ["\u5FB7\u6587", "German"],
  "lang.fr": ["\u6CD5\u6587", "French"],
  "lang.es": ["\u897F\u73ED\u7259\u6587", "Spanish"],
  "asr.provider.siliconflow": ["\u7845\u57FA\u6D41\u52A8 SiliconFlow", "SiliconFlow"],
  "asr.provider.doubao": ["\u8C46\u5305\u8BED\u97F3\uFF08\u706B\u5C71\u5F15\u64CE\uFF09", "Doubao (Volcengine)"],
  "asr.provider.glm": ["\u667A\u8C31 GLM", "Zhipu GLM"],
  "asr.provider.stepfun": ["\u9636\u8DC3\u661F\u8FB0 StepFun", "StepFun"],
  "asr.provider.mimo": ["\u5C0F\u7C73 MiMo", "Xiaomi MiMo"],
  "asr.provider.local": ["\u672C\u673A\u670D\u52A1\uFF08OpenAI \u517C\u5BB9\uFF09", "Local service (OpenAI-compatible)"],
  "asr.provider.custom": ["\u81EA\u5B9A\u4E49\uFF08OpenAI \u517C\u5BB9\uFF09", "Custom (OpenAI-compatible)"],
  "asr.note.siliconflow": ["\u63A8\u8350 Qwen3-ASR\uFF1A\u901F\u5EA6\u5FEB\uFF0C\u672F\u8BED\u8BC6\u522B\u51C6\u786E\u3002", "Qwen3-ASR is recommended: fast and accurate with terms."],
  "asr.note.doubao": ["\u5F55\u97F3\u6587\u4EF6\u8BC6\u522B\u6781\u901F\u7248\uFF1BAPI Key \u662F\u63A7\u5236\u53F0\u91CC\u7684 UUID\uFF0C\u9700\u5148\u5F00\u901A\u300C\u6781\u901F\u7248\u300D\u3002", "Recorded-file flash recognition. The API key is the console UUID; enable the flash edition first."],
  "asr.note.glm": ["\u5355\u6B21\u6700\u957F 30 \u79D2\uFF0C\u4F1A\u81EA\u52A8\u6309\u505C\u987F\u5207\u6210\u5C0F\u6BB5\u3002", "Accepts 30 seconds per request; audio is cut at pauses automatically."],
  "asr.note.mimo": ["\u652F\u6301\u7CA4\u8BED\u3001\u5434\u8BED\u3001\u95FD\u5357\u8BED\u3001\u56DB\u5DDD\u8BDD\u3002", "Supports Cantonese, Wu, Min Nan and Sichuanese."],
  "asr.note.local": ['\u4F8B\u5982 whisper.cpp server\u3001faster-whisper-server\uFF0C\u6216 uvx --from "mlx-qwen3-asr[serve]" mlx-qwen3-asr serve\u3002', 'For example whisper.cpp server, faster-whisper-server, or uvx --from "mlx-qwen3-asr[serve]" mlx-qwen3-asr serve.'],
  "asr.note.custom": ["\u4EFB\u4F55\u517C\u5BB9 /audio/transcriptions \u7684\u670D\u52A1\u90FD\u53EF\u4EE5\u3002", "Any service compatible with /audio/transcriptions works."],
  // First-use choice
  "choose.title": ["\u9009\u62E9\u8BED\u97F3\u8F6C\u6587\u5B57\u65B9\u5F0F", "Choose how speech becomes text"],
  "choose.local": ["\u5728\u8FD9\u53F0\u7535\u8111\u4E0A\u8F6C\u5199", "Recognise on this computer"],
  "choose.localDesc": ["\u4E0D\u4E0A\u4F20\u3001\u4E0D\u82B1\u94B1\uFF1B\u5148\u5B89\u88C5\u672C\u673A\u73AF\u5883\uFF0C\u518D\u4E0B\u8F7D\u7EA6 {size} MB \u7684\u6A21\u578B\u3002", "Nothing is uploaded or billed. Set up the local runtime, then download a {size} MB model."],
  "choose.cloud": ["\u4F7F\u7528\u4E91\u7AEF\u670D\u52A1", "Use a cloud service"],
  "choose.cloudDesc": ["\u586B\u4E00\u4E2A API Key \u5373\u53EF\uFF1B\u97F3\u9891\u4F1A\u4E0A\u4F20\u5230\u4F60\u9009\u7684\u670D\u52A1\u3002", "Just add an API key; audio is uploaded to the service you choose."],
  "choose.setup": ["\u53BB\u8BBE\u7F6E", "Set up"],
  // Local models
  "local.download": ["\u4E0B\u8F7D\u5E76\u4F7F\u7528", "Download and use"],
  "local.cancel": ["\u53D6\u6D88\u4E0B\u8F7D", "Cancel download"],
  "local.setup": ["\u5B89\u88C5\u672C\u673A\u73AF\u5883", "Set up local runtime"],
  "local.check": ["\u68C0\u67E5\u5B89\u88C5", "Check installation"],
  "local.size": ["\u6A21\u578B\u4E0B\u8F7D\u7EA6 {size} MB \xB7 {license}", "Model download: about {size} MB \xB7 {license}"],
  "local.details": ["\u5B58\u50A8\u4E0E\u6765\u6E90", "Storage and source"],
  "local.storage": ["\u6A21\u578B\u4E0E\u8FD0\u884C\u73AF\u5883\u5B58\u653E\u5728\u672C\u673A\u5E94\u7528\u6570\u636E\u76EE\u5F55\uFF0C\u72EC\u7ACB\u4E8E\u7B14\u8BB0\u5E93\uFF1B\u82E5\u4E54\u6728 Reader \u5DF2\u4E0B\u8F7D\u540C\u4E00\u6A21\u578B\u4F1A\u76F4\u63A5\u590D\u7528\u3002", "Models and their runtime live in device application data, outside vaults. A copy already downloaded by Qiaomu Reader is reused."],
  "local.remove": ["\u5220\u9664\u672C\u673A\u6A21\u578B", "Remove local model"],
  "phase.unknown": ["\u6B63\u5728\u68C0\u67E5\u5B89\u88C5\u72B6\u6001\u2026", "Checking installation\u2026"],
  "phase.missing": ["\u5C1A\u672A\u5B89\u88C5\uFF1B\u9996\u6B21\u5B89\u88C5\u53EF\u80FD\u9700\u8981\u51E0\u5206\u949F\u3002", "Not installed. Setup can take a few minutes."],
  "phase.runtimeMissing": ["\u5148\u6309\u5B89\u88C5\u6307\u5F15\u51C6\u5907\u672C\u673A\u73AF\u5883\uFF0C\u518D\u56DE\u6765\u68C0\u67E5\u5B89\u88C5\u3002", "Prepare the local runtime using the setup guide, then check installation here."],
  "phase.runtime": ["\u6B63\u5728\u51C6\u5907\u8FD0\u884C\u73AF\u5883\u2026", "Preparing runtime\u2026"],
  "phase.environment": ["\u6B63\u5728\u5B89\u88C5\u4F9D\u8D56\u2026", "Installing dependencies\u2026"],
  "phase.download": ["\u6B63\u5728\u4E0B\u8F7D\u6587\u4EF6\u2026", "Downloading files\u2026"],
  "phase.downloaded": ["\u6587\u4EF6\u5DF2\u4E0B\u8F7D\uFF0C\u7EE7\u7EED\u51C6\u5907\u2026", "Files downloaded. Preparing\u2026"],
  "phase.extract": ["\u6B63\u5728\u6821\u9A8C\u5E76\u5C55\u5F00\u6A21\u578B\u2026", "Verifying and extracting model\u2026"],
  "phase.installed": ["\u5B89\u88C5\u5B8C\u6210\uFF0C\u6B63\u5728\u68C0\u67E5\u2026", "Installed. Checking\u2026"],
  "phase.verify": ["\u6B63\u5728\u505A\u672C\u673A\u6D4B\u8BD5\uFF1B\u9996\u6B21\u52A0\u8F7D\u53EF\u80FD\u8F83\u6162\u2026", "Running a local test. The first load can be slow\u2026"],
  "phase.ready": ["\u5DF2\u901A\u8FC7\u672C\u673A\u68C0\u67E5\uFF0C\u53EF\u4EE5\u4F7F\u7528", "Verified on this device and ready"],
  "phase.cancelled": ["\u5DF2\u53D6\u6D88\uFF0C\u91CD\u65B0\u4E0B\u8F7D\u4F1A\u63A5\u7740\u4E0B\u8F7D\u3002", "Cancelled. Downloading again resumes."],
  "phase.cancelling": ["\u6B63\u5728\u53D6\u6D88\u4E0B\u8F7D\u2026", "Cancelling download\u2026"],
  "phase.server": ["\u6B63\u5728\u542F\u52A8\u2026", "Starting\u2026"],
  "phase.progress": ["{mb} / {total} MB", "{mb} / {total} MB"],
  // Dictation
  "dictation.label": ["\u542C\u5199", "Dictation"],
  "dictation.listening": ["\u6B63\u5728\u542C\u2026", "Listening\u2026"],
  "dictation.preparing": ["\u6B63\u5728\u6253\u5F00\u9EA6\u514B\u98CE\u2026", "Opening microphone\u2026"],
  "dictation.transcribing": ["\u6B63\u5728\u8F6C\u5199\u2026", "Transcribing\u2026"],
  "dictation.progress": ["\u6B63\u5728\u8F6C\u5199 {done}/{total}", "Transcribing {done}/{total}"],
  "dictation.finish": ["\u5B8C\u6210", "Done"],
  "dictation.cancel": ["\u53D6\u6D88", "Cancel"],
  "dictation.retry": ["\u91CD\u65B0\u8F6C\u5199", "Transcribe again"],
  "dictation.saveAudio": ["\u4FDD\u5B58\u5F55\u97F3", "Save recording"],
  "dictation.close": ["\u5173\u95ED", "Close"],
  "dictation.inserted": ["\u5DF2\u63D2\u5165 {count} \u4E2A\u5B57", "Inserted {count} characters"],
  "dictation.noSpeech": ["\u6CA1\u6709\u542C\u5230\u8BF4\u8BDD\u58F0\uFF0C\u8BF7\u9760\u8FD1\u9EA6\u514B\u98CE\u518D\u8BD5\u4E00\u6B21\u3002", "No speech was heard. Move closer to the microphone and try again."],
  "dictation.empty": ["\u6CA1\u6709\u8BC6\u522B\u51FA\u6587\u5B57\uFF0C\u8BF7\u518D\u8BD5\u4E00\u6B21\u6216\u6362\u4E00\u79CD\u8F6C\u5199\u65B9\u5F0F\u3002", "No text was recognised. Try again or choose another recognition method."],
  "dictation.saved": ["\u5F55\u97F3\u5DF2\u4FDD\u5B58\u5230 {path}", "Recording saved to {path}"],
  "dictation.limit": ["\u5DF2\u8FBE\u5230 60 \u5206\u949F\u4E0A\u9650\uFF0C\u81EA\u52A8\u7ED3\u675F\u5F55\u97F3\u3002", "Reached the 60-minute limit; recording finished."],
  "dictation.readingPaused": ["\u542C\u5199\u671F\u95F4\u5DF2\u6682\u505C\u6717\u8BFB\u3002", "Reading is paused while dictating."],
  // Errors (speech + recognition). {status}/{detail} are optional values.
  "error.key": ["\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u586B\u5199 API \u5BC6\u94A5\u3002", "Enter an API key in settings."],
  "error.url": ["\u8BF7\u586B\u5199\u6709\u6548\u7684\u670D\u52A1\u5730\u5740\u3002", "Enter a valid service URL."],
  "error.https": ["\u8FDC\u7A0B\u670D\u52A1\u9700\u4F7F\u7528 HTTPS \u5730\u5740\u3002", "Remote services require HTTPS."],
  "error.region": ["\u8BF7\u586B\u5199 Azure \u533A\u57DF\uFF0C\u4F8B\u5982 eastasia\u3002", "Enter an Azure region, such as eastasia."],
  "error.resource": ["\u8BF7\u586B\u5199\u4E0E\u8C46\u5305\u97F3\u8272\u5339\u914D\u7684\u8BED\u97F3\u8D44\u6E90 ID\u3002", "Enter the speech resource ID that matches the Doubao voice."],
  "error.configuration": ["\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u586B\u5199\u6A21\u578B\u548C\u97F3\u8272\u3002", "Enter a model and voice in settings."],
  "error.model": ["\u6A21\u578B\u540D\u79F0\u65E0\u6548\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u68C0\u67E5\u3002", "The model name is invalid. Check settings."],
  "error.service": ["\u670D\u52A1\u8FD4\u56DE\u9519\u8BEF\uFF08{status}\uFF09\uFF0C\u8BF7\u68C0\u67E5\u5BC6\u94A5\u3001\u4F59\u989D\u548C\u6743\u9650\u540E\u91CD\u8BD5\u3002", "The service returned an error ({status}). Check the key, balance and access, then retry."],
  "error.system": ["\u7CFB\u7EDF\u8BED\u97F3\u672A\u80FD\u64AD\u653E\uFF0C\u8BF7\u68C0\u67E5\u8BBE\u5907\u97F3\u8272\u6216\u66F4\u6362\u670D\u52A1\u3002", "System speech failed. Check device voices or choose another service."],
  "error.systemUnavailable": ["\u8FD9\u53F0\u8BBE\u5907\u6CA1\u6709\u7CFB\u7EDF\u6717\u8BFB\u63A5\u53E3\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u9009\u62E9\u5176\u4ED6\u670D\u52A1\u3002", "System speech is unavailable on this device. Choose another service in settings."],
  "error.voice": ["\u6B64\u8BBE\u5907\u6CA1\u6709\u4FDD\u5B58\u7684\u97F3\u8272\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002", "The saved voice is unavailable on this device. Choose another voice."],
  "error.network": ["\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u91CD\u8BD5\uFF0C\u6216\u66F4\u6362\u670D\u52A1\u3002", "Could not connect. Check the network and retry, or choose another service."],
  "error.timeout": ["\u670D\u52A1\u54CD\u5E94\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u6216\u66F4\u6362\u670D\u52A1\u3002", "The service timed out. Retry or choose another service."],
  "error.empty": ["\u670D\u52A1\u6CA1\u6709\u8FD4\u56DE\u97F3\u9891\uFF0C\u8BF7\u68C0\u67E5\u6A21\u578B\u4E0E\u97F3\u8272\u3002", "No audio was returned. Check the model and voice."],
  "error.response": ["\u670D\u52A1\u8FD4\u56DE\u4E86\u65E0\u6CD5\u8BC6\u522B\u7684\u5185\u5BB9\uFF0C\u8BF7\u68C0\u67E5\u8BBE\u7F6E\u3002", "The service returned something unexpected. Check settings."],
  "error.playback": ["\u97F3\u9891\u672A\u80FD\u64AD\u653E\uFF0C\u8BF7\u91CD\u8BD5\u3002", "Audio playback failed. Please retry."],
  "error.mobile": ["\u624B\u673A\u7AEF\u8BF7\u4F7F\u7528\u7CFB\u7EDF\u8BED\u97F3\u6216\u5176\u4ED6\u4E91\u7AEF\u670D\u52A1\u3002", "On mobile, use system speech or another cloud service."],
  "error.macPlatform": ["Mac \u672C\u673A\u8BED\u97F3\u53EA\u80FD\u5728 Mac \u684C\u9762\u7AEF\u4F7F\u7528\uFF0C\u8BF7\u9009\u62E9\u5176\u4ED6\u670D\u52A1\u3002", "Mac local speech needs a Mac desktop. Choose another service."],
  "error.native": ["\u672C\u673A\u8BED\u97F3\u8C03\u7528\u5931\u8D25\uFF0C\u8BF7\u66F4\u65B0\u97F3\u8272\u5217\u8868\u3001\u91CD\u8BD5\u6216\u66F4\u6362\u670D\u52A1\u3002", "Local speech failed. Refresh voices, retry or choose another service."],
  "error.http": ["\u8BF7\u6C42\u5931\u8D25\uFF08HTTP {status}\uFF09\uFF0C\u8BF7\u68C0\u67E5\u670D\u52A1\u8BBE\u7F6E\u6216\u91CD\u8BD5\u3002", "Request failed (HTTP {status}). Check settings or retry."],
  "error.rateLimit": ["\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u6216\u66F4\u6362\u670D\u52A1\u3002", "Too many requests. Retry later or choose another service."],
  "error.rateLimitUntil": ["\u670D\u52A1\u6682\u65F6\u9650\u6D41\uFF0C{time} \u540E\u53EF\u91CD\u8BD5\uFF0C\u4E5F\u53EF\u66F4\u6362\u670D\u52A1\u3002", "The service is rate-limiting. Retry after {time}, or choose another service."],
  "error.edge403": ["Edge \u62D2\u7EDD\u4E86\u8FD9\u6B21\u8BF7\u6C42\uFF08403\uFF09\uFF0C\u53EF\u91CD\u8BD5\u6216\u6539\u7528\u7CFB\u7EDF\u8BED\u97F3\u3002", "Edge rejected this request (403). Retry or use system voice."],
  "error.auth": ["\u9274\u6743\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5 API \u5BC6\u94A5\u548C\u670D\u52A1\u6743\u9650\u3002", "Authentication failed. Check the API key and service access."],
  "error.quota": ["\u8D26\u6237\u989D\u5EA6\u4E0D\u8DB3\u6216\u6B20\u8D39\uFF0C\u8BF7\u5145\u503C\u540E\u91CD\u8BD5\u3002", "The account is out of quota or credit. Top up and retry."],
  "error.server": ["\u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528\uFF08{detail}\uFF09\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002", "The service is temporarily unavailable ({detail}). Retry later."],
  "error.protocol": ["\u4E0D\u652F\u6301\u8FD9\u79CD\u63A5\u53E3\u683C\u5F0F\u3002", "This protocol is not supported."],
  "error.audio": ["\u5F55\u97F3\u683C\u5F0F\u5F02\u5E38\uFF0C\u8BF7\u91CD\u8BD5\u3002", "The recording could not be read. Please retry."],
  "error.noEngine": ["\u8FD8\u6CA1\u6709\u9009\u62E9\u8BED\u97F3\u8F6C\u6587\u5B57\u65B9\u5F0F\u3002", "No speech-to-text method is chosen yet."],
  "error.micDenied": ["\u65E0\u6CD5\u4F7F\u7528\u9EA6\u514B\u98CE\u3002\u8BF7\u5728\u7CFB\u7EDF\u8BBE\u7F6E \u2192 \u9690\u79C1\u4E0E\u5B89\u5168\u6027 \u2192 \u9EA6\u514B\u98CE\u4E2D\u5141\u8BB8 DeepSeek Harness\uFF0C\u7136\u540E\u91CD\u8BD5\u3002", "Microphone access is blocked. Allow DeepSeek Harness under System Settings \u2192 Privacy & Security \u2192 Microphone, then retry."],
  "error.micMissing": ["\u6CA1\u6709\u627E\u5230\u9EA6\u514B\u98CE\uFF0C\u8BF7\u8FDE\u63A5\u9EA6\u514B\u98CE\u540E\u91CD\u8BD5\u3002", "No microphone was found. Connect one and retry."],
  "error.micBusy": ["\u9EA6\u514B\u98CE\u6B63\u88AB\u5176\u4ED6\u5E94\u7528\u5360\u7528\uFF0C\u8BF7\u5173\u95ED\u540E\u91CD\u8BD5\u3002", "The microphone is in use by another app. Close it and retry."],
  "error.micUnsupported": ["\u8FD9\u53F0\u8BBE\u5907\u4E0D\u652F\u6301\u5728 DeepSeek Harness \u4E2D\u5F55\u97F3\u3002", "Recording is not supported in DeepSeek Harness on this device."],
  "error.localPlatform": ["\u672C\u673A\u6A21\u578B\u53EA\u80FD\u5728\u684C\u9762\u7AEF\u4F7F\u7528\uFF0C\u8BF7\u9009\u62E9\u4E91\u7AEF\u670D\u52A1\u3002", "Local models need the desktop app. Choose a cloud service."],
  "error.localMissing": ["\u6B64\u8BBE\u5907\u8FD8\u6CA1\u6709\u5B89\u88C5\u8BE5\u6A21\u578B\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u70B9\u300C\u4E0B\u8F7D\u5E76\u4F7F\u7528\u300D\u3002", "This model is not installed on this device. Choose Download and use in settings."],
  "error.localModel": ["\u8BF7\u9009\u62E9\u5217\u8868\u4E2D\u7684\u672C\u673A\u6A21\u578B\u3002", "Choose a local model from the list."],
  "error.localPath": ["\u5B58\u50A8\u4F4D\u7F6E\u4E0D\u80FD\u5728\u7B14\u8BB0\u5E93\u6216\u63D2\u4EF6\u76EE\u5F55\u5185\u3002", "Storage must be outside vaults and plugin folders."],
  "error.localBusy": ["\u5176\u4ED6\u7A97\u53E3\u6B63\u5728\u51C6\u5907\u6B64\u6A21\u578B\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002", "Another window is preparing this model. Retry shortly."],
  "error.localDownload": ["\u4E0B\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u91CD\u8BD5\u3002", "Download failed. Check the network and retry."],
  "error.localChecksum": ["\u4E0B\u8F7D\u6821\u9A8C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002", "Download verification failed. Retry."],
  "error.localArchive": ["\u5B89\u88C5\u5305\u683C\u5F0F\u5F02\u5E38\uFF0C\u8BF7\u91CD\u8BD5\u3002", "The installation archive is invalid. Retry."],
  "error.localEnvironment": ["\u672C\u673A\u73AF\u5883\u672A\u5C31\u7EEA\uFF0C\u8BF7\u6309\u300C\u5B89\u88C5\u672C\u673A\u73AF\u5883\u300D\u6307\u5F15\u5B89\u88C5\u6216\u4FEE\u590D\uFF0C\u7136\u540E\u68C0\u67E5\u5B89\u88C5\u3002", "The local runtime is not ready. Follow Set up local runtime to install or repair it, then check installation."],
  "error.localInstall": ["\u5B89\u88C5\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u548C\u5269\u4F59\u78C1\u76D8\u7A7A\u95F4\u540E\u91CD\u8BD5\u3002", "Setup did not finish. Check the network and free disk space, then retry."],
  "error.localInference": ["\u672C\u673A\u6A21\u578B\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u66F4\u6362\u6A21\u578B\u3002", "The local model failed. Retry or choose another model."],
  // Share: export speech as MP3 / MP4
  "cmd.share": ["\u5BFC\u51FA\u4E3A\u97F3\u9891\u6216\u89C6\u9891\u2026", "Export as audio or video\u2026"],
  "share.title": ["\u5BFC\u51FA\u4E3A\u97F3\u9891\u6216\u89C6\u9891", "Export as audio or video"],
  "share.untitled": ["\u672A\u547D\u540D", "Untitled"],
  "share.preset.short": ["\u77ED\u89C6\u9891 \xB7 \u7AD6\u5C4F", "Short video \xB7 portrait"],
  "share.preset.wide": ["\u6A2A\u5C4F\u89C6\u9891", "Widescreen video"],
  "share.preset.audio": ["\u4EC5\u97F3\u9891", "Audio only"],
  "share.scope": ["\u8303\u56F4", "What to export"],
  "share.scope.selection": ["\u9009\u4E2D\u7684\u5185\u5BB9", "Selection"],
  "share.scope.note": ["\u6574\u7BC7\u7B14\u8BB0", "Whole note"],
  "share.scope.cursor": ["\u4ECE\u5149\u6807\u5904\u5230\u7ED3\u5C3E", "From the cursor to the end"],
  "share.scope.section": ["\u5F53\u524D\u7AE0\u8282\uFF1A{title}", "Current section: {title}"],
  "share.scope.sections": ["\u9009\u62E9\u7AE0\u8282\u2026", "Choose sections\u2026"],
  "share.empty": ["\u6CA1\u6709\u53EF\u6717\u8BFB\u7684\u6587\u5B57\u3002", "Nothing to read aloud here."],
  "share.stats": ["{chars} \u5B57\uFF0C\u7EA6 {time}", "{chars} characters, about {time}"],
  "share.costWarn": ["\u5171 {chars} \u5B57\u3002\u4E91\u7AEF\u97F3\u8272\u6309\u5B57\u6570\u8BA1\u8D39\uFF0C\u5EFA\u8BAE\u5148\u8BD5\u542C\uFF0C\u6216\u53EA\u5BFC\u51FA\u9700\u8981\u7684\u7AE0\u8282\u3002", "{chars} characters. Cloud voices bill by character, so audition first or export only the sections you need."],
  "share.longVideo": ["\u89C6\u9891\u8D85\u8FC7 3 \u5206\u949F\uFF0C\u5F88\u591A\u5E73\u53F0\u4F1A\u9650\u5236\u65F6\u957F\uFF1B\u53EF\u4EE5\u6309\u7AE0\u8282\u5206\u522B\u5BFC\u51FA\u3002", "Over 3 minutes: many platforms limit video length. Consider exporting sections separately."],
  "share.editText": ["\u67E5\u770B\u4E0E\u4FEE\u6539\u6717\u8BFB\u6587\u5B57", "Review and edit the spoken text"],
  "share.editTextHint": ["\u6BCF\u884C\u662F\u4E00\u53E5\u3002\u53EA\u5F71\u54CD\u8FD9\u6B21\u5BFC\u51FA\uFF0C\u4E0D\u4F1A\u6539\u52A8\u7B14\u8BB0\uFF1B\u53EF\u5728\u8FD9\u91CC\u4FEE\u6B63\u591A\u97F3\u5B57\u3001\u7F29\u5199\u548C\u6570\u5B57\u8BFB\u6CD5\u3002", "One sentence per line. Only affects this export, never your note. Fix pronunciations, abbreviations and numbers here."],
  "share.voice": ["\u97F3\u8272", "Voice"],
  "share.systemVoice": ["\u6D4F\u89C8\u5668\u7CFB\u7EDF\u8BED\u97F3\u65E0\u6CD5\u5BFC\u51FA\uFF0C\u8BF7\u66F4\u6362\u4E3A\u5176\u4ED6\u97F3\u8272\u3002", "Browser system speech cannot be exported. Choose another voice."],
  "share.audition": ["\u8BD5\u542C", "Audition"],
  "share.changeVoice": ["\u66F4\u6362", "Change"],
  "share.speed": ["\u500D\u901F", "Speed"],
  "share.speedNote": ["\u5BFC\u51FA\u65F6\u4FDD\u6301\u539F\u97F3\u8C03", "Pitch is preserved"],
  "share.format": ["\u683C\u5F0F", "Format"],
  "share.shape": ["\u753B\u5E45", "Frame"],
  "share.portrait": ["\u7AD6\u5C4F 9:16", "Portrait 9:16"],
  "share.landscape": ["\u6A2A\u5C4F 16:9", "Landscape 16:9"],
  "share.cover": ["\u7247\u5934\u5C01\u9762", "Cover intro"],
  "share.outro": ["\u7247\u5C3E\u7F72\u540D", "End card"],
  "share.setSignature": ["\u53BB\u586B\u5199\u7F72\u540D", "Add signature"],
  "share.videoDesktop": ["\u89C6\u9891\u5BFC\u51FA\u4EC5\u652F\u6301\u7535\u8111\u7AEF\uFF1B\u624B\u673A\u4E0A\u53EF\u5BFC\u51FA MP3\u3002", "Video export needs the desktop app. MP3 works everywhere."],
  "share.captionSample": ["\u7EA6 1 \u5206\u949F \xB7 \u793A\u4F8B", "About 1 min \xB7 sample"],
  "share.caption": ["\u7EA6 {time}", "About {time}"],
  "share.more": ["\u66F4\u591A\u9009\u9879", "More options"],
  "share.titleLabel": ["\u6807\u9898", "Title"],
  "share.srt": ["\u540C\u65F6\u5BFC\u51FA\u5B57\u5E55\u6587\u4EF6", "Also export subtitles"],
  "share.srtDesc": [".srt \u6587\u4EF6\uFF0C\u53EF\u5728\u526A\u6620\u7B49\u8F6F\u4EF6\u91CC\u7EE7\u7EED\u52A0\u5DE5\u3002", "An .srt file you can refine in video editors."],
  "share.coverImage": ["\u540C\u65F6\u5BFC\u51FA\u5C01\u9762\u56FE", "Also export the cover image"],
  "share.coverImageDesc": ["PNG\uFF0C\u53EF\u4F5C\u4E3A\u5C0F\u7EA2\u4E66\u3001\u516C\u4F17\u53F7\u7B49\u7684\u5C01\u9762\u3002", "A PNG for posts and article covers."],
  "share.embed": ["\u5D4C\u5165\u5F53\u524D\u7B14\u8BB0", "Embed in this note"],
  "share.embedDesc": ["\u751F\u6210\u540E\u628A\u6587\u4EF6\u63D2\u5165\u5230\u5149\u6807\u5904\u3002", "Insert the file at the cursor when done."],
  "share.make": ["\u751F\u6210", "Create"],
  "share.making": ["\u751F\u6210\u4E2D\u2026", "Creating\u2026"],
  "share.cancelMake": ["\u53D6\u6D88\u751F\u6210", "Stop"],
  "share.phase.voice": ["\u6B63\u5728\u5408\u6210\u8BED\u97F3 {percent}%", "Generating speech {percent}%"],
  "share.phase.speed": ["\u6B63\u5728\u8C03\u6574\u8BED\u901F {percent}%", "Adjusting speed {percent}%"],
  "share.phase.audio": ["\u6B63\u5728\u7F16\u7801\u97F3\u9891 {percent}%", "Encoding audio {percent}%"],
  "share.phase.video": ["\u6B63\u5728\u6E32\u67D3\u89C6\u9891 {percent}%", "Rendering video {percent}%"],
  "share.done": ["\u5DF2\u5B8C\u6210", "Done"],
  "share.reveal": ["\u5728\u6587\u4EF6\u5939\u4E2D\u663E\u793A", "Show in folder"],
  "share.savedHint": ["\u6587\u4EF6\u5DF2\u4FDD\u5B58\u5230\u7B14\u8BB0\u5E93\u7684\u9644\u4EF6\u4F4D\u7F6E\u3002", "Saved to your vault attachments."],
  "share.again": ["\u518D\u5BFC\u51FA\u4E00\u4E2A", "Export another"],
  "share.finish": ["\u5B8C\u6210", "Done"],
  "share.saved": ["\u5DF2\u751F\u6210 {count} \u4E2A\u6587\u4EF6", "Created {count} files"],
  "share.platform.x": ["X", "X"],
  "share.platform.github": ["GitHub", "GitHub"],
  "share.platform.wechat": ["\u516C\u4F17\u53F7", "WeChat"],
  "share.platform.xiaohongshu": ["\u5C0F\u7EA2\u4E66", "Xiaohongshu"],
  "share.platform.douyin": ["\u6296\u97F3", "Douyin"],
  "share.platform.bilibili": ["B \u7AD9", "Bilibili"],
  "share.platform.youtube": ["YouTube", "YouTube"],
  "share.platform.website": ["\u7F51\u7AD9", "Website"],
  "share.platform.custom": ["\u5176\u4ED6", "Other"],
  "settings.share": ["\u5206\u4EAB", "Share"],
  "settings.shareSection": ["\u7F72\u540D", "Signature"],
  "settings.shareSectionDesc": ["\u5BFC\u51FA\u89C6\u9891\u65F6\u663E\u793A\u5728\u5C01\u9762\u548C\u7247\u5C3E\uFF0C\u5168\u90E8\u53EF\u7559\u7A7A\u3002", "Shown on the video cover and end card. Everything is optional."],
  "settings.shareName": ["\u6635\u79F0", "Name"],
  "settings.shareNamePlaceholder": ["\u4F8B\u5982\uFF1A\u5411\u9633\u4E54\u6728", "For example: your name"],
  "settings.shareAvatar": ["\u5934\u50CF", "Avatar"],
  "settings.shareAvatarDesc": ["\u4ECE\u7B14\u8BB0\u5E93\u91CC\u9009\u4E00\u5F20\u56FE\u7247", "Pick an image from your vault"],
  "settings.shareBackground": ["\u5C01\u9762\u80CC\u666F\u56FE", "Cover background"],
  "settings.shareBackgroundDesc": ["\u53EF\u9009\uFF1B\u4E0D\u9009\u5219\u4F7F\u7528\u9ED8\u8BA4\u6DF1\u8272\u80CC\u666F", "Optional; the default dark background is used otherwise"],
  "settings.shareChoose": ["\u9009\u62E9", "Choose"],
  "settings.shareClear": ["\u6E05\u9664", "Clear"],
  "settings.shareAccounts": ["\u5173\u6CE8\u65B9\u5F0F", "Where to find you"],
  "settings.shareAccountsDesc": ["\u6700\u591A 6 \u4E2A\uFF0C\u9010\u884C\u51FA\u73B0\u5728\u7247\u5C3E\u3002", "Up to 6, shown one by one on the end card."],
  "settings.shareAccount": ["\u8D26\u53F7 {number}", "Account {number}"],
  "settings.shareAccountLabel": ["\u5E73\u53F0\u540D\u79F0", "Platform name"],
  "settings.shareAccountHandle": ["\u8D26\u53F7\u6216\u7F51\u5740", "Handle or URL"],
  "settings.shareRemoveAccount": ["\u5220\u9664\u6B64\u8D26\u53F7", "Remove this account"],
  "settings.shareAddAccount": ["\u6DFB\u52A0\u8D26\u53F7", "Add account"],
  "error.videoUnsupported": ["\u6B64\u8BBE\u5907\u4E0D\u652F\u6301\u89C6\u9891\u7F16\u7801\u3002\u53EF\u4EE5\u53EA\u5BFC\u51FA MP3\uFF0C\u6216\u5728\u6700\u65B0\u7248\u684C\u9762\u7AEF\u91CD\u8BD5\u3002", "This device cannot encode video. Export MP3 instead, or try the latest desktop app."],
  "error.systemExport": ["\u6D4F\u89C8\u5668\u7CFB\u7EDF\u8BED\u97F3\u65E0\u6CD5\u5BFC\u51FA\uFF0C\u8BF7\u5728\u6717\u8BFB\u8BBE\u7F6E\u91CC\u66F4\u6362\u97F3\u8272\u3002", "Browser system speech cannot be exported. Choose another voice in the speech settings."],
  "share.savedFolder": ["\u6587\u4EF6\u5DF2\u4FDD\u5B58\u5230\uFF1A{folder}", "Saved to: {folder}"],
  "share.destination": ["\u4FDD\u5B58\u4F4D\u7F6E", "Save to"],
  "share.destinationVault": ["\u7B14\u8BB0\u5E93\u9644\u4EF6\u6587\u4EF6\u5939", "Vault attachments folder"],
  "share.changeFolder": ["\u66F4\u6539", "Change"],
  "share.embedOutside": ["\u6587\u4EF6\u4FDD\u5B58\u5728\u7B14\u8BB0\u5E93\u4E4B\u5916\uFF0C\u65E0\u6CD5\u5D4C\u5165\u7B14\u8BB0\u3002", "Files are saved outside the vault, so they cannot be embedded."],
  "settings.shareFolderSection": ["\u5BFC\u51FA\u4F4D\u7F6E", "Export location"],
  "settings.shareFolderSectionDesc": ["\u9ED8\u8BA4\u5B58\u8FDB\u7B14\u8BB0\u5E93\u7684\u9644\u4EF6\u6587\u4EF6\u5939\uFF1B\u4E5F\u53EF\u4EE5\u6307\u5B9A\u7535\u8111\u4E0A\u7684\u4EFB\u610F\u6587\u4EF6\u5939\u3002", "By default exports go to the vault attachments folder. You can choose any folder on this computer instead."],
  "settings.shareFolder": ["\u6587\u4EF6\u5939", "Folder"],
  "settings.shareFolderPlaceholder": ["\u4F8B\u5982 ~/Movies/\u4E54\u6728\u5206\u4EAB", "For example ~/Movies/Shares"],
  "settings.shareFolderVault": ["\u5F53\u524D\uFF1A\u7B14\u8BB0\u5E93\u9644\u4EF6\u6587\u4EF6\u5939", "Currently: the vault attachments folder"],
  "settings.shareFolderOutside": ["\u5F53\u524D\uFF1A\u7B14\u8BB0\u5E93\u4E4B\u5916\u7684\u6587\u4EF6\u5939\uFF0C\u6587\u4EF6\u4E0D\u4F1A\u51FA\u73B0\u5728\u7B14\u8BB0\u5E93\u91CC", "Currently: a folder outside the vault; files will not appear in it"],
  "settings.shareFolderReset": ["\u6062\u590D\u9ED8\u8BA4", "Use default"],
  "settings.shareFolderTypeIt": ["\u6CA1\u80FD\u8BFB\u53D6\u6240\u9009\u4F4D\u7F6E\uFF08\u7A7A\u6587\u4EF6\u5939\u65E0\u6CD5\u8BC6\u522B\uFF09\uFF0C\u8BF7\u76F4\u63A5\u8F93\u5165\u8DEF\u5F84\u3002", "Could not read that location (empty folders cannot be detected). Type the path instead."],
  "error.folderInvalid": ["\u5BFC\u51FA\u6587\u4EF6\u5939\u9700\u8981\u662F\u5B8C\u6574\u8DEF\u5F84\uFF08\u5982 /Users/\u540D\u5B57/Movies\uFF09\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u91CC\u4FEE\u6539\u3002", "The export folder must be a full path (like /Users/name/Movies). Change it in settings."],
  "error.folderWrite": ["\u65E0\u6CD5\u5199\u5165\u5BFC\u51FA\u6587\u4EF6\u5939\uFF0C\u8BF7\u68C0\u67E5\u8DEF\u5F84\u548C\u6743\u9650\uFF0C\u6216\u5728\u8BBE\u7F6E\u91CC\u6062\u590D\u9ED8\u8BA4\u4F4D\u7F6E\u3002", "Cannot write to the export folder. Check the path and permissions, or reset it in settings."],
  "error.folderDesktop": ["\u5BFC\u51FA\u5230\u81EA\u5B9A\u4E49\u6587\u4EF6\u5939\u4EC5\u652F\u6301\u7535\u8111\u7AEF\u3002", "Custom export folders need the desktop app."],
  "share.visual": ["\u753B\u9762\u98CE\u683C", "Visual style"],
  "share.visual.spectrum": ["\u9891\u8C31", "Spectrum"],
  "share.visual.ring": ["\u5706\u73AF", "Ring"],
  "share.visual.wave": ["\u5B9E\u65F6\u6CE2\u5F62", "Live waveform"],
  "share.visual.bars": ["\u54CD\u5EA6\u6761", "Loudness bars"]
};

// src/original/i18n.js
var language = "en";
function t(key, params = {}) {
  const pair = STRINGS[key];
  if (!pair) return key;
  return pair[language === "zh" ? 0 : 1].replace(/\{(\w+)\}/g, (all, name) => params[name] === void 0 ? "" : String(params[name]));
}
function errorText(error, provider) {
  if (!error) return t("error.network");
  if (error.status === 429 && error.retryAt > Date.now()) {
    return t("error.rateLimitUntil", { time: new Date(error.retryAt).toLocaleTimeString(language === "zh" ? "zh-CN" : "en-US") });
  }
  if (error.status === 429 || error.code === "rateLimit") return t("error.rateLimit");
  if (provider === "edge" && error.status === 403) return t("error.edge403");
  if ([401, 403].includes(error.status)) return t("error.auth");
  if (error.status === 402) return t("error.quota");
  if (error.status >= 500) return t("error.server", { detail: error.status });
  const key = `error.${error.code}`;
  if (!STRINGS[key]) return t("error.network");
  return t(key, { status: error.status ?? error.detail ?? "", detail: error.detail || error.status || "" });
}

// src/original/core/tts/timing.js
var PAUSE = /[，、；;,:：]/u;
var STOP = /[。！？.!?…\n]/u;
var CLOSE = /["'”’）)」』】》]/u;
function tokens(text) {
  const out = [], re = /[㐀-鿿぀-ヿ가-힯]|[\p{L}\p{N}'’_-]+|[^\s]/gu;
  let match;
  while (match = re.exec(text)) {
    const value = match[0], s = match.index, e = s + value.length;
    const last = out.at(-1);
    if (/^[\p{P}\p{S}]$/u.test(value) && last) {
      last.e = e;
      last.weight += STOP.test(value) ? 2.2 : PAUSE.test(value) ? 1.2 : CLOSE.test(value) ? 0 : 0.4;
      continue;
    }
    const cjk = /^[㐀-鿿぀-ヿ가-힯]$/u.test(value);
    out.push({ s, e, weight: cjk ? 1 : 1.3 + 0.18 * value.length });
  }
  return out;
}
function estimateMarks(text, duration, start = 0) {
  if (!(duration > 0)) return [];
  const list = tokens(text), total = list.reduce((sum, x) => sum + x.weight, 0);
  if (!total) return [];
  let at = start;
  return list.map((x) => {
    const from = at;
    at += duration * x.weight / total;
    return { s: x.s, e: x.e, from, to: at };
  });
}
function markIndex(marks, t2) {
  let low = 0, high = marks.length - 1, found = -1;
  while (low <= high) {
    const mid = low + high >> 1;
    if (marks[mid].from <= t2) {
      found = mid;
      low = mid + 1;
    } else high = mid - 1;
  }
  return found;
}

// src/original/core/tts/providers.js
var TTS_PROVIDERS = Object.freeze({
  system: { label: "System voice", voice: "", model: "" },
  macos: { label: "Mac local speech", voice: "", model: "" },
  localModel: { label: "Local models", voice: "zf_001", model: "kokoro" },
  edge: { label: "Edge TTS", voice: "zh-CN-XiaoxiaoNeural", model: "" },
  openai: { label: "OpenAI", baseUrl: "https://api.openai.com/v1", model: "gpt-4o-mini-tts", voice: "coral" },
  compatible: { label: "OpenAI-compatible", baseUrl: "", model: "", voice: "" },
  qwen: { label: "Qwen TTS", baseUrl: "https://dashscope.aliyuncs.com/api/v1", model: "qwen3-tts-flash", voice: "Cherry" },
  doubao: { label: "Doubao", baseUrl: "https://openspeech.bytedance.com/api/v3/tts", resourceId: "seed-tts-2.0", voice: "zh_female_vv_uranus_bigtts" },
  minimax: { label: "MiniMax", baseUrl: "https://api.minimax.cn/v1", model: "speech-2.8-hd", voice: "male-qn-qingse" },
  siliconflow: { label: "SiliconFlow", baseUrl: "https://api.siliconflow.cn/v1", model: "FunAudioLLM/CosyVoice2-0.5B", voice: "FunAudioLLM/CosyVoice2-0.5B:alex" },
  elevenlabs: { label: "ElevenLabs", baseUrl: "https://api.elevenlabs.io/v1", model: "eleven_multilingual_v2", voice: "JBFqnCBsd6RMkjVDRZzb" },
  azure: { label: "Azure Speech", region: "", model: "", voice: "zh-CN-XiaoxiaoNeural" }
});
function ttsProfile(settings, id = settings?.provider || "system") {
  return { ...TTS_PROVIDERS[id], ...settings?.profiles?.[id], id };
}
function ttsError(code, status) {
  return Object.assign(new Error(code), { code, status });
}
function checkTtsSignal(signal) {
  if (signal?.aborted) throw Object.assign(new Error("Cancelled"), { name: "AbortError" });
}
function escapeSpeechXml(text) {
  return String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]);
}
function ttsBaseUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw ttsError("url");
  }
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password || url.search || url.hash) throw ttsError("url");
  if (url.protocol === "http:" && !["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)) throw ttsError("https");
  return url.href.replace(/\/+$/, "").replace(/\/audio\/speech$/, "");
}
function doubaoTiming(resourceId, enabled) {
  if (!enabled) return {};
  return /2\.0/.test(resourceId) ? { enable_subtitle: true } : /1\.0/.test(resourceId) ? { enable_timestamp: true } : {};
}
function buildSpeechRequest(profile, text, key = "", timing = false) {
  const { id, voice, model } = profile;
  if (!TTS_PROVIDERS[id] || ["system", "macos", "edge"].includes(id)) throw ttsError("provider");
  if (id !== "compatible" && !key) throw ttsError("key");
  if (!voice || !["azure", "doubao"].includes(id) && !model) throw ttsError("configuration");
  const headers = { "Content-Type": "application/json" };
  if (key) headers.Authorization = `Bearer ${key}`;
  if (id === "azure") {
    if (!/^[a-z0-9-]+$/.test(profile.region || "")) throw ttsError("region");
    return {
      url: `https://${profile.region}.tts.speech.microsoft.com/cognitiveservices/v1`,
      method: "POST",
      headers: { "Ocp-Apim-Subscription-Key": key, "Content-Type": "application/ssml+xml", "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3" },
      body: `<speak version="1.0" xml:lang="${escapeSpeechXml(voice.split("-").slice(0, 2).join("-"))}"><voice name="${escapeSpeechXml(voice)}">${escapeSpeechXml(text)}</voice></speak>`
    };
  }
  const base = ttsBaseUrl(profile.baseUrl);
  if (id === "doubao") {
    if (!profile.resourceId) throw ttsError("resource");
    return {
      url: `${base}/unidirectional`,
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Api-Key": key, "X-Api-Resource-Id": profile.resourceId, "X-Api-Request-Id": globalThis.crypto.randomUUID() },
      body: JSON.stringify({ req_params: { text, speaker: voice, audio_params: { format: "mp3", sample_rate: 24e3, ...doubaoTiming(profile.resourceId, timing) } } })
    };
  }
  if (id === "minimax") return {
    url: `${base}/t2a_v2`,
    method: "POST",
    headers,
    body: JSON.stringify({
      model,
      text,
      stream: false,
      output_format: "hex",
      voice_setting: { voice_id: voice, speed: 1, vol: 1, pitch: 0 },
      audio_setting: { format: "mp3", sample_rate: 32e3, bitrate: 128e3, channel: 1 }
    })
  };
  if (id === "elevenlabs") return {
    url: `${base}/text-to-speech/${encodeURIComponent(voice)}?output_format=mp3_44100_128`,
    method: "POST",
    headers: { "Content-Type": "application/json", "xi-api-key": key },
    body: JSON.stringify({ text, model_id: model })
  };
  if (id === "qwen") return {
    url: `${base}/services/aigc/multimodal-generation/generation`,
    method: "POST",
    headers,
    body: JSON.stringify({ model, input: { text, voice, language_type: "Auto" } })
  };
  return {
    url: `${base}/audio/speech`,
    method: "POST",
    headers,
    body: JSON.stringify({ model, input: text, voice, response_format: "mp3" })
  };
}
function awaitSpeechRequest(promise, signal, timeoutMs = 3e4) {
  checkTtsSignal(signal);
  return new Promise((resolve, reject) => {
    const finish = (fn, value) => {
      globalThis.clearTimeout(timer);
      signal?.removeEventListener("abort", abort);
      fn(value);
    };
    const abort = () => finish(reject, Object.assign(new Error("Cancelled"), { name: "AbortError" }));
    const timer = globalThis.setTimeout(() => finish(reject, ttsError("timeout")), timeoutMs);
    signal?.addEventListener("abort", abort, { once: true });
    Promise.resolve(promise).then((v) => finish(resolve, v), (e) => finish(reject, e));
  });
}
var SpeechCache = class {
  constructor(limit = 20 * 1024 * 1024) {
    this.limit = limit;
    this.bytes = 0;
    this.entries = /* @__PURE__ */ new Map();
  }
  get(key) {
    const value = this.entries.get(key);
    if (value) {
      this.entries.delete(key);
      this.entries.set(key, value);
    }
    return value;
  }
  set(key, value) {
    const size = value.bytes.byteLength;
    if (size > this.limit) return;
    if (this.entries.has(key)) this.bytes -= this.entries.get(key).bytes.byteLength;
    this.entries.delete(key);
    this.entries.set(key, value);
    this.bytes += size;
    while (this.bytes > this.limit) {
      const first = this.entries.keys().next().value;
      this.bytes -= this.entries.get(first).bytes.byteLength;
      this.entries.delete(first);
    }
  }
  clear() {
    this.entries.clear();
    this.bytes = 0;
  }
};

// src/original/core/tts/recent.js
var FIELDS = ["voice", "model", "baseUrl", "region", "resourceId"];
var MAX_RECENT = 8;
function cleanSpeechChoice(value) {
  if (!value || !Object.hasOwn(TTS_PROVIDERS, value.id)) return null;
  return { id: value.id, ...Object.fromEntries(FIELDS.filter((key) => typeof value[key] === "string" && value[key].length <= 1e3).map((key) => [key, value[key]])) };
}
function speechChoiceKey(value) {
  return JSON.stringify([value.id, ...FIELDS.map((key) => value[key] ?? TTS_PROVIDERS[value.id]?.[key] ?? "")]);
}
function normalizeRecentChoices(values) {
  const result = [], seen = /* @__PURE__ */ new Set();
  for (const value of Array.isArray(values) ? values : []) {
    const entry = cleanSpeechChoice(value);
    if (!entry) continue;
    const key = speechChoiceKey(entry);
    if (seen.has(key)) continue;
    result.push(entry);
    seen.add(key);
    if (result.length === MAX_RECENT) break;
  }
  return result;
}
function rememberSpeechChoice(settings, profile) {
  const entry = cleanSpeechChoice(profile);
  if (!entry) return false;
  const current = normalizeRecentChoices(settings.recent);
  if (current[0] && speechChoiceKey(current[0]) === speechChoiceKey(entry)) return false;
  settings.recent = normalizeRecentChoices([entry, ...current]);
  return true;
}
function applySpeechChoice(settings, value) {
  const entry = cleanSpeechChoice(value);
  if (!entry) return false;
  const { id, ...profile } = entry;
  settings.provider = id;
  settings.profiles[id] = profile;
  return true;
}

// src/original/core/tts/controller.js
var TtsController = class {
  constructor({ synthesize, makeAudio, speech, makeUtterance, onChange = () => {
  }, beforePlay = () => {
  } }) {
    Object.assign(this, { synthesize, makeAudio, speech, makeUtterance, onChange, beforePlay });
    this.cache = new SpeechCache();
    this.pending = /* @__PURE__ */ new Map();
    this.generation = 0;
    this.state = "idle";
    this.index = 0;
    this.rate = 1;
    this.items = [];
  }
  emit() {
    this.onChange(this);
  }
  releasePlayer() {
    this.stopProgress();
    if (this.audio) {
      this.audio.onended = this.audio.onerror = null;
      this.audio.pause();
      this.audio.removeAttribute("src");
      this.audio.load();
      this.audio = null;
    }
    if (this.url) {
      URL.revokeObjectURL(this.url);
      this.url = null;
    }
    if (this.utterance) {
      this.utterance.onend = this.utterance.onerror = null;
      this.speech?.cancel();
      this.utterance = null;
    }
  }
  // Report the word being spoken (item.text offsets) to owners that follow along.
  startProgress(generation, item, index, result) {
    this.stopProgress();
    const audio = this.audio, owner = this.owner;
    if (!audio || !owner?.onProgress) return;
    let marks = result.marks, last = -2;
    const tick = () => {
      if (generation !== this.generation || audio !== this.audio) {
        this.stopProgress();
        return;
      }
      if (!marks && audio.duration > 0 && Number.isFinite(audio.duration)) {
        const from = result.active?.from ?? 0, to = result.active?.to ?? audio.duration;
        marks = estimateMarks(item.text, Math.max(0.1, to - from), from);
      }
      if (!marks?.length) return;
      const at = audio.ended ? marks.length - 1 : markIndex(marks, audio.currentTime);
      if (at === last) return;
      last = at;
      owner.onProgress(item, index, at < 0 ? null : { start: marks[at].s, end: marks[at].e });
    };
    this.progressTimer = globalThis.setInterval(tick, 40);
    tick();
  }
  stopProgress() {
    if (this.progressTimer) {
      globalThis.clearInterval(this.progressTimer);
      this.progressTimer = null;
    }
  }
  stop(owner) {
    if (owner && this.owner !== owner) return;
    ++this.generation;
    this.abort?.abort();
    this.releasePlayer();
    this.pending.clear();
    this.owner?.clearHighlight?.();
    this.owner = null;
    this.items = [];
    this.nextSection = null;
    this.state = "idle";
    this.error = null;
    this.paused = false;
    this.deferred = false;
    this.waitingSection = false;
    this.preparingSegment = false;
    this.emit();
  }
  start(owner, items, profile, { nextSection, index = 0, rate = 1, paused = false } = {}) {
    if (!paused) this.beforePlay();
    this.stop();
    this.owner = owner;
    this.items = items;
    this.profile = { ...profile };
    this.nextSection = nextSection;
    this.index = Math.max(0, Math.min(index, items.length - 1));
    this.rate = Math.min(2, Math.max(0.5, rate));
    this.abort = new AbortController();
    this.paused = paused;
    this.deferred = paused;
    this.state = paused ? "paused" : "loading";
    if (paused) this.emit();
    else void this.playCurrent(this.generation);
  }
  async load(item, signal) {
    checkTtsSignal(signal);
    const { key: _key, ...publicProfile } = this.profile;
    const key = JSON.stringify([publicProfile, item.text]);
    const cached = this.cache.get(key);
    if (cached) return cached;
    if (this.pending.has(key)) return this.pending.get(key);
    const promise = this.synthesize(this.profile, item.text, signal).then((value) => {
      checkTtsSignal(signal);
      this.cache.set(key, value);
      return value;
    });
    this.pending.set(key, promise);
    try {
      return await promise;
    } finally {
      if (this.pending.get(key) === promise) this.pending.delete(key);
    }
  }
  async playCurrent(generation) {
    if (generation !== this.generation) return;
    this.releasePlayer();
    this.error = null;
    const item = this.items[this.index];
    if (!item) {
      this.owner?.clearHighlight?.();
      this.state = "ended";
      this.emit();
      return;
    }
    this.state = this.paused ? "paused" : "loading";
    this.emit();
    let playing = null;
    try {
      const signal = this.abort.signal;
      if (this.profile.id === "system") {
        if (typeof this.speech?.speak !== "function" || typeof this.speech?.getVoices !== "function" || !this.makeUtterance) throw ttsError("systemUnavailable");
        const utterance = this.makeUtterance(item.text);
        const voices = this.speech.getVoices();
        const voice = this.profile.voice ? voices.find((v) => v.voiceURI === this.profile.voice) : null;
        if (this.profile.voice && !voice) throw ttsError("voice");
        if (voice) utterance.voice = voice;
        utterance.lang = voice?.lang || (/[\u3400-\u9fff]/u.test(item.text) ? "zh-CN" : "en-US");
        utterance.rate = this.rate;
        utterance.onend = () => {
          if (generation === this.generation) void this.advance(generation);
        };
        utterance.onboundary = (event) => {
          if (generation !== this.generation || event.name !== "word") return;
          const start = event.charIndex, end = start + (event.charLength || (item.text.slice(start).match(/^[\u3400-\u9fff]|^[\p{L}\p{N}'’-]+/u)?.[0].length ?? 1));
          this.owner?.onProgress?.(item, this.index, { start, end });
        };
        utterance.onerror = () => this.fail(ttsError("system"), generation);
        this.utterance = utterance;
        this.utteranceStarted = false;
      } else {
        const result = await this.load(item, signal);
        if (this.profile.id === "localModel" && this.rate > 1 && this.items[this.index + 1]) {
          await this.load(this.items[this.index + 1], signal).catch(() => {
          });
        }
        if (generation !== this.generation) return;
        this.url = URL.createObjectURL(new Blob([result.bytes], { type: result.mime }));
        const audio = this.audio = this.makeAudio();
        audio.src = this.url;
        audio.playbackRate = this.rate;
        audio.onended = () => {
          if (generation === this.generation) void this.advance(generation);
        };
        audio.onerror = () => this.fail(ttsError("playback"), generation);
        playing = result;
      }
      this.preparingSegment = true;
      await this.owner?.onSegment?.(item, this.index);
      if (generation !== this.generation) return;
      this.preparingSegment = false;
      if (!this.paused) {
        if (this.audio) await this.audio.play();
        else {
          this.speech.speak(this.utterance);
          this.utteranceStarted = true;
        }
      }
      if (generation !== this.generation) return;
      this.state = this.paused ? "paused" : "playing";
      if (playing) this.startProgress(generation, item, this.index, playing);
      this.emit();
      const ahead = this.profile.id === "localModel" ? 3 : 1;
      if (!this.paused && this.profile.id !== "system") {
        for (let offset = 1; offset <= ahead && this.items[this.index + offset]; offset++) {
          void this.load(this.items[this.index + offset], signal).catch(() => {
          });
        }
      }
    } catch (error) {
      this.fail(error, generation);
    }
  }
  fail(error, generation) {
    if (generation !== this.generation || error?.name === "AbortError") return;
    this.releasePlayer();
    this.abort?.abort();
    this.preparingSegment = false;
    this.state = "error";
    this.error = error;
    this.owner?.clearHighlight?.();
    this.emit();
  }
  async advance(generation) {
    if (generation !== this.generation) return;
    this.index++;
    if (this.index >= this.items.length && this.nextSection) {
      if (this.owner?.follow === false) {
        this.releasePlayer();
        this.paused = true;
        this.waitingSection = true;
        this.state = "paused";
        this.emit();
        return;
      }
      this.state = "loading";
      this.emit();
      try {
        const items = await this.nextSection(this.abort.signal);
        if (generation !== this.generation) return;
        this.items = items || [];
        this.index = 0;
      } catch (error) {
        this.fail(error, generation);
        return;
      }
    }
    await this.playCurrent(generation);
  }
  pause({ releaseSystem = false } = {}) {
    if (!["playing", "loading"].includes(this.state)) return;
    this.paused = true;
    this.audio?.pause();
    if (this.utteranceStarted) {
      if (releaseSystem) {
        this.releasePlayer();
        this.deferred = true;
      } else this.speech?.pause();
    }
    this.state = "paused";
    this.emit();
  }
  toggle() {
    if (this.paused || this.state === "error" || this.state === "ended") this.beforePlay();
    if (this.waitingSection) {
      this.waitingSection = false;
      this.paused = false;
      this.owner.follow = true;
      this.index--;
      void this.advance(this.generation);
      return;
    }
    if (this.deferred) {
      this.deferred = false;
      this.paused = false;
      void this.playCurrent(this.generation);
      return;
    }
    if (this.state === "error" || this.state === "ended") {
      this.retry();
      return;
    }
    this.paused = !this.paused;
    if (this.paused) {
      this.audio?.pause();
      if (this.utteranceStarted) this.speech?.pause();
      this.state = "paused";
    } else {
      if (this.preparingSegment) {
        this.state = "loading";
        this.emit();
        return;
      }
      const generation = this.generation;
      if (this.audio) void this.audio.play().catch(() => this.fail(ttsError("playback"), generation));
      if (this.utterance) {
        if (this.utteranceStarted) this.speech.resume();
        else {
          this.speech.speak(this.utterance);
          this.utteranceStarted = true;
        }
      }
      this.state = this.audio || this.utterance ? "playing" : "loading";
    }
    this.emit();
  }
  retry() {
    this.beforePlay();
    ++this.generation;
    this.abort?.abort();
    this.pending.clear();
    this.abort = new AbortController();
    this.paused = false;
    this.deferred = false;
    this.waitingSection = false;
    this.index = Math.min(this.index, Math.max(0, this.items.length - 1));
    void this.playCurrent(this.generation);
  }
  skip(delta) {
    this.seek(this.index + delta);
  }
  // Navigating a paused session must never start speaking. Explicit restart
  // actions can opt into playback; all outstanding synthesis is superseded.
  seek(index, { paused = this.state === "paused" } = {}) {
    if (!this.items.length || !Number.isFinite(index)) return;
    index = Math.max(0, Math.min(this.items.length - 1, Math.trunc(index)));
    ++this.generation;
    this.abort?.abort();
    this.releasePlayer();
    this.pending.clear();
    this.abort = new AbortController();
    this.index = index;
    this.error = null;
    this.paused = paused;
    this.deferred = paused;
    this.waitingSection = false;
    this.preparingSegment = false;
    if (paused) {
      this.owner?.clearHighlight?.();
      this.state = "paused";
      this.emit();
    } else {
      this.beforePlay();
      void this.playCurrent(this.generation);
    }
  }
  setRate(rate) {
    this.rate = Math.max(0.5, Math.min(2, Number(rate) || 1));
    if (this.audio) this.audio.playbackRate = this.rate;
    this.emit();
  }
  dispose() {
    this.stop();
    this.cache.clear();
  }
};

// src/original/core/tts/choices.js
var entries = (values) => values.map((value) => typeof value === "string" ? { id: value, label: value } : { id: value[0], label: value[1] });
var TTS_MODELS = {
  openai: entries(["gpt-4o-mini-tts", "tts-1", "tts-1-hd"]),
  compatible: [],
  qwen: entries(["qwen3-tts-flash", "qwen3-tts-instruct-flash", "qwen-tts"]),
  doubao: entries([["seed-tts-2.0", "Seed TTS 2.0"], ["seed-tts-1.0", "Seed TTS 1.0"]]),
  minimax: entries(["speech-2.8-hd", "speech-2.8-turbo", "speech-2.6-hd", "speech-2.6-turbo", "speech-02-hd", "speech-02-turbo"]),
  siliconflow: entries([["FunAudioLLM/CosyVoice2-0.5B", "CosyVoice 2 \xB7 0.5B"], ["fnlp/MOSS-TTSD-v0.5", "MOSS TTSD \xB7 v0.5"]]),
  elevenlabs: entries(["eleven_multilingual_v2", "eleven_v3", "eleven_v4", "eleven_v4_turbo", "eleven_flash_v2_5", "eleven_turbo_v2_5"])
};
var microsoft = entries([
  ["zh-CN-XiaoxiaoNeural", "\u6653\u6653 \xB7 \u4E2D\u6587\u5973\u58F0"],
  ["zh-CN-YunxiNeural", "\u4E91\u5E0C \xB7 \u4E2D\u6587\u7537\u58F0"],
  ["zh-CN-YunjianNeural", "\u4E91\u5065 \xB7 \u4E2D\u6587\u7537\u58F0"],
  ["zh-CN-XiaoyiNeural", "\u6653\u4F0A \xB7 \u4E2D\u6587\u5973\u58F0"],
  ["zh-TW-HsiaoChenNeural", "\u66C9\u81FB \xB7 \u53F0\u7063\u5973\u8072"],
  ["zh-HK-HiuMaanNeural", "\u66C9\u66FC \xB7 \u7CB5\u8A9E\u5973\u8072"],
  ["en-US-JennyNeural", "Jenny \xB7 English"],
  ["en-US-GuyNeural", "Guy \xB7 English"]
]);
var doubao2 = entries([
  ["zh_female_vv_uranus_bigtts", "Vivi 2.0"],
  ["zh_female_xiaohe_uranus_bigtts", "\u5C0F\u4F55 2.0"],
  ["zh_male_m191_uranus_bigtts", "\u4E91\u821F 2.0"],
  ["zh_male_taocheng_uranus_bigtts", "\u5C0F\u5929 2.0"],
  ["zh_male_liufei_uranus_bigtts", "\u5218\u98DE 2.0"],
  ["zh_female_qingxinnvsheng_uranus_bigtts", "\u6E05\u65B0\u5973\u58F0 2.0"],
  ["zh_female_shuangkuaisisi_uranus_bigtts", "\u723D\u5FEB\u601D\u601D 2.0"],
  ["zh_female_tianmeitaozi_uranus_bigtts", "\u751C\u7F8E\u6843\u5B50 2.0"],
  ["en_male_tim_uranus_bigtts", "Tim \xB7 English"],
  ["en_female_dacey_uranus_bigtts", "Dacey \xB7 English"]
]);
var doubao1 = entries([["zh_female_shuangkuaisisi_moon_bigtts", "\u723D\u5FEB\u601D\u601D"], ["zh_male_wennuanahu_moon_bigtts", "\u6E29\u6696\u963F\u864E"], ["zh_female_wanwanxiaohe_moon_bigtts", "\u6E7E\u6E7E\u5C0F\u4F55"]]);
var silicon = entries([["alex", "Alex \xB7 \u6C89\u7A33\u7537\u58F0"], ["benjamin", "Benjamin \xB7 \u4F4E\u6C89\u7537\u58F0"], ["charles", "Charles \xB7 \u78C1\u6027\u7537\u58F0"], ["david", "David \xB7 \u6B22\u5FEB\u7537\u58F0"], ["anna", "Anna \xB7 \u6C89\u7A33\u5973\u58F0"], ["bella", "Bella \xB7 \u70ED\u60C5\u5973\u58F0"], ["claire", "Claire \xB7 \u6E29\u67D4\u5973\u58F0"], ["diana", "Diana \xB7 \u6B22\u5FEB\u5973\u58F0"]]);
function modelKey(profile) {
  return profile.id === "doubao" ? "resourceId" : "model";
}
function voiceChoices(profile, catalog = {}) {
  const { id, model, resourceId } = profile;
  let voices = [];
  const known = TTS_MODELS[id]?.some((entry) => entry.id === model);
  if (id === "edge" || id === "azure") voices = microsoft;
  if (id === "openai" && known) voices = entries(/^tts-1/.test(model) ? ["alloy", "echo", "fable", "onyx", "nova", "shimmer"] : ["alloy", "ash", "ballad", "coral", "echo", "fable", "nova", "onyx", "sage", "shimmer", "verse", "marin", "cedar"]);
  if (id === "qwen" && known) voices = entries(["Cherry", "Serena", "Ethan", "Chelsie"]);
  if (id === "doubao") voices = resourceId === "seed-tts-2.0" ? doubao2 : resourceId === "seed-tts-1.0" ? doubao1 : [];
  if (id === "siliconflow" && /(?:CosyVoice2-0\.5B|MOSS-TTSD-v0\.5)$/.test(model)) voices = silicon.map((v) => ({ ...v, id: `${model}:${v.id}` }));
  if (id === "minimax" && known) voices = entries([["male-qn-qingse", "\u9752\u6DA9\u9752\u5E74"], ["Chinese (Mandarin)_Reliable_Executive", "\u6C89\u7A33\u9AD8\u7BA1"], ["Chinese (Mandarin)_News_Anchor", "\u65B0\u95FB\u5973\u58F0"]]);
  if (id === "elevenlabs" && known) voices = entries([["JBFqnCBsd6RMkjVDRZzb", "George"]]);
  return uniqueChoices([...voices, ...(catalog.voices || []).filter((v) => !v.model || v.model === model)]);
}
function uniqueChoices(values) {
  return [...new Map(values.filter((v) => typeof v.id === "string" && v.id.length <= 512).map((v) => [v.id, { ...v, label: String(v.label || v.id).slice(0, 180) }])).values()];
}
function changeSpeechModel(profile, value, catalog) {
  const next = { ...profile, [modelKey(profile)]: value }, voices = voiceChoices(next, catalog);
  const previous = profile.voice?.split(":").pop();
  next.voice = voices.some((v) => v.id === profile.voice) ? profile.voice : voices.find((v) => v.id.endsWith(`:${previous}`))?.id || voices[0]?.id || "";
  return next;
}
function canLoadVoiceCatalog(id) {
  return ["siliconflow", "minimax", "elevenlabs", "azure"].includes(id);
}
async function loadVoiceCatalog(profile, { request, key, signal }) {
  if (!key) throw ttsError("key");
  const { id } = profile;
  const get = async (url, headers, body) => {
    checkTtsSignal(signal);
    const response = await awaitSpeechRequest(request({ url, method: body ? "POST" : "GET", headers, ...body ? { body: JSON.stringify(body) } : {}, throw: false }), signal);
    checkTtsSignal(signal);
    if (response.status < 200 || response.status >= 300) throw ttsError("http", response.status);
    return response.json;
  };
  if (id === "azure") {
    if (!/^[a-z0-9-]+$/.test(profile.region || "")) throw ttsError("region");
    const body = await get(`https://${profile.region}.tts.speech.microsoft.com/cognitiveservices/voices/list`, { "Ocp-Apim-Subscription-Key": key });
    if (!Array.isArray(body)) throw ttsError("response");
    return { voices: uniqueChoices(body.map((v) => ({ id: v.ShortName, label: `${v.LocalName || v.DisplayName} \xB7 ${v.Locale}` }))) };
  }
  const base = ttsBaseUrl(profile.baseUrl), bearer = { Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
  if (id === "minimax") {
    const body = await get(`${base}/get_voice`, bearer, { voice_type: "all" });
    if (body?.base_resp?.status_code !== 0) throw ttsError("service", body?.base_resp?.status_code);
    return { voices: uniqueChoices(["system_voice", "voice_cloning", "voice_generation"].flatMap((k) => body[k] || []).map((v) => ({ id: v.voice_id, label: v.voice_name || v.voice_id }))) };
  }
  if (id === "siliconflow") {
    const body = await get(`${base}/audio/voice/list`, bearer);
    if (!Array.isArray(body?.results)) throw ttsError("response");
    const models2 = await get(`${base}/models?type=audio`, bearer);
    if (!Array.isArray(models2?.data)) throw ttsError("response");
    return {
      models: uniqueChoices(models2.data.filter((m) => m.sub_type === "text-to-speech" || /tts|cosyvoice|fish-speech|kokoro/i.test(m.id)).map((m) => ({ id: m.id, label: m.id }))),
      voices: uniqueChoices(body.results.map((v) => ({ id: v.uri, label: v.customName, model: v.model })))
    };
  }
  if (id === "elevenlabs") {
    const headers = { "xi-api-key": key };
    const models2 = await get(`${base}/models`, headers);
    if (!Array.isArray(models2)) throw ttsError("response");
    let voices = [], token = "", pages = 0;
    do {
      const body = await get(`${base.replace(/\/v1$/, "/v2")}/voices?page_size=100${token ? `&next_page_token=${encodeURIComponent(token)}` : ""}`, headers);
      if (!Array.isArray(body?.voices)) throw ttsError("response");
      voices.push(...body.voices);
      token = body.has_more ? body.next_page_token : "";
    } while (token && ++pages < 10);
    return {
      models: uniqueChoices(models2.filter((m) => m.can_do_text_to_speech).map((m) => ({ id: m.model_id, label: m.name }))),
      voices: uniqueChoices(voices.map((v) => ({ id: v.voice_id, label: v.name }))),
      more: !!token
    };
  }
  throw ttsError("configuration");
}

// src/original/runtime/models.json
var models = {
  kokoro: {
    label: "Kokoro",
    revision: "a3f4c73d043860e3",
    license: "Apache-2.0",
    bytes: 364816464,
    archive: {
      name: "kokoro-multi-lang-v1_1.tar.bz2",
      url: "https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/kokoro-multi-lang-v1_1.tar.bz2",
      bytes: 364816464,
      sha256: "a3f4c73d043860e3fd2e5b06f36795eb81de0fc8e8de6df703245edddd87dbad"
    },
    archiveRoot: "kokoro-multi-lang-v1_1",
    files: [
      {
        path: "LICENSE",
        bytes: 11358,
        sha256: "cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30"
      },
      {
        path: "README.md",
        bytes: 114,
        sha256: "e2d39356ea4d67ac15c39a7e5a238ea12b0f6fb8a55bb0c87bc2f659eb1cf7ac"
      },
      {
        path: "date-zh.fst",
        bytes: 59154,
        sha256: "eb8aa079ae3cb81d8f4404992f39d61a0cb990947512b5b8d1e54d1f6980e718"
      },
      {
        path: "dict/README.md",
        bytes: 683,
        sha256: "8bcc7c2ed7dff082d9a99c09de0bfd72249bf3b5c4298a3af328da40cbd8cfd1"
      },
      {
        path: "dict/generate_user_dict.py",
        bytes: 545,
        sha256: "24541017b4b60d8e1ad94a5165f7097d2fd107d4ceecbf13583dd37682fdd2a7"
      },
      {
        path: "dict/hmm_model.utf8",
        bytes: 519739,
        sha256: "f17790586ac86dd048c8adffed052c4bd2b28ed0682972c1275e59040c0589a7"
      },
      {
        path: "dict/idf.utf8",
        bytes: 5998717,
        sha256: "dbd1e03d72b2263cc8d84a4304ed77677eed9e7deaf43a1a5133bbba9733b535"
      },
      {
        path: "dict/jieba.dict.utf8",
        bytes: 5071204,
        sha256: "3043b77068e09c9904f27cad82f12b6ebe9dbdb5aeff3b25e45ab7f9c1122b55"
      },
      {
        path: "dict/pos_dict/char_state_tab.utf8",
        bytes: 327139,
        sha256: "28b7be1dd7369766a51445af4d42e9a2ba4bf374c13be5bc1ca7721e27271dbb"
      },
      {
        path: "dict/pos_dict/prob_emit.utf8",
        bytes: 1687686,
        sha256: "c33c4cb7edf3b3a5947df7209b6e9f267eae1f21335d9e2bd2521ea07105457a"
      },
      {
        path: "dict/pos_dict/prob_start.utf8",
        bytes: 4347,
        sha256: "13623ea0e9300bdb597cb2da28770b7b385d6c0098d66e516083fb01b6bd5d96"
      },
      {
        path: "dict/pos_dict/prob_trans.utf8",
        bytes: 124159,
        sha256: "f22363e2307408293d180c6f9f6b5cb75879d52f722f7764fa2d3d0ae2400236"
      },
      {
        path: "dict/stop_words.utf8",
        bytes: 8974,
        sha256: "b788b8a939d2e2fe079abd579ea98f12f9fb84370bfd0dddd81bb9381f7ab42c"
      },
      {
        path: "dict/user.dict.utf8",
        bytes: 829194,
        sha256: "5faabcd0c52adf512de77fd7eee3d556da8c98b50f493b47c66a981b3a24959c"
      },
      {
        path: "espeak-ng-data/af_dict",
        bytes: 121473,
        sha256: "25729d3bf4c4a0f08da60aea9eb5a0cf352630f83fab1ab0c3955b7740da1776"
      },
      {
        path: "espeak-ng-data/am_dict",
        bytes: 63878,
        sha256: "9954365860682c756c8c4459577d3aa0ab77ad0cba6798b746033ada5c3d4bea"
      },
      {
        path: "espeak-ng-data/an_dict",
        bytes: 6691,
        sha256: "6cf38cedb6693aade49e5a5d27a3c92516a5335125bf85fcae58282e66fb82fd"
      },
      {
        path: "espeak-ng-data/ar_dict",
        bytes: 478165,
        sha256: "72316426e797777fe4df9420935a3b6a79b37d7e3f3948537ba71cd7b21b2541"
      },
      {
        path: "espeak-ng-data/as_dict",
        bytes: 5005,
        sha256: "5bcb74ff4558a60c5ba1a48a2a92c01513ee2d29fe30c5a38dc5308c54f1cf49"
      },
      {
        path: "espeak-ng-data/az_dict",
        bytes: 43773,
        sha256: "e352b2dcf811662d79f4beaaa0c7750706cf669c0409fd815a9bd0244b1adfc7"
      },
      {
        path: "espeak-ng-data/ba_dict",
        bytes: 2098,
        sha256: "246c8c655ceed43d9ff44a65de5f933f16255489d0b181b1a46a83e1fd5a0354"
      },
      {
        path: "espeak-ng-data/be_dict",
        bytes: 2652,
        sha256: "232fb0debfc8fdca9b8f2494770ff23535f7f887bbebb0178abffc243490e798"
      },
      {
        path: "espeak-ng-data/bg_dict",
        bytes: 87051,
        sha256: "8fa3adec8e18a3e695b2bbea1d4780182e17222d8b9f8da9908a237828f6b063"
      },
      {
        path: "espeak-ng-data/bn_dict",
        bytes: 89979,
        sha256: "2b59ec34c07955ca5b7814fa5152c33fa357880590703eefab1f3081f031fdef"
      },
      {
        path: "espeak-ng-data/bpy_dict",
        bytes: 5226,
        sha256: "a4321d9ba80bd60f49e0bee5aae57f1ae9c49b7a1c3d4ba384338fe9bf3b6a92"
      },
      {
        path: "espeak-ng-data/bs_dict",
        bytes: 47068,
        sha256: "d5df564f511af082884719685db86ec4df23467cf012ce25e898540baf9de65b"
      },
      {
        path: "espeak-ng-data/ca_dict",
        bytes: 45566,
        sha256: "1be203855ecb0bdfe66578ef5552f83289e39972d78c52714d061b7f7493df4a"
      },
      {
        path: "espeak-ng-data/chr_dict",
        bytes: 2859,
        sha256: "1853980c673015327bed3d4e5f7e88c2ee3bd8a922bcdd232a6497277e903bce"
      },
      {
        path: "espeak-ng-data/cmn_dict",
        bytes: 1566335,
        sha256: "109aaa7708d3727382acb3ae41d8e2094a7e2bb9f651a81835be22a6f08071fe"
      },
      {
        path: "espeak-ng-data/cs_dict",
        bytes: 49645,
        sha256: "5ec02aba90465007f20a5c8aeb889275834cfa8c8f621c3d9bee1ca90d21788d"
      },
      {
        path: "espeak-ng-data/cv_dict",
        bytes: 1344,
        sha256: "8260837c8f18fbe5870905ebb2850dfd18e252150ad6c868b96d9d2c6398ea8a"
      },
      {
        path: "espeak-ng-data/cy_dict",
        bytes: 43130,
        sha256: "31d74ccad218ab80b79566caeb8d21bcf0fe43326ed7c437fa736d39b85e603e"
      },
      {
        path: "espeak-ng-data/da_dict",
        bytes: 245287,
        sha256: "fe0c21895b4844868612f9ea846bc6010e30b5dd1f4cb1567459d73d2792a8ac"
      },
      {
        path: "espeak-ng-data/de_dict",
        bytes: 68276,
        sha256: "e9ac048df5cde03b74907d591c7b29b45ee9ec5fcd4592b0b894f0083572fcfd"
      },
      {
        path: "espeak-ng-data/el_dict",
        bytes: 72841,
        sha256: "5d9f759750131da777d2fd4f06aa602ed746d38f27b84dd9a2d4a550f2cd452e"
      },
      {
        path: "espeak-ng-data/en_dict",
        bytes: 166944,
        sha256: "71bd330ba8a2e3e8076e631508208ef49449d6147c17b7bd2b4b1e1468292e35"
      },
      {
        path: "espeak-ng-data/eo_dict",
        bytes: 4666,
        sha256: "849f061abddd5388bac112b32e6f7bf747e15e1b3ae53fe91079381effff4cc9"
      },
      {
        path: "espeak-ng-data/es_dict",
        bytes: 49252,
        sha256: "3fa93e251eab80838a2d6207ee58c9c847270a65fe3fae98850e0185b5a2186c"
      },
      {
        path: "espeak-ng-data/et_dict",
        bytes: 44263,
        sha256: "1a6734b4e6bc9de9a4c94cfb434873e0a7f4ae4ec89549b3137ae5491cf655da"
      },
      {
        path: "espeak-ng-data/eu_dict",
        bytes: 48841,
        sha256: "762a6eff63552ef72cd88bf1e92dc5a823eb378d50cb85c7917e8c5bba079137"
      },
      {
        path: "espeak-ng-data/fa_dict",
        bytes: 292423,
        sha256: "f92f35ce7eb1d97360016617d97786412a94af55b776a18f1c280dab4f43befd"
      },
      {
        path: "espeak-ng-data/fi_dict",
        bytes: 43928,
        sha256: "dda999437bd4b37a7f7400a2230aace1200a52906ab0b1ff3507d44ab19d64b1"
      },
      {
        path: "espeak-ng-data/fr_dict",
        bytes: 63727,
        sha256: "e399ab924c4d10beef1fc310b30ea56e4ddfd8b4b64b8ed978e9c65394d49b2d"
      },
      {
        path: "espeak-ng-data/ga_dict",
        bytes: 52673,
        sha256: "b2db03d21f7900b697d7dbb8bec855cd1117e9867f19884faf11c4df626659f5"
      },
      {
        path: "espeak-ng-data/gd_dict",
        bytes: 49121,
        sha256: "e92b47dcf9a001363ffee1e62863faf264ff5f16e10cd9cf1f1e83ca89ca14aa"
      },
      {
        path: "espeak-ng-data/gn_dict",
        bytes: 3248,
        sha256: "7640df272b192a68ba401294bf9197ab46d0b141da7a358ad1986e7f77e7f29a"
      },
      {
        path: "espeak-ng-data/grc_dict",
        bytes: 3433,
        sha256: "488779493993d221b09e713e104a221ac1bb35765f826acc26d3d3c1aa3a35ed"
      },
      {
        path: "espeak-ng-data/gu_dict",
        bytes: 82480,
        sha256: "cb1fbfb53bab2ec6d9e44cd9d12ccb9b80de49f274d772314389c477eef530fd"
      },
      {
        path: "espeak-ng-data/hak_dict",
        bytes: 3335,
        sha256: "e3075c7d281f95a2ce2264c01edbd09e962cb3ed29400766c5d2116a08a185c8"
      },
      {
        path: "espeak-ng-data/haw_dict",
        bytes: 2443,
        sha256: "2b4e77b61cadfc5ee622aa8b1d23941e36101d9bdbf8d809e0fa1b442d2c3f74"
      },
      {
        path: "espeak-ng-data/he_dict",
        bytes: 6963,
        sha256: "a8bf0d939d630e9e5097ad361a7765297baf297fd7d06e89f48a79ead980869e"
      },
      {
        path: "espeak-ng-data/hi_dict",
        bytes: 92143,
        sha256: "5a68c9532624e57ac845b26ce1e2e5034c4f6353bede46ecbe57e583ec8effd6"
      },
      {
        path: "espeak-ng-data/hr_dict",
        bytes: 49388,
        sha256: "5f98fcf05f97335a5436a8a9643677da6f158f2a9ee1d41bdda1725b1bb3527e"
      },
      {
        path: "espeak-ng-data/ht_dict",
        bytes: 1803,
        sha256: "d577219d15c29396db254aed958358456ec1501cdf62cb4ca5413752f2ee7cc1"
      },
      {
        path: "espeak-ng-data/hu_dict",
        bytes: 153785,
        sha256: "055d563b839d599db40be5b1cc2af9d31793795b328eb8d4f389ec7d38fe7e81"
      },
      {
        path: "espeak-ng-data/hy_dict",
        bytes: 62263,
        sha256: "8b808ad8f1d4cae32b3b785b96d1e27b3af28e32f4dddfed7c93e129d63b2587"
      },
      {
        path: "espeak-ng-data/ia_dict",
        bytes: 331275,
        sha256: "1c665603a82beb81e0cef2878c9b44642ae6d519e301fbbd06326e03325febf3"
      },
      {
        path: "espeak-ng-data/id_dict",
        bytes: 43458,
        sha256: "8fb3f23f80f71f023219cee7032223f3f6886cc5040eb4c8c507f79d1b84e98d"
      },
      {
        path: "espeak-ng-data/intonations",
        bytes: 2040,
        sha256: "3f8af65fd3eda9759a10f021d61361c120871f463515229c925995c7f90918cc"
      },
      {
        path: "espeak-ng-data/io_dict",
        bytes: 2165,
        sha256: "0d9d6995fead1ccdd5512f7909ec8f9efc8ccc97f5c9d23ecae6b3ba77ffadbf"
      },
      {
        path: "espeak-ng-data/is_dict",
        bytes: 44354,
        sha256: "8eeab5b1ca3f75362881fae3de3316fcaff281179a4c51fceb0098f11ead96e0"
      },
      {
        path: "espeak-ng-data/it_dict",
        bytes: 152889,
        sha256: "111f968359c9ebe36b107a2565ba9f258bab337d3cbe37e44871980a8f21ce6b"
      },
      {
        path: "espeak-ng-data/ja_dict",
        bytes: 47652,
        sha256: "0d1135d3cdfed811d3eac7c90a2e277329fa6f060cdd23af287db161982cab44"
      },
      {
        path: "espeak-ng-data/jbo_dict",
        bytes: 2243,
        sha256: "71298417de1e5fd07df275270a5d47ca8820cb8c9f5dc2156c070b7a3ae7999c"
      },
      {
        path: "espeak-ng-data/ka_dict",
        bytes: 87775,
        sha256: "c8624947110a13bee72d4fc15b06026004df3f40c16c7b917d27e369ca122a32"
      },
      {
        path: "espeak-ng-data/kk_dict",
        bytes: 1859,
        sha256: "88dc0106629a57d0aca5073afb11db1a044799185355088a7ad4331c836affd3"
      },
      {
        path: "espeak-ng-data/kl_dict",
        bytes: 2838,
        sha256: "ec441964d7fbd4622bb628327903d5c6c999c95d539b2e061884decf95ac30e3"
      },
      {
        path: "espeak-ng-data/kn_dict",
        bytes: 87828,
        sha256: "c51e0385937b407b36c02fd2c85dfecdc5cac411398ee8a74eca15b35617af64"
      },
      {
        path: "espeak-ng-data/ko_dict",
        bytes: 47523,
        sha256: "f629060f27d597e0fd52d8010609f41c8a0ec28f5c2bb0016850e00244950681"
      },
      {
        path: "espeak-ng-data/kok_dict",
        bytes: 6394,
        sha256: "52659dec01d1b119bfef56b622430f5525c50af0144c9f9688cb3c22cc02ed31"
      },
      {
        path: "espeak-ng-data/ku_dict",
        bytes: 2265,
        sha256: "65de1c5429e8d193775b36fcf169a60fbbb9964ef13a4a1bab7ff0ce855cad20"
      },
      {
        path: "espeak-ng-data/ky_dict",
        bytes: 64977,
        sha256: "def4427fd4070673c073b892c7b229f8c3f17eb1df36bea2ec7188ddcfb4d0ea"
      },
      {
        path: "espeak-ng-data/la_dict",
        bytes: 3806,
        sha256: "17818dd567936fde032404fbbd6177844b9f5fc5a915480f567272147936f917"
      },
      {
        path: "espeak-ng-data/lang/aav/vi",
        bytes: 111,
        sha256: "3199c980f9e23a88a2aa693cd631bf4fcb0f3408c4272bc01b7ac0ff8e79d778"
      },
      {
        path: "espeak-ng-data/lang/aav/vi-VN-x-central",
        bytes: 143,
        sha256: "b351f13c6ed0da37561df25f45579872ff9863920ad66b94e27327a2c611755b"
      },
      {
        path: "espeak-ng-data/lang/aav/vi-VN-x-south",
        bytes: 142,
        sha256: "c0a0a2c894cd57b0bbacf9ef4efb8d89bfaf9feb164830e1539f599e7cc4e021"
      },
      {
        path: "espeak-ng-data/lang/art/eo",
        bytes: 41,
        sha256: "0254b93c8af79d9666a7667ca8b33b21a5453012da4ea0acd79660a9695f89d4"
      },
      {
        path: "espeak-ng-data/lang/art/ia",
        bytes: 29,
        sha256: "8fb11718030f8b29146f773ca462b838a6c660f166933eb6f1498c361f2e958b"
      },
      {
        path: "espeak-ng-data/lang/art/io",
        bytes: 50,
        sha256: "8e8391c7f40b7f9d2307faff8018a40dd2b448df4bd581a2950ee8393a00cebf"
      },
      {
        path: "espeak-ng-data/lang/art/jbo",
        bytes: 69,
        sha256: "d9529de82dccbd95f83c1de401f4ea661609bde644546e9ef421241b7043c00e"
      },
      {
        path: "espeak-ng-data/lang/art/lfn",
        bytes: 135,
        sha256: "394874fd9022e37cdc307c3386e81f1c0c133a8e9c5fdff74888b519f2c6d648"
      },
      {
        path: "espeak-ng-data/lang/art/piqd",
        bytes: 56,
        sha256: "d1a559b714cd8dd0ea9e46c4574e06c4f451957fb17bf39b945a89b9586f8b97"
      },
      {
        path: "espeak-ng-data/lang/art/py",
        bytes: 140,
        sha256: "59e54b95e8571417f43db37a7fd7e351af4e22a8c250cfb66af394f8ed6c4e9c"
      },
      {
        path: "espeak-ng-data/lang/art/qdb",
        bytes: 57,
        sha256: "52b83fc4f294580ebabd71df641ab5beec6b308758a3458b497124737589a7d8"
      },
      {
        path: "espeak-ng-data/lang/art/qya",
        bytes: 173,
        sha256: "78ae3f4d70208a9f69e2c26a6a3b5db28d7e6a58740fae937f51dd7fc9faeb1b"
      },
      {
        path: "espeak-ng-data/lang/art/sjn",
        bytes: 175,
        sha256: "61d85974b6841dfbfcc8cb92ad0742696cb87a6a85d5a28fe99895e46ef9de6f"
      },
      {
        path: "espeak-ng-data/lang/azc/nci",
        bytes: 114,
        sha256: "7bf70cb18e969398f74428b91c694a4483eaebd6733ecc437eb8714bbf7fff76"
      },
      {
        path: "espeak-ng-data/lang/bat/lt",
        bytes: 28,
        sha256: "7691c7ca1e79fc9728c70a0d22830eb113a0124bf96807e2a1ace3c6bf0c2f89"
      },
      {
        path: "espeak-ng-data/lang/bat/ltg",
        bytes: 312,
        sha256: "be716cbbdcb5fe319eed88abd4a44c3329a06e1dc468c8363d3f43cca2683a11"
      },
      {
        path: "espeak-ng-data/lang/bat/lv",
        bytes: 229,
        sha256: "f08a801dacccace62f5b90166428e90e088818d92dd5f9333ebbe834b0f21c16"
      },
      {
        path: "espeak-ng-data/lang/bnt/sw",
        bytes: 41,
        sha256: "271dd28b3ec41adeea53f1146249ba6cab61572963ab2743041114d95784e368"
      },
      {
        path: "espeak-ng-data/lang/bnt/tn",
        bytes: 42,
        sha256: "2243a1fc208dfdc37e154e837c0e782afc325d4acfbacc22718b7f05583ace92"
      },
      {
        path: "espeak-ng-data/lang/ccs/ka",
        bytes: 124,
        sha256: "68788b99dba7b82cdf8fc9dd05134bd72cf21f0b4c07b13b67b6f036e6294cba"
      },
      {
        path: "espeak-ng-data/lang/cel/cy",
        bytes: 37,
        sha256: "67bc33b4a66041e6343dfb98e1950d1089eecb68731f346fcc4f47cd07e79970"
      },
      {
        path: "espeak-ng-data/lang/cel/ga",
        bytes: 66,
        sha256: "29c2cc5736ceb2bd9ef745694d4abf7ed363a33569dfbe745811d4703b7b6cce"
      },
      {
        path: "espeak-ng-data/lang/cel/gd",
        bytes: 51,
        sha256: "7da0ba464579c367089109826ec15c2584a17417cca4a2c66dae0318d33e3128"
      },
      {
        path: "espeak-ng-data/lang/cus/om",
        bytes: 39,
        sha256: "b7c563f1effd83c08f3d229fb5a13d074513b85165ce4359a674ef30ca71786b"
      },
      {
        path: "espeak-ng-data/lang/dra/kn",
        bytes: 55,
        sha256: "c988a5226fa27ee6768b45566ce999ced9a4b68f8e79232b323d5903f4bb2258"
      },
      {
        path: "espeak-ng-data/lang/dra/ml",
        bytes: 57,
        sha256: "aa7e1f1f239ba55a8a79ed1f3544e9a51b94efe53925de60d4ff737273660b5c"
      },
      {
        path: "espeak-ng-data/lang/dra/ta",
        bytes: 51,
        sha256: "5bc213eb163bbf069cbfe4f2e9f7e7db71a719d8c0a96e95401d94c992960ed7"
      },
      {
        path: "espeak-ng-data/lang/dra/te",
        bytes: 70,
        sha256: "176ca4a81feb2181393edff3e2d5c0253cb52239392c4b809c61501d60c69811"
      },
      {
        path: "espeak-ng-data/lang/esx/kl",
        bytes: 30,
        sha256: "d08cf6ff60b99e6c2ceda549bcbb1a57580915d6a4d50c7f0f5d75289d9fb45a"
      },
      {
        path: "espeak-ng-data/lang/eu",
        bytes: 54,
        sha256: "a16e4e4d9b910a6e25a2a55913c812badc4fc3cbece0b8d49a64af112782d5a5"
      },
      {
        path: "espeak-ng-data/lang/gmq/da",
        bytes: 43,
        sha256: "e8dd5e0d30ff0694a7ee839faa8ed35c015eb927a737aba1f120c00005692eaf"
      },
      {
        path: "espeak-ng-data/lang/gmq/is",
        bytes: 27,
        sha256: "16c077e6222acfc7702046fa3579bb5d6b57ece98646229e13be2233f9fdcbd7"
      },
      {
        path: "espeak-ng-data/lang/gmq/nb",
        bytes: 87,
        sha256: "d47966621312fb95570539f446982f6deb98fd46d9b71fec4a0005a6bace8f46"
      },
      {
        path: "espeak-ng-data/lang/gmq/sv",
        bytes: 25,
        sha256: "02727d3b25fc82409bd2cd1ebb444fdb2d5d3f3de7f76b95fc9ed9164c3e59c3"
      },
      {
        path: "espeak-ng-data/lang/gmw/af",
        bytes: 123,
        sha256: "fb8ccc05f5eae1754b5aa7e92cb919defdd0810b70eec19f7c77cf836e51db09"
      },
      {
        path: "espeak-ng-data/lang/gmw/de",
        bytes: 42,
        sha256: "f3cca92f94b70f8c25a29ee0a4c9ce4c7f1022241532e0647fa2b7f698bf104e"
      },
      {
        path: "espeak-ng-data/lang/gmw/en",
        bytes: 140,
        sha256: "4605d5330801de3641c6e366d15f129ea1f5ffbce8722642aba01ace07ab9c83"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-029",
        bytes: 335,
        sha256: "faeb8cb201056775f733acbd908c66555fe57bf01cb063920f178f389cbf85d3"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-GB-scotland",
        bytes: 295,
        sha256: "1ce4282c1f4385dbaf0035e799b2ab1ee9e9a3ab4829100594a3047727b52353"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-GB-x-gbclan",
        bytes: 238,
        sha256: "2040e176f1f7f27bdce81c32d7e2b1662449d54d264afd3c0ed871b8e42b6e46"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-GB-x-gbcwmd",
        bytes: 188,
        sha256: "927a5ab891c65b30b4426b151d1623a01024f6b773a38497ba1c90cd77a95747"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-GB-x-rp",
        bytes: 249,
        sha256: "d0625af7f58561b1b8cf96fd7f93eee6553bcb3eadb9020ae0757bf96e5115e5"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-US",
        bytes: 257,
        sha256: "41534c2a22df5dd4f1052ff9e1a33a3ea7bff5a26b5c02bdad5ba8ddb7524704"
      },
      {
        path: "espeak-ng-data/lang/gmw/en-US-nyc",
        bytes: 271,
        sha256: "e8ee9168376d1f7d9e7dcda7c4644c36c529a8bea816e6380895364db46ea2e3"
      },
      {
        path: "espeak-ng-data/lang/gmw/lb",
        bytes: 31,
        sha256: "071beb0e769afeba32177796fc0f1386bdc89a3234bed2bf720e76cbf73f5b99"
      },
      {
        path: "espeak-ng-data/lang/gmw/nl",
        bytes: 23,
        sha256: "56ae04fae28ae9371ed6db28193189e4ee962ba8236f0bcdeef6a06ea4dee374"
      },
      {
        path: "espeak-ng-data/lang/grk/el",
        bytes: 23,
        sha256: "0b529c998af07c72bf516b5750709464f6258c56c6916b8b8f0c843be9836fca"
      },
      {
        path: "espeak-ng-data/lang/grk/grc",
        bytes: 99,
        sha256: "319f950b1ad7b1f37efaa390540bf957bddac16d0557a6c3adaff27e0c64e12e"
      },
      {
        path: "espeak-ng-data/lang/inc/as",
        bytes: 42,
        sha256: "3f58f5628f792b00a5ae6e8fe3bf8696f64af2838e5723799ddbab6027a0b378"
      },
      {
        path: "espeak-ng-data/lang/inc/bn",
        bytes: 25,
        sha256: "bc3ce23384b9d0bb3bac06a09d90f690fae32a492dcbb030f0e56ba67b5d656c"
      },
      {
        path: "espeak-ng-data/lang/inc/bpy",
        bytes: 39,
        sha256: "e528d1189b995b94966cef4cc182469cc54f7da8efc5860375c4ecf186ce6146"
      },
      {
        path: "espeak-ng-data/lang/inc/gu",
        bytes: 42,
        sha256: "f938a755d270745188c2cf2aacba06642a96bb73ba2a0325384121b9d5ec5407"
      },
      {
        path: "espeak-ng-data/lang/inc/hi",
        bytes: 23,
        sha256: "3c1c3f916f57f2d6d6cbf7923c0f39a36ac2140e2a69ddffce917d7b8bf3ccab"
      },
      {
        path: "espeak-ng-data/lang/inc/kok",
        bytes: 26,
        sha256: "810ee23fbbe9c186a036bc12f4e5c0de674a132e2e099c9b3dece2a1c9cdb28a"
      },
      {
        path: "espeak-ng-data/lang/inc/mr",
        bytes: 41,
        sha256: "29063ff3a5257d0d3d7c215dfd4c14deed39e1d48f15894202e6712459720efd"
      },
      {
        path: "espeak-ng-data/lang/inc/ne",
        bytes: 37,
        sha256: "d53fda082ec174ef33ed3c3468fc973c43b4ef71aca8c1a28cb344668f4838dc"
      },
      {
        path: "espeak-ng-data/lang/inc/or",
        bytes: 39,
        sha256: "9b52ede7d19659f884854de3dff12597a96f4d6ec7cb4146d2f8dad1453c742f"
      },
      {
        path: "espeak-ng-data/lang/inc/pa",
        bytes: 25,
        sha256: "eed3cf477f81d13559dbb367256f9532b20dad1432c15b206c777217b8f570ca"
      },
      {
        path: "espeak-ng-data/lang/inc/sd",
        bytes: 66,
        sha256: "65bfe0e37799029d42a370eb627cca5aa4108b967fba6c8141878d693c903619"
      },
      {
        path: "espeak-ng-data/lang/inc/si",
        bytes: 55,
        sha256: "8f0993b35ba5b075c38ae76640971256e560abfbd721b608d16a48588932596d"
      },
      {
        path: "espeak-ng-data/lang/inc/ur",
        bytes: 94,
        sha256: "5b7af7474fac265c7bd7d269111994a09610f954690698f55a8613f3fa973318"
      },
      {
        path: "espeak-ng-data/lang/ine/hy",
        bytes: 61,
        sha256: "b6ad6129079c49ca915c3005ecb74a02bf5d69cbbc8ec3f8e0f6b949cb3a768f"
      },
      {
        path: "espeak-ng-data/lang/ine/hyw",
        bytes: 365,
        sha256: "26f8a863c74b3d19c9c42fcf16ae5151c12ac52ef8fab36cae1e5f0d4ad30e6a"
      },
      {
        path: "espeak-ng-data/lang/ine/sq",
        bytes: 103,
        sha256: "865fde9017b5af82acb844e5f9793998fed422a208ad8aaf9dedacad3bf27af1"
      },
      {
        path: "espeak-ng-data/lang/ira/fa",
        bytes: 90,
        sha256: "0dc7e93be4d1fbdf7ff52de2fe8bcdc23304e6d86e012b4ab8276d626b5d980c"
      },
      {
        path: "espeak-ng-data/lang/ira/fa-Latn",
        bytes: 269,
        sha256: "a04cf8efed8db1ac33b306f1f8c6f42733dace87c9fc9f34a2d227b3bb291e28"
      },
      {
        path: "espeak-ng-data/lang/ira/ku",
        bytes: 40,
        sha256: "57db3a210d73412a49e961dbed9b27077f5c7b967a19a0eb9f9363ea4b16cea5"
      },
      {
        path: "espeak-ng-data/lang/iro/chr",
        bytes: 569,
        sha256: "f0e2fb8549306c07f571d3e77c89b1d3e9022d448d58e5d424441e01ccce88be"
      },
      {
        path: "espeak-ng-data/lang/itc/la",
        bytes: 297,
        sha256: "b70d13a264352eba2d22a5d0ef21730849509d18f7277320b008a56decc6efc2"
      },
      {
        path: "espeak-ng-data/lang/jpx/ja",
        bytes: 52,
        sha256: "6fd980445bc52e0f593062929f5b62831448abaae2a92739beba49df27a79743"
      },
      {
        path: "espeak-ng-data/lang/ko",
        bytes: 51,
        sha256: "c2dfbf88d9aa2ac9bf2f30e92e260120e4f2c21123a02265014ae98d59d5774e"
      },
      {
        path: "espeak-ng-data/lang/map/haw",
        bytes: 42,
        sha256: "b19f22efb6714354d8d1360f449e05f0f84d50d6fa3c98fcfd619ea1b4ba8996"
      },
      {
        path: "espeak-ng-data/lang/miz/mto",
        bytes: 183,
        sha256: "e33aba5e8159730f62004b22518d627c796f7d039431e5d9217b498f10341976"
      },
      {
        path: "espeak-ng-data/lang/myn/quc",
        bytes: 210,
        sha256: "76a75b77c672c432b56b84d517310d6aa75c4b3f9de580e290199804366174ea"
      },
      {
        path: "espeak-ng-data/lang/poz/id",
        bytes: 134,
        sha256: "ce1fcddab3e756a7cdba3dd009ad24cd57e1fde29ce395698355da24e32a6075"
      },
      {
        path: "espeak-ng-data/lang/poz/mi",
        bytes: 367,
        sha256: "2146cf3868c79b853bb5e41ddbf611d51b4b0a14087199f16194313562b98987"
      },
      {
        path: "espeak-ng-data/lang/poz/ms",
        bytes: 430,
        sha256: "8a965182ee0c5a41357197c05cf047d21b96744775a57a344d831a961e30351b"
      },
      {
        path: "espeak-ng-data/lang/qu",
        bytes: 88,
        sha256: "3069e443ecf3421bcb3b35b864e1a89fa9465af072f86eedd46a415990aba6e6"
      },
      {
        path: "espeak-ng-data/lang/roa/an",
        bytes: 27,
        sha256: "ff8aa97c55286cc90531cad5df3cd36165abba11502a84d53b0fcd923f965f23"
      },
      {
        path: "espeak-ng-data/lang/roa/ca",
        bytes: 25,
        sha256: "787df034320467236292bb46f1f8781a2998a185f117d350c018b6cfcf360854"
      },
      {
        path: "espeak-ng-data/lang/roa/es",
        bytes: 63,
        sha256: "966aa015ea5646d79f0ca4807cf5da7339aabd3782b55cfa5eb0d8c3fc8fc588"
      },
      {
        path: "espeak-ng-data/lang/roa/es-419",
        bytes: 167,
        sha256: "ff0f84457ac40e3bcf61d6de58028312be74e0e6cbc3b742f31b3ce729c2aa0c"
      },
      {
        path: "espeak-ng-data/lang/roa/fr",
        bytes: 79,
        sha256: "95f44834b48c075dad13eace54d2c98ff79b81aa0074dd67eebaf66c2909eef8"
      },
      {
        path: "espeak-ng-data/lang/roa/fr-BE",
        bytes: 84,
        sha256: "72496a316e47b997f893500b8953dc01a10b86a2d4238e13c1260f50b47d792a"
      },
      {
        path: "espeak-ng-data/lang/roa/fr-CH",
        bytes: 86,
        sha256: "b449b0fd99d9cd93261fe1c6b816448b99b4a10420bee3f301e669568ad0de55"
      },
      {
        path: "espeak-ng-data/lang/roa/ht",
        bytes: 140,
        sha256: "389bdf3e984a2f93b7060baad82452dac65b83bf4482d3884525a176ae0e0524"
      },
      {
        path: "espeak-ng-data/lang/roa/it",
        bytes: 109,
        sha256: "0d9069eb9a96db1c55c131b2bb7d1f5255c68fbddc2199ffd3295b52519a3256"
      },
      {
        path: "espeak-ng-data/lang/roa/pap",
        bytes: 62,
        sha256: "41a5b5e91482a5498a66711c05873a634bbd418786b0ba037032df846344cfc1"
      },
      {
        path: "espeak-ng-data/lang/roa/pt",
        bytes: 95,
        sha256: "a44060072f790e41912c57b7d52f7b6438c4383e0dabdb052f6fdb7aacc23493"
      },
      {
        path: "espeak-ng-data/lang/roa/pt-BR",
        bytes: 109,
        sha256: "84dd4e34c970fadbe32211eadecfdfaab52432479c0911e43300da88a33398ba"
      },
      {
        path: "espeak-ng-data/lang/roa/ro",
        bytes: 26,
        sha256: "b12af10ffc3f89cb87767ca701c6fea0def8a712de63426a9c3d0bf2432467f8"
      },
      {
        path: "espeak-ng-data/lang/sai/gn",
        bytes: 47,
        sha256: "ff82d2d163d3e06adb580254d89012e689b2615c46579883562838ab401fb5d5"
      },
      {
        path: "espeak-ng-data/lang/sem/am",
        bytes: 41,
        sha256: "5970b16bf865528ee96a78c08498244bc8f54218fc2add499716b0e0c09969fb"
      },
      {
        path: "espeak-ng-data/lang/sem/ar",
        bytes: 50,
        sha256: "43f418f8140e5a7bd7096963da20ccba9247f6be1fcdb08cb53dd7967dd72eee"
      },
      {
        path: "espeak-ng-data/lang/sem/he",
        bytes: 40,
        sha256: "de9195e743b91fb7fbef7493bd5ddccad14c380a58d5aeb7c1d11d3419ef3b86"
      },
      {
        path: "espeak-ng-data/lang/sem/mt",
        bytes: 41,
        sha256: "d23f38fae3253b6fb42e3336760ab482e676893692455465448bc9fbc0ac3e83"
      },
      {
        path: "espeak-ng-data/lang/sit/cmn",
        bytes: 686,
        sha256: "a130a38e3b622735c2401cb37f6719f46995e84a133729185cef9a543ec0b072"
      },
      {
        path: "espeak-ng-data/lang/sit/cmn-Latn-pinyin",
        bytes: 161,
        sha256: "14c2fc097db280416b688c2bf97de2e5da532c279754020fde7bf6cd624cdd10"
      },
      {
        path: "espeak-ng-data/lang/sit/hak",
        bytes: 128,
        sha256: "c03c30b43e0b0abdfa689445baf9f442664a0373154a5d0ca75a33d30f46aeed"
      },
      {
        path: "espeak-ng-data/lang/sit/my",
        bytes: 56,
        sha256: "4b5ae2566cbf30aa59207020469e09832e66a7883818788f253996c534303dca"
      },
      {
        path: "espeak-ng-data/lang/sit/yue",
        bytes: 194,
        sha256: "83f3dac92af5b4aaecc119515698a6979524be236b28ea8f1024ec707d99ea5b"
      },
      {
        path: "espeak-ng-data/lang/sit/yue-Latn-jyutping",
        bytes: 213,
        sha256: "c56d45bb9a9cd97efb38edabe31c7dd3feb0518cc900aac6a891dcb6bd8eb428"
      },
      {
        path: "espeak-ng-data/lang/tai/shn",
        bytes: 92,
        sha256: "f16bf2de219d3ae9a6aec263ce9c684d9cd3e61258d04c7948db0757c67e2c96"
      },
      {
        path: "espeak-ng-data/lang/tai/th",
        bytes: 37,
        sha256: "6c8ac809868de659e06673f1fc2b56dbf4637ff9980da7a4726b846478b4cfe6"
      },
      {
        path: "espeak-ng-data/lang/trk/az",
        bytes: 45,
        sha256: "52b424332de4c443f3e9c5ce4de5aed6fbfd421269fc825756dfc6bcbd7e1ad8"
      },
      {
        path: "espeak-ng-data/lang/trk/ba",
        bytes: 25,
        sha256: "a0cc3a06293962093c66533f9c1cffbccf083a2eb666751f2778a02a5316d98c"
      },
      {
        path: "espeak-ng-data/lang/trk/cv",
        bytes: 40,
        sha256: "94baf6bacf581cc20337471c599f85ecbbe211f0b8476351ff19450c6541ea92"
      },
      {
        path: "espeak-ng-data/lang/trk/kk",
        bytes: 40,
        sha256: "2219f4d6de0fbb1dc9982157c6f3cc5f4c8abe5fcb605908a9d1054b9880cd51"
      },
      {
        path: "espeak-ng-data/lang/trk/ky",
        bytes: 43,
        sha256: "8239dfe8bdc6d4725880f5192b4eaf645f839e40cadfd145a4409c8387ac2d59"
      },
      {
        path: "espeak-ng-data/lang/trk/nog",
        bytes: 39,
        sha256: "e0e27fe61d406b6f4a4879fb8f81a14bc65997106666933991b818c7d79fabc1"
      },
      {
        path: "espeak-ng-data/lang/trk/tk",
        bytes: 25,
        sha256: "d78263398c135119909ad63a3ecb6ffe3aff08383212934dd03695222a9786d0"
      },
      {
        path: "espeak-ng-data/lang/trk/tr",
        bytes: 25,
        sha256: "490eb5a2f777a2f3396f3a824ed8021bd77a94be801214411461bde6689738c9"
      },
      {
        path: "espeak-ng-data/lang/trk/tt",
        bytes: 23,
        sha256: "8b9617a9b6c56f4a2fe2f59d9ce55426837196567962716f9330f70948f8f9b0"
      },
      {
        path: "espeak-ng-data/lang/trk/ug",
        bytes: 24,
        sha256: "65d0cdbc96efab4d9e3cd0095440752a31dc7f425edd3ba0a53c4dd33eac5d63"
      },
      {
        path: "espeak-ng-data/lang/trk/uz",
        bytes: 39,
        sha256: "04fd711dfda1e00d17dc8b1b250c24d70cc3c498b27e35d31065ac47441a6759"
      },
      {
        path: "espeak-ng-data/lang/urj/et",
        bytes: 237,
        sha256: "59c77747c4774e54a63ab74d2c6a95bc3c5b5b0a50d3781f187bd1fc3a613de5"
      },
      {
        path: "espeak-ng-data/lang/urj/fi",
        bytes: 237,
        sha256: "61f58ec3bba5b55a392aff7ecf8a84d024200aeaa404b5553fcfb47770936928"
      },
      {
        path: "espeak-ng-data/lang/urj/hu",
        bytes: 73,
        sha256: "c575421d2ae397065d35af0eb4f79dff4e85f3435ccf45da874f46b3fee1338b"
      },
      {
        path: "espeak-ng-data/lang/urj/smj",
        bytes: 45,
        sha256: "3d709dec77bb633af0d57b89668dbaaa72d9be8688118d6909f7d457bec12a50"
      },
      {
        path: "espeak-ng-data/lang/zle/be",
        bytes: 52,
        sha256: "5beb002d15a36bf3d0d764ed0d483c75a1df6909eaa3b10fe5f6546700c9bfec"
      },
      {
        path: "espeak-ng-data/lang/zle/ru",
        bytes: 57,
        sha256: "9f52d00a279aaeaa45a786b4fd3a98b34e95fedbf823f8cdb9fecc1339751d3a"
      },
      {
        path: "espeak-ng-data/lang/zle/ru-LV",
        bytes: 280,
        sha256: "980e379667ccb94abe33b9c9c660c08800e3f31e36fe4a939551398ab98457ae"
      },
      {
        path: "espeak-ng-data/lang/zle/ru-cl",
        bytes: 91,
        sha256: "200ea345b505ec9e7b8838490aeaf1822af41033429aeae4ea68159047f59f90"
      },
      {
        path: "espeak-ng-data/lang/zle/uk",
        bytes: 97,
        sha256: "df3d1a9f77bac0531e72f87be398d9eb1e903bd6f839d4f04ffec5abb4e34634"
      },
      {
        path: "espeak-ng-data/lang/zls/bg",
        bytes: 111,
        sha256: "9b91accccb0d53bb2a7bf21922846ba58c74bc082ba71ae32bf12cb0d092f853"
      },
      {
        path: "espeak-ng-data/lang/zls/bs",
        bytes: 230,
        sha256: "0820e7c78b68fbdaf86d83c782cdde1901b642d1cdbeae4181c6f5f5e21e5e89"
      },
      {
        path: "espeak-ng-data/lang/zls/hr",
        bytes: 262,
        sha256: "cef3ef0411c66f154e6c82f7decd95beffa8cbfbe953335658df9f125bdd6096"
      },
      {
        path: "espeak-ng-data/lang/zls/mk",
        bytes: 28,
        sha256: "6dbc2cfb8999141bd0782cd463d4880468161088190c6b4c9412f43552dc39e2"
      },
      {
        path: "espeak-ng-data/lang/zls/sl",
        bytes: 43,
        sha256: "e1c2bd1f75c0eeb86f64182472d5f597ce23e64ad7478c248c2f75b694655942"
      },
      {
        path: "espeak-ng-data/lang/zls/sr",
        bytes: 250,
        sha256: "0e076528d3566f6e59b807e16e274dee505e88a6d477da188ab8ec442eae44f4"
      },
      {
        path: "espeak-ng-data/lang/zlw/cs",
        bytes: 23,
        sha256: "1477cdba5ba3bce85db559accbbd8a24b86b3f6d9d9988bc587e89357c1c4431"
      },
      {
        path: "espeak-ng-data/lang/zlw/pl",
        bytes: 38,
        sha256: "83c586a2b724b24b9f98d21ade5022112c465ac446ca09930286980ceae1c781"
      },
      {
        path: "espeak-ng-data/lang/zlw/sk",
        bytes: 24,
        sha256: "f46ff673c7d58c1646096c174d58da34047d893d0d2993dbca260ce54abe77ef"
      },
      {
        path: "espeak-ng-data/lb_dict",
        bytes: 687931,
        sha256: "d819a062b9722334f187540d3530fac1de365cd200d4a466f5ecccd7e3c05772"
      },
      {
        path: "espeak-ng-data/lfn_dict",
        bytes: 2793,
        sha256: "10281bc404f429165a330b800eb64674e37a135d1b4c689e57fb1d9e827d6924"
      },
      {
        path: "espeak-ng-data/lt_dict",
        bytes: 49890,
        sha256: "68ef55aba9545d27ce73e7d4aca1c2fa51d2c3d3d626152fbc22bf5a90fbff11"
      },
      {
        path: "espeak-ng-data/lv_dict",
        bytes: 66337,
        sha256: "3e246c76b7da924235ffb75925070865e669da2ce3e41e98395e99be1f8db9f7"
      },
      {
        path: "espeak-ng-data/mi_dict",
        bytes: 1346,
        sha256: "401621fdf61da47d0513e80279134a3515ced898aaadd5205b82cced0f2df042"
      },
      {
        path: "espeak-ng-data/mk_dict",
        bytes: 63859,
        sha256: "e4960ff4e74e1096ff1c3bccab62ce0429fa4faa725e546cd5d33e43f45225be"
      },
      {
        path: "espeak-ng-data/ml_dict",
        bytes: 92345,
        sha256: "b12687557c38f9bcd17417854253ddde3781e3b0c16f9470d732205818e7cd38"
      },
      {
        path: "espeak-ng-data/mr_dict",
        bytes: 87391,
        sha256: "f712a7525db108ef9769aee53fdd1cd141f0df372778924691b89623aa6fc22f"
      },
      {
        path: "espeak-ng-data/ms_dict",
        bytes: 53541,
        sha256: "74b01897385ba1f018de44c0268048fa5be588bbbb702a900bb35c691a466707"
      },
      {
        path: "espeak-ng-data/mt_dict",
        bytes: 4384,
        sha256: "1f76761bdfd481a984b15d07522df23c9444f4ac21ea9671917e08bbffa7f8d3"
      },
      {
        path: "espeak-ng-data/mto_dict",
        bytes: 3960,
        sha256: "6d51cb6be959dba045d41d3d63ff662a7363e1287cce2c633b071295ce55d560"
      },
      {
        path: "espeak-ng-data/my_dict",
        bytes: 95948,
        sha256: "e7f9c2dc672e1388f6941ac6def956b8ab2d622adb00d0ed6640dee4b7acc96b"
      },
      {
        path: "espeak-ng-data/nci_dict",
        bytes: 1534,
        sha256: "38c7201e7726c8d508f8f8611349cbc44fcc4684a0fee4db7285d83e808a5b69"
      },
      {
        path: "espeak-ng-data/ne_dict",
        bytes: 95377,
        sha256: "43831c3f53ea6e939cac37b5ae5bd7a2ea8237aa46f0e7f2441ab772a3c51dba"
      },
      {
        path: "espeak-ng-data/nl_dict",
        bytes: 65979,
        sha256: "d28641049f98c76b460c3dddde3e2edecb7782c4eb9a3f242391301ff526c83f"
      },
      {
        path: "espeak-ng-data/no_dict",
        bytes: 4178,
        sha256: "43b828f8c1709e7abb23a0cc6416fb32e4814e3f1ff1db4baf2935bf7c77c9ff"
      },
      {
        path: "espeak-ng-data/nog_dict",
        bytes: 3294,
        sha256: "8b921398a2f1907b43c07b96a72277d8d3d8545e385955eebae5f340aae33bd2"
      },
      {
        path: "espeak-ng-data/om_dict",
        bytes: 2302,
        sha256: "3624e67ef8d9c20d894db0adccaccc61ee852977cb77d5fe5801e7b4a528fcf5"
      },
      {
        path: "espeak-ng-data/or_dict",
        bytes: 89246,
        sha256: "e0dd737e9104da63a27d86cd464cf7764837625b1513169b8d28fca1bd3c8c3b"
      },
      {
        path: "espeak-ng-data/pa_dict",
        bytes: 79953,
        sha256: "cee0e2a2bfb166e602ff84e185351a8ac311571ccdf46e1831c7a25245563c10"
      },
      {
        path: "espeak-ng-data/pap_dict",
        bytes: 2128,
        sha256: "770039bbf4ea8c5a3ffddd98c4831ca02c9f39e1ff6b3de7729fa71a8f3bc0f1"
      },
      {
        path: "espeak-ng-data/phondata",
        bytes: 550424,
        sha256: "4e0288957874029a8c3c9f41a8f517ad4bf18127046decbdd4b9d1d6807ce3a3"
      },
      {
        path: "espeak-ng-data/phondata-manifest",
        bytes: 21821,
        sha256: "7b387af0702c7cf0b61f0bead68feded0bd8e1620729b0b252e76acbc30d3813"
      },
      {
        path: "espeak-ng-data/phonindex",
        bytes: 39074,
        sha256: "3ca7b8fa3b42624e4b0f152707e7a39245fce569aa99ea47c055d9e622fcf0c4"
      },
      {
        path: "espeak-ng-data/phontab",
        bytes: 55796,
        sha256: "886f3fa402cb0ba73d483aa8ad000af47a6b7cc06293c75a97913fba68a530f6"
      },
      {
        path: "espeak-ng-data/piqd_dict",
        bytes: 1710,
        sha256: "33004a36210c33291aef8a838d477667eed7af52ff5093152891379b1774188d"
      },
      {
        path: "espeak-ng-data/pl_dict",
        bytes: 76730,
        sha256: "0e0ce6cfe4eba41a1223362a046390dca359a3e597af8243adaac84d624ef18f"
      },
      {
        path: "espeak-ng-data/pt_dict",
        bytes: 67817,
        sha256: "7e8398f15fa4a21db39a213381f28ec0d302b22663c644e865abb61a09c1b004"
      },
      {
        path: "espeak-ng-data/py_dict",
        bytes: 2409,
        sha256: "2255348879547940e8b49e0ca1b80452748f142cb6e267e49cab0560c720129a"
      },
      {
        path: "espeak-ng-data/qdb_dict",
        bytes: 3028,
        sha256: "c9b7f307ffe54f4aaf323290eca1c620572919035b0eb268e5c94f5d7a430058"
      },
      {
        path: "espeak-ng-data/qu_dict",
        bytes: 1919,
        sha256: "d50659c2a14f43e01fdef0b668eb083025a00cac481b49dfb068e0220e0ed945"
      },
      {
        path: "espeak-ng-data/quc_dict",
        bytes: 1450,
        sha256: "458c1ca6dcfa288ea2584915d206c5127512501174d82655de2cf031378e6dfd"
      },
      {
        path: "espeak-ng-data/qya_dict",
        bytes: 1939,
        sha256: "e56ae297ebac26ed6c77a9718812e087f0bd198241dac3c0d964f36510984783"
      },
      {
        path: "espeak-ng-data/ro_dict",
        bytes: 68538,
        sha256: "b14f68866b0440c4b0d95fb7da3b7ffd3c59b693e8593d188474fabfc9a1117d"
      },
      {
        path: "espeak-ng-data/ru_dict",
        bytes: 8532392,
        sha256: "f0f6181bbbf9e53cd1e8f9d26bde8fc62119c4f78181948f961cb29866e5e585"
      },
      {
        path: "espeak-ng-data/sd_dict",
        bytes: 59928,
        sha256: "398c876b52213a6e7dd54c68d0560d2a1c164c6bfb23b9ec1c044266cdcf2217"
      },
      {
        path: "espeak-ng-data/shn_dict",
        bytes: 88172,
        sha256: "121b6682a9b49700232b3a05cc2289d8d4b9c1027e6c2db5c3f552804ad3d04a"
      },
      {
        path: "espeak-ng-data/si_dict",
        bytes: 85384,
        sha256: "a241437d4b64fd328ac4a3e786c9465c60488f6fa31cbba04153f628cdc61f27"
      },
      {
        path: "espeak-ng-data/sjn_dict",
        bytes: 1783,
        sha256: "eb70510144230f6791574d86bae0918b4191b076dd66c555e6ae3d5637daadf7"
      },
      {
        path: "espeak-ng-data/sk_dict",
        bytes: 50002,
        sha256: "58b9bc11c9a95d81e96966242367009f8d02ab7a3f8f4fd77e3581ed4159f0a8"
      },
      {
        path: "espeak-ng-data/sl_dict",
        bytes: 45047,
        sha256: "9cb2bcbf616a5e7dd7ca769e7d222a48c613299ef1d76e44c08b002f8c22861a"
      },
      {
        path: "espeak-ng-data/smj_dict",
        bytes: 35095,
        sha256: "815270ce38a59c192ef5aa8801119d9b3ed973d9e23dfa6da8d5d27ded5a9cd6"
      },
      {
        path: "espeak-ng-data/sq_dict",
        bytes: 45003,
        sha256: "6b74bef94c3319407c27e44d944e765d036a88b30b4c17f30bbc182dbffcc4ce"
      },
      {
        path: "espeak-ng-data/sr_dict",
        bytes: 46832,
        sha256: "770cae9c516e48af7896629faf4abefaf041e1fd4ae184011aad07b97196f613"
      },
      {
        path: "espeak-ng-data/sv_dict",
        bytes: 47836,
        sha256: "565f058b14f1c89c6bfa44fc3700793886a39c7818f1037ad1f4961fa7517509"
      },
      {
        path: "espeak-ng-data/sw_dict",
        bytes: 47804,
        sha256: "375fab2ccd0d669177ad406b20b0cdb5851a1e86f093672f24f72c29fec8a815"
      },
      {
        path: "espeak-ng-data/ta_dict",
        bytes: 209553,
        sha256: "8f3d855c8d7a35ad0e2b22bc7c15a8830e5fc235492894e5db40458655076ecd"
      },
      {
        path: "espeak-ng-data/te_dict",
        bytes: 94837,
        sha256: "640407c66a5bb975671243325de616c221f90bb2842d3a36278facb68c0772f8"
      },
      {
        path: "espeak-ng-data/th_dict",
        bytes: 2301,
        sha256: "dd5d3e6268a381920f21c769f52daf3a8e610ae83f7995e56f15e9d4de18d653"
      },
      {
        path: "espeak-ng-data/tk_dict",
        bytes: 20868,
        sha256: "b3cd4a246f014f0564ec9efae79731c0fe73ffe1cd1617359dd8d5344ee3f9c8"
      },
      {
        path: "espeak-ng-data/tn_dict",
        bytes: 3072,
        sha256: "67f68dc336e7c65b946c95414cc8ae96cd10d241783bf857b3f990ac73221b2b"
      },
      {
        path: "espeak-ng-data/tr_dict",
        bytes: 46793,
        sha256: "311b0557059f2dab5ee2faabb51361f5033368f0e2a54c4bdfe45e730674f26e"
      },
      {
        path: "espeak-ng-data/tt_dict",
        bytes: 2121,
        sha256: "60d138d38330e44a78b4224cbea452bfca22bce6734c8ce3f640c0216ce14001"
      },
      {
        path: "espeak-ng-data/ug_dict",
        bytes: 2070,
        sha256: "7c4567ffe6bd8d5224b6b3fd8fab65b1343254636e6228d738ae3a708428e8e7"
      },
      {
        path: "espeak-ng-data/uk_dict",
        bytes: 3492,
        sha256: "a779bb0f51ce5cebb650a4e2282162fc8c44609210a2baa700f81f3e83e6e10c"
      },
      {
        path: "espeak-ng-data/ur_dict",
        bytes: 133556,
        sha256: "74b60e4331f532810ccfc70751ad07ab440647550a2d25823f44663a0dfa86fb"
      },
      {
        path: "espeak-ng-data/uz_dict",
        bytes: 2540,
        sha256: "790d42ac417b26dd7b1bbfed4be72329c16ed1839dd75f55f7c962eb7bd5857a"
      },
      {
        path: "espeak-ng-data/vi_dict",
        bytes: 52608,
        sha256: "bbf7cab4ba733b2f5d9d3b61eb1194ef745232fa3adebb4bc92456e948cb3722"
      },
      {
        path: "espeak-ng-data/voices/!v/Alex",
        bytes: 128,
        sha256: "1cf9874567f4fa8109329f084e9ad9ed788fb2362298921d0a04a57b24f1141f"
      },
      {
        path: "espeak-ng-data/voices/!v/Alicia",
        bytes: 474,
        sha256: "6d3f60ec866706e9d4ab7da2a79eedb8c11b50f63620f87e58317f316ea3d58e"
      },
      {
        path: "espeak-ng-data/voices/!v/Andrea",
        bytes: 357,
        sha256: "6ca52734ec2cf7c419d2d3ad7c3449cd1a1776342c4d152ea12c5b1e72801e89"
      },
      {
        path: "espeak-ng-data/voices/!v/Andy",
        bytes: 320,
        sha256: "0e13ba1a940cd9df7e65358c36445c9740f3d75f1360c7f7c71ab9f74b45edca"
      },
      {
        path: "espeak-ng-data/voices/!v/Annie",
        bytes: 315,
        sha256: "40f0f829c5c6e7abf4a02a21f128a572756d6f6693014c26d09a5c29ede5ec33"
      },
      {
        path: "espeak-ng-data/voices/!v/AnxiousAndy",
        bytes: 361,
        sha256: "7dfe126f517b76cc78269618dbee2c30d324bea9460b400938756ec93995eaf8"
      },
      {
        path: "espeak-ng-data/voices/!v/Demonic",
        bytes: 3858,
        sha256: "241b0e78362bd3208bb586b65bdf52330e1e8322f8f226c4790c4abeb47cfb09"
      },
      {
        path: "espeak-ng-data/voices/!v/Denis",
        bytes: 305,
        sha256: "a09fe9f7a4e478d2ba1e139c2995633e2b99de9abdaaa82307954599b0e3d6fd"
      },
      {
        path: "espeak-ng-data/voices/!v/Diogo",
        bytes: 379,
        sha256: "a4a17c453d13242b48783c247816bff8d2cf7bc8931c3f8237887d88a2881b18"
      },
      {
        path: "espeak-ng-data/voices/!v/Gene",
        bytes: 281,
        sha256: "06258dae680cde2122a4939dbd4f23ed4ea145b7475068bf7dd4d466090afd2a"
      },
      {
        path: "espeak-ng-data/voices/!v/Gene2",
        bytes: 283,
        sha256: "bcdb3039296eea37398e4423dc9bb6849cda9c5c812b83702ebc49682c649f57"
      },
      {
        path: "espeak-ng-data/voices/!v/Henrique",
        bytes: 381,
        sha256: "5c6bf1cf5b6bc7c7d48f2a8368ae348c6ff64232c047f40f9d9a6e6824b4ce6a"
      },
      {
        path: "espeak-ng-data/voices/!v/Hugo",
        bytes: 378,
        sha256: "906acbef890dc4da67cb54b5b0ddc2cab7ee308a95d350c899f0b0cb6a83dd5f"
      },
      {
        path: "espeak-ng-data/voices/!v/Jacky",
        bytes: 267,
        sha256: "41884ed9b66160aeb5a0dc418370a59fe39ead0013d93e023e6d607ef01c1a6e"
      },
      {
        path: "espeak-ng-data/voices/!v/Lee",
        bytes: 338,
        sha256: "a1584887cddb40c10e04992fb770025b52e66b70504656094f80975f1d6bbf6b"
      },
      {
        path: "espeak-ng-data/voices/!v/Marco",
        bytes: 467,
        sha256: "04025677360c0270f094bbb6716b83c8284902f6da9b496bedbbf590963835fb"
      },
      {
        path: "espeak-ng-data/voices/!v/Mario",
        bytes: 270,
        sha256: "a94ac65d132030df496e8aa364d5cde5f2eafa4b6b3ae361a2901d512c6029d8"
      },
      {
        path: "espeak-ng-data/voices/!v/Michael",
        bytes: 270,
        sha256: "4409be23ef5fedf4c8bffbfaa8a802a342824d7e97f1d92938336a25f92f0ebe"
      },
      {
        path: "espeak-ng-data/voices/!v/Mike",
        bytes: 112,
        sha256: "8999b264606c0af23d346a877e10ca05aa757f7ea433e6cfcb3bef50a56ba2cf"
      },
      {
        path: "espeak-ng-data/voices/!v/Mr serious",
        bytes: 3193,
        sha256: "794abd78deb07ce9b03419d20f7744df4c0151d5abff7981217e9d0926a2f240"
      },
      {
        path: "espeak-ng-data/voices/!v/Nguyen",
        bytes: 280,
        sha256: "4f3d557d9c045080f56022a96e5b3659c4d1caa5fa1d702e12d3ef6bec2e3a45"
      },
      {
        path: "espeak-ng-data/voices/!v/Reed",
        bytes: 202,
        sha256: "727dbc3f6bff0be4dd7d0438f66d3bb82cff68ed148cf52cb58e73314aaec1e4"
      },
      {
        path: "espeak-ng-data/voices/!v/RicishayMax",
        bytes: 233,
        sha256: "7ddc7a57711ccd7a736540f14271adadf1e2e0422941ecaa7cc43ab87f8e2017"
      },
      {
        path: "espeak-ng-data/voices/!v/RicishayMax2",
        bytes: 435,
        sha256: "3de5e414d4b2ef082a7b974bb7ede94937e93b5b873d2b2f7928b19d30745180"
      },
      {
        path: "espeak-ng-data/voices/!v/RicishayMax3",
        bytes: 435,
        sha256: "36d20550b68a8c229d34d956657b7d642929962f7e5d4fddd6396af9e5378b56"
      },
      {
        path: "espeak-ng-data/voices/!v/Storm",
        bytes: 420,
        sha256: "e817c7d1ce10de527ebc19c0835f580cb584c3ae7d36d30a4f414482602e7b89"
      },
      {
        path: "espeak-ng-data/voices/!v/Tweaky",
        bytes: 3189,
        sha256: "c34d1c1d8b7922ceb886b95ad6ab534ca048f9c47e19698ec2aae5cf0c32cdbc"
      },
      {
        path: "espeak-ng-data/voices/!v/UniRobot",
        bytes: 417,
        sha256: "23dba52c2d1cb332db6225304818d85488f110a668ddcdbfd7f0438afe37794b"
      },
      {
        path: "espeak-ng-data/voices/!v/adam",
        bytes: 75,
        sha256: "b21efbf56fd7d58470e7ce4759c6ef9f23949706b269f2d777832204658ee0dd"
      },
      {
        path: "espeak-ng-data/voices/!v/anika",
        bytes: 493,
        sha256: "228771ce84cad16a089e0b23efe2e69edf25f1ab7c0cb3a50d366ac70e82fbbd"
      },
      {
        path: "espeak-ng-data/voices/!v/anikaRobot",
        bytes: 512,
        sha256: "3ba724be6aab2fc1a084b25cdb16f469250eb9de4c6c0924a18788d0246fc32f"
      },
      {
        path: "espeak-ng-data/voices/!v/announcer",
        bytes: 300,
        sha256: "4af6a6748c720cbbaac1e3dcac17bb3bc7a4c553499ec7ee69e054db51a50de3"
      },
      {
        path: "espeak-ng-data/voices/!v/antonio",
        bytes: 381,
        sha256: "c90477080cd9aa9c384770c0ec18901d01e9851f1bc7d15526a2565a3b0c4da5"
      },
      {
        path: "espeak-ng-data/voices/!v/aunty",
        bytes: 358,
        sha256: "0aede4d1ca614f32c348f3d728eab58322ccd016e8531234fdc3dfcf00e32bf1"
      },
      {
        path: "espeak-ng-data/voices/!v/belinda",
        bytes: 340,
        sha256: "9bd791b7115820e25ada82b4911134d5116e8238b4fd4d214dfccf162576141c"
      },
      {
        path: "espeak-ng-data/voices/!v/benjamin",
        bytes: 201,
        sha256: "3fa10b0d865fc751fd9c8ed1dabac4bb9b011ea2b95064d4d25a8c719f7785d8"
      },
      {
        path: "espeak-ng-data/voices/!v/boris",
        bytes: 224,
        sha256: "f23d0a6ee2eeb7e3340506d61d422b691fb04f4e98977ea15c1e0ee5715846d5"
      },
      {
        path: "espeak-ng-data/voices/!v/caleb",
        bytes: 57,
        sha256: "bcde145ec713eae6d3451a6f25dbbdc0b6756fd44e9e092b7aef89f2cff25be8"
      },
      {
        path: "espeak-ng-data/voices/!v/croak",
        bytes: 93,
        sha256: "2906a2c6f7b7687db2f1c862164a9b80435d5afc3ba16d74619728bf8c3a8ca7"
      },
      {
        path: "espeak-ng-data/voices/!v/david",
        bytes: 112,
        sha256: "50b5cb5f61a50f5ff5299dd22e5d645446746dbc36909595f6ae47bac0bda9c3"
      },
      {
        path: "espeak-ng-data/voices/!v/ed",
        bytes: 287,
        sha256: "12ddb6355b40a2e39a3b6cef66a2bf4db15a25045769b330a9a3b344a608026d"
      },
      {
        path: "espeak-ng-data/voices/!v/edward",
        bytes: 151,
        sha256: "b7a12bcb2af280c40e4be4280b675001024619ed529262dbf3e819db53b5b310"
      },
      {
        path: "espeak-ng-data/voices/!v/edward2",
        bytes: 152,
        sha256: "59d166f7adfee4515a492993405e95432889050aaa47b6cd7eaeeb457fbca227"
      },
      {
        path: "espeak-ng-data/voices/!v/f1",
        bytes: 324,
        sha256: "7cdef453c6b0391d50a02b8f35392e6f41249cea65df1021affd68a64917b85f"
      },
      {
        path: "espeak-ng-data/voices/!v/f2",
        bytes: 357,
        sha256: "62b17f6c8f94add0310db032f5e463c13510c5ff83ef1f21e8894ccbf00b00e3"
      },
      {
        path: "espeak-ng-data/voices/!v/f3",
        bytes: 375,
        sha256: "d0342ee8ceebe3047831774634d234e90281ec73ce2aed8dd0bdd915ccf500fc"
      },
      {
        path: "espeak-ng-data/voices/!v/f4",
        bytes: 350,
        sha256: "ff9e2907a818920e3b976232c90eabaf270fff0de0b8a479af9a3633e9b7921f"
      },
      {
        path: "espeak-ng-data/voices/!v/f5",
        bytes: 432,
        sha256: "6c76406d94540d59dee16de11520c37124a1f6dfc236981e483877075f0271b3"
      },
      {
        path: "espeak-ng-data/voices/!v/fast",
        bytes: 149,
        sha256: "fa2f9c2918f351499037f6bffb25294d9b781b2785d9772a8ae3293c0c0037fe"
      },
      {
        path: "espeak-ng-data/voices/!v/grandma",
        bytes: 263,
        sha256: "e033d57ba9b098971fdb995c13830f9c709206add081c586daaec323ff69a392"
      },
      {
        path: "espeak-ng-data/voices/!v/grandpa",
        bytes: 256,
        sha256: "f25627887b95e8bccac5e6ce99cb97c6e34290ff0bf919febe64a9987138796d"
      },
      {
        path: "espeak-ng-data/voices/!v/gustave",
        bytes: 253,
        sha256: "5fa89cf8625cd460b9309748eca019ab5b325a04dccbd29f1a9b2a00caa2e848"
      },
      {
        path: "espeak-ng-data/voices/!v/ian",
        bytes: 3168,
        sha256: "c0722c7954d3e6582e3f5b3f584140675ab060ac3c6cac5dd11a74592db5550a"
      },
      {
        path: "espeak-ng-data/voices/!v/iven",
        bytes: 261,
        sha256: "10ab9de8365ff7bf5a20621d08f1a2019d4bf5521f3c6f65447c9256057406c8"
      },
      {
        path: "espeak-ng-data/voices/!v/iven2",
        bytes: 279,
        sha256: "f94830e5abe118dc4c0909630d66637ba2a7c94957279c31fd78e313374054cd"
      },
      {
        path: "espeak-ng-data/voices/!v/iven3",
        bytes: 262,
        sha256: "27ccf2d2f7bb8f1ff28c705c39cf6ff575eb2458c39a518ed33741ad9c1af252"
      },
      {
        path: "espeak-ng-data/voices/!v/iven4",
        bytes: 261,
        sha256: "11b3d46c01d4307eedcb60bd8dbcc73a40f3eb86c289176d6fd5bb418223b92f"
      },
      {
        path: "espeak-ng-data/voices/!v/john",
        bytes: 3186,
        sha256: "bfbcc1cec33ef0581fdeb4955fbcd0d824a5d4be5493d731e4a2ef7f8f3ba670"
      },
      {
        path: "espeak-ng-data/voices/!v/kaukovalta",
        bytes: 361,
        sha256: "b9f6016145835c3999bcd5872b8a53442729bd903591781ea3340746b3b4956b"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt",
        bytes: 38,
        sha256: "9abb6d05d0ca354831c570e14323dd4e821459b53166d96395875a48bacdbde2"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt2",
        bytes: 38,
        sha256: "afab662a55953532ff8d6f9c615b824ecec87f7aef6790a58c4ccbc4505a742a"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt3",
        bytes: 39,
        sha256: "f1c0cd147bd656f6c4830b3341c9694483438c43aea15c982dcc1945dbb334b9"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt4",
        bytes: 39,
        sha256: "3459c15aa8fa7d7218ac34388dfc0833c850ffc923013949308c2f643f3daad2"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt5",
        bytes: 39,
        sha256: "44397d8282454a2974078d25509caa470bceb093e484e727843a5147b4193e60"
      },
      {
        path: "espeak-ng-data/voices/!v/klatt6",
        bytes: 39,
        sha256: "7d3930cd97ef7a0732f2e19f53f84e480f2d441d263390647b92bb0b4c645d05"
      },
      {
        path: "espeak-ng-data/voices/!v/linda",
        bytes: 350,
        sha256: "df06b4c29f5953034e7815ea7062e356917266f8fab576f76c036045525c8e28"
      },
      {
        path: "espeak-ng-data/voices/!v/m1",
        bytes: 335,
        sha256: "7f2de023bdfe18651d2d0453d2e7ff5e8ade9f094912a79247336ddc90fd7783"
      },
      {
        path: "espeak-ng-data/voices/!v/m2",
        bytes: 264,
        sha256: "6eb925eb6691621a6de66c87596c6ed879c80a04215a9a8437dffc28fcfa14dd"
      },
      {
        path: "espeak-ng-data/voices/!v/m3",
        bytes: 300,
        sha256: "7a4ac872387439814ddd65f5e1ff73017122975911df6b5dc62c5709e6fdb611"
      },
      {
        path: "espeak-ng-data/voices/!v/m4",
        bytes: 290,
        sha256: "6bef82cea3538da1246b7a2c203206e90155cbb4af86faa8ef03366c3119ceee"
      },
      {
        path: "espeak-ng-data/voices/!v/m5",
        bytes: 262,
        sha256: "08590ef7ce37630a6875d9cbe200dc473a9054b4184287808a4fd1c8e27dd02a"
      },
      {
        path: "espeak-ng-data/voices/!v/m6",
        bytes: 188,
        sha256: "fc0e01af458a96d43f55878010d3abcbbda85e846922b25361a78d27c3a9ca00"
      },
      {
        path: "espeak-ng-data/voices/!v/m7",
        bytes: 254,
        sha256: "bdfc54a3558ca98f9ca082479c5211034a824d8721db91804f9d77867db6fab3"
      },
      {
        path: "espeak-ng-data/voices/!v/m8",
        bytes: 284,
        sha256: "060130540e2fae5f8acfb19bcd4ef3dc5dc8f8d2134c502bb57af277fd4cc491"
      },
      {
        path: "espeak-ng-data/voices/!v/marcelo",
        bytes: 251,
        sha256: "3238a933a17c40c61cdd385c0e742bf54c42c008f4110d4b0353a6ae72a5d1a0"
      },
      {
        path: "espeak-ng-data/voices/!v/max",
        bytes: 225,
        sha256: "c88f70a60a19e76a6774dfbd7664be639b9aa8aa587c680834c305ffa434aaaf"
      },
      {
        path: "espeak-ng-data/voices/!v/michel",
        bytes: 404,
        sha256: "c0068ad9cb792dfb78aedbdff9c3cec68e5083736bae0c33bf19088186101087"
      },
      {
        path: "espeak-ng-data/voices/!v/miguel",
        bytes: 382,
        sha256: "9c8c2bbe9fba6d1f06eb63ee67d98d7ebb8846b2bf13847a9b359c90ba9fa8fe"
      },
      {
        path: "espeak-ng-data/voices/!v/mike2",
        bytes: 188,
        sha256: "274ebc5df252b3258e8996f1276137b2cf9d6e5006e1145a5172997284f1dba0"
      },
      {
        path: "espeak-ng-data/voices/!v/norbert",
        bytes: 3189,
        sha256: "35b9923e15caf36280542270282bd2392c6d86ef5db9a8be7be92ce2241a46cb"
      },
      {
        path: "espeak-ng-data/voices/!v/pablo",
        bytes: 3142,
        sha256: "053a85c8a6d7e7a0f6432a3158fe73fa9accf06202e5d69c273d4e5bae8bafc8"
      },
      {
        path: "espeak-ng-data/voices/!v/paul",
        bytes: 284,
        sha256: "75fb8098bea28859513de6ce033092307382d6f20455e71b051193dfc0793d5e"
      },
      {
        path: "espeak-ng-data/voices/!v/pedro",
        bytes: 352,
        sha256: "7429792ba833fa2446bec6db790068f5862b9ed099392002cd0e724ec6ab2a66"
      },
      {
        path: "espeak-ng-data/voices/!v/quincy",
        bytes: 354,
        sha256: "e9945bee7b4f3240221866f497bf2511a886ed7702d8389688a03c2ea120caf0"
      },
      {
        path: "espeak-ng-data/voices/!v/rob",
        bytes: 265,
        sha256: "fbfffcdb0afb2e3b70f886c02282feae22509d77fe6e7103daf907f7a356595d"
      },
      {
        path: "espeak-ng-data/voices/!v/robert",
        bytes: 274,
        sha256: "72604f85afe5bb52a5ce7e3427b196e1e3e426a14a64e2d93b6617e248a46417"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft",
        bytes: 451,
        sha256: "ce2820edd349f3fbc734bfe94095518f10ecbefdb304560109f37106f9f4d2fa"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft2",
        bytes: 454,
        sha256: "249a44f4069b323640e6b532ff6a9bc30dca35f5f9a5f666b647937cbc58c685"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft3",
        bytes: 455,
        sha256: "f8543efe18019c735ebad99d1cab4e06e0efd565ac269a895415dfebf342c383"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft4",
        bytes: 447,
        sha256: "d5f728e0d0a9d27f604f34e835e059590fd01411fd467c91328b573c7597bb2d"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft5",
        bytes: 445,
        sha256: "39da0efe1768e14eefe05a7019fab416795bbffb222fce23ad7f963991447f7b"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft6",
        bytes: 287,
        sha256: "46426971d76c34266580133fad2c26ab829395a71c1713e6205d9d46b0871672"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft7",
        bytes: 410,
        sha256: "e19c1045259d9cfb078c229d5d1372f7c5af971d0e2536a41b89c40ca3e23ede"
      },
      {
        path: "espeak-ng-data/voices/!v/robosoft8",
        bytes: 243,
        sha256: "389230461647836c1b66c51939c0a493e3fbc81e2b7afc01c6f88b8f9da21e2b"
      },
      {
        path: "espeak-ng-data/voices/!v/sandro",
        bytes: 530,
        sha256: "1b8c36a3ce35a27cbbabf4679df0264cd37f4c79b66aa1f4c310eb31b9c80490"
      },
      {
        path: "espeak-ng-data/voices/!v/shelby",
        bytes: 280,
        sha256: "5e96565045bcdd5b42e7ad0eab2bbd670c67cf5c9e3f2ac6b50b30580fb92be4"
      },
      {
        path: "espeak-ng-data/voices/!v/steph",
        bytes: 364,
        sha256: "78186aeddce4c449348f368046b2665375b1a492e948d739249b0c964f082861"
      },
      {
        path: "espeak-ng-data/voices/!v/steph2",
        bytes: 367,
        sha256: "ca88414b48553fed1fd409389548a94ea90cf282d6340e3cb968c8538a2ac2ec"
      },
      {
        path: "espeak-ng-data/voices/!v/steph3",
        bytes: 377,
        sha256: "a7d796211b6969ba92213f89de54b053890306af774424ee38fb02ace45e852d"
      },
      {
        path: "espeak-ng-data/voices/!v/travis",
        bytes: 383,
        sha256: "7d5a34be05778ee850d97b0491a62db7683c058d660ff2afc71c08c87360f30d"
      },
      {
        path: "espeak-ng-data/voices/!v/victor",
        bytes: 253,
        sha256: "a880a8083ac5eaadf94f71c63b51f34c1426d4bfe0a26f6761ddec5c6e9a5c76"
      },
      {
        path: "espeak-ng-data/voices/!v/whisper",
        bytes: 186,
        sha256: "1e3534c843768898cea47a3f83b2fd91720c0775b438ea5c0134676940a66e96"
      },
      {
        path: "espeak-ng-data/voices/!v/whisperf",
        bytes: 392,
        sha256: "7fea42b10114f1bfd2004181e6b0eb626997cca987893e23d24b5c616aac89d7"
      },
      {
        path: "espeak-ng-data/voices/!v/zac",
        bytes: 275,
        sha256: "edaf508b2cfbfd6088a163dcc78d5f6a26850a7d39a5a0e5128b09526f56b6db"
      },
      {
        path: "espeak-ng-data/yue_dict",
        bytes: 563571,
        sha256: "1d26afa203034698772107abfff1b53acbee30434700a4d2b75dee98951588f8"
      },
      {
        path: "lexicon-gb-en.txt",
        bytes: 6366635,
        sha256: "c4cbb37316f62210dff52718a7afcaae24f50c032cc75ab47ae67b831d1049e7"
      },
      {
        path: "lexicon-us-en.txt",
        bytes: 5956885,
        sha256: "7daaab53a181be9885b853a8582bf1838186317e5dadacbcef9c426d6fa0da14"
      },
      {
        path: "lexicon-zh.txt",
        bytes: 2119465,
        sha256: "11111d8cd695fba2ace1367a1d0a708b586e6ef5c1f9be91da5d7eef129b651c"
      },
      {
        path: "model.onnx",
        bytes: 325631784,
        sha256: "acc4adc175b9d9986106cd20060329673ad5a2e12ef3c557d2d3745b694f8b38"
      },
      {
        path: "number-zh.fst",
        bytes: 64482,
        sha256: "743f402181fcfebf76cc2f0546b71fa26476e626fbe4e460fb7b4c3a7a8bd5bd"
      },
      {
        path: "phone-zh.fst",
        bytes: 88630,
        sha256: "1ac2b6fa56b1442320c4de7db08353bab8963a2b57f365eebcdd3a2d3562f8d7"
      },
      {
        path: "tokens.txt",
        bytes: 1111,
        sha256: "931ab2df2400cd65d580a22402024c2347ced8ae9ea300e545144b1aacc48e14"
      },
      {
        path: "voices.bin",
        bytes: 53790720,
        sha256: "e64a5a581d8c2a350d848f51c3121657cd83aa07ed6109172177345874a7244c"
      }
    ],
    voices: [
      {
        id: "zf_001",
        sid: 3,
        name: "\u77E5\u590F",
        nameEn: "Zhixia",
        lang: "zh-CN",
        gender: "female",
        recommended: true
      },
      {
        id: "zf_002",
        sid: 4,
        name: "\u6E05\u79BE",
        nameEn: "Qinghe",
        lang: "zh-CN",
        gender: "female",
        recommended: false
      },
      {
        id: "zf_003",
        sid: 5,
        name: "\u6674\u5C9A",
        nameEn: "Qinglan",
        lang: "zh-CN",
        gender: "female",
        recommended: false
      },
      {
        id: "zf_004",
        sid: 6,
        name: "\u6C90\u8A00",
        nameEn: "Muyan",
        lang: "zh-CN",
        gender: "female",
        recommended: false
      },
      {
        id: "zm_009",
        sid: 58,
        name: "\u8A00\u5DDD",
        nameEn: "Yanchuan",
        lang: "zh-CN",
        gender: "male",
        recommended: true
      },
      {
        id: "zm_010",
        sid: 59,
        name: "\u8FDC\u5C71",
        nameEn: "Yuanshan",
        lang: "zh-CN",
        gender: "male",
        recommended: false
      },
      {
        id: "zm_011",
        sid: 60,
        name: "\u666F\u548C",
        nameEn: "Jinghe",
        lang: "zh-CN",
        gender: "male",
        recommended: false
      },
      {
        id: "zm_012",
        sid: 61,
        name: "\u660E\u6717",
        nameEn: "Minglang",
        lang: "zh-CN",
        gender: "male",
        recommended: false
      },
      {
        id: "af_maple",
        sid: 0,
        name: "Maple",
        nameEn: "Maple",
        lang: "en-US",
        gender: "female"
      },
      {
        id: "af_sol",
        sid: 1,
        name: "Sol",
        nameEn: "Sol",
        lang: "en-US",
        gender: "female"
      },
      {
        id: "bf_vale",
        sid: 2,
        name: "Vale",
        nameEn: "Vale",
        lang: "en-GB",
        gender: "female"
      }
    ],
    defaultVoice: "zf_001",
    source: "https://huggingface.co/hexgrad/Kokoro-82M-v1.1-zh",
    kind: "tts"
  },
  melo: {
    label: "MeloTTS",
    revision: "e58351ed7149f290",
    license: "MIT",
    bytes: 167006755,
    archive: {
      name: "vits-melo-tts-zh_en.tar.bz2",
      url: "https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-melo-tts-zh_en.tar.bz2",
      bytes: 167006755,
      sha256: "e58351ed7149f290a54534538badd4077cdbe6fddc964b24d0bee870415d1514"
    },
    archiveRoot: "vits-melo-tts-zh_en",
    files: [
      {
        path: "LICENSE",
        bytes: 1053,
        sha256: "88a50e5a02bbc2a5c2f084dc19da751aa97b1690f5fda76cd8005c8634d1ca70"
      },
      {
        path: "README.md",
        bytes: 257,
        sha256: "ae6e44dead53dfdbd5b4a77106226f3118eb910222b46cb5533a3860773fc6c7"
      },
      {
        path: "date.fst",
        bytes: 59154,
        sha256: "eb8aa079ae3cb81d8f4404992f39d61a0cb990947512b5b8d1e54d1f6980e718"
      },
      {
        path: "dict/README.md",
        bytes: 683,
        sha256: "8bcc7c2ed7dff082d9a99c09de0bfd72249bf3b5c4298a3af328da40cbd8cfd1"
      },
      {
        path: "dict/hmm_model.utf8",
        bytes: 519739,
        sha256: "f17790586ac86dd048c8adffed052c4bd2b28ed0682972c1275e59040c0589a7"
      },
      {
        path: "dict/idf.utf8",
        bytes: 5998717,
        sha256: "dbd1e03d72b2263cc8d84a4304ed77677eed9e7deaf43a1a5133bbba9733b535"
      },
      {
        path: "dict/jieba.dict.utf8",
        bytes: 5071204,
        sha256: "3043b77068e09c9904f27cad82f12b6ebe9dbdb5aeff3b25e45ab7f9c1122b55"
      },
      {
        path: "dict/pos_dict/char_state_tab.utf8",
        bytes: 327139,
        sha256: "28b7be1dd7369766a51445af4d42e9a2ba4bf374c13be5bc1ca7721e27271dbb"
      },
      {
        path: "dict/pos_dict/prob_emit.utf8",
        bytes: 1687686,
        sha256: "c33c4cb7edf3b3a5947df7209b6e9f267eae1f21335d9e2bd2521ea07105457a"
      },
      {
        path: "dict/pos_dict/prob_start.utf8",
        bytes: 4347,
        sha256: "13623ea0e9300bdb597cb2da28770b7b385d6c0098d66e516083fb01b6bd5d96"
      },
      {
        path: "dict/pos_dict/prob_trans.utf8",
        bytes: 124159,
        sha256: "f22363e2307408293d180c6f9f6b5cb75879d52f722f7764fa2d3d0ae2400236"
      },
      {
        path: "dict/stop_words.utf8",
        bytes: 8974,
        sha256: "b788b8a939d2e2fe079abd579ea98f12f9fb84370bfd0dddd81bb9381f7ab42c"
      },
      {
        path: "dict/user.dict.utf8",
        bytes: 49,
        sha256: "495bbf49270408a1234690e1e6a97328f30a482a7a72aa769e8a12e8714b0c62"
      },
      {
        path: "lexicon.txt",
        bytes: 6837671,
        sha256: "7236884b02435ac5d10cf69b4be40a61b45aa676b5300f0e412f185748fee528"
      },
      {
        path: "model.int8.onnx",
        bytes: 133,
        sha256: "0a1462eef98f05c15a6f57569bf2fb57a6b3995891bb17956187ff5e2694273e"
      },
      {
        path: "model.onnx",
        bytes: 170429550,
        sha256: "bf30582eb1b012250a35b1a4a80e7dfbcf8485e7bb9de0d95efbbeef0e4ad86d"
      },
      {
        path: "new_heteronym.fst",
        bytes: 21974,
        sha256: "ca14b2127e27baa571664e4bb791e143e7425f56a6bc29db08d74f97e6aa4e29"
      },
      {
        path: "number.fst",
        bytes: 64482,
        sha256: "743f402181fcfebf76cc2f0546b71fa26476e626fbe4e460fb7b4c3a7a8bd5bd"
      },
      {
        path: "phone.fst",
        bytes: 88630,
        sha256: "1ac2b6fa56b1442320c4de7db08353bab8963a2b57f365eebcdd3a2d3562f8d7"
      },
      {
        path: "tokens.txt",
        bytes: 655,
        sha256: "d18664a7e12bd7ea1022ddaf951e534e136815016c5a809d6b64156bffb4369d"
      }
    ],
    voices: [
      {
        id: "zh_en",
        sid: 0,
        name: "\u4E2D\u6587\u6717\u8BFB",
        nameEn: "Chinese narration",
        lang: "zh-CN",
        recommended: true
      }
    ],
    defaultVoice: "zh_en",
    source: "https://huggingface.co/myshell-ai/MeloTTS-Chinese",
    kind: "tts"
  },
  sensevoice: {
    kind: "asr",
    label: "SenseVoice Small",
    revision: "7d1efa2138a65b0b",
    license: "FunASR Model License",
    bytes: 163002883,
    archive: {
      name: "sherpa-onnx-sense-voice-zh-en-ja-ko-yue-int8-2024-07-17.tar.bz2",
      url: "https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-sense-voice-zh-en-ja-ko-yue-int8-2024-07-17.tar.bz2",
      bytes: 163002883,
      sha256: "7d1efa2138a65b0b488df37f8b89e3d91a60676e416f515b952358d83dfd347e"
    },
    archiveRoot: "sherpa-onnx-sense-voice-zh-en-ja-ko-yue-int8-2024-07-17",
    files: [
      {
        path: "LICENSE",
        bytes: 71,
        sha256: "221c6df10b0931a5629adad671ea48fb7747e034c414b6d2bfa275bc3dd4ea17"
      },
      {
        path: "README.md",
        bytes: 104,
        sha256: "763991a00edaea534ab36bf1b7cf89e61e911666dcfabbba71f91f9f7c593a63"
      },
      {
        path: "export-onnx.py",
        bytes: 5905,
        sha256: "c97f6a33f9d7135efd4d55b3e24e288c47d925f3b4f04b8b3418c2821c0a89ce"
      },
      {
        path: "model.int8.onnx",
        bytes: 239233841,
        sha256: "c71f0ce00bec95b07744e116345e33d8cbbe08cef896382cf907bf4b51a2cd51"
      },
      {
        path: "test_wavs/en.wav",
        bytes: 228908,
        sha256: "eb1eb008904465b74c304aad8342e8c7d3c6e61ffe9f66adcaca9cf0f76a93f4"
      },
      {
        path: "test_wavs/ja.wav",
        bytes: 230444,
        sha256: "460bd8dccb0d2a5f4e29c628f837be4082d13defc64c3fc21dd1b6bb0e119095"
      },
      {
        path: "test_wavs/ko.wav",
        bytes: 147500,
        sha256: "0dc797a5c81ed30fc339d91f3da718ab02854e17ffa37cb93c4c039ac5c6bb9c"
      },
      {
        path: "test_wavs/yue.wav",
        bytes: 164780,
        sha256: "0960b2db54ae202071d250e6462fbf74a3c863f0e3e7f01273e4939c996875a0"
      },
      {
        path: "test_wavs/zh.wav",
        bytes: 178988,
        sha256: "b77f1794fe374a0ba1ee1dc458bfaf9349496cbbfc32780c50ba3c5a7ad8e373"
      },
      {
        path: "tokens.txt",
        bytes: 315894,
        sha256: "f449eb28dc567533d7fa59be34e2abca8784f771850c78a47fb731a31429a1dc"
      }
    ],
    languages: [
      "auto",
      "zh",
      "en",
      "ja",
      "ko",
      "yue"
    ],
    sample: "test_wavs/zh.wav",
    source: "https://huggingface.co/FunAudioLLM/SenseVoiceSmall"
  }
};

// src/original/runtime/registry.js
var registry = { models };
var LOCAL_MODELS = Object.entries(registry.models).filter(([, value]) => value.kind !== "asr").map(([id, value]) => ({ id, ...value }));
var ASR_MODELS = Object.entries(registry.models).filter(([, value]) => value.kind === "asr").map(([id, value]) => ({ id, ...value }));
var LOCAL_DEFAULT_MODEL = "kokoro";
var LOCAL_DEFAULT_VOICE = registry.models.kokoro.defaultVoice;
function normalizeLocalProfile(profile = {}) {
  const model = registry.models[profile.model]?.kind !== "asr" && registry.models[profile.model] ? profile.model : LOCAL_DEFAULT_MODEL;
  const voice = registry.models[model].voices.some((v) => v.id === profile.voice) ? profile.voice : registry.models[model].defaultVoice;
  return { ...profile, model, voice };
}
function localVoiceChoices(model, chinese = true) {
  return (registry.models[model]?.voices || []).map((v) => {
    const language2 = !chinese ? v.lang : !v.lang.startsWith("zh") ? "\u82F1\u6587" : v.gender === "male" ? "\u4E2D\u6587\u7537\u58F0" : v.gender === "female" ? "\u4E2D\u6587\u5973\u58F0" : "";
    return {
      id: v.id,
      label: [
        chinese ? v.name : v.nameEn,
        language2,
        v.recommended ? chinese ? "\u63A8\u8350" : "Recommended" : ""
      ].filter(Boolean).join(" \xB7 "),
      sourceName: `${registry.models[model].label} \xB7 ${v.id}`,
      recommended: !!v.recommended
    };
  });
}

// src/original/core/tts/text.js
function splitSpeechText(text, maxLength = 240, clauses = false) {
  const result = [];
  let start = 0;
  const pieces = typeof Intl.Segmenter === "function" ? [...new Intl.Segmenter(void 0, { granularity: "sentence" }).segment(text)].map((x) => x.segment) : text.match(/[^。！？.!?\n]+[。！？.!?\n]*|[。！？.!?\n]+/gu) || [];
  const sentences = clauses ? pieces.flatMap((piece) => piece.match(/[^，,；;]+[，,；;]*|[，,；;]+/gu) || []) : pieces;
  for (const sentence of sentences) {
    let rest = sentence;
    while (rest.length) {
      let length = Math.min(maxLength, rest.length);
      if (length < rest.length && /[\uD800-\uDBFF]/.test(rest[length - 1])) length--;
      const raw = rest.slice(0, length);
      if (raw.trim()) result.push({ text: raw.replace(/\s+/g, " ").trim(), start, end: start + length });
      start += length;
      rest = rest.slice(length);
    }
  }
  return result;
}

// src/original/core/asr/providers.js
var ASR_PROVIDERS = [
  { id: "siliconflow", label: "asr.provider.siliconflow", protocol: "openai-transcriptions", baseUrl: "https://api.siliconflow.cn/v1", defaultModel: "Qwen/Qwen3-ASR-1.7B", models: ["Qwen/Qwen3-ASR-1.7B", "FunAudioLLM/SenseVoiceSmall", "XingChenAGI/XingChenASR-V3.2"], keyHelp: "https://cloud.siliconflow.cn/account/ak", note: "asr.note.siliconflow" },
  { id: "doubao", label: "asr.provider.doubao", protocol: "doubao-flash", baseUrl: "https://openspeech.bytedance.com/api/v3", defaultModel: "bigmodel", models: ["bigmodel"], chunkSeconds: 300, maxChunkSeconds: 540, keyHelp: "https://console.volcengine.com/speech/new/experience/asr", note: "asr.note.doubao" },
  { id: "glm", label: "asr.provider.glm", protocol: "openai-transcriptions", baseUrl: "https://open.bigmodel.cn/api/paas/v4", defaultModel: "glm-asr-2512", models: ["glm-asr-2512"], chunkSeconds: 18, maxChunkSeconds: 28, keyHelp: "https://open.bigmodel.cn/usercenter/proj-mgmt/apikeys", note: "asr.note.glm" },
  { id: "stepfun", label: "asr.provider.stepfun", protocol: "openai-transcriptions", baseUrl: "https://api.stepfun.com/v1", defaultModel: "stepaudio-2.5-asr", models: ["stepaudio-2.5-asr", "step-asr"], keyHelp: "https://platform.stepfun.com/interface-key" },
  { id: "mimo", label: "asr.provider.mimo", protocol: "chat-audio", baseUrl: "https://api.xiaomimimo.com/v1", defaultModel: "mimo-v2.5-asr", models: ["mimo-v2.5-asr"], keyHelp: "https://platform.xiaomimimo.com/", note: "asr.note.mimo" },
  { id: "groq", label: "Groq (Whisper)", protocol: "openai-transcriptions", baseUrl: "https://api.groq.com/openai/v1", defaultModel: "whisper-large-v3-turbo", models: ["whisper-large-v3-turbo", "whisper-large-v3"], keyHelp: "https://console.groq.com/keys", languageParam: true },
  { id: "openai", label: "OpenAI", protocol: "openai-transcriptions", baseUrl: "https://api.openai.com/v1", defaultModel: "gpt-4o-mini-transcribe", models: ["gpt-4o-mini-transcribe", "gpt-4o-transcribe", "whisper-1"], keyHelp: "https://platform.openai.com/api-keys", languageParam: true },
  { id: "local", label: "asr.provider.local", protocol: "openai-transcriptions", baseUrl: "http://127.0.0.1:8765/v1", defaultModel: "Qwen/Qwen3-ASR-0.6B", models: ["Qwen/Qwen3-ASR-0.6B", "whisper-1"], note: "asr.note.local" },
  { id: "custom", label: "asr.provider.custom", protocol: "openai-transcriptions", baseUrl: "", defaultModel: "", models: [], note: "asr.note.custom" }
];
var PROTOCOLS = ["openai-transcriptions", "chat-audio", "doubao-flash"];
var ASR_LANGUAGES = ["auto", "zh", "en", "ja", "ko", "yue", "de", "fr", "es"];
var MAX_PROFILES = 12;
var providerOf = (id) => ASR_PROVIDERS.find((p) => p.id === id) || ASR_PROVIDERS[ASR_PROVIDERS.length - 1];
var newId = () => "p" + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-3);
function cleanProfile(value, taken = /* @__PURE__ */ new Set()) {
  if (!value || typeof value !== "object") return null;
  const info = providerOf(String(value.provider || "siliconflow"));
  let id = typeof value.id === "string" && /^[a-z0-9-]{1,24}$/.test(value.id) ? value.id : newId();
  while (taken.has(id)) id = newId();
  taken.add(id);
  return {
    id,
    provider: info.id,
    baseUrl: typeof value.baseUrl === "string" && value.baseUrl.trim() ? value.baseUrl.trim().slice(0, 300) : info.baseUrl,
    model: typeof value.model === "string" && value.model.trim() ? value.model.trim().slice(0, 100) : info.defaultModel,
    protocol: info.id === "custom" && PROTOCOLS.includes(value.protocol) ? value.protocol : info.protocol,
    ...typeof value.name === "string" && value.name.trim() ? { name: value.name.trim().slice(0, 40) } : {}
  };
}

// src/original/core/share/brand.js
var PLATFORMS = {
  x: { glyph: "X", color: "#111827" },
  github: { glyph: "GH", color: "#24292f" },
  wechat: { glyph: "\u516C", color: "#07c160" },
  xiaohongshu: { glyph: "\u4E66", color: "#ff2442" },
  douyin: { glyph: "\u6296", color: "#161823" },
  bilibili: { glyph: "B", color: "#00a1d6" },
  youtube: { glyph: "\u25B6", color: "#e11d48" },
  website: { glyph: "W", color: "#2563eb" },
  custom: { glyph: "#", color: "#475569" }
};
var MAX_ACCOUNTS = 6;
function cleanAccounts(value) {
  return (Array.isArray(value) ? value : []).slice(0, MAX_ACCOUNTS).filter((a) => a && typeof a === "object").map((a) => ({
    kind: PLATFORMS[a.kind] ? a.kind : "custom",
    handle: String(a.handle ?? "").slice(0, 80),
    label: String(a.label ?? "").slice(0, 20)
  }));
}

// src/original/core/share/draw.js
var FPS = 30;
var COLORS = { bgTop: "#0a0f1f", bgBottom: "#141c36", accent: "#7dd3fc", violet: "#a78bfa", pink: "#f0abfc", strong: "#fbbf24", text: "#f8fafc", terminal: "#0d1117", line: "rgba(255,255,255,0.14)" };
var clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
function rounded(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}
function circleImage(ctx, image, cx, cy, r) {
  const w = image.width || image.naturalWidth, h = image.height || image.naturalHeight, side = Math.min(w, h);
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();
  ctx.drawImage(image, (w - side) / 2, (h - side) / 2, side, side, cx - r, cy - r, r * 2, r * 2);
  ctx.restore();
}

// src/original/core/share/styles.js
var frameOf = (scene, t2, length) => clamp(Math.round(t2 * FPS), 0, Math.max(0, length - 1));
function levelAt(scene, t2) {
  const { envelope } = scene.features;
  return envelope?.length ? envelope[frameOf(scene, t2, envelope.length)] : 0;
}
function bandsAt(scene, t2) {
  const { bands, spectrum } = scene.features;
  if (!bands || !spectrum) return new Float32Array(48);
  const frames = spectrum.length / bands, frame = frameOf(scene, t2, frames);
  return spectrum.subarray(frame * bands, (frame + 1) * bands);
}
var STOPS = [[125, 211, 252], [167, 139, 250], [240, 171, 252]];
function ramp(k) {
  const x = clamp(k) * (STOPS.length - 1), i = Math.min(STOPS.length - 2, Math.floor(x)), f = x - i;
  return `rgb(${STOPS[i].map((v, c) => Math.round(v + (STOPS[i + 1][c] - v) * f)).join(",")})`;
}
function rampGradient(ctx, x0, x1) {
  const g = ctx.createLinearGradient(x0, 0, x1, 0);
  STOPS.forEach((_, i) => g.addColorStop(i / (STOPS.length - 1), ramp(i / (STOPS.length - 1))));
  return g;
}
function drawBars(ctx, scene, t2) {
  const { envelope } = scene.features, a = scene.area, pitch = scene.portrait ? 20 : 22, bars = Math.floor(a.width / pitch), center = (bars - 1) / 2, x0 = a.cx - bars * pitch / 2;
  for (let i = 0; i < bars; i++) {
    const at = Math.round((t2 + (i - center) * 0.045) * FPS), level = at >= 0 && at < envelope.length ? envelope[at] : 0;
    const taper = 0.35 + 0.65 * Math.cos((i - center) / (center + 1) * Math.PI / 2), h = Math.max(8, level * a.height * taper + 8);
    ctx.fillStyle = i <= center ? COLORS.accent : "rgba(248,250,252,0.26)";
    rounded(ctx, x0 + i * pitch, a.cy - h / 2, pitch * 0.58, h, pitch * 0.29);
    ctx.fill();
  }
}
function drawWave(ctx, scene, t2) {
  const { pcm, rate, peak } = scene.features, a = scene.area;
  if (!pcm) return;
  const columns = Math.floor(a.width / 5), span = 0.16, perColumn = Math.max(1, Math.round(span * rate / columns)), x0 = a.cx - columns * 5 / 2, start = t2 - span / 2;
  for (let i = 0; i < columns; i++) {
    const from = Math.round((start + i / columns * span) * rate);
    let low = 0, high = 0;
    for (let k = Math.max(0, from); k < Math.min(pcm.length, from + perColumn); k++) {
      const v = pcm[k];
      if (v < low) low = v;
      if (v > high) high = v;
    }
    const taper = Math.sin(Math.PI * (i + 0.5) / columns) ** 0.6, top = clamp(high / peak, 0, 1) * taper, bottom = clamp(-low / peak, 0, 1) * taper;
    const y0 = a.cy - top * a.height / 2, y1 = a.cy + bottom * a.height / 2;
    ctx.fillStyle = i < columns / 2 ? COLORS.accent : "rgba(248,250,252,0.34)";
    rounded(ctx, x0 + i * 5, y0 - 1.5, 3, Math.max(3, y1 - y0 + 3), 1.5);
    ctx.fill();
  }
  ctx.fillStyle = "rgba(248,250,252,0.16)";
  ctx.fillRect(x0, a.cy - 1, columns * 5, 2);
}
function drawSpectrum(ctx, scene, t2) {
  const a = scene.area, bands = bandsAt(scene, t2), pitch = a.width / bands.length, x0 = a.cx - a.width / 2;
  ctx.fillStyle = rampGradient(ctx, x0, x0 + a.width);
  for (let i = 0; i < bands.length; i++) {
    const h = Math.max(8, bands[i] * a.height * 1.05);
    rounded(ctx, x0 + i * pitch + pitch * 0.19, a.cy - h / 2, pitch * 0.62, h, pitch * 0.31);
    ctx.fill();
  }
}
function drawRing(ctx, scene, t2) {
  const a = scene.area, bands = bandsAt(scene, t2), level = levelAt(scene, t2), r0 = scene.portrait ? 165 : 115, reach = scene.portrait ? 165 : 100, count = 72, thick = scene.portrait ? 9 : 7;
  ctx.lineCap = "round";
  ctx.lineWidth = thick;
  for (let i = 0; i < count; i++) {
    const u = (i + 0.5) / count, m = Math.abs(2 * u - 1), band = Math.round((1 - m) * (bands.length - 1)), angle = Math.PI / 2 + u * Math.PI * 2;
    const from = r0 + 14, to = from + 6 + bands[band] * reach, cos = Math.cos(angle), sin = Math.sin(angle);
    ctx.strokeStyle = ramp(1 - m);
    ctx.beginPath();
    ctx.moveTo(a.cx + cos * from, a.cy + sin * from);
    ctx.lineTo(a.cx + cos * to, a.cy + sin * to);
    ctx.stroke();
  }
  ctx.strokeStyle = `rgba(125,211,252,${0.3 + 0.4 * level})`;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(a.cx, a.cy, r0 + 4 + level * 6, 0, Math.PI * 2);
  ctx.stroke();
  const inner = r0 - 8;
  if (scene.avatar) circleImage(ctx, scene.avatar, a.cx, a.cy, inner);
  else {
    ctx.fillStyle = "#1b2440";
    ctx.beginPath();
    ctx.arc(a.cx, a.cy, inner, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = COLORS.accent;
    ctx.font = `700 ${inner}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText([...scene.byline || scene.title || "\xB7"][0], a.cx, a.cy + inner * 0.06);
  }
}
var VISUAL_STYLES = {
  spectrum: { id: "spectrum", needs: ["spectrum"], draw: drawSpectrum },
  ring: { id: "ring", needs: ["spectrum"], draw: drawRing },
  wave: { id: "wave", needs: ["pcm"], draw: drawWave },
  bars: { id: "bars", needs: [], draw: drawBars }
};
var DEFAULT_STYLE = "spectrum";
var STYLE_IDS = Object.keys(VISUAL_STYLES);

// src/original/settings.js
var ttsSecretId = (provider, namespace = "qiaomu-audio") => `${namespace}-tts-${String(provider).toLowerCase()}`;
var RATES = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
function defaultSettings(desktop = true) {
  return {
    tts: { provider: desktop ? "edge" : "system", profiles: {}, rate: 1, welcomed: false, recent: [] },
    // engine: '' (not chosen yet), 'local' (SenseVoice on this computer) or 'cloud:<profile id>'.
    asr: { engine: "", profiles: [], language: "auto", mode: "live", keepAudio: true },
    // Last export choices plus the author's signature used on the video cover and end card.
    share: {
      format: desktop ? "mp4" : "mp3",
      videos: ["portrait"],
      visual: DEFAULT_STYLE,
      speed: 1,
      cover: true,
      outro: true,
      srt: false,
      coverImage: false,
      embed: true,
      name: "",
      avatar: "",
      background: "",
      folder: "",
      accounts: []
    }
  };
}
var SHARE_SPEEDS = { min: 0.75, max: 2, step: 0.05 };
var cleanText = (value, max) => typeof value === "string" ? value.trim().slice(0, max) : "";
function normalizeShare(raw, base, desktop) {
  const value = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {}, flag = (key) => typeof value[key] === "boolean" ? value[key] : base[key];
  const speed = Math.round(Number(value.speed) / SHARE_SPEEDS.step) * SHARE_SPEEDS.step;
  const videos = (Array.isArray(value.videos) ? value.videos : []).filter((v, i, all) => ["portrait", "landscape"].includes(v) && all.indexOf(v) === i);
  return {
    format: value.format === "mp3" || !desktop ? "mp3" : "mp4",
    videos: videos.length ? videos : base.videos,
    visual: STYLE_IDS.includes(value.visual) ? value.visual : DEFAULT_STYLE,
    speed: speed >= SHARE_SPEEDS.min && speed <= SHARE_SPEEDS.max ? Math.round(speed * 100) / 100 : 1,
    cover: flag("cover"),
    outro: flag("outro"),
    srt: flag("srt"),
    coverImage: flag("coverImage"),
    embed: flag("embed"),
    name: cleanText(value.name, 40),
    avatar: cleanText(value.avatar, 300),
    background: cleanText(value.background, 300),
    folder: desktop ? cleanText(value.folder, 500) : "",
    accounts: cleanAccounts(value.accounts)
  };
}
function normalizeSettings(raw, desktop = true) {
  const base = defaultSettings(desktop), value = raw && typeof raw === "object" ? raw : {};
  const tts = { ...base.tts, ...value.tts && typeof value.tts === "object" ? value.tts : {} };
  if (!TTS_PROVIDERS[tts.provider]) tts.provider = base.tts.provider;
  if (!tts.profiles || typeof tts.profiles !== "object" || Array.isArray(tts.profiles)) tts.profiles = {};
  tts.profiles = Object.fromEntries(Object.entries(tts.profiles).filter(([id, p]) => TTS_PROVIDERS[id] && p && typeof p === "object" && !Array.isArray(p)).map(([id, p]) => [id, Object.fromEntries(["voice", "model", "baseUrl", "region", "resourceId"].filter((key) => typeof p[key] === "string").map((key) => [key, p[key]]))]));
  tts.rate = RATES.includes(Number(tts.rate)) ? Number(tts.rate) : 1;
  tts.welcomed = tts.welcomed === true;
  tts.recent = normalizeRecentChoices(tts.recent);
  const source = value.asr && typeof value.asr === "object" ? value.asr : {};
  const taken = /* @__PURE__ */ new Set();
  const profiles = (Array.isArray(source.profiles) ? source.profiles : []).slice(0, MAX_PROFILES).map((p) => cleanProfile(p, taken)).filter(Boolean);
  let engine = typeof source.engine === "string" ? source.engine : "";
  if (engine === "local" && !desktop) engine = "";
  if (engine.startsWith("cloud:") && !profiles.some((p) => `cloud:${p.id}` === engine)) engine = profiles[0] ? `cloud:${profiles[0].id}` : "";
  if (engine && engine !== "local" && !engine.startsWith("cloud:")) engine = "";
  return {
    tts: { provider: tts.provider, profiles: tts.profiles, rate: tts.rate, welcomed: tts.welcomed, recent: tts.recent },
    share: normalizeShare(value.share, base.share, desktop),
    readingProgress: value.readingProgress && typeof value.readingProgress === "object" && !Array.isArray(value.readingProgress) ? value.readingProgress : {},
    asr: {
      engine,
      profiles,
      language: ASR_LANGUAGES.includes(source.language) ? source.language : "auto",
      mode: ["live", "batch"].includes(source.mode) ? source.mode : base.asr.mode,
      keepAudio: typeof source.keepAudio === "boolean" ? source.keepAudio : base.asr.keepAudio
    }
  };
}
function getSecret(app, id) {
  try {
    return app.secretStorage?.getSecret(id) || "";
  } catch {
    return "";
  }
}
function setSecret(app, id, value) {
  return app.secretStorage.setSecret(id, String(value || "").trim());
}

// src/original/shared/coordination.js
var CLAIM = "qiaomu-speech:claim-v1";
function coordinateSpeech(workspace, pause) {
  const source = {};
  const ref = workspace.on(CLAIM, (claimant) => {
    if (claimant !== source) pause();
  });
  return { claim: () => workspace.trigger(CLAIM, source), dispose: () => workspace.offref(ref) };
}

// src/original/speech.js
var SpeechService = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.listeners = /* @__PURE__ */ new Set();
    this.coordination = coordinateSpeech(plugin.app.workspace, () => this.controller?.pause({ releaseSystem: true }));
    this.controller = new TtsController({
      beforePlay: () => this.coordination.claim(),
      makeAudio: () => new window.Audio(),
      speech: window.speechSynthesis,
      makeUtterance: (text) => new window.SpeechSynthesisUtterance(text),
      synthesize: (profile, text, signal) => plugin.bridge.speech(profile, text, signal),
      onChange: (controller) => {
        if (controller.state === "playing" && !this.preview && rememberSpeechChoice(this.settings, controller.profile)) {
          void Promise.resolve(plugin.saveSettings?.()).catch(() => new Notice(t("settings.saveError")));
        }
        for (const listener of this.listeners) listener(controller);
      }
    });
  }
  get settings() {
    return this.plugin.settings.tts;
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
  profile() {
    const settings = this.settings, id = settings.provider;
    let profile = ttsProfile(settings, id);
    if (id === "localModel") profile = { ...profile, ...normalizeLocalProfile(profile) };
    return { ...profile, key: getSecret(this.plugin.app, ttsSecretId(id, this.plugin.manifest.id)) };
  }
  choices(profile = this.profile(), { chinese = false, tx = (key) => key } = {}) {
    if (profile.id === "system") return [{ id: "", label: tx("automatic") }, ...(window.speechSynthesis?.getVoices?.() || []).map((v) => ({ id: v.voiceURI, label: `${v.name} \xB7 ${v.lang}` }))];
    if (profile.id === "macos") return [{ id: "", label: tx("automatic") }, ...this.plugin.voiceCatalogs?.macos?.voices || []];
    if (profile.id === "localModel") return localVoiceChoices(profile.model, chinese);
    return voiceChoices(profile, this.plugin.voiceCatalogs?.[profile.id] || {});
  }
  async loadChoices(profile, { signal, chinese = false, tx = (key) => key } = {}) {
    const catalog = await this.plugin.bridge.voices(profile, { signal, chinese });
    this.plugin.voiceCatalogs[profile.id] = catalog;
    if (profile.id === "macos") this.plugin.macVoices = catalog.voices;
    return catalog;
  }
  // Preview keeps the exact reading owner and sentence. Returning restores a paused session.
  startPreview(owner, text, profile = this.profile()) {
    if (this.preview && this.preview.owner !== owner) this.stopPreview(this.preview.owner);
    const c = this.controller;
    if (!this.preview) {
      const saved = c.owner && c.items.length && !["idle", "ended"].includes(c.state) ? { owner: c.owner, items: c.items, index: c.index, rate: c.rate, nextSection: c.nextSection, makeAudio: c.makeAudio } : null;
      c.pause({ releaseSystem: true });
      this.preview = { owner, saved };
    }
    this.speak(owner, text, profile);
  }
  stopPreview(owner = this.preview?.owner) {
    if (!owner) return;
    if (!this.preview || this.preview.owner !== owner) {
      this.controller.stop(owner);
      return;
    }
    const preview = this.preview;
    this.preview = null;
    const c = this.controller;
    const canRestore = !c.owner || c.owner === owner;
    c.stop(owner);
    if (canRestore && preview.saved) {
      const saved = preview.saved;
      c.makeAudio = saved.makeAudio;
      c.start(saved.owner, saved.items, this.profile(), { ...saved, paused: true });
    }
  }
  discardPreview(owner) {
    if (this.preview?.saved?.owner === owner) this.preview.saved = null;
  }
  // Long sentences for online voices; short clauses keep local synthesis responsive.
  chunking() {
    return this.settings.provider === "localModel" ? { limit: 40, clauses: true } : { limit: 240, clauses: false };
  }
  configurationError(profile = this.profile()) {
    if (profile.id === "system") return typeof window.speechSynthesis?.speak === "function" && typeof window.SpeechSynthesisUtterance === "function" ? null : ttsError("systemUnavailable");
    if (profile.id === "macos") return Platform.isDesktopApp && Platform.isMacOS ? null : ttsError("macPlatform");
    if (profile.id === "edge") return Platform.isDesktopApp ? null : ttsError("mobile");
    if (profile.id === "localModel") return Platform.isDesktopApp ? null : ttsError("localPlatform");
    try {
      buildSpeechRequest(profile, "", profile.key);
      return null;
    } catch (error) {
      return error;
    }
  }
  // Speak plain text without a note (settings test, public API).
  speak(owner, text, profile = this.profile()) {
    const { limit, clauses } = this.chunking(), items = splitSpeechText(text, limit, clauses);
    if (items.length) this.controller.start(owner, items, profile, { rate: this.settings.rate });
    return items.length;
  }
  dispose() {
    this.preview = null;
    this.coordination.dispose();
    this.controller.dispose();
    this.listeners.clear();
  }
};
function hiddenProvider(id, selected) {
  return id !== selected && (["edge", "localModel"].includes(id) && !Platform.isDesktopApp || id === "macos" && (!Platform.isDesktopApp || !Platform.isMacOS));
}

// src/original/core/asr/request.js
var encoder = new TextEncoder();
function bytesToBase64(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i += 32768) binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 32768));
  return globalThis.btoa(binary);
}

// src/native-bridge.js
var toBase64 = (value) => bytesToBase64(value instanceof Uint8Array ? value : new Uint8Array(value));
var fromBase64 = (value) => Uint8Array.from(atob(value), (c) => c.charCodeAt(0));
var NativeBridge = class {
  constructor(api, importer) {
    this.api = api;
    this.importer = importer;
    this.listeners = /* @__PURE__ */ new Set();
    this.states = {};
    this.revision = -1;
    this.watchGeneration = 0;
    this.active = /* @__PURE__ */ new Set();
  }
  async call(method, input) {
    const result = await this.api.operation({ method, input });
    if (result.failure) throw Object.assign(new Error(result.failure.message), result.failure);
    return result.value;
  }
  async job(method, input, signal) {
    signal?.throwIfAborted();
    const id = crypto.randomUUID();
    this.active.add(id);
    const cancel = () => void this.call("cancel", { id }).catch(() => {
    });
    signal?.addEventListener("abort", cancel, { once: true });
    try {
      const result = await this.call(method, { ...input, id });
      signal?.throwIfAborted();
      return result;
    } finally {
      this.active.delete(id);
      signal?.removeEventListener("abort", cancel);
    }
  }
  async speech(profile, text, signal) {
    const result = await this.job("speech", { profile, text }, signal);
    return { ...result, bytes: fromBase64(result.base64) };
  }
  voices(profile, { signal, chinese }) {
    return this.job("voices", { profile, chinese }, signal);
  }
  async transcribe(engine, wav, language2, signal) {
    const result = await this.job("transcribe", { profile: engine.profile, local: engine.kind === "local", base64: toBase64(wav), language: language2 }, signal);
    return result.text;
  }
  snapshot(model) {
    return this.states[model] || { phase: "unknown" };
  }
  publish(model, state) {
    this.states[model] = state;
    for (const f of this.listeners) f(model, state);
    return state;
  }
  async status(model) {
    return this.publish(model, await this.call("local", { operation: "status", model }));
  }
  async install(model) {
    const state = await this.call("local", { operation: "install", model });
    return this.publish(model, state);
  }
  async cancelInstall(model) {
    return this.publish(model, await this.call("local", { operation: "cancel", model }));
  }
  subscribe(fn) {
    this.listeners.add(fn);
    if (this.listeners.size === 1) this.watch();
    return () => {
      this.listeners.delete(fn);
      if (!this.listeners.size) this.watchGeneration++;
    };
  }
  async watch() {
    const generation = ++this.watchGeneration;
    while (this.listeners.size && generation === this.watchGeneration) {
      try {
        const data = await this.call("localChanges", { revision: this.revision });
        if (generation !== this.watchGeneration) return;
        this.revision = data.revision;
        for (const [id, state] of Object.entries(data.states)) this.publish(id, state);
      } catch (error) {
        for (const id of Object.keys(this.states)) this.publish(id, { phase: "error", error: { code: error.code || "network" } });
        break;
      }
    }
  }
  async exportFiles(files, folder = "") {
    const saved = await this.api.exportFiles({ folder, files: files.map((f) => ({ name: f.name, base64: toBase64(f.bytes) })) });
    return saved.map((f, i) => ({ ...files[i], ...f }));
  }
  reveal(path) {
    return this.api.reveal({ path });
  }
  async speechSettings(sourceId) {
    return this.importer?.read(sourceId) || null;
  }
  async importSpeech(sourceId) {
    return this.importer?.copy(sourceId) || null;
  }
  dispose() {
    this.watchGeneration++;
    this.listeners.clear();
    for (const id of this.active) void this.call("cancel", { id }).catch(() => {
    });
    this.active.clear();
  }
};

// src/original/core/cloud-services.js
var CLOUD_SERVICES = Object.freeze({
  openai: { keyHelp: "https://platform.openai.com/api-keys", ttsDocs: "https://developers.openai.com/api/docs/guides/text-to-speech", asrDocs: "https://developers.openai.com/api/docs/guides/speech-to-text" },
  qwen: { keyHelp: "https://bailian.console.aliyun.com/cn-beijing/model/settings/api-key", ttsDocs: "https://help.aliyun.com/zh/model-studio/qwen-tts" },
  doubao: { keyHelp: "https://console.volcengine.com/speech/service", ttsDocs: "https://www.volcengine.com/docs/6561/1598757", asrDocs: "https://www.volcengine.com/docs/6561/1631584" },
  minimax: { keyHelp: "https://platform.minimax.cn/console/access?tab=api-keys", ttsDocs: "https://platform.minimax.cn/docs/api-reference/speech-t2a-http" },
  siliconflow: { keyHelp: "https://cloud.siliconflow.cn/account/ak", ttsDocs: "https://docs.siliconflow.cn/docs/userguide/capabilities/text-to-speech", asrDocs: "https://docs.siliconflow.cn/docs/api/audio-transcriptions-post" },
  elevenlabs: { keyHelp: "https://elevenlabs.io/app/developers/api-keys", ttsDocs: "https://elevenlabs.io/docs/overview/capabilities/text-to-speech" },
  azure: { keyHelp: "https://portal.azure.com/#create/Microsoft.CognitiveServicesSpeechServices", ttsDocs: "https://learn.microsoft.com/azure/ai-services/speech-service/get-started-text-to-speech" },
  glm: { keyHelp: "https://open.bigmodel.cn/usercenter/proj-mgmt/apikeys", asrDocs: "https://docs.bigmodel.cn/cn/guide/models/sound-and-video/glm-asr" },
  stepfun: { keyHelp: "https://platform.stepfun.com/interface-key", asrDocs: "https://platform.stepfun.com/docs/zh/quickstart/overview" },
  mimo: { keyHelp: "https://platform.xiaomimimo.com/", asrDocs: "https://mimo.mi.com/docs/zh-CN/quick-start/summary/first-api-call" },
  groq: { keyHelp: "https://console.groq.com/keys", asrDocs: "https://console.groq.com/docs/speech-to-text" }
});
function cloudService(kind, id) {
  const service = CLOUD_SERVICES[id];
  return service ? { keyHelp: service.keyHelp, docs: service[`${kind}Docs`] } : null;
}

// src/original/shared/configuration.js
async function findSpeechSettings(app, sourceId) {
  return app.speechSettings(sourceId);
}
async function copySpeechSettings(host, sourceId) {
  const imported = await host.bridge.importSpeech(sourceId);
  if (!imported) return -1;
  for (const provider of Object.keys(imported.tts.profiles)) {
    if (["system", "macos", "edge", "localModel"].includes(provider)) continue;
    await host.app.secretStorage.refreshSecret(ttsSecretId(provider, "qiaomu-audio-dsh"));
  }
  const previous = host.settings.tts;
  host.settings.tts = imported.tts;
  try {
    await host.saveSettings();
  } catch (error) {
    host.settings.tts = previous;
    throw error;
  }
  host.speech.controller.cache.clear();
  host.reading?.restartWithSettings();
  return imported.keys;
}

// src/original/shared/progress.js
function speechFingerprint(text) {
  let a = 2166136261, b = 5381;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    a = Math.imul(a ^ c, 16777619);
    b = Math.imul(b, 33) ^ c;
  }
  return `${text.length}-${(a >>> 0).toString(36)}-${(b >>> 0).toString(36)}`;
}
function rememberProgress(record, key, fingerprint, offset, ended = false) {
  record[key] = { fingerprint, offset: Math.max(0, offset), ended, at: Date.now() };
  const keys = Object.keys(record).sort((a, b) => (record[b]?.at || 0) - (record[a]?.at || 0));
  for (const old of keys.slice(500)) delete record[old];
}
function resumeOffset(record, key, fingerprint) {
  const saved = record[key];
  return saved?.fingerprint === fingerprint && !saved.ended && Number.isSafeInteger(saved.offset) && saved.offset >= 0 ? saved.offset : 0;
}

// src/original/obsidian/sound-dialog.js
var SOUND_COPY = {
  title: ["\u58F0\u97F3", "Sound"],
  service: ["\u8BED\u97F3\u670D\u52A1", "Voice service"],
  key: ["API Key", "API key"],
  getKey: ["\u83B7\u53D6\u5BC6\u94A5", "Get a key"],
  show: ["\u663E\u793A", "Show"],
  hide: ["\u9690\u85CF", "Hide"],
  model: ["\u8BED\u97F3\u6A21\u578B", "Speech model"],
  voice: ["\u97F3\u8272", "Voice"],
  region: ["\u533A\u57DF", "Region"],
  url: ["\u670D\u52A1\u5730\u5740", "Service URL"],
  advanced: ["\u66F4\u591A\u914D\u7F6E", "More configuration"],
  search: ["\u641C\u7D22\u97F3\u8272", "Search voices"],
  recent: ["\u6700\u8FD1\u4F7F\u7528", "Recently used"],
  clear: ["\u6E05\u9664\u6700\u8FD1\u4F7F\u7528", "Clear recent voices"],
  current: ["\u5F53\u524D\u4F7F\u7528", "Currently using"],
  pending: ["\u5F85\u5E94\u7528", "Selected"],
  automatic: ["\u81EA\u52A8\u9009\u62E9", "Automatic"],
  test: ["\u9A8C\u8BC1\u5E76\u8BD5\u542C", "Verify and test"],
  stop: ["\u505C\u6B62\u8BD5\u542C", "Stop test"],
  apply: ["\u4F7F\u7528\u8FD9\u4E2A\u58F0\u97F3", "Use this voice"],
  done: ["\u5B8C\u6210", "Done"],
  ready: ["\u914D\u7F6E\u5DF2\u586B\u5199\uFF0C\u5C1A\u672A\u8BD5\u542C", "Configured, not tested"],
  verified: ["\u672C\u6B21\u8BD5\u542C\u6210\u529F", "This voice test succeeded"],
  testing: ["\u6B63\u5728\u8BD5\u542C\u2026", "Testing voice\u2026"],
  loading: ["\u6B63\u5728\u52A0\u8F7D\u97F3\u8272\u2026", "Loading voices\u2026"],
  local: ["\u4F7F\u7528\u672C\u673A\u58F0\u97F3\uFF0C\u65E0\u9700 API Key\u3002", "Uses device voices without an API key."],
  edge: ["\u514D\u8D39\u5728\u7EBF\u58F0\u97F3\uFF1B\u8BD5\u542C\u6587\u5B57\u4F1A\u53D1\u9001\u81F3\u5FAE\u8F6F\u3002", "Free online voices. Test text is sent to Microsoft."],
  cloud: ["\u8BD5\u542C\u4F1A\u53D1\u9001\u4E00\u5C0F\u6BB5\u793A\u4F8B\u6587\u5B57\u81F3\u6240\u9009\u670D\u52A1\uFF0C\u53EF\u80FD\u8BA1\u8D39\u3002", "Testing sends a short sample to this provider and may incur charges."],
  localModel: ["\u5728\u672C\u673A\u5408\u6210\uFF1B\u5C1A\u672A\u5B89\u88C5\u65F6\u8BF7\u5148\u51C6\u5907\u6A21\u578B\u3002", "Synthesizes locally. Set up the model on this device first."],
  setup: ["\u51C6\u5907\u672C\u673A\u6A21\u578B", "Set up local model"],
  refresh: ["\u5237\u65B0\u97F3\u8272", "Refresh voices"],
  empty: ["\u6CA1\u6709\u5339\u914D\u7684\u97F3\u8272", "No matching voices"],
  edit: ["\u4FEE\u6539\u914D\u7F6E", "Edit configuration"],
  sample: ["\u4F60\u597D\uFF0C\u8FD9\u662F\u8BED\u97F3\u8BD5\u542C\u3002", "Hello. This is a voice test."],
  custom: ["\u81EA\u5B9A\u4E49", "Custom"],
  notChanged: ["\u5173\u95ED\u4E0D\u4F1A\u66F4\u6539\u5F53\u524D\u58F0\u97F3\u3002", "Closing keeps your current voice."],
  saveError: ["\u4FDD\u5B58\u5931\u8D25\uFF0C\u8F93\u5165\u5DF2\u4FDD\u7559\uFF0C\u8BF7\u91CD\u8BD5\u3002", "Could not save. Your input is retained; retry."],
  credentials: ["\u8BF7\u5148\u586B\u5199 API Key\u3002", "Enter an API key first."]
};
var localIds = ["system", "macos", "edge", "localModel"];
var identity = (profile) => JSON.stringify(Object.entries(profile).filter(([key]) => key !== "label").sort(([a], [b]) => a.localeCompare(b)));
var SoundDialog = class extends Modal {
  constructor(app, adapter) {
    super(app);
    this.adapter = adapter;
    this.drafts = /* @__PURE__ */ new Map();
    this.catalogs = /* @__PURE__ */ new Map();
    this.generation = 0;
    this.tx = (key) => SOUND_COPY[key][adapter.chinese ? 0 : 1];
    this.active = { ...adapter.current() };
    this.id = adapter.initialProvider || this.active.id;
    this.drafts.set(this.id, { ...this.id === this.active.id ? this.active : adapter.profile(this.id) });
    this.owner = {};
    this.verified = "";
    this.state = "";
    this.query = "";
  }
  get profile() {
    return this.drafts.get(this.id);
  }
  get dirty() {
    return identity(this.profile) !== identity(this.active);
  }
  onOpen() {
    this.setTitle(this.tx("title"));
    this.contentEl.classList.add("qm-sound");
    this.modalEl?.classList.add("qm-sound-modal");
    this.body = this.contentEl.createDiv("qm-sound-body");
    this.footer = this.contentEl.createDiv("qm-sound-footer");
    this.feedback = this.footer.createDiv({ cls: "qm-sound-feedback", attr: { role: "status", "aria-live": "polite" } });
    this.currentLabel = this.footer.createDiv("qm-sound-current");
    this.actions = this.footer.createDiv("qm-sound-actions");
    this.test = this.action(this.actions, "play", this.tx("test"), () => this.audition());
    this.use = this.action(this.actions, "check", this.tx("apply"), () => {
      void this.apply();
    });
    this.use.classList.add("qm-sound-primary");
    this.unsubscribe = this.adapter.subscribe((c) => {
      if (c.owner !== this.owner || !this.testIdentity || this.closed) return;
      this.state = c.state;
      if (c.state === "ended") this.verified = this.testIdentity;
      this.message = c.state === "error" ? this.adapter.error(c.error, this.profile.id) : "";
      this.updateFooter();
      if (["ended", "error"].includes(c.state)) {
        const generation = this.generation;
        queueMicrotask(() => {
          if (!this.closed && generation === this.generation) this.adapter.stop(this.owner);
        });
      }
    });
    this.voicesChanged = () => {
      if (this.id === "system") this.refreshList();
    };
    this.contentEl.ownerDocument.defaultView?.speechSynthesis?.addEventListener("voiceschanged", this.voicesChanged);
    this.render();
  }
  action(parent, icon, text, run) {
    const button = parent.createEl("button", { cls: "qm-sound-button", attr: { type: "button" } });
    setIcon(button.createSpan({ cls: "qm-sound-icon" }), icon);
    const label = button.createSpan({ text });
    button.setLabel = (value) => label.setText(value);
    button.addEventListener("click", run);
    return button;
  }
  cancelTest() {
    ++this.generation;
    this.testIdentity = "";
    this.adapter.stop(this.owner);
    this.state = "";
    this.message = "";
  }
  invalidate() {
    this.cancelTest();
    this.verified = "";
    this.updateFooter();
  }
  switchProvider(id) {
    this.invalidate();
    this.abort?.abort();
    this.id = id;
    this.query = "";
    this.editing = false;
    if (!this.drafts.has(id)) this.drafts.set(id, { ...this.adapter.profile(id) });
    this.render();
  }
  input(parent, key, label, type = "text") {
    const row = parent.createEl("label", { cls: "qm-sound-field" });
    row.createSpan({ text: label });
    const wrap = row.createDiv("qm-sound-input");
    const input = wrap.createEl("input", { type, value: this.profile[key] || "", attr: { autocomplete: "off", "data-sound-field": key } });
    input.addEventListener("input", () => {
      this.profile[key] = input.value.trim();
      this.catalogs.delete(this.id);
      this.invalidate();
      if (key === "key") this.refreshList();
    });
    if (type === "password") this.action(wrap, "eye", this.tx("show"), () => {
      input.type = input.type === "password" ? "text" : "password";
      wrap.querySelector("button").setLabel(this.tx(input.type === "password" ? "show" : "hide"));
    });
    return input;
  }
  select(parent, key, label, values, change) {
    const row = parent.createEl("label", { cls: "qm-sound-field" });
    row.createSpan({ text: label });
    const select = row.createEl("select", { attr: { "data-sound-field": key } });
    for (const item of values) select.createEl("option", { value: item.id, text: item.label });
    select.value = this.profile[key] || "";
    select.addEventListener("change", () => change(select.value));
    return select;
  }
  render() {
    if (this.closed) return;
    this.localPanel?.destroy();
    this.body.empty();
    this.list = null;
    this.select(this.body, "id", this.tx("service"), this.adapter.providers(this.id), (id) => this.switchProvider(id));
    const profile = this.profile, cloud = !localIds.includes(profile.id);
    this.body.createDiv({ cls: "qm-sound-help", text: this.tx(profile.id === "edge" ? "edge" : profile.id === "localModel" ? "localModel" : cloud ? "cloud" : "local") });
    const config = this.body.createDiv("qm-sound-config");
    if (cloud) {
      const details = this.editing || this.adapter.validate(profile) ? config : config.createEl("details");
      if (details !== config) details.createEl("summary", { text: this.tx("edit") });
      this.input(details, "key", this.tx("key"), "password");
      const link = this.adapter.links(profile)?.[0];
      if (link) details.createEl("a", { text: this.tx("getKey"), href: link, attr: { target: "_blank", rel: "noopener noreferrer" } });
      if (profile.id === "azure") this.input(details, "region", this.tx("region"));
      if (profile.id === "compatible") this.input(details, "baseUrl", this.tx("url"));
    }
    const modelKey2 = profile.id === "doubao" ? "resourceId" : "model";
    const models2 = this.adapter.models(profile, this.catalogs.get(this.id));
    if (models2.length || cloud && !["azure"].includes(profile.id)) {
      const value = profile[modelKey2] || "";
      const entries2 = [...models2];
      if (value && !entries2.some((v) => v.id === value)) entries2.push({ id: value, label: value });
      if (profile.id !== "localModel") entries2.push({ id: "__custom__", label: this.tx("custom") });
      this.select(config, modelKey2, this.tx("model"), entries2, (value2) => {
        if (value2 === "__custom__") {
          if (!config.querySelector('input[data-sound-field="' + modelKey2 + '"]')) this.input(config, modelKey2, this.tx("model")).focus();
          return;
        }
        this.invalidate();
        this.drafts.set(this.id, this.adapter.changeModel(this.profile, value2, this.catalogs.get(this.id)));
        this.render();
      });
    }
    if (profile.id === "localModel") this.localPanel = this.adapter.setup?.(config.createDiv(), profile, () => this.updateFooter());
    const search = this.body.createEl("label", { cls: "qm-sound-search" });
    search.createSpan({ cls: "qm-sound-sr", text: this.tx("search") });
    const input = search.createEl("input", { type: "search", value: this.query, attr: { placeholder: this.tx("search") } });
    input.addEventListener("input", () => {
      this.query = input.value;
      this.refreshList();
    });
    this.list = this.body.createDiv("qm-sound-list");
    this.refreshList();
    const extra = this.body.createEl("details");
    extra.createEl("summary", { text: this.tx("advanced") });
    extra.hidden = ["system", "localModel"].includes(profile.id);
    if (profile.baseUrl !== void 0 && profile.id !== "compatible") this.input(extra, "baseUrl", this.tx("url"));
    if (this.adapter.canLoad(profile)) this.action(extra, "refresh-cw", this.tx("refresh"), () => {
      void this.loadVoices();
    });
    if (!["macos", "system", "localModel"].includes(profile.id)) this.input(extra, "voice", `${this.tx("voice")} ID`);
    const recent = this.adapter.recent?.() || [];
    if (recent.length) {
      const group = this.body.createEl("details");
      group.createEl("summary", { text: this.tx("recent") });
      if (this.adapter.clearRecent) this.action(group, "x", this.tx("clear"), async () => {
        await this.adapter.clearRecent();
        this.render();
      });
      for (const entry of recent) this.action(group, "history", this.label(entry), () => {
        this.invalidate();
        this.id = entry.id;
        this.drafts.set(this.id, { ...this.adapter.profile(entry.id), ...entry });
        this.render();
      });
    }
    this.updateFooter();
    if (profile.id === "macos" && !this.catalogs.has("macos") && !this.nativeAttempted) {
      this.nativeAttempted = true;
      void this.loadVoices();
    }
  }
  label(profile) {
    const voice = this.adapter.voices(profile, this.catalogs.get(profile.id)).find((v) => v.id === profile.voice)?.label || (profile.id === "macos" ? profile.voice?.split(".").pop() : profile.voice) || this.tx("automatic");
    return `${this.adapter.providers(profile.id).find((p) => p.id === profile.id)?.label || profile.id} \xB7 ${voice}`;
  }
  refreshList() {
    if (!this.list) return;
    this.list.empty();
    const p = this.profile, blocked = !localIds.includes(p.id) && !p.key && p.id !== "compatible";
    this.list.hidden = blocked;
    this.body.querySelector(".qm-sound-search").hidden = blocked;
    if (blocked) return;
    const voices = this.adapter.voices(p, this.catalogs.get(p.id));
    const filtered = voices.filter((v) => `${v.label} ${v.id}`.toLocaleLowerCase().includes(this.query.toLocaleLowerCase()));
    for (const voice of filtered) {
      const row = this.list.createDiv("qm-sound-voice");
      const choose = this.action(row, voice.id === p.voice ? "check" : "audio-lines", voice.label, () => {
        this.invalidate();
        p.voice = voice.id;
        this.refreshList();
        this.updateFooter();
      });
      choose.setAttribute("aria-pressed", String(voice.id === p.voice));
      const test = this.action(row, "play", this.tx("test"), () => {
        if (voice.id !== p.voice) {
          this.invalidate();
          p.voice = voice.id;
          this.refreshList();
        }
        this.audition();
      });
      test.classList.add("qm-sound-audition");
      test.disabled = !!this.adapter.validate({ ...p, voice: voice.id });
    }
    if (!filtered.length) this.list.createDiv({ cls: "qm-sound-help", text: this.tx("empty") });
  }
  updateFooter() {
    if (!this.test || this.closed) return;
    const problem = this.adapter.validate(this.profile), busy = ["loading", "playing"].includes(this.state);
    const verified = this.verified === identity(this.profile);
    this.feedback.setText(this.message || (busy ? this.tx("testing") : problem ? problem.code === "key" ? this.tx("credentials") : this.adapter.error(problem, this.id) : verified ? this.tx("verified") : this.tx("ready")));
    this.currentLabel.setText(`${this.tx("current")}\uFF1A${this.label(this.active)}${this.dirty ? `
${this.tx("pending")}\uFF1A${this.label(this.profile)}` : ""}`);
    setIcon(this.test.querySelector(".qm-sound-icon"), busy ? "square" : "play");
    this.test.setLabel(this.tx(busy ? "stop" : "test"));
    this.test.disabled = this.saving || !!problem && !busy;
    this.use.setLabel(this.tx(this.dirty ? "apply" : "done"));
    this.use.disabled = this.saving || this.dirty && !verified;
  }
  async loadVoices() {
    this.abort?.abort();
    const abort = this.abort = new AbortController(), profile = { ...this.profile }, stamp = identity(profile);
    this.message = this.tx("loading");
    this.updateFooter();
    try {
      const catalog = await this.adapter.load(profile, abort.signal);
      if (this.closed || abort.signal.aborted || stamp !== identity(this.profile)) return;
      this.catalogs.set(profile.id, catalog);
      if (profile.id === "macos" && !this.profile.voice && this.adapter.initialProvider === "macos") this.profile.voice = catalog.voices.find((v) => v.recommended)?.id || catalog.voices[0]?.id || "";
      this.message = "";
      this.refreshList();
      this.updateFooter();
    } catch (error) {
      if (!this.closed && !abort.signal.aborted && stamp === identity(this.profile)) {
        this.message = this.adapter.error(error, profile.id);
        this.updateFooter();
      }
    }
  }
  audition() {
    if (["loading", "playing"].includes(this.state)) {
      this.cancelTest();
      this.updateFooter();
      return;
    }
    const problem = this.adapter.validate(this.profile);
    if (problem) {
      this.message = this.adapter.error(problem, this.id);
      this.updateFooter();
      return;
    }
    this.cancelTest();
    this.verified = "";
    this.testIdentity = identity(this.profile);
    this.state = "loading";
    this.updateFooter();
    try {
      this.adapter.preview(this.owner, this.tx("sample"), { ...this.profile });
    } catch (error) {
      this.state = "error";
      this.message = this.adapter.error(error, this.id);
      this.updateFooter();
    }
  }
  async apply() {
    if (this.saving) return;
    if (!this.dirty) {
      try {
        await this.adapter.confirm?.();
        this.close();
      } catch {
        this.message = this.tx("saveError");
        this.updateFooter();
      }
      return;
    }
    if (this.verified !== identity(this.profile)) return;
    this.saving = true;
    this.cancelTest();
    this.updateFooter();
    try {
      await this.adapter.apply({ ...this.profile });
      this.close();
    } catch {
      if (!this.closed) {
        this.message = this.tx("saveError");
        this.saving = false;
        this.updateFooter();
      }
    }
  }
  onClose() {
    this.contentEl.ownerDocument.defaultView?.speechSynthesis?.removeEventListener("voiceschanged", this.voicesChanged);
    this.closed = true;
    ++this.generation;
    this.abort?.abort();
    this.unsubscribe?.();
    this.adapter.stop(this.owner);
    this.localPanel?.destroy();
    this.drafts.clear();
    this.adapter.closed?.();
    this.contentEl.empty();
  }
};

// src/original/obsidian/ui.js
function iconButton(parent, icon, label, onClick, { text = false, cls = "" } = {}) {
  const button = parent.createEl("button", { cls: `qaudio-button ${cls}`.trim(), attr: { type: "button" } });
  button.setAttribute("aria-label", label);
  const iconEl = button.createSpan({ cls: "qaudio-icon" });
  setIcon(iconEl, icon);
  const labelEl = button.createSpan({ cls: text ? "qaudio-button-text" : "qaudio-sr", text: label });
  button.addEventListener("click", (event) => {
    event.preventDefault();
    onClick(event);
  });
  button.setLabel = (value) => {
    labelEl.setText(value);
    button.setAttribute("aria-label", value);
  };
  button.setIconName = (name) => setIcon(iconEl, name);
  return button;
}

// src/original/obsidian/local-panel.js
var BUSY = ["runtime", "download", "downloaded", "environment", "extract", "installed", "verify", "cancelling", "server"];
var LocalModelPanel = class {
  constructor(host, { manager, model, onReady, details = true }) {
    Object.assign(this, { host, manager, model, onReady });
    const info = [...LOCAL_MODELS, ...ASR_MODELS].find((x) => x.id === model);
    host.addClass("qaudio-local-panel");
    this.status = host.createDiv({ cls: "qaudio-feedback", attr: { role: "status", "aria-live": "polite" } });
    this.progress = host.createEl("progress", { attr: { max: "1" } });
    this.progress.toggleClass("qaudio-hidden", true);
    const actions = host.createDiv("qaudio-actions");
    this.install = iconButton(actions, "download", t("local.download"), async () => {
      try {
        await manager.install(model);
        if (!this.disposed) await onReady?.();
      } catch (error) {
        if (!this.disposed && error.name !== "AbortError") this.status.setText(errorText(error));
      }
    }, { text: true, cls: "qaudio-primary-text" });
    this.cancel = iconButton(actions, "x", t("local.cancel"), () => manager.cancelInstall(model), { text: true });
    this.cancel.toggleClass("qaudio-hidden", true);
    this.setup = actions.createEl("a", { text: t("local.setup"), href: "https://github.com/joeseesun/qiaomu-audio-dsh/blob/main/docs/local-runtime.md", attr: { target: "_blank", rel: "noopener noreferrer" } });
    this.setup.toggleClass("qaudio-hidden", true);
    this.check = iconButton(actions, "refresh-cw", t("local.check"), () => {
      void manager.status(model).catch((error) => {
        if (!this.disposed) this.status.setText(errorText(error));
      });
    }, { text: true });
    this.size = actions.createSpan({ cls: "qaudio-muted", text: t("local.size", { size: Math.ceil((info?.bytes || 0) / 1024 ** 2), license: info?.license || "" }) });
    if (details && info) {
      const more = host.createEl("details", { cls: "qaudio-details" });
      more.createEl("summary", { text: t("local.details") });
      more.createEl("p", { text: t("local.storage") });
      more.createEl("a", { text: `${info.label} \xB7 ${info.license}`, href: info.source, attr: { target: "_blank", rel: "noopener" } });
    }
    this.unsubscribe = manager.subscribe((id, state) => {
      if (id === model && !this.disposed) this.refresh(state);
    });
    this.refresh(manager.snapshot(model));
    void manager.status(model).catch((error) => {
      if (!this.disposed) this.status.setText(errorText(error));
    });
  }
  refresh(state) {
    const busy = BUSY.includes(state.phase), ready = state.phase === "ready";
    const missingRuntime = state.phase === "runtimeMissing";
    this.install.disabled = busy || state.phase === "unknown";
    this.install.toggleClass("qaudio-hidden", ready || busy || missingRuntime);
    this.size.toggleClass("qaudio-hidden", ready || missingRuntime);
    this.setup.toggleClass("qaudio-hidden", !missingRuntime);
    this.check.toggleClass("qaudio-hidden", !missingRuntime);
    this.cancel.toggleClass("qaudio-hidden", !busy);
    this.cancel.disabled = state.phase === "cancelling";
    this.progress.toggleClass("qaudio-hidden", !busy);
    if (state.total) this.progress.value = state.bytes / state.total;
    else this.progress.removeAttribute("value");
    const progress = state.total ? ` \xB7 ${t("phase.progress", { mb: Math.floor(state.bytes / 1024 ** 2), total: Math.ceil(state.total / 1024 ** 2) })}` : "";
    this.status.setText(state.phase === "error" ? errorText(state.error) : t(`phase.${state.phase}`) + progress);
    this.status.toggleClass("is-ready", ready);
  }
  destroy() {
    this.disposed = true;
    this.unsubscribe?.();
  }
};

// src/original/obsidian/speech-choices.js
var SpeechChoices = class {
  constructor(parent, { host, tx, chinese = false, onChange, errorText: errorText2, onSettings }) {
    Object.assign(this, { parent, host, tx, chinese, onChange, errorText: errorText2, onSettings });
    this.render();
    if (host.settings.tts.provider === "system" && window.speechSynthesis?.addEventListener) {
      this.voicesChanged = () => this.render();
      window.speechSynthesis.addEventListener("voiceschanged", this.voicesChanged);
    }
  }
  options() {
    return { chinese: this.chinese, tx: this.tx };
  }
  async update(key, value) {
    this.host.speech.stopPreview();
    const { host } = this, profile = host.speech.profile(), id = profile.id;
    let next = key === modelKey(profile) && id !== "localModel" ? changeSpeechModel(profile, value, host.voiceCatalogs[id]) : { ...profile, [key]: value };
    if (id === "localModel") next = normalizeLocalProfile(key === "model" ? { ...next, voice: "" } : next);
    const { id: _id, label: _label, key: _key, ...saved } = next;
    host.settings.tts.profiles[id] = saved;
    await this.onChange(key);
    if (!this.disposed) this.render();
  }
  async provider(id) {
    this.abort?.abort();
    this.host.speech.stopPreview();
    this.host.settings.tts.provider = id;
    this.host.settings.tts.welcomed = true;
    this.nativeAttempted = false;
    this.message = "";
    await this.onChange("provider");
    if (!this.disposed) this.render();
  }
  async recent(value) {
    this.abort?.abort();
    this.host.speech.stopPreview();
    const previous = this.host.settings.tts.profiles[value.id];
    if (previous?.baseUrl !== value.baseUrl || previous?.region !== value.region) delete this.host.voiceCatalogs[value.id];
    if (!applySpeechChoice(this.host.settings.tts, value)) return;
    this.nativeAttempted = false;
    this.message = "";
    await this.onChange("recent");
    if (!this.disposed) this.render();
  }
  field(name, key, values, custom, parent = this.parent) {
    const value = this.host.speech.profile()[key] || "", choices = uniqueChoices(values);
    if (!choices.some((choice) => choice.id === value)) choices.unshift({ id: value, label: value || this.tx(custom ? "custom" : "automatic") });
    const row = new Setting(parent).setName(name);
    row.addDropdown((drop) => {
      drop.selectEl.dataset.speechField = key;
      for (const choice of choices) drop.addOption(choice.id, choice.label);
      if (custom) drop.addOption("__custom__", this.tx("custom"));
      drop.setValue(value).onChange(async (next) => {
        if (next === "__custom__") {
          if (row.settingEl.querySelector("input")) {
            row.settingEl.querySelector("input").focus();
            return;
          }
          row.addText((text) => {
            text.inputEl.setAttribute("aria-labelledby", row.nameEl.id);
            text.setValue(value);
            text.inputEl.addEventListener("change", () => {
              void this.update(key, text.getValue().trim());
            });
            text.inputEl.focus();
          });
        } else await this.update(key, next);
      });
    });
    row.nameEl.id = `qiaomu-speech-field-${crypto.randomUUID()}`;
    for (const input of row.settingEl.querySelectorAll("select,input")) {
      input.removeAttribute("aria-label");
      input.removeAttribute("title");
      input.setAttribute("aria-labelledby", row.nameEl.id);
    }
    return row;
  }
  render() {
    if (this.disposed) return;
    const { host, tx } = this, profile = host.speech.profile(), id = profile.id;
    this.parent.empty();
    this.parent.addClass("qaudio-choices");
    const catalog = host.voiceCatalogs[id] || {};
    if (id === "localModel") this.field(tx("model"), "model", LOCAL_MODELS.map((model) => ({ id: model.id, label: model.label })), false);
    else if (TTS_MODELS[id]) this.field(tx(id === "doubao" ? "resource" : "model"), modelKey(profile), [...TTS_MODELS[id], ...catalog.models || []], true);
    const voices = host.speech.choices(profile, this.options());
    const voice = this.field(tx("voice"), "voice", voices, !["macos", "system", "localModel"].includes(id));
    voice.addButton((button) => button.setButtonText(tx("picker")).setDisabled(id === "macos" && !catalog.voices).onClick(() => {
      this.modal?.close();
      this.modal = openVoicePicker(this.host, { tx: this.tx, chinese: this.chinese, errorText: this.errorText });
    }));
    if (id === "system" && Platform.isDesktopApp && Platform.isMacOS) voice.setDesc(tx("macHelp"));
    if (id === "macos" && catalog.voices && profile.voice && !catalog.voices.some((v) => v.id === profile.voice)) voice.setDesc(tx("unavailable"));
    this.modal?.refreshVoices?.();
    if (canLoadVoiceCatalog(id) || id === "macos") {
      const refresh = new Setting(this.parent).setName(tx("refresh"));
      const feedback = refresh.descEl.createSpan({ text: this.message || "", attr: { role: "status" } });
      refresh.addButton((button) => button.setButtonText(tx("refresh")).onClick(() => {
        void this.load(button, feedback);
      }));
      if (id === "macos" && !catalog.voices && !this.nativeAttempted) {
        this.nativeAttempted = true;
        void this.load(null, feedback);
      }
    }
  }
  async load(button, feedback) {
    this.abort?.abort();
    const abort = this.abort = new AbortController();
    const profile = this.host.speech.profile(), identity2 = JSON.stringify([profile.id, profile.baseUrl, profile.region, profile.key]);
    button?.setDisabled(true);
    feedback?.setText(this.tx("loading"));
    try {
      const catalog = await this.host.speech.loadChoices(profile, { ...this.options(), signal: abort.signal });
      const current = this.host.speech.profile();
      if (abort.signal.aborted || this.disposed || identity2 !== JSON.stringify([current.id, current.baseUrl, current.region, current.key])) return;
      this.host.voiceCatalogs[profile.id] = catalog;
      if (profile.id === "macos") this.host.macVoices = catalog.voices;
      this.message = this.tx(catalog.more ? "partial" : "loaded");
      this.render();
    } catch (error) {
      if (!abort.signal.aborted && !this.disposed) {
        this.message = this.errorText(error);
        feedback?.setText(this.message);
        button?.setDisabled(false);
      }
    }
  }
  destroy() {
    this.disposed = true;
    this.abort?.abort();
    this.modal?.close();
    if (this.voicesChanged) window.speechSynthesis.removeEventListener("voiceschanged", this.voicesChanged);
  }
};
function audioSpeechChoiceText(key) {
  return t({ service: "settings.service", system: "tts.provider.system", macos: "tts.provider.macos", localModel: "tts.provider.localModel", settings: "player.settings", automatic: "tts.systemVoice", model: "settings.model", resource: "settings.resourceId", voice: "settings.voice", picker: "tts.voicePicker", search: "tts.voiceSearch", custom: "settings.custom", refresh: "settings.refreshVoices", loading: "state.loading", loaded: "settings.catalogReady", partial: "settings.catalogPartial", preview: "settings.preview", sample: "tts.sample", empty: "tts.noVoices", verified: "state.verified", paused: "state.paused", macHelp: "tts.macSystemHelp", unavailable: "tts.unavailableVoice", recommended: "tts.recommended", voicePremium: "tts.voicePremium", voiceEnhanced: "tts.voiceEnhanced", voiceDisplayName: "tts.voiceDisplayName", recent: "tts.recent", clearRecent: "tts.clearRecent" }[key] || key);
}
function openVoicePicker(host, options = {}) {
  const speech = host.speech, tx = options.tx || audioSpeechChoiceText;
  const chinese = options.chinese;
  const profile = (id) => ({ ...ttsProfile(host.settings.tts, id), key: getSecret(host.app, ttsSecretId(id, host.manifest.id)) });
  const modal = new SoundDialog(host.app, {
    initialProvider: !host.settings.tts.welcomed && Platform.isDesktopApp && Platform.isMacOS ? "macos" : void 0,
    chinese,
    current: () => speech.profile(),
    profile,
    providers: (selected) => Object.entries(TTS_PROVIDERS).filter(([id]) => !hiddenProvider(id, selected)).map(([id, data]) => ({ id, label: ["system", "macos", "localModel"].includes(id) ? tx(id) : data.label })),
    models: (p) => p.id === "localModel" ? LOCAL_MODELS : TTS_MODELS[p.id] || [],
    changeModel: (p, value, catalog) => p.id === "localModel" ? { ...p, ...normalizeLocalProfile({ ...p, model: value, voice: "" }) } : changeSpeechModel(p, value, catalog || {}),
    voices: (p, catalog) => catalog?.voices || speech.choices(p, { chinese, tx }),
    canLoad: (p) => p.id === "macos" || canLoadVoiceCatalog(p.id),
    load: (p, signal) => speech.loadChoices(p, { chinese, tx, signal }),
    validate: (p) => speech.configurationError(p) || (p.id === "localModel" && host.local().snapshot(p.model).phase !== "ready" ? { code: "localMissing" } : null),
    error: options.errorText,
    links: (p) => {
      const help = cloudService("tts", p.id);
      return help ? [help.keyHelp] : [];
    },
    recent: () => (host.settings.tts.recent || []).filter((p) => !hiddenProvider(p.id, "")).slice(0, 8),
    closed: options.onClosed,
    clearRecent: async () => {
      host.settings.tts.recent = [];
      await host.saveSettings();
    },
    confirm: async () => {
      host.settings.tts.welcomed = true;
      await host.saveSettings();
    },
    subscribe: (listener) => speech.subscribe(listener),
    preview: (owner, text, p) => speech.startPreview(owner, text, p),
    stop: (owner) => speech.stopPreview(owner),
    setup: (el, p, onReady) => new LocalModelPanel(el, { manager: host.local(), model: p.model, onReady }),
    apply: async (p) => {
      const previous = structuredClone(host.settings.tts), oldKey = profile(p.id).key;
      const { key, id, label: _label, ...saved } = p;
      try {
        if (key !== oldKey) await setSecret(host.app, ttsSecretId(id, host.manifest.id), key);
        host.settings.tts.profiles[id] = saved;
        host.settings.tts.provider = id;
        host.settings.tts.welcomed = true;
        if (options.onChange) await options.onChange();
        else {
          await host.saveSettings();
          host.reading?.restartWithSettings();
        }
      } catch (error) {
        host.settings.tts = previous;
        if (key !== oldKey) await setSecret(host.app, ttsSecretId(id, host.manifest.id), oldKey);
        throw error;
      }
    }
  });
  modal.open();
  return modal;
}
export {
  LOCAL_MODELS,
  NativeBridge,
  RATES,
  SpeechChoices,
  SpeechService,
  TTS_MODELS,
  TTS_PROVIDERS,
  canLoadVoiceCatalog,
  changeSpeechModel,
  cloudService,
  copySpeechSettings,
  findSpeechSettings,
  getSecret,
  hiddenProvider,
  loadVoiceCatalog,
  localVoiceChoices,
  modelKey,
  normalizeLocalProfile,
  normalizeSettings,
  openVoicePicker,
  rememberProgress,
  resumeOffset,
  setSecret,
  speechFingerprint,
  splitSpeechText,
  ttsProfile,
  ttsSecretId,
  voiceChoices
};
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.mjs:
lucide/dist/esm/createElement.mjs:
lucide/dist/esm/icons/a-arrow-down.mjs:
lucide/dist/esm/icons/a-arrow-up.mjs:
lucide/dist/esm/icons/a-large-small.mjs:
lucide/dist/esm/icons/accessibility.mjs:
lucide/dist/esm/icons/activity.mjs:
lucide/dist/esm/icons/ad.mjs:
lucide/dist/esm/icons/air-vent.mjs:
lucide/dist/esm/icons/airplay.mjs:
lucide/dist/esm/icons/alarm-clock-check.mjs:
lucide/dist/esm/icons/alarm-clock-minus.mjs:
lucide/dist/esm/icons/alarm-clock-off.mjs:
lucide/dist/esm/icons/alarm-clock-plus.mjs:
lucide/dist/esm/icons/alarm-clock.mjs:
lucide/dist/esm/icons/alarm-smoke.mjs:
lucide/dist/esm/icons/align-center-horizontal.mjs:
lucide/dist/esm/icons/align-center-vertical.mjs:
lucide/dist/esm/icons/align-end-horizontal.mjs:
lucide/dist/esm/icons/align-end-vertical.mjs:
lucide/dist/esm/icons/align-horizontal-distribute-center.mjs:
lucide/dist/esm/icons/align-horizontal-distribute-end.mjs:
lucide/dist/esm/icons/align-horizontal-distribute-start.mjs:
lucide/dist/esm/icons/align-horizontal-justify-center.mjs:
lucide/dist/esm/icons/align-horizontal-justify-end.mjs:
lucide/dist/esm/icons/align-horizontal-justify-start.mjs:
lucide/dist/esm/icons/align-horizontal-space-around.mjs:
lucide/dist/esm/icons/align-horizontal-space-between.mjs:
lucide/dist/esm/icons/align-start-horizontal.mjs:
lucide/dist/esm/icons/align-start-vertical.mjs:
lucide/dist/esm/icons/align-vertical-distribute-center.mjs:
lucide/dist/esm/icons/align-vertical-distribute-end.mjs:
lucide/dist/esm/icons/align-vertical-distribute-start.mjs:
lucide/dist/esm/icons/align-vertical-justify-center.mjs:
lucide/dist/esm/icons/align-vertical-justify-end.mjs:
lucide/dist/esm/icons/align-vertical-justify-start.mjs:
lucide/dist/esm/icons/align-vertical-space-around.mjs:
lucide/dist/esm/icons/align-vertical-space-between.mjs:
lucide/dist/esm/icons/ambulance.mjs:
lucide/dist/esm/icons/ampersand.mjs:
lucide/dist/esm/icons/ampersands.mjs:
lucide/dist/esm/icons/amphora.mjs:
lucide/dist/esm/icons/anchor.mjs:
lucide/dist/esm/icons/angle.mjs:
lucide/dist/esm/icons/antenna.mjs:
lucide/dist/esm/icons/anvil.mjs:
lucide/dist/esm/icons/aperture.mjs:
lucide/dist/esm/icons/app-window-mac.mjs:
lucide/dist/esm/icons/app-window.mjs:
lucide/dist/esm/icons/apple.mjs:
lucide/dist/esm/icons/archive-restore.mjs:
lucide/dist/esm/icons/archive-x.mjs:
lucide/dist/esm/icons/archive.mjs:
lucide/dist/esm/icons/armchair.mjs:
lucide/dist/esm/icons/arrow-big-down-dash.mjs:
lucide/dist/esm/icons/arrow-big-down.mjs:
lucide/dist/esm/icons/arrow-big-left-dash.mjs:
lucide/dist/esm/icons/arrow-big-left.mjs:
lucide/dist/esm/icons/arrow-big-right-dash.mjs:
lucide/dist/esm/icons/arrow-big-up-dash.mjs:
lucide/dist/esm/icons/arrow-big-right.mjs:
lucide/dist/esm/icons/arrow-big-up.mjs:
lucide/dist/esm/icons/arrow-down-0-1.mjs:
lucide/dist/esm/icons/arrow-down-1-0.mjs:
lucide/dist/esm/icons/arrow-down-a-z.mjs:
lucide/dist/esm/icons/arrow-down-from-line.mjs:
lucide/dist/esm/icons/arrow-down-left.mjs:
lucide/dist/esm/icons/arrow-down-narrow-wide.mjs:
lucide/dist/esm/icons/arrow-down-right.mjs:
lucide/dist/esm/icons/arrow-down-to-dot.mjs:
lucide/dist/esm/icons/arrow-down-to-line.mjs:
lucide/dist/esm/icons/arrow-down-up.mjs:
lucide/dist/esm/icons/arrow-down-wide-narrow.mjs:
lucide/dist/esm/icons/arrow-down-z-a.mjs:
lucide/dist/esm/icons/arrow-down.mjs:
lucide/dist/esm/icons/arrow-left-from-line.mjs:
lucide/dist/esm/icons/arrow-left-right.mjs:
lucide/dist/esm/icons/arrow-left-to-line.mjs:
lucide/dist/esm/icons/arrow-left.mjs:
lucide/dist/esm/icons/arrow-right-from-line.mjs:
lucide/dist/esm/icons/arrow-right-left.mjs:
lucide/dist/esm/icons/arrow-right-to-line.mjs:
lucide/dist/esm/icons/arrow-right.mjs:
lucide/dist/esm/icons/arrow-up-0-1.mjs:
lucide/dist/esm/icons/arrow-up-1-0.mjs:
lucide/dist/esm/icons/arrow-up-a-z.mjs:
lucide/dist/esm/icons/arrow-up-down.mjs:
lucide/dist/esm/icons/arrow-up-from-dot.mjs:
lucide/dist/esm/icons/arrow-up-from-line.mjs:
lucide/dist/esm/icons/arrow-up-left.mjs:
lucide/dist/esm/icons/arrow-up-narrow-wide.mjs:
lucide/dist/esm/icons/arrow-up-right.mjs:
lucide/dist/esm/icons/arrow-up-to-line.mjs:
lucide/dist/esm/icons/arrow-up-wide-narrow.mjs:
lucide/dist/esm/icons/arrow-up-z-a.mjs:
lucide/dist/esm/icons/arrow-up.mjs:
lucide/dist/esm/icons/arrows-up-from-line.mjs:
lucide/dist/esm/icons/asterisk.mjs:
lucide/dist/esm/icons/astroid.mjs:
lucide/dist/esm/icons/atom.mjs:
lucide/dist/esm/icons/at-sign.mjs:
lucide/dist/esm/icons/audio-lines-off.mjs:
lucide/dist/esm/icons/audio-lines-x.mjs:
lucide/dist/esm/icons/audio-lines.mjs:
lucide/dist/esm/icons/audio-waveform.mjs:
lucide/dist/esm/icons/award.mjs:
lucide/dist/esm/icons/axe.mjs:
lucide/dist/esm/icons/axis-3d.mjs:
lucide/dist/esm/icons/baby.mjs:
lucide/dist/esm/icons/backpack.mjs:
lucide/dist/esm/icons/badge-alert.mjs:
lucide/dist/esm/icons/badge-cent.mjs:
lucide/dist/esm/icons/badge-check.mjs:
lucide/dist/esm/icons/badge-dollar-sign.mjs:
lucide/dist/esm/icons/badge-euro.mjs:
lucide/dist/esm/icons/badge-indian-rupee.mjs:
lucide/dist/esm/icons/badge-info.mjs:
lucide/dist/esm/icons/badge-japanese-yen.mjs:
lucide/dist/esm/icons/badge-minus.mjs:
lucide/dist/esm/icons/badge-percent.mjs:
lucide/dist/esm/icons/badge-plus.mjs:
lucide/dist/esm/icons/badge-pound-sterling.mjs:
lucide/dist/esm/icons/badge-question-mark.mjs:
lucide/dist/esm/icons/badge-russian-ruble.mjs:
lucide/dist/esm/icons/badge-swiss-franc.mjs:
lucide/dist/esm/icons/badge-turkish-lira.mjs:
lucide/dist/esm/icons/badge-x.mjs:
lucide/dist/esm/icons/badge.mjs:
lucide/dist/esm/icons/baggage-claim.mjs:
lucide/dist/esm/icons/balloon.mjs:
lucide/dist/esm/icons/ban.mjs:
lucide/dist/esm/icons/bandage.mjs:
lucide/dist/esm/icons/banana.mjs:
lucide/dist/esm/icons/banknote-arrow-down.mjs:
lucide/dist/esm/icons/banknote-arrow-up.mjs:
lucide/dist/esm/icons/banknote-check.mjs:
lucide/dist/esm/icons/banknote-x.mjs:
lucide/dist/esm/icons/banknote.mjs:
lucide/dist/esm/icons/barcode.mjs:
lucide/dist/esm/icons/barrel.mjs:
lucide/dist/esm/icons/baseline.mjs:
lucide/dist/esm/icons/bath.mjs:
lucide/dist/esm/icons/battery-charging.mjs:
lucide/dist/esm/icons/battery-full.mjs:
lucide/dist/esm/icons/battery-low.mjs:
lucide/dist/esm/icons/battery-medium.mjs:
lucide/dist/esm/icons/battery-plus.mjs:
lucide/dist/esm/icons/battery-warning.mjs:
lucide/dist/esm/icons/battery.mjs:
lucide/dist/esm/icons/beaker.mjs:
lucide/dist/esm/icons/bean-off.mjs:
lucide/dist/esm/icons/bean.mjs:
lucide/dist/esm/icons/bed-double.mjs:
lucide/dist/esm/icons/bed-single.mjs:
lucide/dist/esm/icons/bed.mjs:
lucide/dist/esm/icons/beef-off.mjs:
lucide/dist/esm/icons/beef.mjs:
lucide/dist/esm/icons/beer-off.mjs:
lucide/dist/esm/icons/beer.mjs:
lucide/dist/esm/icons/bell-check.mjs:
lucide/dist/esm/icons/bell-electric.mjs:
lucide/dist/esm/icons/bell-dot.mjs:
lucide/dist/esm/icons/bell-minus.mjs:
lucide/dist/esm/icons/bell-off.mjs:
lucide/dist/esm/icons/bell-plus.mjs:
lucide/dist/esm/icons/bell-ring.mjs:
lucide/dist/esm/icons/between-horizontal-end.mjs:
lucide/dist/esm/icons/bell.mjs:
lucide/dist/esm/icons/between-horizontal-start.mjs:
lucide/dist/esm/icons/between-vertical-end.mjs:
lucide/dist/esm/icons/between-vertical-start.mjs:
lucide/dist/esm/icons/biceps-flexed.mjs:
lucide/dist/esm/icons/bike.mjs:
lucide/dist/esm/icons/binary.mjs:
lucide/dist/esm/icons/binoculars.mjs:
lucide/dist/esm/icons/biohazard.mjs:
lucide/dist/esm/icons/bird.mjs:
lucide/dist/esm/icons/birdhouse.mjs:
lucide/dist/esm/icons/bitcoin.mjs:
lucide/dist/esm/icons/blender.mjs:
lucide/dist/esm/icons/blend.mjs:
lucide/dist/esm/icons/blinds.mjs:
lucide/dist/esm/icons/blocks.mjs:
lucide/dist/esm/icons/bluetooth-connected.mjs:
lucide/dist/esm/icons/bluetooth-off.mjs:
lucide/dist/esm/icons/bluetooth.mjs:
lucide/dist/esm/icons/bluetooth-searching.mjs:
lucide/dist/esm/icons/bolt.mjs:
lucide/dist/esm/icons/bold.mjs:
lucide/dist/esm/icons/bomb.mjs:
lucide/dist/esm/icons/bone-fracture.mjs:
lucide/dist/esm/icons/bone.mjs:
lucide/dist/esm/icons/book-a.mjs:
lucide/dist/esm/icons/book-alert.mjs:
lucide/dist/esm/icons/book-audio.mjs:
lucide/dist/esm/icons/book-bookmark.mjs:
lucide/dist/esm/icons/book-check.mjs:
lucide/dist/esm/icons/book-copy.mjs:
lucide/dist/esm/icons/book-dashed.mjs:
lucide/dist/esm/icons/book-down.mjs:
lucide/dist/esm/icons/book-headphones.mjs:
lucide/dist/esm/icons/book-heart.mjs:
lucide/dist/esm/icons/book-image.mjs:
lucide/dist/esm/icons/book-key.mjs:
lucide/dist/esm/icons/book-lock.mjs:
lucide/dist/esm/icons/book-minus.mjs:
lucide/dist/esm/icons/book-open-check.mjs:
lucide/dist/esm/icons/book-open-text.mjs:
lucide/dist/esm/icons/book-open.mjs:
lucide/dist/esm/icons/book-plus.mjs:
lucide/dist/esm/icons/book-search.mjs:
lucide/dist/esm/icons/book-text.mjs:
lucide/dist/esm/icons/book-type.mjs:
lucide/dist/esm/icons/book-up-2.mjs:
lucide/dist/esm/icons/book-up.mjs:
lucide/dist/esm/icons/book-user.mjs:
lucide/dist/esm/icons/book-x.mjs:
lucide/dist/esm/icons/book.mjs:
lucide/dist/esm/icons/bookmark-check.mjs:
lucide/dist/esm/icons/bookmark-minus.mjs:
lucide/dist/esm/icons/bookmark-off.mjs:
lucide/dist/esm/icons/bookmark-plus.mjs:
lucide/dist/esm/icons/bookmark-x.mjs:
lucide/dist/esm/icons/bookmark.mjs:
lucide/dist/esm/icons/boom-box.mjs:
lucide/dist/esm/icons/bot-message-square.mjs:
lucide/dist/esm/icons/bot-off.mjs:
lucide/dist/esm/icons/bot.mjs:
lucide/dist/esm/icons/bottle-wine.mjs:
lucide/dist/esm/icons/bow-arrow.mjs:
lucide/dist/esm/icons/boxes.mjs:
lucide/dist/esm/icons/box.mjs:
lucide/dist/esm/icons/braces.mjs:
lucide/dist/esm/icons/brackets.mjs:
lucide/dist/esm/icons/brain-circuit.mjs:
lucide/dist/esm/icons/brain-cog.mjs:
lucide/dist/esm/icons/brain.mjs:
lucide/dist/esm/icons/brick-wall-fire.mjs:
lucide/dist/esm/icons/brick-wall-shield.mjs:
lucide/dist/esm/icons/bridge.mjs:
lucide/dist/esm/icons/brick-wall.mjs:
lucide/dist/esm/icons/briefcase-business.mjs:
lucide/dist/esm/icons/briefcase-conveyor-belt.mjs:
lucide/dist/esm/icons/briefcase-medical.mjs:
lucide/dist/esm/icons/briefcase.mjs:
lucide/dist/esm/icons/bring-to-front.mjs:
lucide/dist/esm/icons/broccoli.mjs:
lucide/dist/esm/icons/broom-sparkles.mjs:
lucide/dist/esm/icons/broom.mjs:
lucide/dist/esm/icons/brush-cleaning.mjs:
lucide/dist/esm/icons/brush.mjs:
lucide/dist/esm/icons/bubbles.mjs:
lucide/dist/esm/icons/bug-off.mjs:
lucide/dist/esm/icons/bug-play.mjs:
lucide/dist/esm/icons/bug.mjs:
lucide/dist/esm/icons/building-complex-plus.mjs:
lucide/dist/esm/icons/building-complex.mjs:
lucide/dist/esm/icons/building.mjs:
lucide/dist/esm/icons/bus-front.mjs:
lucide/dist/esm/icons/bus.mjs:
lucide/dist/esm/icons/cable-car.mjs:
lucide/dist/esm/icons/cable.mjs:
lucide/dist/esm/icons/cake-slice.mjs:
lucide/dist/esm/icons/cake.mjs:
lucide/dist/esm/icons/calculator.mjs:
lucide/dist/esm/icons/calendar-1.mjs:
lucide/dist/esm/icons/calendar-arrow-down.mjs:
lucide/dist/esm/icons/calendar-arrow-up.mjs:
lucide/dist/esm/icons/calendar-check-2.mjs:
lucide/dist/esm/icons/calendar-check.mjs:
lucide/dist/esm/icons/calendar-chevrons-right.mjs:
lucide/dist/esm/icons/calendar-clock.mjs:
lucide/dist/esm/icons/calendar-cog.mjs:
lucide/dist/esm/icons/calendar-days.mjs:
lucide/dist/esm/icons/calendar-fold.mjs:
lucide/dist/esm/icons/calendar-heart.mjs:
lucide/dist/esm/icons/calendar-minus-2.mjs:
lucide/dist/esm/icons/calendar-minus.mjs:
lucide/dist/esm/icons/calendar-off.mjs:
lucide/dist/esm/icons/calendar-plus-2.mjs:
lucide/dist/esm/icons/calendar-plus.mjs:
lucide/dist/esm/icons/calendar-range.mjs:
lucide/dist/esm/icons/calendar-search.mjs:
lucide/dist/esm/icons/calendar-sync.mjs:
lucide/dist/esm/icons/calendar-x-2.mjs:
lucide/dist/esm/icons/calendar-x.mjs:
lucide/dist/esm/icons/calendar.mjs:
lucide/dist/esm/icons/calendars.mjs:
lucide/dist/esm/icons/camera-off.mjs:
lucide/dist/esm/icons/camera.mjs:
lucide/dist/esm/icons/can-soda.mjs:
lucide/dist/esm/icons/candy-cane.mjs:
lucide/dist/esm/icons/can.mjs:
lucide/dist/esm/icons/candy-off.mjs:
lucide/dist/esm/icons/candy.mjs:
lucide/dist/esm/icons/cannabis-off.mjs:
lucide/dist/esm/icons/cannabis.mjs:
lucide/dist/esm/icons/captions-off.mjs:
lucide/dist/esm/icons/captions.mjs:
lucide/dist/esm/icons/car-battery.mjs:
lucide/dist/esm/icons/car-front.mjs:
lucide/dist/esm/icons/car-taxi-front.mjs:
lucide/dist/esm/icons/car.mjs:
lucide/dist/esm/icons/caravan.mjs:
lucide/dist/esm/icons/card-sim.mjs:
lucide/dist/esm/icons/carrot.mjs:
lucide/dist/esm/icons/carton-off.mjs:
lucide/dist/esm/icons/case-lower.mjs:
lucide/dist/esm/icons/carton.mjs:
lucide/dist/esm/icons/case-sensitive.mjs:
lucide/dist/esm/icons/case-upper.mjs:
lucide/dist/esm/icons/cassette-tape.mjs:
lucide/dist/esm/icons/cast.mjs:
lucide/dist/esm/icons/castle.mjs:
lucide/dist/esm/icons/cat.mjs:
lucide/dist/esm/icons/cctv-off.mjs:
lucide/dist/esm/icons/cctv.mjs:
lucide/dist/esm/icons/chart-area.mjs:
lucide/dist/esm/icons/chart-bar-big.mjs:
lucide/dist/esm/icons/chart-bar-decreasing.mjs:
lucide/dist/esm/icons/chart-bar-increasing.mjs:
lucide/dist/esm/icons/chart-bar-stacked.mjs:
lucide/dist/esm/icons/chart-bar.mjs:
lucide/dist/esm/icons/chart-candlestick.mjs:
lucide/dist/esm/icons/chart-column-big.mjs:
lucide/dist/esm/icons/chart-column-decreasing.mjs:
lucide/dist/esm/icons/chart-column-increasing.mjs:
lucide/dist/esm/icons/chart-column-stacked.mjs:
lucide/dist/esm/icons/chart-column.mjs:
lucide/dist/esm/icons/chart-gantt.mjs:
lucide/dist/esm/icons/chart-line.mjs:
lucide/dist/esm/icons/chart-network.mjs:
lucide/dist/esm/icons/chart-no-axes-column-decreasing.mjs:
lucide/dist/esm/icons/chart-no-axes-column-increasing.mjs:
lucide/dist/esm/icons/chart-no-axes-column.mjs:
lucide/dist/esm/icons/chart-no-axes-combined.mjs:
lucide/dist/esm/icons/chart-no-axes-gantt.mjs:
lucide/dist/esm/icons/chart-pie.mjs:
lucide/dist/esm/icons/chart-scatter.mjs:
lucide/dist/esm/icons/chart-spline.mjs:
lucide/dist/esm/icons/check-check.mjs:
lucide/dist/esm/icons/check-line.mjs:
lucide/dist/esm/icons/check.mjs:
lucide/dist/esm/icons/chef-hat.mjs:
lucide/dist/esm/icons/cherry.mjs:
lucide/dist/esm/icons/chess-bishop.mjs:
lucide/dist/esm/icons/chess-king.mjs:
lucide/dist/esm/icons/chess-knight.mjs:
lucide/dist/esm/icons/chess-pawn.mjs:
lucide/dist/esm/icons/chess-queen.mjs:
lucide/dist/esm/icons/chess-rook.mjs:
lucide/dist/esm/icons/chevron-down.mjs:
lucide/dist/esm/icons/chevron-first.mjs:
lucide/dist/esm/icons/chevron-last.mjs:
lucide/dist/esm/icons/chevron-left.mjs:
lucide/dist/esm/icons/chevron-right.mjs:
lucide/dist/esm/icons/chevron-up.mjs:
lucide/dist/esm/icons/chevrons-down-up.mjs:
lucide/dist/esm/icons/chevrons-down.mjs:
lucide/dist/esm/icons/chevrons-left-right-ellipsis.mjs:
lucide/dist/esm/icons/chevrons-left-right.mjs:
lucide/dist/esm/icons/chevrons-left.mjs:
lucide/dist/esm/icons/chevrons-right-left.mjs:
lucide/dist/esm/icons/chevrons-right.mjs:
lucide/dist/esm/icons/chevrons-up-down.mjs:
lucide/dist/esm/icons/chevrons-up.mjs:
lucide/dist/esm/icons/cigarette-off.mjs:
lucide/dist/esm/icons/church.mjs:
lucide/dist/esm/icons/cigarette.mjs:
lucide/dist/esm/icons/circle-alert.mjs:
lucide/dist/esm/icons/circle-arrow-down.mjs:
lucide/dist/esm/icons/circle-arrow-left.mjs:
lucide/dist/esm/icons/circle-arrow-out-down-left.mjs:
lucide/dist/esm/icons/circle-arrow-out-down-right.mjs:
lucide/dist/esm/icons/circle-arrow-out-up-left.mjs:
lucide/dist/esm/icons/circle-arrow-out-up-right.mjs:
lucide/dist/esm/icons/circle-arrow-right.mjs:
lucide/dist/esm/icons/circle-arrow-up.mjs:
lucide/dist/esm/icons/circle-check.mjs:
lucide/dist/esm/icons/circle-check-big.mjs:
lucide/dist/esm/icons/circle-chevron-down.mjs:
lucide/dist/esm/icons/circle-chevron-left.mjs:
lucide/dist/esm/icons/circle-chevron-right.mjs:
lucide/dist/esm/icons/circle-chevron-up.mjs:
lucide/dist/esm/icons/circle-dashed-check.mjs:
lucide/dist/esm/icons/circle-dashed.mjs:
lucide/dist/esm/icons/circle-divide.mjs:
lucide/dist/esm/icons/circle-dollar-sign.mjs:
lucide/dist/esm/icons/circle-dot-dashed.mjs:
lucide/dist/esm/icons/circle-dot.mjs:
lucide/dist/esm/icons/circle-ellipsis.mjs:
lucide/dist/esm/icons/circle-equal.mjs:
lucide/dist/esm/icons/circle-euro.mjs:
lucide/dist/esm/icons/circle-fading-arrow-up.mjs:
lucide/dist/esm/icons/circle-fading-plus.mjs:
lucide/dist/esm/icons/circle-gauge.mjs:
lucide/dist/esm/icons/circle-minus.mjs:
lucide/dist/esm/icons/circle-off.mjs:
lucide/dist/esm/icons/circle-parking-off.mjs:
lucide/dist/esm/icons/circle-parking.mjs:
lucide/dist/esm/icons/circle-pause.mjs:
lucide/dist/esm/icons/circle-percent.mjs:
lucide/dist/esm/icons/circle-pile.mjs:
lucide/dist/esm/icons/circle-play.mjs:
lucide/dist/esm/icons/circle-plus.mjs:
lucide/dist/esm/icons/circle-pound-sterling.mjs:
lucide/dist/esm/icons/circle-power.mjs:
lucide/dist/esm/icons/circle-question-mark.mjs:
lucide/dist/esm/icons/circle-slash-2.mjs:
lucide/dist/esm/icons/circle-slash.mjs:
lucide/dist/esm/icons/circle-small.mjs:
lucide/dist/esm/icons/circle-star.mjs:
lucide/dist/esm/icons/circle-stop.mjs:
lucide/dist/esm/icons/circle-user-round.mjs:
lucide/dist/esm/icons/circle-user.mjs:
lucide/dist/esm/icons/circle-x.mjs:
lucide/dist/esm/icons/circle.mjs:
lucide/dist/esm/icons/citrus.mjs:
lucide/dist/esm/icons/circuit-board.mjs:
lucide/dist/esm/icons/clapperboard.mjs:
lucide/dist/esm/icons/clef-alto.mjs:
lucide/dist/esm/icons/clef-bass.mjs:
lucide/dist/esm/icons/clef-treble.mjs:
lucide/dist/esm/icons/clipboard-check.mjs:
lucide/dist/esm/icons/clipboard-clock.mjs:
lucide/dist/esm/icons/clipboard-copy.mjs:
lucide/dist/esm/icons/clipboard-list.mjs:
lucide/dist/esm/icons/clipboard-minus.mjs:
lucide/dist/esm/icons/clipboard-paste.mjs:
lucide/dist/esm/icons/clipboard-pen-line.mjs:
lucide/dist/esm/icons/clipboard-pen.mjs:
lucide/dist/esm/icons/clipboard-plus.mjs:
lucide/dist/esm/icons/clipboard-type.mjs:
lucide/dist/esm/icons/clipboard-x.mjs:
lucide/dist/esm/icons/clipboard.mjs:
lucide/dist/esm/icons/clock-1.mjs:
lucide/dist/esm/icons/clock-11.mjs:
lucide/dist/esm/icons/clock-10.mjs:
lucide/dist/esm/icons/clock-12.mjs:
lucide/dist/esm/icons/clock-2.mjs:
lucide/dist/esm/icons/clock-3.mjs:
lucide/dist/esm/icons/clock-4.mjs:
lucide/dist/esm/icons/clock-5.mjs:
lucide/dist/esm/icons/clock-6.mjs:
lucide/dist/esm/icons/clock-7.mjs:
lucide/dist/esm/icons/clock-8.mjs:
lucide/dist/esm/icons/clock-9.mjs:
lucide/dist/esm/icons/clock-alert.mjs:
lucide/dist/esm/icons/clock-arrow-down.mjs:
lucide/dist/esm/icons/clock-arrow-left.mjs:
lucide/dist/esm/icons/clock-arrow-right.mjs:
lucide/dist/esm/icons/clock-arrow-up.mjs:
lucide/dist/esm/icons/clock-check.mjs:
lucide/dist/esm/icons/clock-fading.mjs:
lucide/dist/esm/icons/clock-plus.mjs:
lucide/dist/esm/icons/clock.mjs:
lucide/dist/esm/icons/closed-caption.mjs:
lucide/dist/esm/icons/cloud-alert.mjs:
lucide/dist/esm/icons/cloud-backup.mjs:
lucide/dist/esm/icons/cloud-cog.mjs:
lucide/dist/esm/icons/cloud-download.mjs:
lucide/dist/esm/icons/cloud-check.mjs:
lucide/dist/esm/icons/cloud-drizzle.mjs:
lucide/dist/esm/icons/cloud-fog.mjs:
lucide/dist/esm/icons/cloud-hail.mjs:
lucide/dist/esm/icons/cloud-lightning.mjs:
lucide/dist/esm/icons/cloud-moon-rain.mjs:
lucide/dist/esm/icons/cloud-moon.mjs:
lucide/dist/esm/icons/cloud-off.mjs:
lucide/dist/esm/icons/cloud-rain-wind.mjs:
lucide/dist/esm/icons/cloud-snow.mjs:
lucide/dist/esm/icons/cloud-rain.mjs:
lucide/dist/esm/icons/cloud-sun-rain.mjs:
lucide/dist/esm/icons/cloud-sun.mjs:
lucide/dist/esm/icons/cloud-sync.mjs:
lucide/dist/esm/icons/cloud-upload.mjs:
lucide/dist/esm/icons/cloud.mjs:
lucide/dist/esm/icons/cloudy.mjs:
lucide/dist/esm/icons/club.mjs:
lucide/dist/esm/icons/clover.mjs:
lucide/dist/esm/icons/code-xml.mjs:
lucide/dist/esm/icons/code.mjs:
lucide/dist/esm/icons/coffee.mjs:
lucide/dist/esm/icons/cog.mjs:
lucide/dist/esm/icons/coins.mjs:
lucide/dist/esm/icons/columns-2.mjs:
lucide/dist/esm/icons/columns-3-cog.mjs:
lucide/dist/esm/icons/columns-3.mjs:
lucide/dist/esm/icons/columns-4.mjs:
lucide/dist/esm/icons/combine.mjs:
lucide/dist/esm/icons/command.mjs:
lucide/dist/esm/icons/compass.mjs:
lucide/dist/esm/icons/component.mjs:
lucide/dist/esm/icons/computer.mjs:
lucide/dist/esm/icons/concierge-bell.mjs:
lucide/dist/esm/icons/construction.mjs:
lucide/dist/esm/icons/contact-round.mjs:
lucide/dist/esm/icons/cone.mjs:
lucide/dist/esm/icons/contact.mjs:
lucide/dist/esm/icons/container.mjs:
lucide/dist/esm/icons/contrast.mjs:
lucide/dist/esm/icons/cookie.mjs:
lucide/dist/esm/icons/cooking-pot.mjs:
lucide/dist/esm/icons/copy-check.mjs:
lucide/dist/esm/icons/copy-minus.mjs:
lucide/dist/esm/icons/copy-plus.mjs:
lucide/dist/esm/icons/copy-x.mjs:
lucide/dist/esm/icons/copy.mjs:
lucide/dist/esm/icons/copy-slash.mjs:
lucide/dist/esm/icons/copyleft.mjs:
lucide/dist/esm/icons/copyright.mjs:
lucide/dist/esm/icons/corner-down-left.mjs:
lucide/dist/esm/icons/corner-down-right.mjs:
lucide/dist/esm/icons/corner-left-down.mjs:
lucide/dist/esm/icons/corner-left-up.mjs:
lucide/dist/esm/icons/corner-right-down.mjs:
lucide/dist/esm/icons/corner-right-up.mjs:
lucide/dist/esm/icons/corner-up-left.mjs:
lucide/dist/esm/icons/corner-up-right.mjs:
lucide/dist/esm/icons/cpu.mjs:
lucide/dist/esm/icons/creative-commons.mjs:
lucide/dist/esm/icons/credit-card-check.mjs:
lucide/dist/esm/icons/credit-card-minus.mjs:
lucide/dist/esm/icons/credit-card-plus.mjs:
lucide/dist/esm/icons/credit-card-reader.mjs:
lucide/dist/esm/icons/credit-card-x.mjs:
lucide/dist/esm/icons/credit-card.mjs:
lucide/dist/esm/icons/croissant.mjs:
lucide/dist/esm/icons/crop.mjs:
lucide/dist/esm/icons/cross.mjs:
lucide/dist/esm/icons/crosshair.mjs:
lucide/dist/esm/icons/cuboid.mjs:
lucide/dist/esm/icons/cup-soda.mjs:
lucide/dist/esm/icons/crown.mjs:
lucide/dist/esm/icons/currency.mjs:
lucide/dist/esm/icons/cupcake.mjs:
lucide/dist/esm/icons/cylinder.mjs:
lucide/dist/esm/icons/dam.mjs:
lucide/dist/esm/icons/database-arrow-down.mjs:
lucide/dist/esm/icons/database-arrow-up.mjs:
lucide/dist/esm/icons/database-backup.mjs:
lucide/dist/esm/icons/database-check.mjs:
lucide/dist/esm/icons/database-minus.mjs:
lucide/dist/esm/icons/database-plus.mjs:
lucide/dist/esm/icons/database-search.mjs:
lucide/dist/esm/icons/database-x.mjs:
lucide/dist/esm/icons/database-zap.mjs:
lucide/dist/esm/icons/database.mjs:
lucide/dist/esm/icons/decimals-arrow-left.mjs:
lucide/dist/esm/icons/decimals-arrow-right.mjs:
lucide/dist/esm/icons/delete.mjs:
lucide/dist/esm/icons/dessert.mjs:
lucide/dist/esm/icons/diameter.mjs:
lucide/dist/esm/icons/diamond-percent.mjs:
lucide/dist/esm/icons/diamond-minus.mjs:
lucide/dist/esm/icons/diamond-plus.mjs:
lucide/dist/esm/icons/diamond.mjs:
lucide/dist/esm/icons/dice-1.mjs:
lucide/dist/esm/icons/dice-3.mjs:
lucide/dist/esm/icons/dice-2.mjs:
lucide/dist/esm/icons/dice-4.mjs:
lucide/dist/esm/icons/dice-5.mjs:
lucide/dist/esm/icons/dice-6.mjs:
lucide/dist/esm/icons/dices.mjs:
lucide/dist/esm/icons/diff.mjs:
lucide/dist/esm/icons/disc-2.mjs:
lucide/dist/esm/icons/disc-3.mjs:
lucide/dist/esm/icons/disc-album.mjs:
lucide/dist/esm/icons/disc.mjs:
lucide/dist/esm/icons/divide.mjs:
lucide/dist/esm/icons/dna-off.mjs:
lucide/dist/esm/icons/dna.mjs:
lucide/dist/esm/icons/dock.mjs:
lucide/dist/esm/icons/dog.mjs:
lucide/dist/esm/icons/dome.mjs:
lucide/dist/esm/icons/dollar-sign.mjs:
lucide/dist/esm/icons/donut.mjs:
lucide/dist/esm/icons/door-closed-locked.mjs:
lucide/dist/esm/icons/door-closed-package.mjs:
lucide/dist/esm/icons/door-closed.mjs:
lucide/dist/esm/icons/door-open.mjs:
lucide/dist/esm/icons/door-stairwell.mjs:
lucide/dist/esm/icons/dot.mjs:
lucide/dist/esm/icons/download.mjs:
lucide/dist/esm/icons/drafting-compass.mjs:
lucide/dist/esm/icons/drama.mjs:
lucide/dist/esm/icons/drill.mjs:
lucide/dist/esm/icons/drone.mjs:
lucide/dist/esm/icons/droplet-off.mjs:
lucide/dist/esm/icons/droplet.mjs:
lucide/dist/esm/icons/droplets.mjs:
lucide/dist/esm/icons/drum.mjs:
lucide/dist/esm/icons/drumstick.mjs:
lucide/dist/esm/icons/dumbbell.mjs:
lucide/dist/esm/icons/ear-off.mjs:
lucide/dist/esm/icons/ear.mjs:
lucide/dist/esm/icons/earth-lock.mjs:
lucide/dist/esm/icons/earth.mjs:
lucide/dist/esm/icons/eclipse.mjs:
lucide/dist/esm/icons/egg-fried.mjs:
lucide/dist/esm/icons/egg-off.mjs:
lucide/dist/esm/icons/egg.mjs:
lucide/dist/esm/icons/eject.mjs:
lucide/dist/esm/icons/ellipse.mjs:
lucide/dist/esm/icons/ellipsis-vertical.mjs:
lucide/dist/esm/icons/ellipsis.mjs:
lucide/dist/esm/icons/engine.mjs:
lucide/dist/esm/icons/equal-approximately-not.mjs:
lucide/dist/esm/icons/equal-approximately.mjs:
lucide/dist/esm/icons/equal-not.mjs:
lucide/dist/esm/icons/equal.mjs:
lucide/dist/esm/icons/eraser.mjs:
lucide/dist/esm/icons/euro.mjs:
lucide/dist/esm/icons/ethernet-port.mjs:
lucide/dist/esm/icons/ev-charger.mjs:
lucide/dist/esm/icons/expand.mjs:
lucide/dist/esm/icons/external-link.mjs:
lucide/dist/esm/icons/eye-closed.mjs:
lucide/dist/esm/icons/eye-dashed.mjs:
lucide/dist/esm/icons/eye.mjs:
lucide/dist/esm/icons/eye-off.mjs:
lucide/dist/esm/icons/face-angry.mjs:
lucide/dist/esm/icons/face-expressionless.mjs:
lucide/dist/esm/icons/face-grinning.mjs:
lucide/dist/esm/icons/face-neutral.mjs:
lucide/dist/esm/icons/face-slightly-frowning.mjs:
lucide/dist/esm/icons/face-slightly-smiling-plus.mjs:
lucide/dist/esm/icons/face-slightly-smiling.mjs:
lucide/dist/esm/icons/factory.mjs:
lucide/dist/esm/icons/fan.mjs:
lucide/dist/esm/icons/fast-forward.mjs:
lucide/dist/esm/icons/faucet.mjs:
lucide/dist/esm/icons/fence.mjs:
lucide/dist/esm/icons/feather.mjs:
lucide/dist/esm/icons/ferris-wheel.mjs:
lucide/dist/esm/icons/file-archive.mjs:
lucide/dist/esm/icons/file-axis-3d.mjs:
lucide/dist/esm/icons/file-badge.mjs:
lucide/dist/esm/icons/file-box.mjs:
lucide/dist/esm/icons/file-braces-corner.mjs:
lucide/dist/esm/icons/file-braces.mjs:
lucide/dist/esm/icons/file-chart-column-increasing.mjs:
lucide/dist/esm/icons/file-chart-column.mjs:
lucide/dist/esm/icons/file-chart-line.mjs:
lucide/dist/esm/icons/file-chart-pie.mjs:
lucide/dist/esm/icons/file-check-corner.mjs:
lucide/dist/esm/icons/file-check.mjs:
lucide/dist/esm/icons/file-clock.mjs:
lucide/dist/esm/icons/file-code-corner.mjs:
lucide/dist/esm/icons/file-code.mjs:
lucide/dist/esm/icons/file-cog.mjs:
lucide/dist/esm/icons/file-diff.mjs:
lucide/dist/esm/icons/file-digit.mjs:
lucide/dist/esm/icons/file-down.mjs:
lucide/dist/esm/icons/file-exclamation-point.mjs:
lucide/dist/esm/icons/file-headphone.mjs:
lucide/dist/esm/icons/file-heart.mjs:
lucide/dist/esm/icons/file-image.mjs:
lucide/dist/esm/icons/file-input.mjs:
lucide/dist/esm/icons/file-key.mjs:
lucide/dist/esm/icons/file-lock.mjs:
lucide/dist/esm/icons/file-minus-corner.mjs:
lucide/dist/esm/icons/file-minus.mjs:
lucide/dist/esm/icons/file-music.mjs:
lucide/dist/esm/icons/file-pen-line.mjs:
lucide/dist/esm/icons/file-output.mjs:
lucide/dist/esm/icons/file-pen.mjs:
lucide/dist/esm/icons/file-play.mjs:
lucide/dist/esm/icons/file-plus-corner.mjs:
lucide/dist/esm/icons/file-plus.mjs:
lucide/dist/esm/icons/file-question-mark.mjs:
lucide/dist/esm/icons/file-search-corner.mjs:
lucide/dist/esm/icons/file-scan.mjs:
lucide/dist/esm/icons/file-search.mjs:
lucide/dist/esm/icons/file-signal.mjs:
lucide/dist/esm/icons/file-sliders.mjs:
lucide/dist/esm/icons/file-spreadsheet.mjs:
lucide/dist/esm/icons/file-stack.mjs:
lucide/dist/esm/icons/file-symlink.mjs:
lucide/dist/esm/icons/file-terminal.mjs:
lucide/dist/esm/icons/file-text.mjs:
lucide/dist/esm/icons/file-type-corner.mjs:
lucide/dist/esm/icons/file-type.mjs:
lucide/dist/esm/icons/file-up.mjs:
lucide/dist/esm/icons/file-user.mjs:
lucide/dist/esm/icons/file-video-camera.mjs:
lucide/dist/esm/icons/file-volume.mjs:
lucide/dist/esm/icons/file-x-corner.mjs:
lucide/dist/esm/icons/file-x.mjs:
lucide/dist/esm/icons/file.mjs:
lucide/dist/esm/icons/files.mjs:
lucide/dist/esm/icons/film.mjs:
lucide/dist/esm/icons/fingerprint-pattern.mjs:
lucide/dist/esm/icons/fire-extinguisher.mjs:
lucide/dist/esm/icons/fish-off.mjs:
lucide/dist/esm/icons/fish.mjs:
lucide/dist/esm/icons/fish-symbol.mjs:
lucide/dist/esm/icons/fishing-hook.mjs:
lucide/dist/esm/icons/fishing-rod.mjs:
lucide/dist/esm/icons/flag-off.mjs:
lucide/dist/esm/icons/flag-triangle-left.mjs:
lucide/dist/esm/icons/flag-triangle-right.mjs:
lucide/dist/esm/icons/flag.mjs:
lucide/dist/esm/icons/flame-kindling.mjs:
lucide/dist/esm/icons/flame.mjs:
lucide/dist/esm/icons/flashlight.mjs:
lucide/dist/esm/icons/flashlight-off.mjs:
lucide/dist/esm/icons/flask-conical-off.mjs:
lucide/dist/esm/icons/flask-conical.mjs:
lucide/dist/esm/icons/flask-round.mjs:
lucide/dist/esm/icons/flower-2.mjs:
lucide/dist/esm/icons/flower.mjs:
lucide/dist/esm/icons/focus.mjs:
lucide/dist/esm/icons/fold-horizontal.mjs:
lucide/dist/esm/icons/fold-vertical.mjs:
lucide/dist/esm/icons/folder-archive.mjs:
lucide/dist/esm/icons/folder-bookmark.mjs:
lucide/dist/esm/icons/folder-check.mjs:
lucide/dist/esm/icons/folder-clock.mjs:
lucide/dist/esm/icons/folder-closed.mjs:
lucide/dist/esm/icons/folder-code.mjs:
lucide/dist/esm/icons/folder-cog.mjs:
lucide/dist/esm/icons/folder-dot.mjs:
lucide/dist/esm/icons/folder-down.mjs:
lucide/dist/esm/icons/folder-git-2.mjs:
lucide/dist/esm/icons/folder-git.mjs:
lucide/dist/esm/icons/folder-heart.mjs:
lucide/dist/esm/icons/folder-input.mjs:
lucide/dist/esm/icons/folder-kanban.mjs:
lucide/dist/esm/icons/folder-key.mjs:
lucide/dist/esm/icons/folder-lock.mjs:
lucide/dist/esm/icons/folder-minus.mjs:
lucide/dist/esm/icons/folder-open-dot.mjs:
lucide/dist/esm/icons/folder-open.mjs:
lucide/dist/esm/icons/folder-output.mjs:
lucide/dist/esm/icons/folder-pen.mjs:
lucide/dist/esm/icons/folder-plus.mjs:
lucide/dist/esm/icons/folder-root.mjs:
lucide/dist/esm/icons/folder-search-2.mjs:
lucide/dist/esm/icons/folder-search.mjs:
lucide/dist/esm/icons/folder-symlink.mjs:
lucide/dist/esm/icons/folder-sync.mjs:
lucide/dist/esm/icons/folder-tree.mjs:
lucide/dist/esm/icons/folder-up.mjs:
lucide/dist/esm/icons/folder.mjs:
lucide/dist/esm/icons/folder-x.mjs:
lucide/dist/esm/icons/folders.mjs:
lucide/dist/esm/icons/footprints.mjs:
lucide/dist/esm/icons/forklift.mjs:
lucide/dist/esm/icons/form.mjs:
lucide/dist/esm/icons/forward.mjs:
lucide/dist/esm/icons/frame.mjs:
lucide/dist/esm/icons/fuel.mjs:
lucide/dist/esm/icons/fullscreen.mjs:
lucide/dist/esm/icons/funnel-plus.mjs:
lucide/dist/esm/icons/funnel-x.mjs:
lucide/dist/esm/icons/funnel.mjs:
lucide/dist/esm/icons/galaxy.mjs:
lucide/dist/esm/icons/gallery-horizontal-end.mjs:
lucide/dist/esm/icons/gallery-horizontal.mjs:
lucide/dist/esm/icons/gallery-thumbnails.mjs:
lucide/dist/esm/icons/gallery-vertical-end.mjs:
lucide/dist/esm/icons/gallery-vertical.mjs:
lucide/dist/esm/icons/gamepad-2.mjs:
lucide/dist/esm/icons/gamepad-directional.mjs:
lucide/dist/esm/icons/gamepad.mjs:
lucide/dist/esm/icons/gap-horizontal.mjs:
lucide/dist/esm/icons/gauge.mjs:
lucide/dist/esm/icons/gap-vertical.mjs:
lucide/dist/esm/icons/gavel.mjs:
lucide/dist/esm/icons/gem.mjs:
lucide/dist/esm/icons/georgian-lari.mjs:
lucide/dist/esm/icons/germ.mjs:
lucide/dist/esm/icons/germ-off.mjs:
lucide/dist/esm/icons/ghost.mjs:
lucide/dist/esm/icons/gift.mjs:
lucide/dist/esm/icons/git-branch-minus.mjs:
lucide/dist/esm/icons/git-branch-plus.mjs:
lucide/dist/esm/icons/git-branch.mjs:
lucide/dist/esm/icons/git-commit-horizontal.mjs:
lucide/dist/esm/icons/git-commit-vertical.mjs:
lucide/dist/esm/icons/git-compare-arrows.mjs:
lucide/dist/esm/icons/git-fork.mjs:
lucide/dist/esm/icons/git-compare.mjs:
lucide/dist/esm/icons/git-graph.mjs:
lucide/dist/esm/icons/git-merge-conflict.mjs:
lucide/dist/esm/icons/git-merge.mjs:
lucide/dist/esm/icons/git-pull-request-arrow.mjs:
lucide/dist/esm/icons/git-pull-request-closed.mjs:
lucide/dist/esm/icons/git-pull-request-create-arrow.mjs:
lucide/dist/esm/icons/git-pull-request-create.mjs:
lucide/dist/esm/icons/git-pull-request-draft.mjs:
lucide/dist/esm/icons/git-pull-request.mjs:
lucide/dist/esm/icons/glass-water.mjs:
lucide/dist/esm/icons/glasses.mjs:
lucide/dist/esm/icons/globe-check.mjs:
lucide/dist/esm/icons/globe-code.mjs:
lucide/dist/esm/icons/globe-lock.mjs:
lucide/dist/esm/icons/globe-off.mjs:
lucide/dist/esm/icons/globe-x.mjs:
lucide/dist/esm/icons/globe.mjs:
lucide/dist/esm/icons/goal.mjs:
lucide/dist/esm/icons/gpu.mjs:
lucide/dist/esm/icons/graduation-cap.mjs:
lucide/dist/esm/icons/grape.mjs:
lucide/dist/esm/icons/grid-2x2-check.mjs:
lucide/dist/esm/icons/grid-2x2-plus.mjs:
lucide/dist/esm/icons/grid-2x2-x.mjs:
lucide/dist/esm/icons/grid-2x2.mjs:
lucide/dist/esm/icons/grid-3x2.mjs:
lucide/dist/esm/icons/grid-3x3.mjs:
lucide/dist/esm/icons/grip-horizontal.mjs:
lucide/dist/esm/icons/grip-vertical.mjs:
lucide/dist/esm/icons/grip.mjs:
lucide/dist/esm/icons/group.mjs:
lucide/dist/esm/icons/guitar.mjs:
lucide/dist/esm/icons/hamburger.mjs:
lucide/dist/esm/icons/ham.mjs:
lucide/dist/esm/icons/hammer.mjs:
lucide/dist/esm/icons/hand-coins.mjs:
lucide/dist/esm/icons/hand-fist.mjs:
lucide/dist/esm/icons/hand-heart.mjs:
lucide/dist/esm/icons/hand-helping.mjs:
lucide/dist/esm/icons/hand-grab.mjs:
lucide/dist/esm/icons/hand-metal.mjs:
lucide/dist/esm/icons/hand-platter.mjs:
lucide/dist/esm/icons/hand.mjs:
lucide/dist/esm/icons/handbag.mjs:
lucide/dist/esm/icons/handshake.mjs:
lucide/dist/esm/icons/hard-drive-download.mjs:
lucide/dist/esm/icons/hard-drive-upload.mjs:
lucide/dist/esm/icons/hard-drive.mjs:
lucide/dist/esm/icons/hard-hat.mjs:
lucide/dist/esm/icons/hash.mjs:
lucide/dist/esm/icons/hat-glasses.mjs:
lucide/dist/esm/icons/haze.mjs:
lucide/dist/esm/icons/hd.mjs:
lucide/dist/esm/icons/hdmi-port.mjs:
lucide/dist/esm/icons/heading-1.mjs:
lucide/dist/esm/icons/heading-2.mjs:
lucide/dist/esm/icons/heading-3.mjs:
lucide/dist/esm/icons/heading-5.mjs:
lucide/dist/esm/icons/heading-4.mjs:
lucide/dist/esm/icons/heading-6.mjs:
lucide/dist/esm/icons/heading.mjs:
lucide/dist/esm/icons/headphone-off.mjs:
lucide/dist/esm/icons/headphones.mjs:
lucide/dist/esm/icons/headset.mjs:
lucide/dist/esm/icons/heart-crack.mjs:
lucide/dist/esm/icons/heart-handshake.mjs:
lucide/dist/esm/icons/heart-minus.mjs:
lucide/dist/esm/icons/heart-off.mjs:
lucide/dist/esm/icons/heart-plus.mjs:
lucide/dist/esm/icons/heart-x.mjs:
lucide/dist/esm/icons/heart-pulse.mjs:
lucide/dist/esm/icons/heart.mjs:
lucide/dist/esm/icons/heater.mjs:
lucide/dist/esm/icons/helicopter.mjs:
lucide/dist/esm/icons/hexagon.mjs:
lucide/dist/esm/icons/hop-off.mjs:
lucide/dist/esm/icons/highlighter.mjs:
lucide/dist/esm/icons/hop.mjs:
lucide/dist/esm/icons/hospital.mjs:
lucide/dist/esm/icons/hotel.mjs:
lucide/dist/esm/icons/hourglass-cog.mjs:
lucide/dist/esm/icons/hourglass.mjs:
lucide/dist/esm/icons/house-heart.mjs:
lucide/dist/esm/icons/house-plug.mjs:
lucide/dist/esm/icons/house-plus.mjs:
lucide/dist/esm/icons/house-wifi.mjs:
lucide/dist/esm/icons/house.mjs:
lucide/dist/esm/icons/houses.mjs:
lucide/dist/esm/icons/ice-cream-bowl.mjs:
lucide/dist/esm/icons/ice-cream-cone.mjs:
lucide/dist/esm/icons/id-card-lanyard.mjs:
lucide/dist/esm/icons/id-card.mjs:
lucide/dist/esm/icons/image-minus.mjs:
lucide/dist/esm/icons/image-down.mjs:
lucide/dist/esm/icons/image-off.mjs:
lucide/dist/esm/icons/image-play.mjs:
lucide/dist/esm/icons/image-plus.mjs:
lucide/dist/esm/icons/image-upscale.mjs:
lucide/dist/esm/icons/image-up.mjs:
lucide/dist/esm/icons/image.mjs:
lucide/dist/esm/icons/images.mjs:
lucide/dist/esm/icons/import.mjs:
lucide/dist/esm/icons/indian-rupee.mjs:
lucide/dist/esm/icons/inbox.mjs:
lucide/dist/esm/icons/infinity.mjs:
lucide/dist/esm/icons/info.mjs:
lucide/dist/esm/icons/inspection-panel.mjs:
lucide/dist/esm/icons/italic.mjs:
lucide/dist/esm/icons/iteration-ccw.mjs:
lucide/dist/esm/icons/iteration-cw.mjs:
lucide/dist/esm/icons/iv-bag.mjs:
lucide/dist/esm/icons/joystick.mjs:
lucide/dist/esm/icons/japanese-yen.mjs:
lucide/dist/esm/icons/kanban.mjs:
lucide/dist/esm/icons/kayak.mjs:
lucide/dist/esm/icons/key-round.mjs:
lucide/dist/esm/icons/key-square.mjs:
lucide/dist/esm/icons/key.mjs:
lucide/dist/esm/icons/keyboard-music.mjs:
lucide/dist/esm/icons/keyboard-off.mjs:
lucide/dist/esm/icons/keyboard.mjs:
lucide/dist/esm/icons/lambda.mjs:
lucide/dist/esm/icons/lamp-ceiling.mjs:
lucide/dist/esm/icons/lamp-desk.mjs:
lucide/dist/esm/icons/lamp-floor.mjs:
lucide/dist/esm/icons/lamp-wall-down.mjs:
lucide/dist/esm/icons/lamp-wall-up.mjs:
lucide/dist/esm/icons/lamp.mjs:
lucide/dist/esm/icons/land-plot.mjs:
lucide/dist/esm/icons/landmark.mjs:
lucide/dist/esm/icons/languages.mjs:
lucide/dist/esm/icons/laptop-minimal-check.mjs:
lucide/dist/esm/icons/laptop-minimal.mjs:
lucide/dist/esm/icons/laptop.mjs:
lucide/dist/esm/icons/lasso-select.mjs:
lucide/dist/esm/icons/lasso.mjs:
lucide/dist/esm/icons/layer-arrow-down.mjs:
lucide/dist/esm/icons/layer-arrow-up.mjs:
lucide/dist/esm/icons/layers-2.mjs:
lucide/dist/esm/icons/layers-arrow-up.mjs:
lucide/dist/esm/icons/layers-arrow-down.mjs:
lucide/dist/esm/icons/layers-minus.mjs:
lucide/dist/esm/icons/layers.mjs:
lucide/dist/esm/icons/layers-plus.mjs:
lucide/dist/esm/icons/layout-arrow-down.mjs:
lucide/dist/esm/icons/layout-arrow-right.mjs:
lucide/dist/esm/icons/layout-dashboard.mjs:
lucide/dist/esm/icons/layout-freeform.mjs:
lucide/dist/esm/icons/layout-grid.mjs:
lucide/dist/esm/icons/layout-list.mjs:
lucide/dist/esm/icons/layout-panel-left.mjs:
lucide/dist/esm/icons/layout-panel-top.mjs:
lucide/dist/esm/icons/layout-template.mjs:
lucide/dist/esm/icons/leaf.mjs:
lucide/dist/esm/icons/lectern.mjs:
lucide/dist/esm/icons/leafy-green.mjs:
lucide/dist/esm/icons/lens-concave.mjs:
lucide/dist/esm/icons/lens-convex.mjs:
lucide/dist/esm/icons/library-big.mjs:
lucide/dist/esm/icons/library.mjs:
lucide/dist/esm/icons/life-buoy.mjs:
lucide/dist/esm/icons/ligature.mjs:
lucide/dist/esm/icons/lightbulb-off.mjs:
lucide/dist/esm/icons/lightbulb.mjs:
lucide/dist/esm/icons/lighthouse.mjs:
lucide/dist/esm/icons/line-dot-right-horizontal.mjs:
lucide/dist/esm/icons/line-squiggle.mjs:
lucide/dist/esm/icons/line-style.mjs:
lucide/dist/esm/icons/link-2-off.mjs:
lucide/dist/esm/icons/link-2.mjs:
lucide/dist/esm/icons/link.mjs:
lucide/dist/esm/icons/list-check.mjs:
lucide/dist/esm/icons/list-checks.mjs:
lucide/dist/esm/icons/list-chevrons-down-up.mjs:
lucide/dist/esm/icons/list-chevrons-up-down.mjs:
lucide/dist/esm/icons/list-clock.mjs:
lucide/dist/esm/icons/list-collapse.mjs:
lucide/dist/esm/icons/list-end.mjs:
lucide/dist/esm/icons/list-filter-plus.mjs:
lucide/dist/esm/icons/list-filter.mjs:
lucide/dist/esm/icons/list-indent-decrease.mjs:
lucide/dist/esm/icons/list-indent-increase.mjs:
lucide/dist/esm/icons/list-minus.mjs:
lucide/dist/esm/icons/list-music.mjs:
lucide/dist/esm/icons/list-ordered.mjs:
lucide/dist/esm/icons/list-plus.mjs:
lucide/dist/esm/icons/list-sort-ascending.mjs:
lucide/dist/esm/icons/list-restart.mjs:
lucide/dist/esm/icons/list-sort-descending.mjs:
lucide/dist/esm/icons/list-start.mjs:
lucide/dist/esm/icons/list-todo.mjs:
lucide/dist/esm/icons/list-tree.mjs:
lucide/dist/esm/icons/list-video.mjs:
lucide/dist/esm/icons/list-x.mjs:
lucide/dist/esm/icons/list.mjs:
lucide/dist/esm/icons/loader-circle.mjs:
lucide/dist/esm/icons/loader-pinwheel.mjs:
lucide/dist/esm/icons/loader.mjs:
lucide/dist/esm/icons/locate-fixed.mjs:
lucide/dist/esm/icons/locate-off.mjs:
lucide/dist/esm/icons/locate.mjs:
lucide/dist/esm/icons/lock-keyhole-open.mjs:
lucide/dist/esm/icons/lock-keyhole.mjs:
lucide/dist/esm/icons/lock-open.mjs:
lucide/dist/esm/icons/lock.mjs:
lucide/dist/esm/icons/log-in.mjs:
lucide/dist/esm/icons/logs.mjs:
lucide/dist/esm/icons/log-out.mjs:
lucide/dist/esm/icons/lollipop.mjs:
lucide/dist/esm/icons/luggage.mjs:
lucide/dist/esm/icons/magnet.mjs:
lucide/dist/esm/icons/mail-badge.mjs:
lucide/dist/esm/icons/mail-check.mjs:
lucide/dist/esm/icons/mail-clock.mjs:
lucide/dist/esm/icons/mail-open.mjs:
lucide/dist/esm/icons/mail-minus.mjs:
lucide/dist/esm/icons/mail-pen.mjs:
lucide/dist/esm/icons/mail-plus.mjs:
lucide/dist/esm/icons/mail-question-mark.mjs:
lucide/dist/esm/icons/mail-search.mjs:
lucide/dist/esm/icons/mail-warning.mjs:
lucide/dist/esm/icons/mail.mjs:
lucide/dist/esm/icons/mail-x.mjs:
lucide/dist/esm/icons/mailbox.mjs:
lucide/dist/esm/icons/mails.mjs:
lucide/dist/esm/icons/map-minus.mjs:
lucide/dist/esm/icons/map-pin-check-inside.mjs:
lucide/dist/esm/icons/map-pin-check.mjs:
lucide/dist/esm/icons/map-pin-house.mjs:
lucide/dist/esm/icons/map-pin-minus-inside.mjs:
lucide/dist/esm/icons/map-pin-off.mjs:
lucide/dist/esm/icons/map-pin-minus.mjs:
lucide/dist/esm/icons/map-pin-pen.mjs:
lucide/dist/esm/icons/map-pin-plus-inside.mjs:
lucide/dist/esm/icons/map-pin-plus.mjs:
lucide/dist/esm/icons/map-pin-search.mjs:
lucide/dist/esm/icons/map-pin-x-inside.mjs:
lucide/dist/esm/icons/map-pin.mjs:
lucide/dist/esm/icons/map-pin-x.mjs:
lucide/dist/esm/icons/map-pinned.mjs:
lucide/dist/esm/icons/map-plus.mjs:
lucide/dist/esm/icons/map.mjs:
lucide/dist/esm/icons/mars-stroke.mjs:
lucide/dist/esm/icons/mars.mjs:
lucide/dist/esm/icons/martini.mjs:
lucide/dist/esm/icons/maximize-2.mjs:
lucide/dist/esm/icons/maximize.mjs:
lucide/dist/esm/icons/medal.mjs:
lucide/dist/esm/icons/megaphone-off.mjs:
lucide/dist/esm/icons/megaphone.mjs:
lucide/dist/esm/icons/memory-stick.mjs:
lucide/dist/esm/icons/menu.mjs:
lucide/dist/esm/icons/merge.mjs:
lucide/dist/esm/icons/message-circle-check.mjs:
lucide/dist/esm/icons/message-circle-code.mjs:
lucide/dist/esm/icons/message-circle-dashed-check.mjs:
lucide/dist/esm/icons/message-circle-dashed.mjs:
lucide/dist/esm/icons/message-circle-heart.mjs:
lucide/dist/esm/icons/message-circle-more.mjs:
lucide/dist/esm/icons/message-circle-off.mjs:
lucide/dist/esm/icons/message-circle-plus.mjs:
lucide/dist/esm/icons/message-circle-question-mark.mjs:
lucide/dist/esm/icons/message-circle-reply.mjs:
lucide/dist/esm/icons/message-circle-warning.mjs:
lucide/dist/esm/icons/message-circle-x.mjs:
lucide/dist/esm/icons/message-circle.mjs:
lucide/dist/esm/icons/message-square-check.mjs:
lucide/dist/esm/icons/message-square-code.mjs:
lucide/dist/esm/icons/message-square-dashed.mjs:
lucide/dist/esm/icons/message-square-diff.mjs:
lucide/dist/esm/icons/message-square-dot.mjs:
lucide/dist/esm/icons/message-square-heart.mjs:
lucide/dist/esm/icons/message-square-lock.mjs:
lucide/dist/esm/icons/message-square-more.mjs:
lucide/dist/esm/icons/message-square-off.mjs:
lucide/dist/esm/icons/message-square-plus.mjs:
lucide/dist/esm/icons/message-square-quote.mjs:
lucide/dist/esm/icons/message-square-reply.mjs:
lucide/dist/esm/icons/message-square-share.mjs:
lucide/dist/esm/icons/message-square-text.mjs:
lucide/dist/esm/icons/message-square-warning.mjs:
lucide/dist/esm/icons/message-square-x.mjs:
lucide/dist/esm/icons/message-square.mjs:
lucide/dist/esm/icons/messages-circle.mjs:
lucide/dist/esm/icons/messages-square.mjs:
lucide/dist/esm/icons/metronome.mjs:
lucide/dist/esm/icons/mic-audio-lines.mjs:
lucide/dist/esm/icons/mic-off.mjs:
lucide/dist/esm/icons/mic-vocal.mjs:
lucide/dist/esm/icons/mic.mjs:
lucide/dist/esm/icons/mic-signal.mjs:
lucide/dist/esm/icons/microchip.mjs:
lucide/dist/esm/icons/microscope.mjs:
lucide/dist/esm/icons/microwave.mjs:
lucide/dist/esm/icons/midi-port.mjs:
lucide/dist/esm/icons/milestone.mjs:
lucide/dist/esm/icons/milk-off.mjs:
lucide/dist/esm/icons/milk.mjs:
lucide/dist/esm/icons/minimize-2.mjs:
lucide/dist/esm/icons/minimize.mjs:
lucide/dist/esm/icons/minus.mjs:
lucide/dist/esm/icons/mirror-rectangular.mjs:
lucide/dist/esm/icons/mirror-round.mjs:
lucide/dist/esm/icons/monitor-check.mjs:
lucide/dist/esm/icons/monitor-cloud.mjs:
lucide/dist/esm/icons/monitor-cog.mjs:
lucide/dist/esm/icons/monitor-dot.mjs:
lucide/dist/esm/icons/monitor-down.mjs:
lucide/dist/esm/icons/monitor-off.mjs:
lucide/dist/esm/icons/monitor-pause.mjs:
lucide/dist/esm/icons/monitor-pc.mjs:
lucide/dist/esm/icons/monitor-play.mjs:
lucide/dist/esm/icons/monitor-smartphone.mjs:
lucide/dist/esm/icons/monitor-speaker.mjs:
lucide/dist/esm/icons/monitor-stop.mjs:
lucide/dist/esm/icons/monitor-up.mjs:
lucide/dist/esm/icons/monitor-x.mjs:
lucide/dist/esm/icons/monitor.mjs:
lucide/dist/esm/icons/moon-star.mjs:
lucide/dist/esm/icons/moon.mjs:
lucide/dist/esm/icons/mop-sparkles.mjs:
lucide/dist/esm/icons/mop.mjs:
lucide/dist/esm/icons/mosque.mjs:
lucide/dist/esm/icons/motorbike.mjs:
lucide/dist/esm/icons/mountain.mjs:
lucide/dist/esm/icons/mountain-snow.mjs:
lucide/dist/esm/icons/mouse-left.mjs:
lucide/dist/esm/icons/mouse-off.mjs:
lucide/dist/esm/icons/mouse-pointer-2-off.mjs:
lucide/dist/esm/icons/mouse-pointer-2.mjs:
lucide/dist/esm/icons/mouse-pointer-ban.mjs:
lucide/dist/esm/icons/mouse-right.mjs:
lucide/dist/esm/icons/mouse-pointer-click.mjs:
lucide/dist/esm/icons/mouse-pointer.mjs:
lucide/dist/esm/icons/mouse.mjs:
lucide/dist/esm/icons/mouth-off.mjs:
lucide/dist/esm/icons/mouth.mjs:
lucide/dist/esm/icons/move-3d.mjs:
lucide/dist/esm/icons/move-diagonal-2.mjs:
lucide/dist/esm/icons/move-diagonal.mjs:
lucide/dist/esm/icons/move-down-left.mjs:
lucide/dist/esm/icons/move-down-right.mjs:
lucide/dist/esm/icons/move-down.mjs:
lucide/dist/esm/icons/move-horizontal.mjs:
lucide/dist/esm/icons/move-left.mjs:
lucide/dist/esm/icons/move-right.mjs:
lucide/dist/esm/icons/move-up-left.mjs:
lucide/dist/esm/icons/move-up-right.mjs:
lucide/dist/esm/icons/move-up.mjs:
lucide/dist/esm/icons/move-vertical.mjs:
lucide/dist/esm/icons/music-2.mjs:
lucide/dist/esm/icons/move.mjs:
lucide/dist/esm/icons/music-3.mjs:
lucide/dist/esm/icons/music-4.mjs:
lucide/dist/esm/icons/music.mjs:
lucide/dist/esm/icons/navigation-2-off.mjs:
lucide/dist/esm/icons/navigation-2.mjs:
lucide/dist/esm/icons/navigation-off.mjs:
lucide/dist/esm/icons/navigation.mjs:
lucide/dist/esm/icons/network.mjs:
lucide/dist/esm/icons/nepali-rupee.mjs:
lucide/dist/esm/icons/newspaper.mjs:
lucide/dist/esm/icons/nfc.mjs:
lucide/dist/esm/icons/non-binary.mjs:
lucide/dist/esm/icons/notebook-dot.mjs:
lucide/dist/esm/icons/notebook-pen.mjs:
lucide/dist/esm/icons/notebook-tabs.mjs:
lucide/dist/esm/icons/notebook-text.mjs:
lucide/dist/esm/icons/notebook.mjs:
lucide/dist/esm/icons/notepad-text-dashed.mjs:
lucide/dist/esm/icons/notepad-text.mjs:
lucide/dist/esm/icons/nut-off.mjs:
lucide/dist/esm/icons/nut.mjs:
lucide/dist/esm/icons/octagon-alert.mjs:
lucide/dist/esm/icons/octagon-minus.mjs:
lucide/dist/esm/icons/octagon-pause.mjs:
lucide/dist/esm/icons/octagon-x.mjs:
lucide/dist/esm/icons/octagon.mjs:
lucide/dist/esm/icons/omega.mjs:
lucide/dist/esm/icons/option.mjs:
lucide/dist/esm/icons/orbit.mjs:
lucide/dist/esm/icons/origami.mjs:
lucide/dist/esm/icons/package-2.mjs:
lucide/dist/esm/icons/package-check.mjs:
lucide/dist/esm/icons/package-minus.mjs:
lucide/dist/esm/icons/package-open.mjs:
lucide/dist/esm/icons/package-plus.mjs:
lucide/dist/esm/icons/package-search.mjs:
lucide/dist/esm/icons/package-x.mjs:
lucide/dist/esm/icons/package.mjs:
lucide/dist/esm/icons/paint-bucket.mjs:
lucide/dist/esm/icons/paint-roller.mjs:
lucide/dist/esm/icons/paintbrush-vertical.mjs:
lucide/dist/esm/icons/palette.mjs:
lucide/dist/esm/icons/paintbrush.mjs:
lucide/dist/esm/icons/panda.mjs:
lucide/dist/esm/icons/panel-bottom-close.mjs:
lucide/dist/esm/icons/panel-bottom-dashed.mjs:
lucide/dist/esm/icons/panel-bottom-open.mjs:
lucide/dist/esm/icons/panel-bottom.mjs:
lucide/dist/esm/icons/panel-left-close.mjs:
lucide/dist/esm/icons/panel-left-dashed.mjs:
lucide/dist/esm/icons/panel-left-open.mjs:
lucide/dist/esm/icons/panel-left-right-dashed.mjs:
lucide/dist/esm/icons/panel-left.mjs:
lucide/dist/esm/icons/panel-right-close.mjs:
lucide/dist/esm/icons/panel-right-dashed.mjs:
lucide/dist/esm/icons/panel-right-open.mjs:
lucide/dist/esm/icons/panel-top-bottom-dashed.mjs:
lucide/dist/esm/icons/panel-right.mjs:
lucide/dist/esm/icons/panel-top-close.mjs:
lucide/dist/esm/icons/panel-top-dashed.mjs:
lucide/dist/esm/icons/panel-top-open.mjs:
lucide/dist/esm/icons/panel-top.mjs:
lucide/dist/esm/icons/panels-left-bottom.mjs:
lucide/dist/esm/icons/panels-right-bottom.mjs:
lucide/dist/esm/icons/panels-top-left.mjs:
lucide/dist/esm/icons/paper-bag.mjs:
lucide/dist/esm/icons/paperclip.mjs:
lucide/dist/esm/icons/parasol.mjs:
lucide/dist/esm/icons/parentheses.mjs:
lucide/dist/esm/icons/park.mjs:
lucide/dist/esm/icons/parking-meter.mjs:
lucide/dist/esm/icons/party-popper.mjs:
lucide/dist/esm/icons/pause.mjs:
lucide/dist/esm/icons/paw-print.mjs:
lucide/dist/esm/icons/pc-case.mjs:
lucide/dist/esm/icons/pen-line.mjs:
lucide/dist/esm/icons/pen-off.mjs:
lucide/dist/esm/icons/pen-tool.mjs:
lucide/dist/esm/icons/pen.mjs:
lucide/dist/esm/icons/pencil-line.mjs:
lucide/dist/esm/icons/pencil-ruler.mjs:
lucide/dist/esm/icons/pencil-sparkles.mjs:
lucide/dist/esm/icons/pencil-off.mjs:
lucide/dist/esm/icons/pencil.mjs:
lucide/dist/esm/icons/percent.mjs:
lucide/dist/esm/icons/pentagon.mjs:
lucide/dist/esm/icons/person-standing.mjs:
lucide/dist/esm/icons/phi.mjs:
lucide/dist/esm/icons/philippine-peso.mjs:
lucide/dist/esm/icons/phone-call.mjs:
lucide/dist/esm/icons/phone-forwarded.mjs:
lucide/dist/esm/icons/phone-incoming.mjs:
lucide/dist/esm/icons/phone-missed.mjs:
lucide/dist/esm/icons/phone-off.mjs:
lucide/dist/esm/icons/phone-outgoing.mjs:
lucide/dist/esm/icons/phone.mjs:
lucide/dist/esm/icons/pi.mjs:
lucide/dist/esm/icons/piano.mjs:
lucide/dist/esm/icons/pickaxe.mjs:
lucide/dist/esm/icons/picture-in-picture-2.mjs:
lucide/dist/esm/icons/picture-in-picture.mjs:
lucide/dist/esm/icons/piggy-bank.mjs:
lucide/dist/esm/icons/pilcrow-left.mjs:
lucide/dist/esm/icons/pilcrow-right.mjs:
lucide/dist/esm/icons/pilcrow.mjs:
lucide/dist/esm/icons/pill-bottle.mjs:
lucide/dist/esm/icons/pill.mjs:
lucide/dist/esm/icons/pin-off.mjs:
lucide/dist/esm/icons/pin.mjs:
lucide/dist/esm/icons/pipette.mjs:
lucide/dist/esm/icons/pizza.mjs:
lucide/dist/esm/icons/plane-landing.mjs:
lucide/dist/esm/icons/plane-takeoff.mjs:
lucide/dist/esm/icons/plane.mjs:
lucide/dist/esm/icons/plant-pot.mjs:
lucide/dist/esm/icons/play-off.mjs:
lucide/dist/esm/icons/play.mjs:
lucide/dist/esm/icons/playing-card.mjs:
lucide/dist/esm/icons/playing-cards-fan.mjs:
lucide/dist/esm/icons/playing-cards.mjs:
lucide/dist/esm/icons/plug-2.mjs:
lucide/dist/esm/icons/plug.mjs:
lucide/dist/esm/icons/plug-zap.mjs:
lucide/dist/esm/icons/plus.mjs:
lucide/dist/esm/icons/pocket-knife.mjs:
lucide/dist/esm/icons/podium.mjs:
lucide/dist/esm/icons/pointer-off.mjs:
lucide/dist/esm/icons/pointer.mjs:
lucide/dist/esm/icons/popcorn.mjs:
lucide/dist/esm/icons/popsicle.mjs:
lucide/dist/esm/icons/pound-sterling.mjs:
lucide/dist/esm/icons/power-off.mjs:
lucide/dist/esm/icons/power.mjs:
lucide/dist/esm/icons/presentation.mjs:
lucide/dist/esm/icons/printer-check.mjs:
lucide/dist/esm/icons/printer.mjs:
lucide/dist/esm/icons/printer-x.mjs:
lucide/dist/esm/icons/projector.mjs:
lucide/dist/esm/icons/proportions.mjs:
lucide/dist/esm/icons/puzzle.mjs:
lucide/dist/esm/icons/qr-code.mjs:
lucide/dist/esm/icons/pyramid.mjs:
lucide/dist/esm/icons/quote.mjs:
lucide/dist/esm/icons/rabbit.mjs:
lucide/dist/esm/icons/radar.mjs:
lucide/dist/esm/icons/radiation.mjs:
lucide/dist/esm/icons/radical.mjs:
lucide/dist/esm/icons/radio-off.mjs:
lucide/dist/esm/icons/radio-receiver.mjs:
lucide/dist/esm/icons/radio-tower.mjs:
lucide/dist/esm/icons/radio.mjs:
lucide/dist/esm/icons/radius.mjs:
lucide/dist/esm/icons/rainbow.mjs:
lucide/dist/esm/icons/rat.mjs:
lucide/dist/esm/icons/ratio.mjs:
lucide/dist/esm/icons/receipt-cent.mjs:
lucide/dist/esm/icons/receipt-indian-rupee.mjs:
lucide/dist/esm/icons/receipt-euro.mjs:
lucide/dist/esm/icons/receipt-japanese-yen.mjs:
lucide/dist/esm/icons/receipt-pound-sterling.mjs:
lucide/dist/esm/icons/receipt-russian-ruble.mjs:
lucide/dist/esm/icons/receipt-swiss-franc.mjs:
lucide/dist/esm/icons/receipt-text.mjs:
lucide/dist/esm/icons/receipt-turkish-lira.mjs:
lucide/dist/esm/icons/receipt.mjs:
lucide/dist/esm/icons/rectangle-circle.mjs:
lucide/dist/esm/icons/rectangle-ellipsis.mjs:
lucide/dist/esm/icons/rectangle-horizontal.mjs:
lucide/dist/esm/icons/rectangle-goggles.mjs:
lucide/dist/esm/icons/rectangle-vertical.mjs:
lucide/dist/esm/icons/recycle.mjs:
lucide/dist/esm/icons/redo-2.mjs:
lucide/dist/esm/icons/redo-dot.mjs:
lucide/dist/esm/icons/redo.mjs:
lucide/dist/esm/icons/refresh-ccw-dot.mjs:
lucide/dist/esm/icons/refresh-ccw.mjs:
lucide/dist/esm/icons/refresh-cw-off.mjs:
lucide/dist/esm/icons/refresh-cw.mjs:
lucide/dist/esm/icons/refrigerator.mjs:
lucide/dist/esm/icons/regex.mjs:
lucide/dist/esm/icons/remove-formatting.mjs:
lucide/dist/esm/icons/repeat-1.mjs:
lucide/dist/esm/icons/repeat-2.mjs:
lucide/dist/esm/icons/repeat.mjs:
lucide/dist/esm/icons/repeat-off.mjs:
lucide/dist/esm/icons/replace-all.mjs:
lucide/dist/esm/icons/replace.mjs:
lucide/dist/esm/icons/reply-all.mjs:
lucide/dist/esm/icons/reply.mjs:
lucide/dist/esm/icons/rewind.mjs:
lucide/dist/esm/icons/ribbon.mjs:
lucide/dist/esm/icons/road.mjs:
lucide/dist/esm/icons/robot-arm.mjs:
lucide/dist/esm/icons/robot-vacuum.mjs:
lucide/dist/esm/icons/rocket.mjs:
lucide/dist/esm/icons/rocking-chair.mjs:
lucide/dist/esm/icons/roller-coaster.mjs:
lucide/dist/esm/icons/rose.mjs:
lucide/dist/esm/icons/rotate-3d.mjs:
lucide/dist/esm/icons/rotate-ccw-clock.mjs:
lucide/dist/esm/icons/rotate-ccw-square.mjs:
lucide/dist/esm/icons/rotate-ccw-key.mjs:
lucide/dist/esm/icons/rotate-ccw.mjs:
lucide/dist/esm/icons/rotate-cw-clock.mjs:
lucide/dist/esm/icons/rotate-cw-square.mjs:
lucide/dist/esm/icons/rotate-cw-fading-clock.mjs:
lucide/dist/esm/icons/rotate-cw.mjs:
lucide/dist/esm/icons/route-off.mjs:
lucide/dist/esm/icons/route.mjs:
lucide/dist/esm/icons/router.mjs:
lucide/dist/esm/icons/rows-2.mjs:
lucide/dist/esm/icons/rows-3.mjs:
lucide/dist/esm/icons/rows-4.mjs:
lucide/dist/esm/icons/rss.mjs:
lucide/dist/esm/icons/ruler-dimension-line.mjs:
lucide/dist/esm/icons/ruler.mjs:
lucide/dist/esm/icons/sailboat.mjs:
lucide/dist/esm/icons/russian-ruble.mjs:
lucide/dist/esm/icons/salad.mjs:
lucide/dist/esm/icons/sandwich.mjs:
lucide/dist/esm/icons/satellite.mjs:
lucide/dist/esm/icons/satellite-dish.mjs:
lucide/dist/esm/icons/saudi-riyal.mjs:
lucide/dist/esm/icons/save-all.mjs:
lucide/dist/esm/icons/save-off.mjs:
lucide/dist/esm/icons/save-check.mjs:
lucide/dist/esm/icons/save-pen.mjs:
lucide/dist/esm/icons/save.mjs:
lucide/dist/esm/icons/save-plus.mjs:
lucide/dist/esm/icons/scale-3d.mjs:
lucide/dist/esm/icons/scale.mjs:
lucide/dist/esm/icons/scaling.mjs:
lucide/dist/esm/icons/scan-barcode.mjs:
lucide/dist/esm/icons/scan-box.mjs:
lucide/dist/esm/icons/scan-eye.mjs:
lucide/dist/esm/icons/scan-face.mjs:
lucide/dist/esm/icons/scan-heart.mjs:
lucide/dist/esm/icons/scan-line.mjs:
lucide/dist/esm/icons/scan-search.mjs:
lucide/dist/esm/icons/scan-qr-code.mjs:
lucide/dist/esm/icons/scan-square.mjs:
lucide/dist/esm/icons/scan-text.mjs:
lucide/dist/esm/icons/school.mjs:
lucide/dist/esm/icons/scan.mjs:
lucide/dist/esm/icons/scissors-line-dashed.mjs:
lucide/dist/esm/icons/scissors.mjs:
lucide/dist/esm/icons/scooter.mjs:
lucide/dist/esm/icons/screen-share-off.mjs:
lucide/dist/esm/icons/screen-share.mjs:
lucide/dist/esm/icons/scroll-text.mjs:
lucide/dist/esm/icons/search-alert.mjs:
lucide/dist/esm/icons/scroll.mjs:
lucide/dist/esm/icons/search-check.mjs:
lucide/dist/esm/icons/search-code.mjs:
lucide/dist/esm/icons/search-slash.mjs:
lucide/dist/esm/icons/search-x.mjs:
lucide/dist/esm/icons/search.mjs:
lucide/dist/esm/icons/section.mjs:
lucide/dist/esm/icons/send-to-back.mjs:
lucide/dist/esm/icons/send-horizontal.mjs:
lucide/dist/esm/icons/send.mjs:
lucide/dist/esm/icons/separator-vertical.mjs:
lucide/dist/esm/icons/separator-horizontal.mjs:
lucide/dist/esm/icons/server-cog.mjs:
lucide/dist/esm/icons/server-crash.mjs:
lucide/dist/esm/icons/server-off.mjs:
lucide/dist/esm/icons/server-plus.mjs:
lucide/dist/esm/icons/server.mjs:
lucide/dist/esm/icons/settings-2.mjs:
lucide/dist/esm/icons/settings.mjs:
lucide/dist/esm/icons/shapes.mjs:
lucide/dist/esm/icons/share-2.mjs:
lucide/dist/esm/icons/sheet.mjs:
lucide/dist/esm/icons/share.mjs:
lucide/dist/esm/icons/shell.mjs:
lucide/dist/esm/icons/shelving-unit.mjs:
lucide/dist/esm/icons/shield-alert.mjs:
lucide/dist/esm/icons/shield-ban.mjs:
lucide/dist/esm/icons/shield-check.mjs:
lucide/dist/esm/icons/shield-cog-corner.mjs:
lucide/dist/esm/icons/shield-cog.mjs:
lucide/dist/esm/icons/shield-ellipsis.mjs:
lucide/dist/esm/icons/shield-half.mjs:
lucide/dist/esm/icons/shield-keyhole.mjs:
lucide/dist/esm/icons/shield-lock.mjs:
lucide/dist/esm/icons/shield-minus.mjs:
lucide/dist/esm/icons/shield-plus.mjs:
lucide/dist/esm/icons/shield-question-mark.mjs:
lucide/dist/esm/icons/shield-off.mjs:
lucide/dist/esm/icons/shield-user.mjs:
lucide/dist/esm/icons/shield-x.mjs:
lucide/dist/esm/icons/shield.mjs:
lucide/dist/esm/icons/ship-cargo.mjs:
lucide/dist/esm/icons/ship-wheel.mjs:
lucide/dist/esm/icons/ship.mjs:
lucide/dist/esm/icons/shirt.mjs:
lucide/dist/esm/icons/shopping-bag.mjs:
lucide/dist/esm/icons/shopping-basket.mjs:
lucide/dist/esm/icons/shopping-cart-minus.mjs:
lucide/dist/esm/icons/shopping-cart-plus.mjs:
lucide/dist/esm/icons/shopping-cart.mjs:
lucide/dist/esm/icons/shovel.mjs:
lucide/dist/esm/icons/shredder.mjs:
lucide/dist/esm/icons/shower-head.mjs:
lucide/dist/esm/icons/shrimp-off.mjs:
lucide/dist/esm/icons/shrimp.mjs:
lucide/dist/esm/icons/shrink.mjs:
lucide/dist/esm/icons/shrub.mjs:
lucide/dist/esm/icons/shuffle.mjs:
lucide/dist/esm/icons/sigma.mjs:
lucide/dist/esm/icons/signal-high.mjs:
lucide/dist/esm/icons/signal-low.mjs:
lucide/dist/esm/icons/signal-medium.mjs:
lucide/dist/esm/icons/signal-zero.mjs:
lucide/dist/esm/icons/signature.mjs:
lucide/dist/esm/icons/signal.mjs:
lucide/dist/esm/icons/signpost-big.mjs:
lucide/dist/esm/icons/signpost.mjs:
lucide/dist/esm/icons/siren.mjs:
lucide/dist/esm/icons/skip-back.mjs:
lucide/dist/esm/icons/skip-forward.mjs:
lucide/dist/esm/icons/skull.mjs:
lucide/dist/esm/icons/slash.mjs:
lucide/dist/esm/icons/slice.mjs:
lucide/dist/esm/icons/sliders-horizontal.mjs:
lucide/dist/esm/icons/sliders-vertical.mjs:
lucide/dist/esm/icons/smartphone-charging.mjs:
lucide/dist/esm/icons/smartphone-nfc.mjs:
lucide/dist/esm/icons/smartphone.mjs:
lucide/dist/esm/icons/snail.mjs:
lucide/dist/esm/icons/snowflake.mjs:
lucide/dist/esm/icons/soap-dispenser-droplet.mjs:
lucide/dist/esm/icons/sofa.mjs:
lucide/dist/esm/icons/solar-panel.mjs:
lucide/dist/esm/icons/soup.mjs:
lucide/dist/esm/icons/space.mjs:
lucide/dist/esm/icons/spade.mjs:
lucide/dist/esm/icons/sparkle.mjs:
lucide/dist/esm/icons/sparkles.mjs:
lucide/dist/esm/icons/speaker.mjs:
lucide/dist/esm/icons/speech.mjs:
lucide/dist/esm/icons/spell-check-2.mjs:
lucide/dist/esm/icons/spell-check.mjs:
lucide/dist/esm/icons/spline-pointer.mjs:
lucide/dist/esm/icons/spline.mjs:
lucide/dist/esm/icons/split.mjs:
lucide/dist/esm/icons/spool.mjs:
lucide/dist/esm/icons/sport-shoe.mjs:
lucide/dist/esm/icons/spotlight.mjs:
lucide/dist/esm/icons/spray-can.mjs:
lucide/dist/esm/icons/sprout.mjs:
lucide/dist/esm/icons/square-activity.mjs:
lucide/dist/esm/icons/square-arrow-down-left.mjs:
lucide/dist/esm/icons/square-arrow-down-right.mjs:
lucide/dist/esm/icons/square-arrow-down.mjs:
lucide/dist/esm/icons/square-arrow-left.mjs:
lucide/dist/esm/icons/square-arrow-out-down-left.mjs:
lucide/dist/esm/icons/square-arrow-out-down-right.mjs:
lucide/dist/esm/icons/square-arrow-out-up-left.mjs:
lucide/dist/esm/icons/square-arrow-out-up-right.mjs:
lucide/dist/esm/icons/square-arrow-right-enter.mjs:
lucide/dist/esm/icons/square-arrow-right-exit.mjs:
lucide/dist/esm/icons/square-arrow-right.mjs:
lucide/dist/esm/icons/square-arrow-up-left.mjs:
lucide/dist/esm/icons/square-arrow-up-right.mjs:
lucide/dist/esm/icons/square-arrow-up.mjs:
lucide/dist/esm/icons/square-bookmark.mjs:
lucide/dist/esm/icons/square-asterisk.mjs:
lucide/dist/esm/icons/square-bottom-dashed-scissors.mjs:
lucide/dist/esm/icons/square-centerline-dashed-horizontal.mjs:
lucide/dist/esm/icons/square-centerline-dashed-vertical.mjs:
lucide/dist/esm/icons/square-chart-gantt.mjs:
lucide/dist/esm/icons/square-check-big.mjs:
lucide/dist/esm/icons/square-check.mjs:
lucide/dist/esm/icons/square-chevron-down.mjs:
lucide/dist/esm/icons/square-chevron-left.mjs:
lucide/dist/esm/icons/square-chevron-right.mjs:
lucide/dist/esm/icons/square-chevron-up.mjs:
lucide/dist/esm/icons/square-code.mjs:
lucide/dist/esm/icons/square-dashed-bottom-code.mjs:
lucide/dist/esm/icons/square-dashed-bottom.mjs:
lucide/dist/esm/icons/square-dashed-kanban.mjs:
lucide/dist/esm/icons/square-dashed-mouse-pointer.mjs:
lucide/dist/esm/icons/square-dashed-plus.mjs:
lucide/dist/esm/icons/square-dashed-text.mjs:
lucide/dist/esm/icons/square-dashed-top-solid.mjs:
lucide/dist/esm/icons/square-dashed-x-corner.mjs:
lucide/dist/esm/icons/square-dashed-x.mjs:
lucide/dist/esm/icons/square-dashed.mjs:
lucide/dist/esm/icons/square-dimensions.mjs:
lucide/dist/esm/icons/square-divide.mjs:
lucide/dist/esm/icons/square-dot.mjs:
lucide/dist/esm/icons/square-equal.mjs:
lucide/dist/esm/icons/square-exclamation-point.mjs:
lucide/dist/esm/icons/square-function.mjs:
lucide/dist/esm/icons/square-kanban.mjs:
lucide/dist/esm/icons/square-library.mjs:
lucide/dist/esm/icons/square-m.mjs:
lucide/dist/esm/icons/square-menu.mjs:
lucide/dist/esm/icons/square-minus.mjs:
lucide/dist/esm/icons/square-mouse-pointer.mjs:
lucide/dist/esm/icons/square-off.mjs:
lucide/dist/esm/icons/square-parking-off.mjs:
lucide/dist/esm/icons/square-parking.mjs:
lucide/dist/esm/icons/square-pause.mjs:
lucide/dist/esm/icons/square-pen.mjs:
lucide/dist/esm/icons/square-percent.mjs:
lucide/dist/esm/icons/square-pi.mjs:
lucide/dist/esm/icons/square-pilcrow.mjs:
lucide/dist/esm/icons/square-play.mjs:
lucide/dist/esm/icons/square-plus.mjs:
lucide/dist/esm/icons/square-power.mjs:
lucide/dist/esm/icons/square-radical.mjs:
lucide/dist/esm/icons/square-round-corner.mjs:
lucide/dist/esm/icons/square-scissors.mjs:
lucide/dist/esm/icons/square-sigma.mjs:
lucide/dist/esm/icons/square-slash.mjs:
lucide/dist/esm/icons/square-split-horizontal.mjs:
lucide/dist/esm/icons/square-split-vertical.mjs:
lucide/dist/esm/icons/square-square.mjs:
lucide/dist/esm/icons/square-stack.mjs:
lucide/dist/esm/icons/square-star.mjs:
lucide/dist/esm/icons/square-stop.mjs:
lucide/dist/esm/icons/square-terminal.mjs:
lucide/dist/esm/icons/square-text.mjs:
lucide/dist/esm/icons/square-user-round.mjs:
lucide/dist/esm/icons/square-user.mjs:
lucide/dist/esm/icons/square-x.mjs:
lucide/dist/esm/icons/square.mjs:
lucide/dist/esm/icons/squares-exclude.mjs:
lucide/dist/esm/icons/squares-intersect.mjs:
lucide/dist/esm/icons/squares-subtract.mjs:
lucide/dist/esm/icons/squares-unite.mjs:
lucide/dist/esm/icons/squircle-dashed.mjs:
lucide/dist/esm/icons/squircle.mjs:
lucide/dist/esm/icons/squirrel.mjs:
lucide/dist/esm/icons/stamp.mjs:
lucide/dist/esm/icons/star-check.mjs:
lucide/dist/esm/icons/star-half.mjs:
lucide/dist/esm/icons/star-minus.mjs:
lucide/dist/esm/icons/star-off.mjs:
lucide/dist/esm/icons/star-plus.mjs:
lucide/dist/esm/icons/star-x.mjs:
lucide/dist/esm/icons/star.mjs:
lucide/dist/esm/icons/step-back.mjs:
lucide/dist/esm/icons/step-forward.mjs:
lucide/dist/esm/icons/stethoscope.mjs:
lucide/dist/esm/icons/sticker.mjs:
lucide/dist/esm/icons/sticky-note-check.mjs:
lucide/dist/esm/icons/sticky-note-minus.mjs:
lucide/dist/esm/icons/sticky-note-off.mjs:
lucide/dist/esm/icons/sticky-note-plus.mjs:
lucide/dist/esm/icons/sticky-note-x.mjs:
lucide/dist/esm/icons/sticky-note.mjs:
lucide/dist/esm/icons/sticky-notes.mjs:
lucide/dist/esm/icons/stone.mjs:
lucide/dist/esm/icons/store.mjs:
lucide/dist/esm/icons/stretch-horizontal.mjs:
lucide/dist/esm/icons/stretch-vertical.mjs:
lucide/dist/esm/icons/strikethrough.mjs:
lucide/dist/esm/icons/subscript.mjs:
lucide/dist/esm/icons/summary.mjs:
lucide/dist/esm/icons/sun-dim.mjs:
lucide/dist/esm/icons/sun-medium.mjs:
lucide/dist/esm/icons/sun-moon.mjs:
lucide/dist/esm/icons/sun.mjs:
lucide/dist/esm/icons/sunrise.mjs:
lucide/dist/esm/icons/sun-snow.mjs:
lucide/dist/esm/icons/sunset.mjs:
lucide/dist/esm/icons/superscript.mjs:
lucide/dist/esm/icons/swatch-book.mjs:
lucide/dist/esm/icons/swiss-franc.mjs:
lucide/dist/esm/icons/switch-camera.mjs:
lucide/dist/esm/icons/sword.mjs:
lucide/dist/esm/icons/swords.mjs:
lucide/dist/esm/icons/syringe.mjs:
lucide/dist/esm/icons/table-2.mjs:
lucide/dist/esm/icons/table-cells-merge.mjs:
lucide/dist/esm/icons/table-cells-split.mjs:
lucide/dist/esm/icons/table-columns-split.mjs:
lucide/dist/esm/icons/table-of-contents.mjs:
lucide/dist/esm/icons/table-properties.mjs:
lucide/dist/esm/icons/table-rows-split.mjs:
lucide/dist/esm/icons/table.mjs:
lucide/dist/esm/icons/tablet.mjs:
lucide/dist/esm/icons/tablet-smartphone.mjs:
lucide/dist/esm/icons/tablets.mjs:
lucide/dist/esm/icons/tag-plus.mjs:
lucide/dist/esm/icons/tag-x.mjs:
lucide/dist/esm/icons/tag.mjs:
lucide/dist/esm/icons/tags.mjs:
lucide/dist/esm/icons/tally-1.mjs:
lucide/dist/esm/icons/tally-2.mjs:
lucide/dist/esm/icons/tally-3.mjs:
lucide/dist/esm/icons/tally-4.mjs:
lucide/dist/esm/icons/tally-5.mjs:
lucide/dist/esm/icons/tangent.mjs:
lucide/dist/esm/icons/telescope.mjs:
lucide/dist/esm/icons/target.mjs:
lucide/dist/esm/icons/tent-tree.mjs:
lucide/dist/esm/icons/tent.mjs:
lucide/dist/esm/icons/terminal.mjs:
lucide/dist/esm/icons/test-tube-diagonal.mjs:
lucide/dist/esm/icons/test-tube.mjs:
lucide/dist/esm/icons/test-tubes.mjs:
lucide/dist/esm/icons/text-align-center.mjs:
lucide/dist/esm/icons/text-align-end.mjs:
lucide/dist/esm/icons/text-align-justify.mjs:
lucide/dist/esm/icons/text-align-start.mjs:
lucide/dist/esm/icons/text-cursor-input.mjs:
lucide/dist/esm/icons/text-cursor.mjs:
lucide/dist/esm/icons/text-initial.mjs:
lucide/dist/esm/icons/text-quote.mjs:
lucide/dist/esm/icons/text-search.mjs:
lucide/dist/esm/icons/text-wrap.mjs:
lucide/dist/esm/icons/theater.mjs:
lucide/dist/esm/icons/thermometer-snowflake.mjs:
lucide/dist/esm/icons/thermometer-sun.mjs:
lucide/dist/esm/icons/thermometer.mjs:
lucide/dist/esm/icons/thumbs-down.mjs:
lucide/dist/esm/icons/thumbs-up.mjs:
lucide/dist/esm/icons/tic-tac-toe.mjs:
lucide/dist/esm/icons/ticket-check.mjs:
lucide/dist/esm/icons/ticket-minus.mjs:
lucide/dist/esm/icons/ticket-percent.mjs:
lucide/dist/esm/icons/ticket-plus.mjs:
lucide/dist/esm/icons/ticket-slash.mjs:
lucide/dist/esm/icons/ticket-x.mjs:
lucide/dist/esm/icons/ticket.mjs:
lucide/dist/esm/icons/tickets-plane.mjs:
lucide/dist/esm/icons/timeline.mjs:
lucide/dist/esm/icons/tickets.mjs:
lucide/dist/esm/icons/timer-off.mjs:
lucide/dist/esm/icons/timer-reset.mjs:
lucide/dist/esm/icons/timer.mjs:
lucide/dist/esm/icons/toggle-left.mjs:
lucide/dist/esm/icons/toggle-right.mjs:
lucide/dist/esm/icons/toilet.mjs:
lucide/dist/esm/icons/tool-case.mjs:
lucide/dist/esm/icons/toolbox.mjs:
lucide/dist/esm/icons/toothbrush-sparkles.mjs:
lucide/dist/esm/icons/tornado.mjs:
lucide/dist/esm/icons/torus.mjs:
lucide/dist/esm/icons/toothbrush.mjs:
lucide/dist/esm/icons/touchpad-off.mjs:
lucide/dist/esm/icons/towel-rack.mjs:
lucide/dist/esm/icons/touchpad.mjs:
lucide/dist/esm/icons/tower-control.mjs:
lucide/dist/esm/icons/toy-brick.mjs:
lucide/dist/esm/icons/tractor.mjs:
lucide/dist/esm/icons/traffic-cone.mjs:
lucide/dist/esm/icons/trailer.mjs:
lucide/dist/esm/icons/train-front-tunnel.mjs:
lucide/dist/esm/icons/train-front.mjs:
lucide/dist/esm/icons/tram-front.mjs:
lucide/dist/esm/icons/train-track.mjs:
lucide/dist/esm/icons/transgender.mjs:
lucide/dist/esm/icons/trash-off.mjs:
lucide/dist/esm/icons/trash.mjs:
lucide/dist/esm/icons/tree-deciduous.mjs:
lucide/dist/esm/icons/tree-palm.mjs:
lucide/dist/esm/icons/tree-pine.mjs:
lucide/dist/esm/icons/trees.mjs:
lucide/dist/esm/icons/trending-down.mjs:
lucide/dist/esm/icons/trending-up-down.mjs:
lucide/dist/esm/icons/trending-up.mjs:
lucide/dist/esm/icons/triangle-alert.mjs:
lucide/dist/esm/icons/triangle-dashed.mjs:
lucide/dist/esm/icons/triangle-right.mjs:
lucide/dist/esm/icons/triangle.mjs:
lucide/dist/esm/icons/triangles-centerline-dashed-horizontal.mjs:
lucide/dist/esm/icons/triangles-centerline-dashed-vertical.mjs:
lucide/dist/esm/icons/trophy.mjs:
lucide/dist/esm/icons/truck-electric.mjs:
lucide/dist/esm/icons/truck.mjs:
lucide/dist/esm/icons/tube-lotion.mjs:
lucide/dist/esm/icons/turkish-lira.mjs:
lucide/dist/esm/icons/turntable.mjs:
lucide/dist/esm/icons/turtle.mjs:
lucide/dist/esm/icons/tv-minimal-play.mjs:
lucide/dist/esm/icons/tv-minimal.mjs:
lucide/dist/esm/icons/tv.mjs:
lucide/dist/esm/icons/type-outline.mjs:
lucide/dist/esm/icons/type.mjs:
lucide/dist/esm/icons/umbrella-off.mjs:
lucide/dist/esm/icons/umbrella.mjs:
lucide/dist/esm/icons/undo-2.mjs:
lucide/dist/esm/icons/underline.mjs:
lucide/dist/esm/icons/undo-dot.mjs:
lucide/dist/esm/icons/undo.mjs:
lucide/dist/esm/icons/unfold-horizontal.mjs:
lucide/dist/esm/icons/unfold-vertical.mjs:
lucide/dist/esm/icons/university.mjs:
lucide/dist/esm/icons/ungroup.mjs:
lucide/dist/esm/icons/unlink-2.mjs:
lucide/dist/esm/icons/unplug.mjs:
lucide/dist/esm/icons/unlink.mjs:
lucide/dist/esm/icons/upload.mjs:
lucide/dist/esm/icons/usb-c-port.mjs:
lucide/dist/esm/icons/usb.mjs:
lucide/dist/esm/icons/user-check.mjs:
lucide/dist/esm/icons/user-cog.mjs:
lucide/dist/esm/icons/user-group.mjs:
lucide/dist/esm/icons/user-key.mjs:
lucide/dist/esm/icons/user-lock.mjs:
lucide/dist/esm/icons/user-minus.mjs:
lucide/dist/esm/icons/user-pen.mjs:
lucide/dist/esm/icons/user-plus.mjs:
lucide/dist/esm/icons/user-round-arrow-left.mjs:
lucide/dist/esm/icons/user-round-check.mjs:
lucide/dist/esm/icons/user-round-cog.mjs:
lucide/dist/esm/icons/user-round-group.mjs:
lucide/dist/esm/icons/user-round-key.mjs:
lucide/dist/esm/icons/user-round-minus.mjs:
lucide/dist/esm/icons/user-round-pen.mjs:
lucide/dist/esm/icons/user-round-plus.mjs:
lucide/dist/esm/icons/user-round-search.mjs:
lucide/dist/esm/icons/user-round-x.mjs:
lucide/dist/esm/icons/user-round.mjs:
lucide/dist/esm/icons/user-search.mjs:
lucide/dist/esm/icons/user-shield.mjs:
lucide/dist/esm/icons/user-star.mjs:
lucide/dist/esm/icons/user-x.mjs:
lucide/dist/esm/icons/user.mjs:
lucide/dist/esm/icons/users-round.mjs:
lucide/dist/esm/icons/users.mjs:
lucide/dist/esm/icons/utensils-crossed.mjs:
lucide/dist/esm/icons/utensils.mjs:
lucide/dist/esm/icons/utility-pole.mjs:
lucide/dist/esm/icons/van.mjs:
lucide/dist/esm/icons/variable.mjs:
lucide/dist/esm/icons/vault.mjs:
lucide/dist/esm/icons/vector-polygon.mjs:
lucide/dist/esm/icons/vector-square.mjs:
lucide/dist/esm/icons/vegan.mjs:
lucide/dist/esm/icons/venetian-mask.mjs:
lucide/dist/esm/icons/venus-and-mars.mjs:
lucide/dist/esm/icons/venus.mjs:
lucide/dist/esm/icons/vibrate-off.mjs:
lucide/dist/esm/icons/video-off.mjs:
lucide/dist/esm/icons/video.mjs:
lucide/dist/esm/icons/vibrate.mjs:
lucide/dist/esm/icons/videotape.mjs:
lucide/dist/esm/icons/view.mjs:
lucide/dist/esm/icons/virus.mjs:
lucide/dist/esm/icons/voicemail.mjs:
lucide/dist/esm/icons/virus-off.mjs:
lucide/dist/esm/icons/volleyball.mjs:
lucide/dist/esm/icons/volume-1.mjs:
lucide/dist/esm/icons/volume-2.mjs:
lucide/dist/esm/icons/volume-off.mjs:
lucide/dist/esm/icons/volume.mjs:
lucide/dist/esm/icons/vote.mjs:
lucide/dist/esm/icons/volume-x.mjs:
lucide/dist/esm/icons/wallet-cards.mjs:
lucide/dist/esm/icons/wallet.mjs:
lucide/dist/esm/icons/wallet-minimal.mjs:
lucide/dist/esm/icons/wallpaper.mjs:
lucide/dist/esm/icons/wand-sparkles.mjs:
lucide/dist/esm/icons/warehouse.mjs:
lucide/dist/esm/icons/wand.mjs:
lucide/dist/esm/icons/washing-machine.mjs:
lucide/dist/esm/icons/watch.mjs:
lucide/dist/esm/icons/waves-arrow-down.mjs:
lucide/dist/esm/icons/waves-arrow-up.mjs:
lucide/dist/esm/icons/waves-horizontal.mjs:
lucide/dist/esm/icons/waves-ladder.mjs:
lucide/dist/esm/icons/waves-vertical.mjs:
lucide/dist/esm/icons/webcam-off.mjs:
lucide/dist/esm/icons/waypoints.mjs:
lucide/dist/esm/icons/webcam.mjs:
lucide/dist/esm/icons/webhook-off.mjs:
lucide/dist/esm/icons/webhook.mjs:
lucide/dist/esm/icons/weight-tilde.mjs:
lucide/dist/esm/icons/weight.mjs:
lucide/dist/esm/icons/wheat-off.mjs:
lucide/dist/esm/icons/wheat.mjs:
lucide/dist/esm/icons/whistle.mjs:
lucide/dist/esm/icons/whole-word.mjs:
lucide/dist/esm/icons/wifi-cog.mjs:
lucide/dist/esm/icons/wifi-low.mjs:
lucide/dist/esm/icons/wifi-off.mjs:
lucide/dist/esm/icons/wifi-pen.mjs:
lucide/dist/esm/icons/wifi-high.mjs:
lucide/dist/esm/icons/wifi-sync.mjs:
lucide/dist/esm/icons/wifi-zero.mjs:
lucide/dist/esm/icons/wifi.mjs:
lucide/dist/esm/icons/wind-arrow-down.mjs:
lucide/dist/esm/icons/wind.mjs:
lucide/dist/esm/icons/wine-off.mjs:
lucide/dist/esm/icons/wine.mjs:
lucide/dist/esm/icons/workflow.mjs:
lucide/dist/esm/icons/worm.mjs:
lucide/dist/esm/icons/wrench-off.mjs:
lucide/dist/esm/icons/wrench.mjs:
lucide/dist/esm/icons/x-line-top.mjs:
lucide/dist/esm/icons/x.mjs:
lucide/dist/esm/icons/zap-off.mjs:
lucide/dist/esm/icons/zap.mjs:
lucide/dist/esm/icons/zodiac-aries.mjs:
lucide/dist/esm/icons/zodiac-aquarius.mjs:
lucide/dist/esm/icons/zodiac-capricorn.mjs:
lucide/dist/esm/icons/zodiac-cancer.mjs:
lucide/dist/esm/icons/zodiac-gemini.mjs:
lucide/dist/esm/icons/zodiac-leo.mjs:
lucide/dist/esm/icons/zodiac-libra.mjs:
lucide/dist/esm/icons/zodiac-ophiuchus.mjs:
lucide/dist/esm/icons/zodiac-pisces.mjs:
lucide/dist/esm/icons/zodiac-sagittarius.mjs:
lucide/dist/esm/icons/zodiac-scorpio.mjs:
lucide/dist/esm/icons/zodiac-taurus.mjs:
lucide/dist/esm/icons/zoom-in.mjs:
lucide/dist/esm/icons/zodiac-virgo.mjs:
lucide/dist/esm/icons/zoom-out.mjs:
lucide/dist/esm/iconsAndAliases.mjs:
lucide/dist/esm/lucide.mjs:
  (**
   * @license lucide v1.47.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
