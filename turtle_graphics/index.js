const arguments = process.argv
const x_coord = arguments[2]
const y_coord = arguments[3]
const header = '0 1 2 3 4'
const grid = '0┼─┼─┼─┼─┼\n1┼─┼─┼─┼─┼\n2┼─┼─┼─┼─┼\n3┼─┼─┼─┼─┼\n4┼─┼─┼─┼─┼'
const start_point= '•' // – Starting Location
const end_point = '*'  // – End Location
const trail = '-' // trail
//  0 1 2 3 4
// 0┼─┼─┼─┼─┼
// 1┼─┼─┼─┼─┼
// 2┼─┼─┼─┼─┼
// 3┼─┼─┼─┼─┼
// 4┼─┼─┼─┼─┼
