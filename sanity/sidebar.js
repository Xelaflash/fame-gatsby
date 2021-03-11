import S from '@sanity/desk-tool/structure-builder';
import { MdHome as iconHome, MdPalette as iconArt } from 'react-icons/md';
import {
  FaCarrot as iconFood,
  FaRecycle as iconEnvironment,
  FaGlassCheers as iconFestival,
} from 'react-icons/fa';
import { IoMdSettings as settingsIcon } from 'react-icons/io';
import { BsPersonSquare as aboutIcon } from 'react-icons/bs';
//  Build a custom sidebar
export default function sidebar() {
  return S.list()
    .title(`FAME Website Content`)
    .items([
      // First item on the sidebar
      S.listItem()
        .title('Settings')
        .icon(settingsIcon)
        .child(
          S.list()
            .title('Website shared Data')
            .items([
              // second column items
              S.listItem()
                .title('Banner Images')
                .schemaType('bannerImgs')
                .child(
                  S.documentTypeList('bannerImgs').title(
                    'Images for the pages Banners'
                  )
                ),
              S.listItem()
                .title('Community Members')
                .schemaType('communityMember')
                .child(
                  S.documentTypeList('communityMember').title('FAME Members')
                ),
              S.listItem()
                .title('Quotes')
                .schemaType('quotes')
                .child(
                  S.documentTypeList('quotes').title(
                    'Quotes to be displayed in Home page'
                  )
                ),
              S.listItem()
                .title('Categories (technical)')
                .schemaType('category')
                .child(S.documentTypeList('category').title('FAME Categories')),
            ])
        ),

      // Second item on the sidebar
      S.listItem()
        .title('Home page')
        .icon(iconHome)
        .child(
          // second column of sidebar
          S.list()
            .title('Home Page Data')
            .items([
              // third column
              S.listItem()
                .title('Carousel Pics')
                .schemaType('carouselPics')
                .child(
                  S.documentTypeList('carouselPics').title(
                    'Pictures for Home page carousel'
                  )
                ),
              S.listItem()
                .title('Gallery')
                .schemaType('homeGallery')
                .child(
                  S.documentTypeList('homeGallery').title(
                    'Pictures for Home page Gallery'
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
              S.listItem()
                .title('Charities')
                .schemaType('charity')
                .child(
                  S.documentTypeList('charity').title(
                    'Charities organization and events to display on Homepage'
                  )
                ),
            ])
        ),
      // third item on the sidebar
      S.listItem()
        .title('Food Page')
        .icon(iconFood)
        .child(
          S.list()
            .title('FoodPage')
            .items([
              S.listItem()
                .title('Recipes')
                .schemaType('recipe')
                .child(
                  S.documentTypeList('recipe').title(
                    'Recipes for the Food page'
                  )
                ),
            ])
        ),
      // fourth item on the sidebar
      S.listItem()
        .title('Art Page')
        .icon(iconArt)
        .child(
          S.list()
            .title('ArtPage')
            .items([
              S.listItem()
                .title('Art page Gallery')
                .schemaType('artGallery')
                .child(
                  S.documentTypeList('artGallery').title(
                    'Art images for the Art page Gallery'
                  )
                ),
            ])
        ),
      //  5 item on sidebar sidebar
      S.listItem()
        .title('Environment Page')
        .icon(iconEnvironment)
        .child(
          S.list()
            .title('Environment Page')
            .items([
              S.listItem()
                .title('Environment page Images')
                .schemaType('environment')
                .child(
                  S.documentTypeList('environment').title(
                    'Images for the environment page'
                  )
                ),
            ])
        ),
      // 6th
      S.listItem()
        .title('Festival Page')
        .icon(iconFestival)
        .child(
          S.list()
            .title('Festival Page')
            .items([
              S.listItem()
                .title('Festival page Images')
                .schemaType('festivalGallery')
                .child(
                  S.documentTypeList('festivalGallery').title(
                    'Images for the festival Gallery'
                  )
                ),
            ])
        ),
      // 7th item
      S.listItem()
        .title('About_us Page')
        .icon(aboutIcon)
        .child(
          S.list()
            .title('About us')
            .items([
              S.listItem()
                .title('About_us page datas')
                .schemaType('aboutPage')
                .child(
                  S.documentTypeList('aboutPage').title(
                    'Founders and team datas for about us page'
                  )
                ),
            ])
        ),
    ]);
}
