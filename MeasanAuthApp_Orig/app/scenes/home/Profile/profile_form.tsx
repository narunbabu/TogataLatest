export default [
    {name: 'name', type:'string',label:'Name:',fieldType:'input'},
    {name: 'surname', type:'string',label:'Surname:',fieldType:'input'},
     {name: 'gender',type:'string',label:'Gender',fieldType:'select',
       data:[{id:'1',label: 'Female', value: 'female'}, 
            {id:'2',label: 'Male', value: 'male'},
            {id:'3',label: 'Other', value: 'other'},  ]},
      {name: 'about', type:'string',label:'About:',fieldType:'input'},
      {name: 'mobile', type:'string',label:'Mobile Number:',fieldType:'input'},
      {name: 'date',type:'string',label:'Date of Birth',fieldType:'date'},
      {name: 'education',type:'string',label:'Educational qualification',fieldType:'select',
            data:[{id:'1',label: 'No Education', value: 'nil'}, 
            {id:'2',label: 'Below 10th Class', value: 'under_10th'},
            {id:'3',label: '10th Pass', value: '10th_pass'},
            {id:'4',label: 'Undergraduate', value: 'undergraduate'},
            {id:'5',label: 'Masters', value: 'masters'},
            {id:'6',label: 'Docterate', value: 'doctors'},]},
      {name: 'profession',type:'string',label:'Profession:',fieldType:'select',
            data:[{id:'1',label: 'Studying', value: 'study'},
            {id:'2',label: 'Searching for a Job', value: 'unemployed'},
            {id:'3',label: 'Government Employee', value: 'gvt_emp'}, 
            {id:'4',label: 'Private Employee', value: 'pvt_emp'},
            {id:'5',label: 'Small time Pvt Employee', value: 'small_pvt_emp'},
            {id:'6',label: 'Agriculture Farmer', value: 'farmer'},            
            {id:'7',label: 'Daily wage worker', value: 'daily_worker'},
            {id:'8',label: 'Self Employee/ Cheneta worker/Tailor', value: 'self_emp'},
            {id:'9',label: 'Business owner', value: 'business'},
            {id:'10',label: 'Other', value: 'other'},]},
      {name: 'political_position', type:'string',label:'Political Position:',fieldType:'input'},
      {name: 'community_position', type:'string',label:'Community Position:',fieldType:'input'},
      {name: 'native_place', type:'string',label:'Native Village:',fieldType:'input'},
      {name: 'present_place', type:'string',label:'Native Village:',fieldType:'input'},      
  ];
  