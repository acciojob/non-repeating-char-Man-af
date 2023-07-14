//your JS code here. If required.
function findFirstNonRepeatedChar(str)
	{
          let flag=0;
		for(let i=0; i<str.length-1; i++)
			{
			     flag=0;
				for(let j=i+1; j<str.length; j++)
					{
						if(str.charAt(i)===str.charAt(j))
							flag=1;
					}
				if (flag===0)
					return (str.chatAt(i));
			}
		return (str.chatAt(str.length-1));

		
	}





module.exports = findFirstNonRepeatedChar;