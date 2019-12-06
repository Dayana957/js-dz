		var body = {
			tagName: 'body',
			subTags: [
				{
					tagName: 'div',
					subTags: [
						{
	                  	 	tagName: "span",
	                    	text: "Enter a data please:"
	                	},
	                	{
	                		tagName: "br"
	                	},
	                	{
	                		tagName: "input",
	                    	attrs: {
	                    		type: "text",
	       	 					id: "name"
							}
						},
						{
							tagName: "input",
							attrs: {
								type: "text",
								id: "surname"
							}
						}
					]
				},
                {
		            tagName: 'div',
		            subTags: [	
			            {
			            	tagName:"button",
	 						attrs: {
	 							id:"ok"
	 						},
	 						text:"OK"
			            },
			            {
 							tagName:"button",
 						   	attrs: {
 								id:"cancel"
 							},
 						    text:"Cancel"
		            	}
		            ]
		        }
		    ]
		}

console.log(body.subTags[1].subTags[1].text);
console.log(body.subTags[0].subTags[3].attrs.id);