# Running central-kms on Kubernetes

1. Install VirtualBox
    Refer to: https://www.virtualbox.org/wiki/Downloads

2. Install Docker
    MacOS: `brew install docker`

3. Install Kubectl
    MacOS: `brew install kubectl`

4. Install Minikube
    MacOS: `brew cask install minikube`

5. Install Helm
    MacOS: `brew install kubernetes-helm`

6. Initialise MiniKube
    `minikube start`

7. Initialise Helm
    `helm init` <-- this only needs to be done once

8. Deploy Ingress
    `minikube addon enable ingress`

9. Deploy Central-hub
    `kubectl create -f ./deploy/k8s`

    Or alternatively you can stipulate a namespace for deployment
    `kubectl -n dev create -f ./deploy/k8s`

10. Add the following to your hosts file
`<IP>	central-hub.local`

Where `<IP>` can be attained using the following command `minikube ip`

11. Open K8s Dashboard

`minikube dashboard`
