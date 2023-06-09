import { RiArticleLine, RiCoinsLine, RiContactsLine, RiCoupon2Line, RiCurrencyFill, RiExchangeDollarFill, RiHomeLine, RiImageLine, RiInboxUnarchiveFill, RiListUnordered, RiPagesLine, RiPercentLine, RiQuestionnaireLine, RiRefund2Line, RiSettings3Line, RiStore2Line, RiStore3Line, RiTruckLine, RiWalletLine, RiWindowLine } from "react-icons/ri";

const sidebarData = [
  {
    title: "Dashboard",
    displayTitle: "Dashboard",
    icon: <RiHomeLine style={{color:'white'}} />,
    path: "/dashboard",
    permission: ["store.index"]
  },
  {
    title: "User",
    displayTitle: "Users",
    icon: <RiContactsLine />,
    children: [
      { title: "AddUsers", path: "/user/create", displayTitle: "Add User", permission: ["user.index", "user.create"] },
      { title: "AllUsers", path: "/user", displayTitle: "All Users", permission: ["user.index"] },
      { title: "Role", path: "/role", displayTitle: "Role", permission: ["role.index"] },
    ],
  },
  {
    title: "Product",
    displayTitle: "Products",
    icon: <RiStore3Line />,
    children: [
      { title: "AddProduct", path: "/product/create", displayTitle: "Add Product" },
      { title: "AllProduct", path: "/product", displayTitle: "All Product" },
      { title: "AllAttributes", path: "/attribute", displayTitle: "All Attributes" },
      { title: "Categories", path: "/category/create", displayTitle: "Categories" },
      { title: "AllTag", path: "/tag", displayTitle: "All Tag" },
    ],
  },
  {
    title: "Store",
    displayTitle: "Store",
    icon: <RiStore2Line />,
    children: [
      { title: "AddStore", path: "/store/create", displayTitle: "Add Store" },
      { title: "AllStores", path: "/store", displayTitle: "All Stores" },
      { title: "Wallets", path: "/vendor_wallet", displayTitle: "Wallets" },
      { title: "CommissionHistory", path: "/commission_history", displayTitle: "Commission History" },
      { title: "PaymentDetails", path: "/payment_account", displayTitle: "Payment Details" },
    ],
  },
  {
    title: "Order",
    displayTitle: "Orders",
    icon: <RiListUnordered />,
    children: [
      { title: "AllOrders", path: "/order", displayTitle: "All Orders" },
      { title: "CreateOrder", path: "/order/create", displayTitle: "Create Order" },
      { title: "OrderStatus", path: "/order_status", displayTitle: "Order Status" },
    ],
  },
  {
    title: "attachment",
    displayTitle: "Media",
    icon: <RiImageLine />,
    path: "/attachment",
  },
  {
    title: "Blog",
    displayTitle: "Blog",
    icon: <RiArticleLine />,
    children: [
      { title: "AllBlog", path: "/blog", displayTitle: "All Blog" },
      { title: "AddBlog", path: "/blog/create", displayTitle: "Add Blog" },
      { title: "Category", path: "/blog/category/create", displayTitle: "Category" },
      { title: "Tags", path: "/blog/tag", displayTitle: "Tags" },
    ],
  },
  {
    title: "Page",
    displayTitle: "Pages",
    icon: <RiPagesLine />,
    path: "/page"
  },
  {
    title: "Tax",
    displayTitle: "Taxes",
    icon: <RiPercentLine />,
    path: "/tax"
  },

  {
    title: "Shipping",
    displayTitle: "Shipping",
    icon: <RiTruckLine />,
    path: "/shipping",
  },
  {
    title: "Coupon",
    displayTitle: "Coupons",
    icon: <RiCoupon2Line />,
    path: "/coupon",
  },
  {
    title: "Currency",
    displayTitle: "Currency",
    icon: <RiCurrencyFill />,
    path: "/currency",
  },
  {
    title: "Point",
    displayTitle: "Point",
    icon: <RiCoinsLine />,
    path: "/point",
  },
  {
    title: "Wallet",
    displayTitle: "Wallet",
    icon: <RiWalletLine />,
    path: "/wallet",
  },
  {
    title: "Refund",
    displayTitle: "Refund",
    icon: <RiExchangeDollarFill />,
    path: "/refund",
  },
  {
    title: "withdraw_request",
    displayTitle: "Withdrawal",
    icon: <RiInboxUnarchiveFill />,
    path: "/withdraw_request",
  },
  {
    title: "Review",
    displayTitle: "Reviews",
    icon: <RiRefund2Line />,
    path: "/review",
  },
  {
    title: "faq",
    displayTitle: "FAQ's",
    icon: <RiQuestionnaireLine />,
    path: "/faq",
  },
  {
    title: "Theme",
    displayTitle: "Store Front",
    icon: <RiWindowLine />,
    children: [
      { title: "Theme", path: "/theme", displayTitle: "Theme" },
      { title: "theme_option", path: "/theme_option", displayTitle: "Theme Option" }
    ],
  },
  {
    title: "Setting",
    displayTitle: "Settings",
    icon: <RiSettings3Line />,
    path: "/setting",
  }
];
export default sidebarData;