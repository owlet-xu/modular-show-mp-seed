/* SystemJS module definition */
declare var module: NodeModule;


declare module '*.json' {
  const data: any;
  export default data;
}

declare module "mint-ui";

declare module 'animate.css' {
  const animate: any;
  export default animate;
}
