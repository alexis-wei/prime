import * as MDI from '@mdi/js';

/**
 * Keys should match MDI name
 * e.g. 'account-multiple' for MDI.mdiAccountMultiple
 */
export const paths = {
  'account-multiple': MDI.mdiAccountMultiple,
  'alert-circle-outline': MDI.mdiAlertCircleOutline,
  'alert-circle': MDI.mdiAlertCircle,
  'alert-outline': MDI.mdiAlertOutline,
  alert: MDI.mdiAlert,
  'apple-keyboard-command': MDI.mdiAppleKeyboardCommand,
  'arrow-collapse-left': MDI.mdiArrowCollapseLeft,
  'arrow-collapse-right': MDI.mdiArrowCollapseRight,
  'arrow-expand-all': MDI.mdiArrowExpandAll,
  'arrow-expand-left': MDI.mdiArrowExpandLeft,
  'arrow-expand-right': MDI.mdiArrowExpandRight,
  'arrow-left': MDI.mdiArrowLeft,
  'arrow-right': MDI.mdiArrowRight,
  'arrow-top-right-bottom-left': MDI.mdiArrowTopRightBottomLeft,
  'arrow-up': MDI.mdiArrowUp,
  'axis-arrow': MDI.mdiAxisArrow,
  'broadcast-off': MDI.mdiBroadcastOff,
  broadcast: MDI.mdiBroadcast,
  'camera-flip-outline': MDI.mdiCameraFlipOutline,
  'camera-outline': MDI.mdiCameraOutline,
  cancel: MDI.mdiCancel,
  'check-circle': MDI.mdiCheckCircle,
  check: MDI.mdiCheck,
  'chevron-up': MDI.mdiChevronUp,
  'chevron-right': MDI.mdiChevronRight,
  'chevron-down': MDI.mdiChevronDown,
  'chevron-left': MDI.mdiChevronLeft,
  close: MDI.mdiClose,
  'code-braces': MDI.mdiCodeBraces,
  cog: MDI.mdiCog,
  'content-copy': MDI.mdiContentCopy,
  'content-duplicate': MDI.mdiContentDuplicate,
  'content-save-outline': MDI.mdiContentSaveOutline,
  'credit-card-outline': MDI.mdiCreditCardOutline,
  'dots-horizontal': MDI.mdiDotsHorizontal,
  download: MDI.mdiDownload,
  earth: MDI.mdiEarth,
  'file-download-outline': MDI.mdiFileDownloadOutline,
  'filter-outline': MDI.mdiFilterOutline,
  github: MDI.mdiGithub,
  'help-circle-outline': MDI.mdiHelpCircleOutline,
  'image-filter-center-focus': MDI.mdiImageFilterCenterFocus,
  'information-outline': MDI.mdiInformationOutline,
  information: MDI.mdiInformation,
  instagram: MDI.mdiInstagram,
  linkedin: MDI.mdiLinkedin,
  lock: MDI.mdiLockOutline,
  logout: MDI.mdiLogout,
  magnify: MDI.mdiMagnify,
  menu: MDI.mdiMenu,
  minus: MDI.mdiMinus,
  'open-in-new': MDI.mdiOpenInNew,
  'package-variant-closed': MDI.mdiPackageVariantClosed,
  'pause-circle-outline': MDI.mdiPauseCircleOutline,
  'pencil-outline': MDI.mdiPencilOutline,
  'play-circle-outline': MDI.mdiPlayCircleOutline,
  plus: MDI.mdiPlus,
  'radiobox-blank': MDI.mdiRadioboxBlank,
  'radiobox-indeterminate-variant': MDI.mdiRadioboxIndeterminateVariant,
  'radiobox-marked': MDI.mdiRadioboxMarked,
  refresh: MDI.mdiRefresh,
  'selection-ellipse': MDI.mdiSelectionEllipse,
  send: MDI.mdiSend,
  'stop-circle-outline': MDI.mdiStopCircleOutline,
  tools: MDI.mdiTools,
  'trash-can-outline': MDI.mdiTrashCanOutline,
  twitter: MDI.mdiTwitter,
  undo: MDI.mdiUndo,
  'video-outline': MDI.mdiVideoOutline,
  'account-group-outline': MDI.mdiAccountGroupOutline,
  'robot-outline': MDI.mdiRobotOutline,
  domain: MDI.mdiDomain,
  'database-outline': MDI.mdiDatabaseOutline,
  'viam-component':
    'M12.0001 3.95547L3.95547 12.0001L12.0001 20.0448L20.0448 12.0001L12.0001 3.95547ZM12.5305 1.62201C12.2376 1.32912 11.7627 1.32912 11.4698 1.62201L1.62201 11.4698C1.32912 11.7627 1.32912 12.2376 1.62201 12.5305L11.4698 22.3782C11.7627 22.6711 12.2376 22.6711 12.5305 22.3782L22.3782 12.5305C22.6711 12.2376 22.6711 11.7627 22.3782 11.4698L12.5305 1.62201Z',
  'viam-service':
    'M10.6 9.6L9 15L7.4 9.6L2 8L7.4 6.4L9 1L10.6 6.4L16 8L10.6 9.6ZM17 14.2L21 12L18.8 16L21 20L17 17.8L13 20L15.2 16L13 12L17 14.2ZM10 16L8.3 19L10 22L7 20.3L4 22L5.7 19L4 16L7 17.7L10 16Z',
  'viam-registry-module':
    'M3 21V3H21V21H3ZM5.025 18.975H18.975V5.025H14.3238V9.67362H9.68151V14.3464H5.025V18.975Z',
  'viam-local-module':
    'M3 3V21H21V3H3ZM8.61563 12.8762H5.025V5.025H12.9922V8.61184H8.61563V12.8762ZM5.025 18.975H18.975V5.025H15.0172V10.6368H10.6406V14.9012H5.025V18.975Z',
  'viam-remote-part':
    'M4 6.00049V4.00049C7.1826 4.00049 10.2348 5.26477 12.4853 7.51521C14.7357 9.76564 16 12.8179 16 16.0005H14C14 14.6873 13.7413 13.3869 13.2388 12.1737C12.7362 10.9604 11.9997 9.85801 11.0711 8.92942C10.1425 8.00083 9.04009 7.26424 7.82683 6.76169C6.61358 6.25915 5.31322 6.00049 4 6.00049ZM4 10.0005V8.00049C6.12173 8.00049 8.15656 8.84334 9.65685 10.3436C11.1571 11.8439 12 13.8788 12 16.0005H10C10 14.4092 9.36786 12.8831 8.24264 11.7578C7.11742 10.6326 5.5913 10.0005 4 10.0005ZM4 12.0005C5.06087 12.0005 6.07828 12.4219 6.82843 13.1721C7.57857 13.9222 8 14.9396 8 16.0005H4V12.0005ZM3 18.0005H19V16.0005L22 19.0005L19 22.0005V20.0005H3V18.0005Z',
  'viam-process':
    'M9 14H14V15.7C13.9 15.8 13.9 15.9 13.8 16H9V14ZM9 12H14V10H9V12ZM9 8H14V6H9V8ZM7 5C7 4.4 7.4 4 8 4H16V13.8C16.6 13.4 17.3 13.2 18 13.1V5C18 4.4 18.4 4 19 4C19.6 4 20 4.4 20 5V6H22V5C22 3.3 20.7 2 19 2H8C6.3 2 5 3.3 5 5V16H7V5ZM13 19V18.4V18H2V19C2 20.7 3.3 22 5 22H13.8C13.3 21.1 13 20.1 13 19ZM17 16V22L22 19L17 16Z',
  'viam-fragment':
    'M17 22V20H20V17H22V20.5C22 20.89 21.84 21.24 21.54 21.54C21.24 21.84 20.89 22 20.5 22H17ZM7 22H3.5C3.11 22 2.76 21.84 2.46 21.54C2.16 21.24 2 20.89 2 20.5V17H4V20H7V22ZM17 2H20.5C20.89 2 21.24 2.16 21.54 2.46C21.84 2.76 22 3.11 22 3.5V7H20V4H17V2ZM7 2V4H4V7H2V3.5C2 3.11 2.16 2.76 2.46 2.46C2.76 2.16 3.11 2 3.5 2H7ZM13 17.25L17 14.95V10.36L13 12.66V17.25ZM12 10.92L16 8.63L12 6.28L8 8.63L12 10.92ZM7 14.95L11 17.25V12.66L7 10.36V14.95ZM18.23 7.59C18.73 7.91 19 8.34 19 8.91V15.23C19 15.8 18.73 16.23 18.23 16.55L12.75 19.73C12.25 20.05 11.75 20.05 11.25 19.73L5.77 16.55C5.27 16.23 5 15.8 5 15.23V8.91C5 8.34 5.27 7.91 5.77 7.59L11.25 4.41C11.5 4.28 11.75 4.22 12 4.22C12.25 4.22 12.5 4.28 12.75 4.41L18.23 7.59Z',
  'viam-ml-model':
    'M22.0505 4.2752C22.0505 5.55926 21.0096 6.6002 19.7255 6.6002C19.4768 6.6002 19.2372 6.56114 19.0125 6.48884L16.1988 10.0142C16.4567 10.4204 16.606 10.9022 16.606 11.4189C16.606 12.0489 16.3841 12.6269 16.0142 13.0793L19.1364 17.4766C19.3246 17.4275 19.522 17.4014 19.7255 17.4014C21.0096 17.4014 22.0505 18.4423 22.0505 19.7264C22.0505 21.0104 21.0096 22.0514 19.7255 22.0514C18.7278 22.0514 17.8769 21.423 17.547 20.5404H6.45394C6.12418 21.4233 5.27311 22.052 4.2752 22.052C2.99113 22.052 1.9502 21.011 1.9502 19.727C1.9502 18.4429 2.99113 17.402 4.2752 17.402C4.69351 17.402 5.08602 17.5124 5.42514 17.7058L11.6285 12.585C11.4541 12.2337 11.356 11.8378 11.356 11.4189C11.356 11.1053 11.411 10.8045 11.5119 10.5256L5.5638 6.2119C5.19497 6.45794 4.75183 6.60137 4.2752 6.60137C2.99113 6.60137 1.9502 5.56043 1.9502 4.27637C1.9502 2.99231 2.99113 1.95137 4.2752 1.95137C5.27266 1.95137 6.12342 2.5795 6.4535 3.46179H17.5467C17.8765 2.57888 18.7276 1.9502 19.7255 1.9502C21.0096 1.9502 22.0505 2.99113 22.0505 4.2752ZM13.981 14.0439C13.5543 14.0439 13.1514 13.9421 12.7952 13.7615L6.58202 18.8904H17.5553C17.6176 18.7287 17.6975 18.5758 17.7925 18.4339L14.6199 13.9656C14.4154 14.0168 14.2013 14.0439 13.981 14.0439ZM13.981 8.79395C13.4462 8.79395 12.9487 8.95388 12.5338 9.22853L6.85736 5.11179H17.5555C17.6021 5.23256 17.6585 5.34847 17.7237 5.45853L14.9228 8.96795C14.6304 8.85555 14.3129 8.79395 13.981 8.79395Z',
} as const;

/**
 * The possible icon names that can be rendered. This is good for typing props.
 */
export type IconName = keyof typeof paths;
