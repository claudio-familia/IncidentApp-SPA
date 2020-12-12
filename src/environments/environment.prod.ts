export const environment = {
  production: true
};

export const config: any = {
	ApiUrl: 'https://incidentapp-api.herokuapp.com/api'
};

export class AppSettings {
  getModalBasicConf(): any {
    return {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      windowClass: 'animated slideInDown',
      centered: true,
    };
  }
}