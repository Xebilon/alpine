// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: '',
    description: 'LiBer',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: '' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: false,

        // our github repository
        repository: 'https://www.github.com/nuxt-themes/alpine',

        text: ''
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: '',
      instagram: '',
      linkedin: '',
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  },

  prose: {
    h1: {}
  },

  nuxtIcon: {
    aliases: {
      'key-1': ''
    }
  }
})