define(["require","underscore","bundle!CommonBundle","bundle!ImportExportBundle","tenantImportExport/view/BaseWarningDialogView"],function(n){var t=n("underscore"),e=n("bundle!CommonBundle"),o=n("bundle!ImportExportBundle"),i=n("tenantImportExport/view/BaseWarningDialogView");return i.extend({constructor:function(n){n||(n={}),t.extend(n,{resizable:!0,buttons:[{label:o["import.button.include"],action:"include",primary:!0},{label:o["import.button.skip"],action:"skip",primary:!1},{label:e["button.cancel"],action:"cancel",primary:!1}]}),i.prototype.constructor.call(this,n),this.on("button:include",t.bind(this.close,this)),this.on("button:skip",t.bind(this.close,this)),this.on("button:cancel",t.bind(this.close,this))},open:function(n){t.extend(n,{message:o["import.dialog.broken.dependencies.intro"]}),i.prototype.open.call(this,n)}})});