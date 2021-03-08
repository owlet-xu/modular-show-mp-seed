import { Vue, Component } from 'vue-property-decorator';
import { AppModule } from '@/store/modules/app';
// route
import { RouterName } from '@/router/router-type';
// models
import { FormStateType } from '@/common/enums/form-state-type';


@Component
export default class Login extends Vue {
  loading = false;
  loginForm: any = {
    email: 'admin@xgy.com',
    password: '123456'
  };
  loginFormState: any = {
    email: '',
    password: ''
  };

  public handleLogin() {
    let valid = true;
    for (const key in this.loginForm) {
      if (!this.loginForm[key]) {
        valid = false;
        this.loginFormState[key] = FormStateType.error;
        this.$toast({
          message: `${key} 不能为空`,
          position: 'bottom',
          duration: 5000
        });
      } else {
        this.loginFormState[key] = '';
      }
    }
    if (valid) {
      this.loading = true;
      AppModule.setMenus();
      this.$router.push({ name: RouterName.Messages });
    } else {
      console.log('error submit!!');
      return false;
    }
  }
}
