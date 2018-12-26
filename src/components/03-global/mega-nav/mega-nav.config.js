module.exports = {
  title: "Mega Navigation",
  status: "prototype",
  context: {
    navItems: [
      { 
        id: "buy",
        label: "Buy",
        url: '#',
        subNavItems: [
          {
            label: "Open For Inspections Timetable",
            url: '#'
          },
          {
            label: "Auction Timetable",
            url: '#'
          },
          {
            label: "Set by Sale Date<sup>&reg;</sup> Timetable",
            url: '#'
          },
          {
            label: "Buyer Information",
            url: '#'
          }
        ]
      },
      { 
        id: "sell",
        label: "Sell",
        url: '#',
        subNavItems: [
          {
            label: "Sales Appraisal",
            url: '#'
          },
          {
            label: "Estimated Property Value",
            url: '#'
          },
          {
            label: "Seller Information",
            url: '#'
          },
          {
            label: "Sold Properties",
            url: '#'
          }
        ]
      },
      { 
        id: "rent",
        label: "Rent",
        url: '#',
        subNavItems: [
          {
            label: "Open for Inspections",
            url: '#'
          },
          {
            label: "Tenant Information",
            url: '#'
          }
        ]
      },
      { 
        id: "property-management",
        label: "Property Management",
        url: '#',
        subNavItems: [
          {
            label: "Landlord Information",
            url: '#'
          },
          {
            label: "Investor Information",
            url: '#'
          },
          {
            label: "Leased Properties",
            url: '#'
          }
        ]
      },
      { 
        id: "projects",
        label: "Projects",
        url: '#',
        subNavItems: [
          {
            label: "Developer Information",
            url: '#'
          },
          {
            label: "Current Projects",
            url: '#'
          },
          {
            label: "Sold Projects",
            url: '#'
          }
        ]
      },
      { 
        id: "about",
        label: "About",
        url: '#',
        subNavItems: [
          {
            label: "Our Network",
            url: '#'
          },
          {
            label: "Our Team",
            url: '#'
          },
          {
            label: "Franchise",
            url: '#'
          },
          {
            label: "Careers",
            url: '#'
          }
        ]
      }
    ],
    // apply the appropriate modifier, using the default nav items.
    headerNav: {
      navItems: '@nav.navItems',
      modifier: 'mega-nav'
    },
    officeHeaderNav: {
      navItems: '@nav.officeNavItems',
      modifier: 'mega-nav-office'
    }
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
