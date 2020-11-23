import react from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdHome as icon } from 'react-icons/md';
//  Build a custom sidebar
export default function sidebar() {
  return S.list()
    .title(`Content`)
    .items([
      // create a sub item
      S.listItem()
        .title('Home page')
        .icon(icon)
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
            ])
          // S.editor()
          //   .schemaType('carouselPics')
          //   // Make a new doc id so we don't have a random string of characters
          //   .documentId('homePageDatas')
        ),
      // add in the rest of our document items
      // ...S.documentTypeListItems().filter(
      //   (item) => item.getId() !== 'HomePage'
      // ),
    ]);
}
