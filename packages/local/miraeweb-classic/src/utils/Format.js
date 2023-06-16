Ext.define('Miraeweb.utils.Format',{
   alternateClassName : 'Miraeweb.Format',
   singleton : true,
   requires: [
      'Ext.data.Store',
      'Ext.data.proxy.Ajax',
      'Ext.data.reader.Json'
   ],


   dateRenderer : function(v){
      if(!v){
         return null;
      }

       return v.substr(0,4)+'-'+v.substr(4,2)+'-'+v.substr(6);
   },
   codeRenderer : function(codeGroup){
      var store = Ext.create('Ext.data.Store',{
         autoLoad : true,
         proxy : {
            type : 'ajax',
            url : 'resources/data/system/code/group/'+codeGroup+'.json',
            method : 'GET',
            reader : {
               type : 'json',
               rootProperty : codeGroup
            }
         }
      });
      return function(v){
         var findRec = store.findRecord('code',v);

         if(findRec){
            return findRec.get('codeName');
         }
         return 'N/A';
      }

   }
});