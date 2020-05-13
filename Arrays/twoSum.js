/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var result = []
  var library = {}

  // create an object that holds the number as the key and it's index as the value
  for (i=0; i < nums.length; i++) {
    if (!library.hasOwnProperty(nums[i]))
      library[nums[i]] = i

    var compliment = target - nums[i]

    console.log("compliment", compliment)
    console.log("library", library)

    console.log("library[compliment]", library[compliment])
    console.log("library[compliment] != i)", library[compliment] != i)

    if (library.hasOwnProperty(compliment)) {

      if (library[compliment] != i) {
        result.push(library[compliment])
        result.push(i)

        console.log("result", result)
        return result

      }

    }
  }

  return []
};

var nums = [3,2,4]
var target = 6

twoSum(nums, target)