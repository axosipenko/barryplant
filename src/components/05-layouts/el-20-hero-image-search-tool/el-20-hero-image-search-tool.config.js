module.exports = {
  title: "Search",
  context: {
    title: 'Welcome to Victoria’s largest real estate network.',
    searchBtnLabel: '- search',

      formFields: {
          searchRegion : {
              fieldType : 'lookup',
              fieldState : '',
              stateMessage : '',
              key : 'searchRegion',
              placeholder : 'Address, suburb, postcode or region',

          },
          keywords : {
              fieldType : 'lookup',
              key: 'keywords',
              placeholder : 'Keyword (e.g. Pool, Tennis Court)',
          },

          listingType : {
                placeholder : 'Buy', // or rent?
            //  fieldState : 'error',
            //  stateMessage : 'This field is required',
                options : [
                  {
                      key : 'buy',
                      label : 'Buy'
                  },
                  {
                      key : 'rent',
                      label : 'Rent'
                  },
                ]
          },
          propertyClassification:{
            placeholder: 'Classification',
            options : [
                {
                    key : 'residential',
                    label : 'Residential'
                },
                {
                    key : 'commercial',
                    label : 'Commercial'
                },
                {
                    key : 'rural',
                    label : 'Rural'
                },
                {
                    key : 'business',
                    label : 'Business'
                },
            ]
          },
          propertyType:{
              placeholder: 'All Property types',
              options : [
                  { key : 'All' , label : 'All Types'},
                  { key : 'All Types' , label : 'All Types'},
                  { key : 'Acreage' , label : 'Acreage'},
                  { key : 'Apartment' , label : 'Apartment'},
                  { key : '' , label : 'Apartment Block'},
                  { key : '' , label : 'Development Site'},
                  { key : '' , label : 'Duplex'},
                  { key : '' , label : 'House'},
                  { key : '' , label : 'House and Land Package'},
                  { key : '' , label : 'Lifestyle'},
                  { key : '' , label : 'Multiple Houses'},
                  { key : '' , label : 'New Land Sub division'},
                  { key : '' , label : 'Semi Detached'},
                  { key : '' , label : 'Studio Apartment'},
                  { key : '' , label : 'Townhouse'},
                  { key : '' , label : 'Unit'},
                  { key : '' , label : 'Vacant Land'},
                  { key : '' , label : 'Villa'},
                  /* Commercial*/
                  { key : '' , label : 'Building - entire'},
                  { key : '' , label : 'Building - part'},
                  { key : '' , label : 'Building - whole floor'},
                  { key : '' , label : 'Business'},
                  { key : '' , label : 'Factory'},
                  { key : '' , label : 'Industrial'},
                  { key : '' , label : 'Industrial/Warehouse'},
                  { key : '' , label : 'Land'},
                  { key : '' , label : 'Office'},
                  { key : '' , label : 'Other'},
                  { key : '' , label : 'Restaurant/Bar'},
                  { key : '' , label : 'Retail'},
                  { key : '' , label : 'Retail/Office'},
                  { key : '' , label : 'Warehouse'},
                  { key : '' , label : 'Lifestyle'}
              ]
          },

          minPrice:{
              placeholder: 'Min price',
              options : [
                  { key : '' , label : 'Min Price'},
                  { key : 'any' , label : 'No Min'},
                  { key : '50000' , label : '$50,000'},
                  { key : '100000' , label : '$100,000'},
                  { key : '150000' , label : '$150,000'},
                  { key : '200000' , label : '$200,000'},
                  { key : '250000' , label : '$250,000'},
                  { key : '300000' , label : '$300,000'},
                  { key : '350000' , label : '$350,000'},
                  { key : '400000' , label : '$400,000'},
                  { key : '450000' , label : '$450,000'},
                  { key : '500000' , label : '$500,000'},
                  { key : '550000' , label : '$550,000'},
                  { key : '600000' , label : '$600,000'},
                  { key : '650000' , label : '$650,000'},
                  { key : '700000' , label : '$700,000'},
                  { key : '750000' , label : '$750,000'},
                  { key : '800000' , label : '$800,000'},
                  { key : '850000' , label : '$850,000'},
                  { key : '900000' , label : '$900,000'},
                  { key : '950000' , label : '$950,000'},
                  { key : '1000000' , label : '$1,000,000'},
                  { key : '1050000' , label : '$1,050,000'},
                  { key : '1100000' , label : '$1,100,000'},
                  { key : '1150000' , label : '$1,150,000'},
                  { key : '1200000' , label : '$1,200,000'},
                  { key : '1250000' , label : '$1,250,000'},
                  { key : '1300000' , label : '$1,300,000'},
                  { key : '1350000' , label : '$1,350,000'},
                  { key : '1400000' , label : '$1,400,000'},
                  { key : '1450000' , label : '$1,450,000'},
                  { key : '1500000' , label : '$1,500,000'},
                  { key : '1550000' , label : '$1,550,000'},
                  { key : '1600000' , label : '$1,600,000'},
                  { key : '1650000' , label : '$1,650,000'},
                  { key : '1700000' , label : '$1,700,000'},
                  { key : '1750000' , label : '$1,750,000'},
                  { key : '1800000' , label : '$1,800,000'},
                  { key : '1850000' , label : '$1,850,000'},
                  { key : '1900000' , label : '$1,900,000'},
                  { key : '1950000' , label : '$1,950,000'},
                  { key : '2000000' , label : '$2,000,000'},
              ]
          },
          maxPrice:{
              placeholder: 'Max price',
              options : [
                  //{ key : '' , label : 'Min Price'},
                  { key : 'any' , label : 'No Max'},
                  { key : '50000' , label : '$50,000'},
                  { key : '100000' , label : '$100,000'},
                  { key : '150000' , label : '$150,000'},
                  { key : '200000' , label : '$200,000'},
                  { key : '250000' , label : '$250,000'},
                  { key : '300000' , label : '$300,000'},
                  { key : '350000' , label : '$350,000'},
                  { key : '400000' , label : '$400,000'},
                  { key : '450000' , label : '$450,000'},
                  { key : '500000' , label : '$500,000'},
                  { key : '550000' , label : '$550,000'},
                  { key : '600000' , label : '$600,000'},
                  { key : '650000' , label : '$650,000'},
                  { key : '700000' , label : '$700,000'},
                  { key : '750000' , label : '$750,000'},
                  { key : '800000' , label : '$800,000'},
                  { key : '850000' , label : '$850,000'},
                  { key : '900000' , label : '$900,000'},
                  { key : '950000' , label : '$950,000'},
                  { key : '1000000' , label : '$1,000,000'},
                  { key : '1050000' , label : '$1,050,000'},
                  { key : '1100000' , label : '$1,100,000'},
                  { key : '1150000' , label : '$1,150,000'},
                  { key : '1200000' , label : '$1,200,000'},
                  { key : '1250000' , label : '$1,250,000'},
                  { key : '1300000' , label : '$1,300,000'},
                  { key : '1350000' , label : '$1,350,000'},
                  { key : '1400000' , label : '$1,400,000'},
                  { key : '1450000' , label : '$1,450,000'},
                  { key : '1500000' , label : '$1,500,000'},
                  { key : '1550000' , label : '$1,550,000'},
                  { key : '1600000' , label : '$1,600,000'},
                  { key : '1650000' , label : '$1,650,000'},
                  { key : '1700000' , label : '$1,700,000'},
                  { key : '1750000' , label : '$1,750,000'},
                  { key : '1800000' , label : '$1,800,000'},
                  { key : '1850000' , label : '$1,850,000'},
                  { key : '1900000' , label : '$1,900,000'},
                  { key : '1950000' , label : '$1,950,000'},
                  { key : '2000000' , label : '$2,000,000'},
              ]
          },
          minBedrooms:{
              placeholder: 'Min Bed',
              options : [
                  { key : 'any' , label : 'Beds + '},
                  { key : 1 , label : '1 + Beds '},
                  { key : 2 , label : '2 + Beds'},
                  { key : 3 , label : '3 + Beds'},
                  { key : 4 , label : '4 + Beds'},
                  { key : 5 , label : '5 + Beds'},
              ]
          },
          minBathrooms:{
              placeholder: 'Min Bath',
              options : [
                  { key : 'any' , label : 'Bath + '},
                  { key : 1 , label : '1 + Baths '},
                  { key : 2 , label : '2 + Baths'},
                  { key : 3 , label : '3 + Baths'},
                  { key : 4 , label : '4 + Baths'},
                  { key : 5 , label : '5 + Baths'},
              ]
          },

        },
  }

};
