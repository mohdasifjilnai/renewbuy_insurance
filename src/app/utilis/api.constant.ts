export class ApiConstants {
  public static Home: string = "/api/home/";
  public static INSURANCE_HOME: string = "/api/insurance-home";
  public static MOTOR_INSURANCE: string = "/api/motor-insurance";
  public static HEALTH_INSURANCE: string = "/api/health-insurance";
  public static LIFE_INSURANCE:string='/api/life-insurance';
  public static Curated_tags: string =
    "/api/tags?populate=blogs.thumbnail,blogs.mobile_thumbnail&sort=id:asc";
  public static Footer: string = "/api/footers";

  public static Header: string =
    "/api/header-menus?populate[menu_icon]=*&populate[menu_items][populate]=sub_menu&sort=id:asc";

  public static FAQ_tags: string = "/api/faq-tags?populate=*";
  public static Generate_otp: string = "/api/v1/unicorn/auth/otp/generate-otp";

  // api for Verify otp
  public static verify_otp: string = "/api/v1/unicorn/auth/otp/verify-otp";

  //get user profile Details api
  public static Get_user_details: string =
    "/api/v1/unicorn/auth/user/user-details";

  //patch user profile details api
  public static Update_user_details: string =
    "/api/v1/unicorn/auth/user/user-details";

  //post api of family details
  public static Post_family_details: string =
    "/api/v1/unicorn/customer/family-details";

  //get family details api
  public static Get_family_details: string =
    "/api/v1/unicorn/customer/family-details";

  public static Get_cities: string = "/api/v1/search/city/?term=";

  public static Delete_Family_member: string =
    "/api/v1/unicorn/customer/family-details/";

  public static GET_POLICIES: string = "/api/v1/unicorn/customer/policies/";

  public static Upload_policy: string =
    "/api/v1/unicorn/customer/policies/upload_policy";

  public static GET_CITY: string = "api/v1/search/city";

  public static subscribe_email: string = "/api/v1/unicorn/newsletter/";

  public static POST_COSTOMER_LEAD: string = "/api/v1/unicorn/customer/leads";
  public static Verfy_family_number: string =
    "/api/v1/unicorn/auth/otp/verify-mobile";

  public static FETCH_LEADS: string = "/api/v1/unicorn/customer/leads";
  public static INSURER_LOGO: string = "/api/insurers?populate=insurer_logo.*";
  public static CASHLESS_GARAGES: string = `/api/cashless-garages`;

  public static CASHLESS_HOSPITAL: string = `/api/cashless-hospitals`;
  public static LOGOUT: string = `/api/v1/unicorn/auth/user/logout`;

  public static REDIRECT: string = `api/v1/unicorn/redirect/`;
}
