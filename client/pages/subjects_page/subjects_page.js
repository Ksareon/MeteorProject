Template.subjects_page.helpers({
  subjects_table: function(){
    return {
      collection: Subjects.find({}),
      fields: [
        { key: 'type', label: 'Тип' },
        { key: 'name', label: 'Название' },
        { key: 'description', label: 'Описание' },
        { key: 'dangerous', label: 'Уровень опасности' },
        { label: 'Действия', tmpl: Template.subjects_page_actions }
      ]
    }
  }
});

Template.subjects_page.events({
  'click .delete_subject': function(){
    Subjects.remove(this._id);
  }
});