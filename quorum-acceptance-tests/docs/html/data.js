var tags = ["privacy", "storage", "public", "load", "mining", "transaction", "state", "nosupport", "sign"]
var specs = [{"path":"src/specs/private_smart_contract_async.html","name":"Sending private smart contract asynchronously","scenarios":[{"name":"Contract is successfully mined with valid account","tags":[]},{"name":"Contract is not mined with non-existed account","tags":[]}]},{"path":"src/specs/private_smart_contract_multiple.html","name":"Multiple private smart contracts","scenarios":[{"name":"Contracts are mined","tags":["privacy","load"]}]},{"path":"src/specs/private_smart_contract_single.html","name":"Single private smart contract","scenarios":[{"name":"Contract is mined","tags":["privacy","mining"]},{"name":"Storage Root storing private smart contract must be the same","tags":["privacy","storage"]},{"name":"Transaction payload is secured","tags":["privacy","transaction"]},{"name":"Privacy is enforced between parties","tags":["privacy"]},{"name":"When there's an update, privacy is still enforced","tags":["privacy"]}]},{"path":"src/specs/private_smart_contract_state_manipulation.html","name":"State manipulation in private smart contract","scenarios":[{"name":"Private state is maintained","tags":["privacy","state"]}]},{"path":"src/specs/public_smart_contract_event.html","name":"Public smart contract with event","scenarios":[{"name":"Log events are captured when executing the contract","tags":[]}]},{"path":"src/specs/value_transfer_private_transactions.html","name":"Value transfer in private transactions","scenarios":[{"name":"Unsuccessful private transaction submission","tags":["privacy","nosupport"]},{"name":"Unsuccessful signed private transaction submission","tags":["privacy","nosupport","sign"]}]},{"path":"src/specs/value_transfer_public_transactions.html","name":"Value transfer in public transactions","scenarios":[{"name":"Successful public transaction submission","tags":["public"]},{"name":"Successful signed public transaction submission","tags":["public","sign"]}]}]