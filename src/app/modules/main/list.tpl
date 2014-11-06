<ul ng-repeat="note in main$list.notes">
    <li>
        {{ note.content }}
        <a ui-sref="main.detail({ id: note.id })">edit</a>
        <a ng-click="main$list.removeNote(note.id)">remove</a>
    </li>
</ul>
<a ui-sref="main.create" class="button success">Create Note</a>
