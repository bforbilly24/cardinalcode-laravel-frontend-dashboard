/*
Template Name: Cardinal Code - Dashboard
Author: bforbilly24
Website: https://bforbilly.me/
Contact: halimputra0701@icloud.com
File: Kanban js
*/

import Sortable from 'sortablejs';

var kanbanOne = document.getElementById('kanbanborad-one'),
    kanbanTwo = document.getElementById('kanbanborad-two'),
    kanbanThree = document.getElementById('kanbanborad-three'),
    kanbanFour = document.getElementById('kanbanborad-four'),
    kanbanFive = document.getElementById('kanbanborad-five'),
    kanbanSix = document.getElementById('kanbanborad-six');


new Sortable(kanbanOne, {
    group: 'shared',
    animation: 150
});

new Sortable(kanbanTwo, {
    group: 'shared',
    animation: 150
});

new Sortable(kanbanThree, {
    group: 'shared',
    animation: 150
});

new Sortable(kanbanFour, {
    group: 'shared',
    animation: 150
});


new Sortable(kanbanFive, {
    group: 'shared',
    animation: 150
});


new Sortable(kanbanSix, {
    group: 'shared',
    animation: 150
});
