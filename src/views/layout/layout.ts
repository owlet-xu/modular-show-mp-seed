import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { AppModule } from '@/store/modules/app';
// componets
import Navbar from '@/components/layout/navbar/navbar.vue';
import AppMain from '@/components/layout/app-main/app-main';
import ResizeMixin from '@/common/mixin/resize-mixin';

@Component({
  components: {
    Navbar,
    AppMain
  }
})
export default class Layout extends mixins(ResizeMixin) {

  get deviceType() {
    return AppModule.deviceType;
  }
}
