
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };
  
  function userId({id}) {
    return id;
  }
  
  function whois({displayName, fullName: {firstName: name}}) {
    return `${displayName} is ${name}`;
  }
  
  document.getElementById('root').innerHTML = userId(user)
  document.getElementById('root2').innerHTML = whois(user)
//   console.log(userId(user)); // 42
//   console.log(whois(user));  // "jdoe is John"


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment