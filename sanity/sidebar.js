import react from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdHome as iconHome } from 'react-icons/md';
import { FaImages as iconBanner } from 'react-icons/fa';
//  Build a custom sidebar
export default function sidebar() {
  return S.list()
    .title(`Website Content`)
    .items([
      // create a sub item
      S.listItem()
        .title('Home page')
        .icon(iconHome)
        .child(
          S.list()
            .title('Home Page')
            .items([
              S.listItem()
                .title('Carousel Pics')
                .schemaType('carouselPics')
                .child(
                  S.documentTypeList('carouselPics').title(
                    'Pictures for Home page carousel'
                  )
                ),
              S.listItem()
                .title('Quotes')
                .schemaType('quotes')
                // When you open this list item, list out the documents
                // of the type category"
                .child(
                  S.documentTypeList('quotes').title(
                    'Quotes to be displayed in Home page'
                  )
                ),
              S.listItem()
                .title('Partners Logo')
                .schemaType('partners')
                .child(
                  S.documentTypeList('partners').title(
                    'Partners logo to display on Homepage'
                  )
                ),
            ])
        ),
      S.listItem()
        .title('Banner Images')
        .icon(iconBanner)
        .child(
          S.list()
            .title('Banner Images')
            .items([
              S.listItem()
                .title('Banner Images')
                .schemaType('bannerImgs')
                .child(
                  S.documentTypeList('bannerImgs').title(
                    'Pictures for Pages Banners'
                  )
                ),
            ])
        ),
    ]);
}
