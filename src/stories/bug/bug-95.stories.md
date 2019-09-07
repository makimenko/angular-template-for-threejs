# Description

GitHub link to the issue: [#95](https://github.com/makimenko/angular-template-for-threejs/issues/95)<br>  

Sometimes 50/50%: Render not triggered after loading of ObjLoader textures.
![image](https://user-images.githubusercontent.com/11466819/64205749-61f4cb00-cea1-11e9-8f95-756c5873b7a5.png)

I assume that ObjLoader completion callback is too early (even if some texture images are not loaded). This results to undefined textures.

# Workaround
not nice workaround - rerender scene after X seconds
