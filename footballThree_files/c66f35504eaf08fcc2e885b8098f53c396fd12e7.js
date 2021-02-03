function _SignalRunner(f, a) {
	try {
		return f.apply(this, a);
	} catch (e) {
		console.log("Signal: WARN: function " + f.name + " failed with arguments below generating exception: " + e);
		console.dir(a);
	}
}

(function (w, ls) {
	localStorage.removeItem("S.AMPLIFY_INTILERY_SEED_LIST");
	localStorage.removeItem("S.PROFILE_RETRIEVED");
	
	

	w.Signal = {};
	var s = w.Signal.LocalStorageManager = {},
		n = {};
	Signal.Data = {};

	n.campaign = "signal.campaigns";

	s.set = function (l, i) {
		window.localStorage.setItem(l, i);
	};
	s.get = function (l) {
		var r = window.localStorage.getItem(l);
		return !!r ? r : ""
	};

	s.append = function (l, i, d) {
		var store = s.get(l),
			delimiter = !!d ? d : ",",
			newStore = store == "" ? i : store + delimiter + i;
		s.set(l, newStore);
	}

	s.appendUnique = function (l, i, d) {
		var store = s.get(l),
			delimiter = !!d ? d : ",",
			exists = checkExists(store, i, delimiter);
		!exists ? s.append(l, i, d) : false;
		return !exists;
	}

	s.delimitedCount = function (l, d) {
		var store = s.get(l),
			delimiter = !!d ? d : ",",
			a = store.split(delimiter);
		return a.length;
	}

	s.campaignStore = function (c, a) {
		var store = s.get(n.campaign),
			exists = checkExists(store, c, ",");
		!exists && a ? s.append(n.campaign, c) : false;
		return exists;
	}

	Signal.hashID = function (c) {
		if (c) {
			return CryptoJS.SHA256(c).toString();
		}
	}
	
	w.Signal.hashID = function (c) {
		if (c) {
			return CryptoJS.SHA256(c).toString();
		}
	}

	function checkExists(store, value, delimiter) {
		var a = store.split(delimiter),
			exists = false;
		BrightTag.each(a, function (v) {
			if (v == value) {
				exists = true;
			}
		});
		return exists;
	}

	w.Signal.isMobile = (function () {
		var check = false;
		(function (a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	})();

	w.Signal.channel = function (brand) {
		var standalone = window.navigator.standalone,
			userAgent = window.navigator.userAgent.toLowerCase(),
			safari = /safari/.test(userAgent),
			ios = /iphone|ipod|ipad/.test(userAgent);

		if (ios) {
			if (!standalone && safari) {
				//browser
				return brand + (window.Signal.isMobile ? "MW" : "W");
			} else if (standalone && !safari) {
				//standalone
			} else if (!standalone && !safari) {
				//uiwebview
				return brand + "APP";
			};
		} else {
			//not iOS
			return brand + (window.Signal.isMobile ? "MW" : "W");
		};
	}

	w.Signal.store = function (k, v) {
		Signal.Data[k] = v;
		Signal.LocalStorageManager.set(k, v);
	}

	w.Signal.retrieve = function (k) {
		return Signal.Data[k] ? Signal.Data[k] : Signal.LocalStorageManager.get(k);
	}
	


	w.Signal.startsWithCharAt = function (string, pattern) {
		for (var i = 0, length = pattern.length; i < length; i += 1) {
			if (pattern.charAt(i) !== string.charAt(i)) return false;
		}
		return true;
	}

	w.Signal.startsWith = function (string, pattern) {
		if (string.startsWith) {
			return string.startsWith(pattern);
		} else {
			return Signal.startsWithCharAt(string, pattern);
		}
	}

	w.Signal.Intilery = {};
	var inti = Signal.Intilery;
	
	Signal.Intilery.WHITELIST = [];

	inti.getPayload = function (){return "";}

	inti.getVisitor = function () {
		var cookie = bt_cookie("__iutma");
		if (cookie) {
			var vidData = cookie.split("."),
				accountID = vidData[0],
				vid = vidData[1],
				initialVisit = vidData[2],
				prevSession = vidData[3],
				currSession = vidData[4],
				sessionNumber = vidData[5],
				vidPayload = {};

			vidPayload.VisitorID = vid;
			vidPayload.InitialVisit = initialVisit;

			return vidPayload;
		}
		return {};
	}

	inti.getCustomer = function (customerID) {
		var Customer = {};
		var customerIDSHA256 = "";
		if(customerID !== undefined){
		    customerIDSHA256 = (customerID.length>8?customerID:Signal.hashID(customerID));
		}else{
		    customerIDSHA256 = Signal.retrieve("S.CID.SHA256");
		}
		//customerIDSHA256 = Signal.retrieve("S.CID.SHA256");
		Customer.Cust_ID_Hashed = customerIDSHA256;
		return Customer;
	}

	inti.getContext = function (url, brand) {
		var Context = {},
			currentURL = url ? url : Signal.retrieve("S.URL");
		Context.path = currentURL;
		Context.host = "m.skybet.com";
		
		if(brand !== undefined && brand == "skyvegas" ){
		    Context.host = "www.skyvegas.com";
		}else if(brand !== undefined && brand == "skybingo"){
		    Context.host = "www.skybingo.com";
		}else if(brand !== undefined && brand == "super6"){
		    Context.host = "super6.skysports.com";
		}else if(brand !== undefined && brand == "itv7"){
			Context.host = "itv7.itv.com";
		}
		
		return Context;
	}

	inti.isWhitelisted = function (cid) {
		var shacid = cid ? cid : Signal.retrieve("S.CID.SHA256"),
			regcid = cid ? cid : Signal.retrieve("S.CID");
		return Signal.Intilery.WHITELIST.indexOf(shacid) > -1
			|| Signal.Intilery.WHITELIST.indexOf(regcid) > -1;
	}

})(window, window.localStorage);