import '@/assets/fonts/iconfont';

import { Skin } from '@/skin/skin';
// import { initLog as initLogs, gblog } from './logger';
import { AppModule } from '@/store/modules/app';
import { initMintUi } from './mintui-init';

/**
 * 加载用户主题
 */
const initTheme = () => {
  Skin.changeTheme(AppModule.themeType);
};

/**
 * 初始化日志
 */
const initLog = () => {
  // initLogs();
  // gblog.info('violet-seed start to init');
};

export { initTheme, initLog, initMintUi };
