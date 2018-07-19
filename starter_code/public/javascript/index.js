const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

  let charContainer = document.getElementById('charCon');
    
    charactersAPI.getFullList()
      .then(res=>{
        console.log(typeof res.data);
        let template = '';
        res.data.forEach(character=>{
          template += `<div class="character-info">
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Cartoon: ${character.cartoon}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          </div>`;
        });
        charContainer.innerHTML = template;
      })
      .catch(e=>console.log(e));
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let charContainer = document.getElementById('charCon');
    let id = document.getElementById('character-id').value;
    
    charactersAPI.getOneRegister(id)
      .then(res=>{
        var character = res.data;
        let template = '';
          template += `<div class="character-info">
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Cartoon: ${character.cartoon}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
          </div>`;
        charContainer.innerHTML = template;
      })
      .catch(e=>console.log(e));
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(id)
    .then((res)=>{
      document.getElementById('delete-one').style.background = 'green';
    })
    .catch((err)=>{
      console.log(err);
      document.getElementById('delete-one').style.background = 'red';
    });
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    
    let id=document.getElementById("edit-id").value

    const characterInfo = {
      name: document.getElementById("edit-name").value,
      occupation: document.getElementById("edit-occupation").value,
      weapon: document.getElementById("edit-weapon").value,
      cartoon: document.getElementById("edit-cartoon").checked
    };

    charactersAPI.updateOneRegister(id, characterInfo)
    .then((res)=>{
      document.getElementById('send-data-edit').style.background = 'green';
    })
    .catch((err)=>{
      console.log(err);
      document.getElementById('send-data-edit').style.background = 'red';
    });
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    const characterInfo = {
      name: document.getElementById("add-name").value,
      occupation: document.getElementById("add-occupation").value,
      weapon: document.getElementById("add-weapon").value,
      cartoon: document.getElementById("add-cartoon").checked
    };
    
    charactersAPI.createOneRegister(characterInfo)
    .then((res)=>{
      document.getElementById('send-data').style.background = 'green';
    })
    .catch((err)=>{
      console.log(err);
      document.getElementById('send-data').style.background = 'red';
    });
  }
})
