import Vue from 'vue'
import Router from 'vue-router'
import XhCountSetting from "../pages/XhCountSetting"
import XhPersonalMessage from "../pages/XhPersonalMessage"
import XhUpdatePassword from "../pages/XhUpdatePassword"
import XhUpdatePhone from "../pages/XhUpdatePhone"
import XhCountBind from "../pages/XhCountBind"
import XhDestoryCount from "../pages/XhDestoryCount"
import XhAddressManagement from "../pages/XhAddressManagement"
import XhCreateAddress from "../pages/XhCreateAddress"
import XhBillManagement from "../pages/XhBillManagement"
import XhCreateBill from "../pages/XhCreateBill"
import XhSetting from "../pages/XhSetting"
import XhComplaintFeedback from "../pages/XhComplaintFeedback"
import XhCollection from "../pages/XhCollection"


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/XhCountSetting",component:XhCountSetting},
    {path:"/XhPersonalMessage",component:XhPersonalMessage},
    {path:"/XhUpdatePassword",component:XhUpdatePassword},
    {path:"/XhUpdatePhone",component:XhUpdatePhone},
    {path:"/XhCountBind",component:XhCountBind},
    {path:"/XhDestoryCount",component:XhDestoryCount},
    {path:"/XhAddressManagement",component:XhAddressManagement},
    {path:"/XhCreateAddress",component:XhCreateAddress},
    {path:"/XhBillManagement",component:XhBillManagement},
    {path:"/XhCreateBill",component:XhCreateBill},
    {path:"/XhSetting",component:XhSetting},
    {path:"/XhComplaintFeedback",component:XhComplaintFeedback},
    {path:"/XhCollection",component:XhCollection},

  ]
})
