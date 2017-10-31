if (Meteor.isDevelopment) {
  import chromatic from 'react-chromatic';
  import A from './ui/components/A';
  import B from './ui/components/B';

  chromatic({
    appCode: 'simple-meteor-app',
    components: [A, B],
  });
}
