module.exports = [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/about' },
    {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
          ] },
          { text: 'Group2', items: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about' },
          ] }
        ]
      },
      { text: 'External', link: 'https://google.com' },
  ]