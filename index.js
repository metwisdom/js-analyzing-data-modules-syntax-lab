require("datejs");

function combineUsers(...args) {
  console.log('combineUsers function with', args.length, 'arrays');
  console.log(args);

  const combinedObject = {
    users: []
  };
  console.log(combinedObject);

  for (let i = 0; i < args.length; i++) {
    const arr = args[i];
    console.log(`array ${i+1}:`, arr);

    combinedObject.users.push(...arr);
    console.log('merging array', (i+1) + ':', combinedObject.users);
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");
  console.log(combinedObject.merge_date);

  console.log('Final result:', combinedObject);
  return combinedObject;
}

module.exports = { combineUsers };

if (require.main === module) {
  console.log('=== Demo Usage ===');
  const result = combineUsers(
    ["Jim3", "Pam5", "Dwight77"],
    ["Michael6", "Eleanor22", "Chidi202"],
    ["Jack_jack", "Julia_Oreo", "Bill_bore"]
  );
}
