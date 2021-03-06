// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import carouselPics from './carouselPics';
import quote from './quote';
import partners from './partners';
import bannerImgs from './bannerImgs';
import homeGallery from './homeGallery';
import category from './category';
import communityMember from './communityMember';
import recipe from './recipe';
import artGallery from './artGallery';
import charity from './charity';
import environment from './environment';
import festivalGallery from './festivalGallery';
import aboutPage from './about';
import weeklyTalkPage from './weeklyTalks';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    carouselPics,
    quote,
    partners,
    bannerImgs,
    homeGallery,
    category,
    communityMember,
    recipe,
    artGallery,
    charity,
    environment,
    festivalGallery,
    aboutPage,
    weeklyTalkPage,
  ]),
});

// sanity documents query "*[_type == 'recipe']{_id, name}" ==> croq query
// sanity documents delete "id" ==> to delete a record
// sanity graphql deploy ==> After all schema changes
