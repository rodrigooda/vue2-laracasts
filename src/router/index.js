import Vue from 'vue'
import Router from 'vue-router'
import LE01 from '@/components/LE01'
import LE03 from '@/components/LE03'
import LE04 from '@/components/LE04'
import LE05 from '@/components/LE05'
import LE06 from '@/components/LE06'
import LE07 from '@/components/LE07'
import LE08 from '@/components/LE08'
import LE09 from '@/components/LE09'
import LE10 from '@/components/LE10'
import LE11 from '@/components/LE11'
import LE12 from '@/components/LE12'
import LE13 from '@/components/LE13'
import LE14 from '@/components/LE14'
import LE15 from '@/components/LE15'
import LE16 from '@/components/LE16'
import LE17 from '@/components/LE17'
import LE18 from '@/components/LE18'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/le01',
      name: 'LE01',
      component: LE01
    },
    {
      path: '/le03',
      name: 'LE03',
      component: LE03
    },
    {
      path: '/le04',
      name: 'LE04',
      component: LE04
    },
    {
      path: '/le05',
      name: 'LE05',
      component: LE05
    },
    {
      path: '/le06',
      name: 'LE06',
      component: LE06
    },
    {
      path: '/le07',
      name: 'LE07',
      component: LE07
    },
    {
      path: '/le08',
      name: 'LE08',
      component: LE08
    },
    {
      path: '/le09',
      name: 'LE09',
      component: LE09
    },
    {
      path: '/le10',
      name: 'LE10',
      component: LE10
    },
    {
      path: '/le11',
      name: 'LE11',
      component: LE11
    },
        {
      path: '/le12',
      name: 'LE12',
      component: LE12
    },
    {
      path: '/le13',
      name: 'LE13',
      component: LE13
    },
    {
      path: '/le14',
      name: 'LE14',
      component: LE14
    },
    {
      path: '/le15',
      name: 'LE15',
      component: LE15
    },
    {
      path: '/le16',
      name: 'LE16',
      component: LE16
    },
    {
      path: '/le17',
      name: 'LE17',
      component: LE17
    },
    {
      path: '/le18',
      name: 'LE18',
      component: LE18
    }
  ]
})
