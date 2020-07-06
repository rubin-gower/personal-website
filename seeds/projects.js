
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          title: 'the title', 
          description: 'the description', 
          thumbnail: 'the thumbnail', 
          icon: 'the icon'
        },
        {
          id: 2, 
          title: 'the title', 
          description: 'the description', 
          thumbnail: 'the thumbnail', 
          icon: 'the icon'
        },
        {
          id: 3, 
          title: 'the title', 
          description: 'the description', 
          thumbnail: 'the thumbnail', 
          icon: 'the icon'
        },
        {
          id: 3, 
          title: 'the title', 
          description: 'the description', 
          thumbnail: 'the thumbnail', 
          icon: 'the icon'
        },
      

        
      ]);

    });
};
