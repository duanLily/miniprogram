Page({
  data: {
    time: (new Date()).toLocaleDateString(),
    test: '---test---',
    showTest: 'test',

    var2: undefined, var3: null, var4: "var4",

    a: 1, b: 2, c: 3,
    name: ' to meet you',

    condition:true,
    condition1:false,
    length:4,

    array:[{msg:'apple'},{msg:'banana'},{msg:'orange'}],
    objectArray: [
      {id: 0, unique: 'unique_0'},
      {id: 1, unique: 'unique_1'},
      {id: 2, unique: 'unique_2'},
      {id: 3, unique: 'unique_3'},
      {id: 4, unique: 'unique_4'},
      {id: 5, unique: 'unique_5'},
    ],
    numberArray: [1, 2],
  },
  onTestTap(event) {
    let testValue = event.currentTarget.dataset.test;
    this.setData({showTest: testValue})
    console.log(testValue);
  },
  switchFunction(){
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToLast(){
    const length = this.data.objectArray.length
    this.data.objectArray = this.data.objectArray.concat([{id: length, unique: 'unique_' + length}])
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToLast(){
    this.data.numberArray = this.data.numberArray.concat([ this.data.numberArray.length + 1 ])
    this.setData({
      numberArray: this.data.numberArray
    })
  },
})