<form ng-submit="main$editor.doSave()" >
    <div class="row">
        <div class="large-12 columns">
            <label>Note Content
                <input ng-model="main$editor.content" />
            </label>
        </div>
    </div>
    <div class="row">
        <input type="submit" class="button success" />
    </div>
</form>
