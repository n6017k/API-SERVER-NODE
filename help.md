# az acr build \
          # --image "${{ env.ACR }}-${{env.ACR_CODE}}.azurecr.io/${{ env.CONTAINER_NAME }}:${{ env.CONTAINER_TAG }}" \
          # --registry ${{ env.ACR }} \
          # -g ${{ env.ACR_RG }} \
          # -f ./dockerfiles/Dockerfile .

az acr build --image nktest.azure.io/test-image:latest --registry nktest -g nk-aks-rg -f ./dockerfiles/Dockerfile .