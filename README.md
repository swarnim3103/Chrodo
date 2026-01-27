# Chrodo 

## Phase 1: Browser part 
Resources used :
1. [Browser blog](https://www.ika.im/posts/building-a-browser-in-electron)
2. [Official docs](https://chromium.googlesource.com/chromium/src/+/main/docs/windows_build_instructions.md)
### Plan
>1. Open any valid website
>2. Handle invalid URLs gracefully
>3. Support back / forward / reload
>
>> electron set up :
>> ``` bash
>> npm init
>> npm install electron --save-dev
>> npm start
>> ```
>>
>> 
>> electronmon set up :
>> ```
>> "scripts": {
>> "start": "electronmon .",
>> "test": "echo \"Error: no test specified\" && exit 1" },
>>  ```
NOTE: browser view(position it on the screen by giving coordinates and a size) vs web view diff in electron js


### Phase 2: IDE part
