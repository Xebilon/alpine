import{d as i,b as a,c as d,e as u,t as f,l as m}from"./Ds3aWOG_.js";const o=["for"],r=["id","name","value","type","placeholder"],c=["id","name","value","type","placeholder"],y=i({__name:"Input",props:{modelValue:{type:String,required:!0},field:{type:Object,required:!0,validator:e=>!!e.name}},emits:["update:modelValue"],setup(e){return(n,l)=>(a(),d("div",null,[u("label",{for:e.field.name},f(e.field.label),9,o),e.field.type!=="textarea"?(a(),d("input",{key:0,id:e.field.name,name:e.field.name,value:e.modelValue,type:e.field.type?e.field.type:"text",placeholder:e.field.placeholder?e.field.placeholder:"",onInput:l[0]||(l[0]=t=>n.$emit("update:modelValue",t.target.value))},null,40,r)):(a(),d("textarea",{key:1,id:e.field.name,name:e.field.name,value:e.modelValue,type:e.field.type?e.field.type:"text",placeholder:e.field.placeholder?e.field.placeholder:"",onInput:l[1]||(l[1]=t=>n.$emit("update:modelValue",t.target.value))},null,40,c))]))}}),h=m(y,[["__scopeId","data-v-598f6ea8"]]);export{h as default};