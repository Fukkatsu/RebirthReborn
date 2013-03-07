var selectedCharacter : int = 1;
public var Player = new GameObject[5];
var old:  int;
var timer: float = 0;
function Update()
{
	timer += Time.deltaTime;
    if(timer >= 10)
    {
    	if (selectedCharacter < 4)
    		selectedCharacter++;
    	else
    		selectedCharacter = 1;
     
    	for (var i = 0; i < 5; ++i)
   	 	{
    		if(i != selectedCharacter)
    		{
    			obj = Player[i];
    			if (obj.activeSelf) {
    				 old = i;
    				 obj.SetActive(false);
    			}
    		}

   			else
    		{
    			Player[i].setActive(true);
    			Player[i].transform.position = Player[old].transform.position;
    		}
    	}
    	timer = 0;
    }
}