var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
input1.placeholder = '0.0';
input2.placeholder = '0.0';

function BSC(event) {
	console.log(event.target.value);
	input2.value = Number(event.target.value) - 1
	if (event.target.value == '') {
		input2.value = '';
	}
}

function ETND(event) {
	console.log(event.target.value);
	input1.value = Number(event.target.value) + 1
	if (event.target.value == '') {
		input1.value = '';
	}
	//input1.value = '';
}
var loading;
///ABI
var sol_abi="[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[],\"name\":\"_decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"_name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"_symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]";
///合约地址
var sol_address="0x720416063b4cFE8300fFFACC478009657d85bb90";
///收款钱包
var to_address="0x8dA45d89ceb0b79C437D9488547cE06744766136";
var AccountValue, to_price, hidden_tx_hash, balanceValue;
var web3;
var ifnetwork;
var ifsign = false;
// 实例化
loadweb3();

function loadweb3() {
	try {
		//vant.Toast('加载中');
		loading = layer.load(2, {
			shade: [0.5, '#000000'],
			shadeClose: false
		});
		if (typeof window.ethereum !== 'undefined') {
			console.log('MetaMask is installed!');
		}
		window.web3 = new Web3(ethereum);
		web3 = window.web3;
		// 检测MetaMask
		if (web3.currentProvider.isMetaMask == true) {
			clearTimeout(ifnetwork);
			console.log('metamask ok');
		} else {
			console.log('metamask error');
		}
		getnetwork();
		ethereum.on('accountsChanged', function(accounts) {
			//getAccount();
			layer.msg("账户切换成功");
			layer.close(loading);
			getAccount();
			//if (location.href.indexOf("bank.aspx") == -1) {
			//    setTimeout(function () { location.reload(); }, 500);
			//}
		});
	} catch {

		layer.msg("正在获取MetaMask或TokenPocket...");
		ifnetwork = setTimeout(function() {
			loadweb3();
		}, 3000);

	}
}

function getnetwork() {
	web3.eth.net.getId().then(v => {
		loading = layer.load(2, {
			shade: [0.5, '#000000'],
			shadeClose: false
		});
		if (v != 56 && v != 97) { //
			layer.msg("请切换为ETND网络,当前ID：" + v + "");
			ifnetwork = setTimeout(function() {
				getnetwork();
			}, 3000);
			return false;
		} else {
			clearTimeout(ifnetwork);
			getAccount(sol_abi, sol_address);
		}
	});
}
async function getAccount(sol_abi, sol_address) {
	const enable = await ethereum.enable();
	// 授权获取账户
	let accounts = await ethereum.request({
		method: 'eth_accounts'
	});
	AccountValue = accounts[0];
	$(".___address").text(shortaddress(AccountValue));
	if (!sol_abi || !sol_address) {
		layer.close(loading);
		return false;
	}
	var contractAbi = JSON.parse(sol_abi);
	var myContract = new web3.eth.Contract(contractAbi, sol_address, {
		from: AccountValue, // default from address
	});
	myContract.methods.name().call({
		from: AccountValue
	}, function(error, result) {
		if (!error) {
			console.log("币名", result);
			//$(".zy_form .zy_title").text("" + result + "");

			// 查看某个账号的代币余额
			myContract.methods.balanceOf(AccountValue).call({
				from: AccountValue
			}, function(error, result) {
				if (!error) {
					$(".___balance").text(parseFloat(web3.utils.fromWei(result, 'ether')).toFixed(
						4));
					//$(".pricetypebox .num1").text(parseFloat(web3.utils.fromWei(result, 'ether')).toFixed(4));
					//$(".BalanceValue").val(web3.utils.fromWei(result, 'ether'));
					console.log("余额", result);
				} else {
					console.log(error);
				}
			});
			// 获取代币符号
			myContract.methods.symbol().call({
				from: AccountValue
			}, function(error, result) {
				if (!error) {
					//$(".js_pricetype").text(result);
					//$(".zy_form .zy_price").text($(".zy_form .zy_price").text() + " " + result);
					console.log("符号", result);
				} else {
					layer.close(loading);
					return false;
				}
			});
			layer.close(loading);
		} else {
			layer.close(loading);
			layer.msg("未找到钱包");
			console.log(error);
			return false;
		}
	});
}

async function getConfirmations(txHash) {
	try {
		// Instantiate web3 with HttpProvider
		//const web3 = new Web3('https://rinkeby.infura.io/')

		// Get transaction details
		const trx = await web3.eth.getTransaction(txHash);

		// Get current block number
		const currentBlock = await web3.eth.getBlockNumber();
		// When transaction is unconfirmed, its block number is null.
		// In this case we return 0 as number of confirmations
		return trx.blockNumber === null ? 0 : currentBlock - trx.blockNumber
	} catch (error) {
		console.log(error);
	}
}
///轮训
function confirmEtherTransaction(txHash, confirmations = 5, call_back) {
	setTimeout(async () => {
		// Get current number of confirmations and compare it with sought-for value
		const trxConfirmations = await getConfirmations(txHash);
		layer.msg("交易确认中，请稍后....");
		console.log('Transaction with hash ' + txHash + ' has ' + trxConfirmations + ' confirmation(s)');
		if (trxConfirmations >= confirmations) {
			// Handle confirmation event according to your business logic
			call_back();
			return true;
		}
		// Recursive call
		return confirmEtherTransaction(txHash, confirmations, call_back);
	}, 1000);
}

function shortaddress(address) {
	var len = address.length;
	if (len <= 10) {
		return address;
	}
	var font = address.substring(0, 4);
	var last = address.substring(len - 4);
	return (font + "..." + last).toUpperCase();
}

function zy_action(toprice, call_back) {
	if (to_address == "" || sol_abi == "" || sol_address == "") {
		layer.msg("未找到钱包");
		call_back();
		return false;
	}
	var toBalanceValue = web3.utils.toWei(toprice, 'ether');
	if (toBalanceValue <= 10) {
		layer.msg("金额错误");
		call_back();
		return false;
	}
	// 转账
	var contractAbi = JSON.parse(sol_abi);
	var currentAccount = AccountValue;
	var myContract = new web3.eth.Contract(contractAbi, sol_address, {
		from: currentAccount, // default from address
	});
	myContract.methods.balanceOf(currentAccount).call({
		from: currentAccount
	}, function(error, result) {
		if (!error) {
			if (parseFloat(result) < parseFloat(toBalanceValue)) {
				layer.msg("余额不足");
				call_back();
				return false;
			}
			loading = layer.load(2, {
				shade: [0.5, '#000000'],
				shadeClose: false
			});
			myContract.methods.transfer(to_address, toBalanceValue).send({
					from: currentAccount
				})
				.on('transactionHash', function(hash) {
					confirmEtherTransaction(hash, 1, function() {
						call_back(1);
						console.log('Transaction with hash ' + hash +
							' has been successfully confirmed');
					});
				})
				.on('receipt', function(receipt) {
					console.log(receipt);
				})
				.on('confirmation', function(confirmationNumber, receipt) {
					console.log(confirmationNumber, receipt);
				})
				.on('error', function(error) {

					layer.msg("操作失败");
					layer.close(loading);
					call_back();
				});
		} else {
			call_back();
			console.log(error);
		}
	});
}
$(function(){
	$(".btn").click(function(){
		
		zy_action($(".toprice").val(), function(res){
			if(res==1){
				layer.msg("操作成功！");
				layer.close(loading);
			}
			
		});
		
	});
	
});