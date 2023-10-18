import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeAbout extends Schema.Component {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'About';
    icon: 'file';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface HomeBear extends Schema.Component {
  collectionName: 'components_home_bears';
  info: {
    displayName: 'Bear';
    icon: 'filter';
    description: '';
  };
  attributes: {
    subtitle: Attribute.RichText & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface HomeContact extends Schema.Component {
  collectionName: 'components_home_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    title_line1: Attribute.String & Attribute.Required;
    title_line2: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    button: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
  };
}

export interface HomeFooter extends Schema.Component {
  collectionName: 'components_home_footers';
  info: {
    displayName: 'Footer';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    button: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
  };
}

export interface HomeHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
    description: '';
  };
  attributes: {
    logo: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
  };
}

export interface HomeRow extends Schema.Component {
  collectionName: 'components_home_rows';
  info: {
    displayName: 'Row';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface HomeScroller extends Schema.Component {
  collectionName: 'components_home_scrollers';
  info: {
    displayName: 'Scroller';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    description: Attribute.RichText & Attribute.Required;
    marquee: Attribute.String & Attribute.Required;
    title: Attribute.Text & Attribute.Required;
    left_image: Attribute.Media & Attribute.Required;
    right_image: Attribute.Media & Attribute.Required;
  };
}

export interface HomeSeo extends Schema.Component {
  collectionName: 'components_home_seos';
  info: {
    displayName: 'SEO';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    OG: Attribute.Media & Attribute.Required;
    keywords: Attribute.JSON & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.about': HomeAbout;
      'home.bear': HomeBear;
      'home.contact': HomeContact;
      'home.footer': HomeFooter;
      'home.hero': HomeHero;
      'home.row': HomeRow;
      'home.scroller': HomeScroller;
      'home.seo': HomeSeo;
    }
  }
}
