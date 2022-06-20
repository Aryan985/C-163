AFRAME.registerComponent("fence",{
  init:function(){
    posX = -30;

    for (var i = 0; i < 10; i++) {
      //create wire-fence entity
      var wire = document.createElement("a-entity");

      //set x, y and z position
      posX = posX + 10;

      //scale 
      var scale = { x: 2, y: 2, z: 2 };

      //set the id
      wire.setAttribute("id", "wire" + i);

      //set the position
      wire.setAttribute("position", { x: posX, y: 2.5, z: -35 });
      
      //set the scale
      wire.setAttribute("scale", scale);
     
      //set the model
      wire.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wire.setAttribute("static-body", {});
    
      var sceneEl = document.querySelector("#scene");
      //attach the entity to the scene
      sceneEl.appendChild(wire);
 } 
  }
})

AFRAME.registerComponent("box",{
  init:function(){
    posX = -50;

    for (var i = 0; i < 10; i++) {
      //create wire-fence entity
      var wire = document.createElement("a-entity");

      //set x, y and z position
      posX = posX + 15;

      //scale 
      var scale = { x: 2, y: 2, z: 2 };

      //set the id
      wire.setAttribute("id", "box" + i);

      //set the position
      wire.setAttribute("position", { x: posX, y: 1.5, z: -20 });
      
      //set the scale
      wire.setAttribute("scale", scale);
     
      //set the model
      wire.setAttribute(
        "material",
        {src:"./images/boxtexture1.jpg"}
      );
wire.setAttribute("geometry",{primitive:"box",height:1,width:1,depth:1})
      wire.setAttribute("static-body", {});
    
      var sceneEl = document.querySelector("#scene");
      //attach the entity to the scene
      sceneEl.appendChild(wire);
 } 
  }
})