import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Service from '../views/Service/Service.vue'
import ServiceInputForm from '../views/Service/ServiceInputForm.vue'
import ServicePay from '../views/Service/ServicePay.vue'
import ServiceIdentity from '../views/Service/ServiceIdentity.vue'
import ServiceIdentity_mypage from '../views/Service/ServiceIdentity_mypage.vue'
import ServicePayDone from '../views/Service/ServicePayDone.vue'
import SurveyList from '../views/SurveyList.vue'
import SurveyTemplate from '../views/SurveyTemplate.vue'
import KnowHow from '../views/KnowHow.vue'
import Story from '../views/Story.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login/Login.vue'
import Find from '../views/Login/Find.vue'
import Register from '../views/Login/Register.vue'
import RegisterDone from '../views/Login/RegisterDone.vue'
import MyPage from '../views/MyPage/MyPage.vue'
import SurveyResponse from '../views/SurveyResponse.vue'
import MyInfo from '../components/MyPage/MyInfo.vue'
import DashBoard from '../components/MyPage/DashBoard.vue'
import CouponPoint from '../components/MyPage/CouponPoint.vue'
import Payment from '../components/MyPage/Payment.vue'
import ListDetail from '../components/List/ListDetail.vue'
import RespondService from '../components/Contact/RespondService.vue'
import Template from '../components/Contact/Template.vue'
import MemberInfo from '../components/Contact/MemberInfo.vue'
import PaymentInfo from '../components/Contact/Payment.vue'
import FinalModal from '../components/Contact/ContactFinalModal.vue'
import AdminMain from '../views/Admin/AdminMain.vue'
import CouponAdmin from '../views/Admin/CouponAdmin.vue'
import Withdraw from '../views/MyPage/Withdraw.vue'
import Review from '../views/MyPage/Review.vue'
import ReviewDone from '../views/MyPage/ReviewDone.vue'
import ReviewDetail from '../views/MyPage/ReviewDetail.vue'
import ReviewDetailDone from '../views/MyPage/ReviewDetailDone.vue'
import Term1 from '../views/Term1.vue'
import Term2 from '../views/Term2.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/serviceinputform',
    name: 'ServiceInputForm',
    component: ServiceInputForm
  },
  {
    path: '/servicepay',
    name: 'ServicePay',
    component: ServicePay
  },
  {
    path: '/serviceidentity',
    name: 'ServiceIdentity',
    component: ServiceIdentity
  },
  {
    path: '/serviceidentity_mypage',
    name: 'ServiceIdentity_mypage',
    component: ServiceIdentity_mypage
  },
  {
    path: '/servicepaydone',
    name: 'ServicePayDone',
    component: ServicePayDone
  },
  {
    path: '/surveylist',
    name: 'SurveyList',
    component: SurveyList
  },
  {
    path: '/surveylist/:id',
    component: ListDetail
  },
  {
    path: '/surveytemplate',
    name: 'SurveyTemplate',
    component: SurveyTemplate
  },
  {
    path: '/knowhow',
    name: 'KnowHow',
    component: KnowHow
  },   
  {
    path: '/story',
    name: 'Story',
    component: Story
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    children: [
      { path: "respondService", component: RespondService },
      { path: "template", component: Template },
      { path: "memberInfo", component: MemberInfo },
      { path: "payment", component: PaymentInfo },
      { path: "finalmodal", component: FinalModal }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path : '/find-pw',
    name : 'Find',
    component : Find
  },
  
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/registerdone',
    name: 'RegisterDone',
    component: RegisterDone
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
    children: [
      { path: "payment", component: Payment },
      { path: "myinfo", component: MyInfo },
      { path: "dashboard", component: DashBoard },
      { path: "couponpoint", component: CouponPoint }
    ]
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw
  },
  {
    path: '/review/:id/:title',
   
    component: Review
  },
  {
    path: '/reviewdone/:id/:title',
    // name: 'Review',
    component: ReviewDone
  },
  {
    path: '/reviewdetail/:id/:title',
    // name: 'Review',
    component: ReviewDetail
  },
  {
    path: '/reviewdetaildone/:id/:title',
    // name: 'Review',
    component: ReviewDetailDone
  },
  {
    path: '/response',
    name: 'SurveyResponse',
    component: SurveyResponse
  },
  {
    path: '/terms1',
    name: 'Term1',
    component: Term1
  },
  {
    path: '/terms2',
    name: 'Term2',
    component: Term2
  },
  {
    path: '/adminmain',
    name: 'AdminMain',
    component: AdminMain
  },
  {
    path: '/couponadmin',
    name: 'CouponAdmin',
    component: CouponAdmin
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  
})


export default router
