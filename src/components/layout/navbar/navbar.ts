import { Vue, Component } from 'vue-property-decorator';
import { AppModule } from '@/store/modules/app';


/**
 * 头部
 */
@Component
export default class Navbar extends Vue {
  get deviceType() {
    return AppModule.deviceType;
  }
}
