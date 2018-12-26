module.exports = {
  title: "Header",
  status: "prototype",
  context: {
    navItems: '@nav.navItems',
    officeNavItems: '@nav.officeNavItems',
    secondaryNavItems: '@secondary-nav.navItems'
  },
  variants: [
    {
      name: 'office',
      context: {
        modifier: 'office',
        office: 'Dandenong Rentals'
      }
    }
  ]
};
