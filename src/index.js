import '../style/index.css'
import TyhButton from '../packages/button'
import TyhList from '../packages/list'
import TyhCard from '../packages/card'
import TyhTag from '../packages/tag'
import TyhLink from '../packages/link'
import TyhMenu from '../packages/menu'
import TyhMenuItem from '../packages/menu-item'
import TyhDivision from '../packages/division'
import TyhIcon from '../packages/icon'
import TyhCrumbs from '../packages/crumbs'
import TyhCrumbsItem from '../packages/crumbs-item'
import TyhInput from '../packages/input'
import TyhTurnPage from '../packages/turn-page'
import TyhTurnPageItem from '../packages/turn-page-item'
import TyhBackTop from '../packages/back-top'
import TyhSkeleton from '../packages/skeleton'

const components = [
  TyhButton,
  TyhList,
  TyhCard,
  TyhTag,
  TyhLink,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhIcon,
  TyhCrumbs,
  TyhCrumbsItem,
  TyhInput,
  TyhTurnPage,
  TyhTurnPageItem,
  TyhBackTop,
  TyhSkeleton
]

const install = app => {
  components.forEach(component => {
    app.use(component)
  })
}

const tyhUi = {
  version: "1.0.6",
  install
}

export {
  install,
  TyhButton,
  TyhList,
  TyhCard,
  TyhTag,
  TyhLink,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhIcon,
  TyhCrumbs,
  TyhCrumbsItem,
  TyhInput,
  TyhTurnPage,
  TyhTurnPageItem,
  TyhBackTop,
  TyhSkeleton
}

export default tyhUi
